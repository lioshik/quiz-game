package client

import (
	"fmt"
	"game_server/internal/gen/messages"
	"log/slog"

	"github.com/gorilla/websocket"
	"google.golang.org/protobuf/proto"
)

type ClientConnection struct {
	hub  *ClientsHub
	conn *websocket.Conn
}

func NewClientConnection(
	hub *ClientsHub,
	conn *websocket.Conn,
) {
	result := &ClientConnection{
		hub:  hub,
		conn: conn,
	}
	result.hub.registerClientConnection <- result
	go result.readConnection()
}

func (c *ClientConnection) sendMessage(m proto.Message) {
	w, err := c.conn.NextWriter(websocket.BinaryMessage)
	if err != nil {
		slog.Error(err.Error())
		return
	}
	bytesToSend, err := proto.Marshal(m)
	if err != nil {
		slog.Error(err.Error())
		return
	}
	_, err = w.Write(bytesToSend)
	if err != nil {
		slog.Error(err.Error())
		return
	}
	if err := w.Close(); err != nil {
		slog.Error(err.Error())
		return
	}
	slog.Info("Succesfully sended some message")
}

func (c *ClientConnection) handleRequest(request *messages.RootRequest) {
	slog.Info("start handling request", "request", request)
	defer func() {
		if r := recover(); r != nil {
			slog.Error("RECOVER FROM PANIC", "panic_trace", r)
		}
	}()
	switch request := request.Request.(type) {
	case *messages.RootRequest_CreateRoom:
		c.handleCreateRoom(request.CreateRoom)
	case *messages.RootRequest_JoinRoom:
		c.handleJoinRoom(request.JoinRoom)
	case *messages.RootRequest_ChangeName:
		c.handleChangeName(request.ChangeName)
	case *messages.RootRequest_ChooseMainPlayer:
		c.handleChooseMainPlayer(request.ChooseMainPlayer)
	case *messages.RootRequest_StartGame:
		c.handleStartGame(request.StartGame)
	case *messages.RootRequest_MakeQuestion:
		c.handleMakeQuestion(request.MakeQuestion)
	case *messages.RootRequest_GiveAnswer:
		c.handleGiveAnswer(request.GiveAnswer)
	case *messages.RootRequest_GetGameState:
		c.handleGetGameState(request.GetGameState)
	case *messages.RootRequest_SkipTime:
		c.handleSkipTime(request.SkipTime)
	default:
		slog.Error("Unknown request type")
	}
}

func (c *ClientConnection) readConnection() {
	defer func() {
		slog.Warn("Closing connection")
		c.conn.Close()
		c.hub.unregisterClientConnection <- c
	}()
	slog.Info("start handling client conneciton")
	for {
		_, message, err := c.conn.ReadMessage()
		if err != nil {
			if websocket.IsUnexpectedCloseError(
				err,
				websocket.CloseGoingAway,
				websocket.CloseAbnormalClosure,
			) {
				slog.Error(fmt.Sprintf("error: %v", err))
			}
			break
		}
		requestMessage := &messages.RootRequest{}
		err = proto.Unmarshal(message, requestMessage)
		if err != nil {
			slog.Error(fmt.Sprintf("Error while unmarshaling request: %s", err))
			continue
		}
		c.handleRequest(requestMessage)
	}
}
