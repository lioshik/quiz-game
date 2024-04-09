package main

import (
	"flag"
	"game_server/internal/client"
	"log/slog"
	"net/http"
	"time"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  5120,
	WriteBufferSize: 5120,
	CheckOrigin:     func(_ *http.Request) bool { return true },
}

func serveWs(w http.ResponseWriter, hub *client.ClientsHub, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)

	if err != nil {
		slog.Error(err.Error())
		return
	}
	client.NewClientConnection(hub, conn)
}

var addr = flag.String("addr", ":8080", "http service address")

func main() {
	slog.Info("start server")

	server := &http.Server{
		Addr:              *addr,
		ReadHeaderTimeout: 3 * time.Second,
	}
	clientsHub := client.NewClientsHub()
	go clientsHub.Run()
	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		slog.Info("Start handling /ws")
		serveWs(w, clientsHub, r)
	})

	err := server.ListenAndServe()
	if err != nil {
		slog.Error("ListenAndServe: ", err)
	}
}
