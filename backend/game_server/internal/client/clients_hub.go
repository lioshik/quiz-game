package client

import (
	"fmt"
	"game_server/internal/gamestate"
	"log/slog"
	"math/rand"
	"os"
	"sync"
	"time"
)

type roomCode string

const TickerMilisecondsThreshold uint64 = 250
const DeleteGameMilisecondsThreshold uint64 = 1 * 90 * 60 * 1000 // 1.5 hours

type guardedGamestate struct {
	guard              sync.Mutex
	state              *gamestate.GameState
	realTimeTicker     *time.Ticker
	tickerStopChannel  *chan bool
	createdAtTimestamp time.Time
}

func (g *guardedGamestate) needToBeDeleted() bool {
	currentTime := time.Now()
	return currentTime.Sub(
		g.createdAtTimestamp,
	) >= time.Duration(
		DeleteGameMilisecondsThreshold,
	)*time.Millisecond
}

func (g *guardedGamestate) stopTickersBeforeDeletion() {
	if g.realTimeTicker != nil {
		g.realTimeTicker.Stop()
	}
	if g.tickerStopChannel != nil {
		*g.tickerStopChannel <- true
	}
}

type ClientsHub struct {
	clientConnections          map[*ClientConnection]struct{}
	registerClientConnection   chan *ClientConnection
	unregisterClientConnection chan *ClientConnection
	gamestateByCodeGuard       sync.Mutex
	gamestateByCode            map[roomCode]*guardedGamestate
	shouldUseRealTime          bool
}

func NewClientsHub(shouldUseRealTime bool) *ClientsHub {
	result := &ClientsHub{
		clientConnections:          make(map[*ClientConnection]struct{}),
		registerClientConnection:   make(chan *ClientConnection),
		unregisterClientConnection: make(chan *ClientConnection),
		gamestateByCode:            make(map[roomCode]*guardedGamestate),
		shouldUseRealTime:          shouldUseRealTime,
	}

	ticker := time.NewTicker(1 * time.Minute)
	go func() {
		for {
			<-ticker.C
			result.cleanupOldGames()
		}
	}()

	return result
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
			state:              gamestate.NewEmptyGameState(loggerWithFields),
			createdAtTimestamp: time.Now(),
		}
		if h.shouldUseRealTime {
			ticker := time.NewTicker(time.Duration(TickerMilisecondsThreshold) * time.Millisecond)
			tickerStop := make(chan bool, 1)

			h.gamestateByCode[code].realTimeTicker = ticker
			h.gamestateByCode[code].tickerStopChannel = &tickerStop
			go func() {
				for {
					select {
					case <-ticker.C:
						h.gamestateByCodeGuard.Lock()
						guardedGamestate := h.gamestateByCode[code]
						h.gamestateByCodeGuard.Unlock()
						guardedGamestate.guard.Lock()
						guardedGamestate.state.NotifyTimePassed(TickerMilisecondsThreshold)
						guardedGamestate.guard.Unlock()
					case <-tickerStop:
						return
					}
				}
			}()
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

func (h *ClientsHub) cleanupOldGames() {
	h.gamestateByCodeGuard.Lock()
	defer h.gamestateByCodeGuard.Unlock()

	roomCodesToBeDeleted := make([]roomCode, 0, len(h.gamestateByCode))

	for roomCode, guardedState := range h.gamestateByCode {
		roomCode := roomCode
		guardedState.guard.Lock()
		if guardedState.needToBeDeleted() {
			slog.Info(
				fmt.Sprintf("gamestate with room code %s is too old and will be deleted", roomCode),
			)
			roomCodesToBeDeleted = append(roomCodesToBeDeleted, roomCode)
		}
		guardedState.guard.Unlock()
	}

	for _, roomCode := range roomCodesToBeDeleted {
		gameStateToBeDeleted := h.gamestateByCode[roomCode]
		gameStateToBeDeleted.guard.Lock()
		gameStateToBeDeleted.stopTickersBeforeDeletion()
		delete(h.gamestateByCode, roomCode)
		gameStateToBeDeleted.guard.Unlock()
	}
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
