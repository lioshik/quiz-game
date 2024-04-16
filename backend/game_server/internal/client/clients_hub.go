package client

import (
	"fmt"
	"game_server/internal/gamestate"
	"log/slog"
	"math/rand"
	"os"
	"sync"
)

type roomCode string

type guardedGamestate struct {
	guard sync.Mutex
	state *gamestate.GameState
}

type ClientsHub struct {
	clientConnections          map[*ClientConnection]struct{}
	registerClientConnection   chan *ClientConnection
	unregisterClientConnection chan *ClientConnection
	gamestateByCodeGuard       sync.Mutex
	gamestateByCode            map[roomCode]*guardedGamestate
}

func NewClientsHub() *ClientsHub {
	return &ClientsHub{
		clientConnections:          make(map[*ClientConnection]struct{}),
		registerClientConnection:   make(chan *ClientConnection),
		unregisterClientConnection: make(chan *ClientConnection),
		gamestateByCode:            make(map[roomCode]*guardedGamestate),
	}
}

func generateRoomCode(n int) roomCode {
	var letterRunes = []rune("ABCDEFGHIJKLMNOPQRSTUVWXYZ")

	code := make([]rune, n)
	for i := range code {
		code[i] = letterRunes[rand.Intn(len(letterRunes))]
	}
	return roomCode(code)
}

func (h *ClientsHub) addRoom() roomCode {
	h.gamestateByCodeGuard.Lock()
	defer h.gamestateByCodeGuard.Unlock()

	for {
		code := generateRoomCode(6)
		if _, exists := h.gamestateByCode[code]; exists {
			continue
		}

		logger := slog.New(slog.NewTextHandler(os.Stdout, nil))
		loggerWithFields := logger.With("roomCode", code)

		h.gamestateByCode[code] = &guardedGamestate{
			state: gamestate.NewEmptyGameState(loggerWithFields),
		}
		return code
	}
}

func (h *ClientsHub) getGuardedGamestate(roomCode roomCode) (*guardedGamestate, error) {
	h.gamestateByCodeGuard.Lock()
	defer h.gamestateByCodeGuard.Unlock()

	result, exists := h.gamestateByCode[roomCode]
	if !exists {
		return nil, fmt.Errorf("No room with code=%q", roomCode)
	}
	return result, nil
}

func (h *ClientsHub) Run() {
	for {
		select {
		case clientConnection := <-h.registerClientConnection:
			h.clientConnections[clientConnection] = struct{}{}
		case clientConnection := <-h.unregisterClientConnection:
			delete(h.clientConnections, clientConnection)
		}
	}
}
