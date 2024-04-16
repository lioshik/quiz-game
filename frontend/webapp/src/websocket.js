import { RootRequest, RootResponse } from "./gen/proto_codegen";
import { goStartPage, setAuthData, setGamestate } from "./store";

class WebSocketService {
  constructor(store) {
    this.store = store;
    this.url = "";
    this.socket = null;
    this.timeoutByRequestId = new Map();
    this.pollingInterval = null;
  }

  // TODO remove
  startPolling(authData) {
    console.log("start polling");
    if (this.pollingInterval !== null) {
      clearInterval(this.pollingInterval);
    }
    this.pollingInterval = setInterval(() => {
      this.sendRequestState(authData);
    }, 333);
  }

  stopPolling() {
    console.log("stopping polling");
    if (this.pollingInterval !== null) {
      clearInterval(this.pollingInterval);
    }
  }

  addTimeoutMessage(requestId, message) {
    this.timeoutByRequestId.set(
      requestId,
      setTimeout(() => {
        console.log(message);
        this.timeoutByRequestId.delete(requestId);
      }, 1500)
    );
  }

  cancelTimeoutMessage(requestId) {
    const timeout = this.timeoutByRequestId.get(requestId);
    clearTimeout(timeout);
  }

  sortPlayersByPlayerId = (players) => {
    players.sort((lhs, rhs) => {
      if (lhs.playerType > rhs.playerType) {
        return -1;
      } else if (lhs.playerType < rhs.playerType) {
        return 1;
      } else {
        if (this.store.getState().authData !== null) {
          if (this.store.getState().authData.playerId === lhs.playerId) {
            return -1;
          }
          if (this.store.getState().authData.playerId === rhs.playerId) {
            return 1;
          }
        }
        return lhs.playerId.localeCompare(rhs.playerId);
      }
    });
  };

  connect(url) {
    console.log("here start connecting", url);
    this.url = url;
    this.socket = new WebSocket(this.url);
    this.socket.binaryType = "arraybuffer";

    this.socket.onopen = () => {
      console.log("WebSocket connection established");
      const authData = this.store.getState().authData;
      if (authData !== null && authData !== undefined) {
        this.startPolling(authData);
      }
    };

    this.socket.onmessage = (event) => {
      const message = event.data;
      const decodedResponse = RootResponse.decode(new Uint8Array(message));
      console.log(decodedResponse);
      if (decodedResponse.hasOwnProperty("createRoom")) {
        console.log("got message type create room");
        const createRoomResponse = decodedResponse.createRoom;
        this.cancelTimeoutMessage(createRoomResponse.requestId);

        if (createRoomResponse.hasOwnProperty("err")) {
          console.log("error on create room", createRoomResponse.err.err);
        } else if (createRoomResponse.hasOwnProperty("ok")) {
          console.log("ok create room response");
          this.store.dispatch(setAuthData(createRoomResponse.ok.authData));
        }
      } else if (decodedResponse.hasOwnProperty("getGamestateResponse")) {
        const getGamestateResponse = decodedResponse.getGamestateResponse;
        this.cancelTimeoutMessage(getGamestateResponse.requestId);

        if (getGamestateResponse.hasOwnProperty("err")) {
          console.log("error on get state", getGamestateResponse.err.err);
        } else if (getGamestateResponse.hasOwnProperty("invalidAuth")) {
          console.log("invalid auth", getGamestateResponse.invalidAuth.err);
          this.store.dispatch(goStartPage());
        } else if (getGamestateResponse.hasOwnProperty("ok")) {
          if (getGamestateResponse.ok.gamestate.hasOwnProperty("lobby")) {
            this.sortPlayersByPlayerId(
              getGamestateResponse.ok.gamestate.lobby.players
            );
          }
          this.store.dispatch(setGamestate(getGamestateResponse.ok.gamestate));
        }
      } else if (decodedResponse.hasOwnProperty("joinRoom")) {
        const joinRoomResponse = decodedResponse.joinRoom;
        this.cancelTimeoutMessage(joinRoomResponse.requestId);

        if (joinRoomResponse.hasOwnProperty("err")) {
          console.log("error on join room", joinRoomResponse.err.err);
        } else if (joinRoomResponse.hasOwnProperty("ok")) {
          this.store.dispatch(setAuthData(joinRoomResponse.ok.authData));
        }
      } else if (decodedResponse.hasOwnProperty("changeName")) {
        const changeNameResponse = decodedResponse.changeName;
        this.cancelTimeoutMessage(changeNameResponse.requestId);

        if (changeNameResponse.hasOwnProperty("err")) {
          console.log("error on change name", changeNameResponse.err.err);
        }
      } else if (decodedResponse.hasOwnProperty("chooseMainPlayer")) {
        const chooseMainPlayerResponse = decodedResponse.chooseMainPlayer;
        console.log(
          "got choose main player response",
          chooseMainPlayerResponse
        );
        this.cancelTimeoutMessage(chooseMainPlayerResponse.requestId);

        if (chooseMainPlayerResponse.hasOwnProperty("err")) {
          console.log(
            "error on choose main player",
            chooseMainPlayerResponse.err.err
          );
        }
      } else if (decodedResponse.hasOwnProperty("startGameResponse")) {
        const startGameResponse = decodedResponse.startGameResponse;
        this.cancelTimeoutMessage(startGameResponse.requestId);

        if (startGameResponse.hasOwnProperty("err")) {
          console.log("error on start game", startGameResponse.err.err);
        }
      } else {
        console.warn("unknown type of received message");
        console.warn("decoded message", decodedResponse);
      }
    };

    this.socket.onclose = (event) => {
      if (event.wasClean) {
        alert(
          `connection closed clean code=${event.code} reason=${event.reason}`
        );
      } else {
        console.warn("connection was interrupted, try to reconnect");
        setTimeout(() => {
          this.connect(url);
        }, 1000);
      }
    };

    this.socket.onerror = (error) => {
      console.log("connection closed with eror.", error);
    };
  }

  getRandomIntFromRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateRandomCode() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(
        this.getRandomIntFromRange(0, characters.length)
      );
    }
    if (this.timeoutByRequestId.has(result)) {
      return this.generateRandomCode();
    }
    return result;
  }

  sendMessageBytes(message) {
    if (!this.socket) {
      console.log("failed to send message. Websocket is not connected");
      return;
    }
    if (this.socket.readyState !== WebSocket.OPEN) {
      console.log("failed to send message. Socket is not in ready state open.");
      return;
    }
    this.socket.send(message);
  }

  sendCreateRoom() {
    let requestId = this.generateRandomCode();
    const requestPayload = {
      createRoom: {
        requestId: requestId,
      },
    };
    const buffer = RootRequest.encode(requestPayload).finish();
    this.addTimeoutMessage(requestId, "failed to send create room request");
    this.sendMessageBytes(buffer);
  }

  sendJoinRoom(roomCode) {
    let requestId = this.generateRandomCode();
    const requestPayload = {
      joinRoom: {
        requestId: requestId,
        roomCode: roomCode,
      },
    };
    const buffer = RootRequest.encode(requestPayload).finish();
    this.addTimeoutMessage(requestId, "failed to send join room request");
    this.sendMessageBytes(buffer);
  }

  sendChangeName(authData, newName) {
    let requestId = this.generateRandomCode();
    const requestPayload = {
      changeName: {
        requestId: requestId,
        authData: authData,
        newName: newName,
      },
    };
    const buffer = RootRequest.encode(requestPayload).finish();
    this.addTimeoutMessage(requestId, "failed to send change name request");
    this.sendMessageBytes(buffer);
  }

  sendRequestState(authData) {
    let requestId = this.generateRandomCode();
    const requestPayload = {
      getGameState: {
        authData: authData,
        requestId: requestId,
      },
    };
    const buffer = RootRequest.encode(requestPayload).finish();
    this.addTimeoutMessage(requestId, "failed to send get state request");
    this.sendMessageBytes(buffer);
  }

  sendChooseMainPlayer(authData, isRandom, choicePlayerId = null) {
    let requestId = this.generateRandomCode();
    let requestPayload;
    if (isRandom) {
      requestPayload = {
        chooseMainPlayer: {
          authData: authData,
          requestId: requestId,
          random: true,
        },
      };
    } else {
      requestPayload = {
        chooseMainPlayer: {
          authData: authData,
          requestId: requestId,
          specificPlayerId: choicePlayerId,
        },
      };
    }
    const buffer = RootRequest.encode(requestPayload).finish();
    this.addTimeoutMessage(
      requestId,
      "failed to send choose main player request"
    );
    this.sendMessageBytes(buffer);
  }

  sendStartGame(authData) {
    let requestId = this.generateRandomCode();
    const requestPayload = {
      startGame: {
        authData: authData,
        requestId: requestId,
      },
    };
    const buffer = RootRequest.encode(requestPayload).finish();
    this.addTimeoutMessage(requestId, "failed to send start game request");
    this.sendMessageBytes(buffer);
  }
}

export default WebSocketService;
