import { RootRequest, RootResponse } from "./gen/proto_codegen";
import { goStartPage, setAuthData, setGamestate } from "./store";

class WebSocketService {
  constructor(store) {
    this.store = store;
    this.url = "";
    this.socket = null;
    this.timeoutByRequestId = new Map();
    this.callbackByRequestId = new Map();
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

  clearByRequestId(requestId) {
    this.timeoutByRequestId.delete(requestId);
    this.callbackByRequestId.delete(requestId);
  }

  clearTimeoutsAndUseCallbacks(response) {
    const timeout = this.timeoutByRequestId.get(response.requestId);
    clearTimeout(timeout);
    const callback = this.callbackByRequestId.get(response.requestId);
    if (response.hasOwnProperty("ok") && callback !== undefined) {
      callback(response);
    }
    this.clearByRequestId(response.requestId);
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
        this.clearTimeoutsAndUseCallbacks(createRoomResponse);

        if (createRoomResponse.hasOwnProperty("err")) {
          console.warn("error on create room", createRoomResponse.err.err);
        } else if (createRoomResponse.hasOwnProperty("ok")) {
          console.log("ok create room response");
          this.store.dispatch(setAuthData(createRoomResponse.ok.authData));
        }
      } else if (decodedResponse.hasOwnProperty("getGamestateResponse")) {
        const getGamestateResponse = decodedResponse.getGamestateResponse;
        this.clearTimeoutsAndUseCallbacks(getGamestateResponse);

        if (getGamestateResponse.hasOwnProperty("err")) {
          console.warn("error on get state", getGamestateResponse.err.err);
        } else if (getGamestateResponse.hasOwnProperty("invalidAuth")) {
          console.log("invalid auth", getGamestateResponse.invalidAuth.err);
          this.store.dispatch(goStartPage());
        } else if (getGamestateResponse.hasOwnProperty("ok")) {
          if (getGamestateResponse.ok.gamestate.hasOwnProperty("lobby")) {
            this.sortPlayersByPlayerId(
              getGamestateResponse.ok.gamestate.lobby.players
            );
          } else if (
            getGamestateResponse.ok.gamestate.hasOwnProperty("waitForQuestion")
          ) {
            this.sortPlayersByPlayerId(
              getGamestateResponse.ok.gamestate.waitForQuestion.playersInfo
                .players
            );
          } else if (
            getGamestateResponse.ok.gamestate.hasOwnProperty("waitForAnswer")
          ) {
            this.sortPlayersByPlayerId(
              getGamestateResponse.ok.gamestate.waitForAnswer.playersInfo
                .players
            );
          } else if (
            getGamestateResponse.ok.gamestate.hasOwnProperty(
              "waitForMainPlayer"
            )
          ) {
            this.sortPlayersByPlayerId(
              getGamestateResponse.ok.gamestate.waitForMainPlayer.playersInfo
                .players
            );
          } else if (
            getGamestateResponse.ok.gamestate.hasOwnProperty("gameOver")
          ) {
            this.sortPlayersByPlayerId(
              getGamestateResponse.ok.gamestate.gameOver.playersInfo.players
            );
          }

          this.store.dispatch(setGamestate(getGamestateResponse.ok.gamestate));
        }
      } else if (decodedResponse.hasOwnProperty("joinRoom")) {
        const joinRoomResponse = decodedResponse.joinRoom;
        this.clearTimeoutsAndUseCallbacks(joinRoomResponse);

        if (joinRoomResponse.hasOwnProperty("err")) {
          console.warn("error on join room", joinRoomResponse.err.err);
        } else if (joinRoomResponse.hasOwnProperty("ok")) {
          this.store.dispatch(setAuthData(joinRoomResponse.ok.authData));
        }
      } else if (decodedResponse.hasOwnProperty("changeName")) {
        const changeNameResponse = decodedResponse.changeName;
        this.clearTimeoutsAndUseCallbacks(changeNameResponse);

        if (changeNameResponse.hasOwnProperty("err")) {
          console.warn("error on change name", changeNameResponse.err.err);
        }
      } else if (decodedResponse.hasOwnProperty("chooseMainPlayer")) {
        const chooseMainPlayerResponse = decodedResponse.chooseMainPlayer;
        console.log(
          "got choose main player response",
          chooseMainPlayerResponse
        );
        this.clearTimeoutsAndUseCallbacks(chooseMainPlayerResponse);

        if (chooseMainPlayerResponse.hasOwnProperty("err")) {
          console.log(
            "error on choose main player",
            chooseMainPlayerResponse.err.err
          );
        }
      } else if (decodedResponse.hasOwnProperty("startGameResponse")) {
        const startGameResponse = decodedResponse.startGameResponse;
        this.clearTimeoutsAndUseCallbacks(startGameResponse);

        if (startGameResponse.hasOwnProperty("err")) {
          console.warn("error on start game", startGameResponse.err.err);
        }
      } else if (decodedResponse.hasOwnProperty("giveAnswerResponse")) {
        const giveAnswerResponse = decodedResponse.giveAnswerResponse;
        this.clearTimeoutsAndUseCallbacks(giveAnswerResponse);

        if (giveAnswerResponse.hasOwnProperty("err")) {
          console.warn("error on give answer", giveAnswerResponse.err.err);
        }
      } else if (decodedResponse.hasOwnProperty("makeQuestionResponse")) {
        const makeQuestionResponse = decodedResponse.makeQuestionResponse;
        this.clearTimeoutsAndUseCallbacks(makeQuestionResponse);

        if (makeQuestionResponse.hasOwnProperty("err")) {
          console.warn("error on make question", makeQuestionResponse.err.err);
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

  sendMakeQuestion(authData, question, answerOptions, rightAnswerIdx) {
    let requestId = this.generateRandomCode();

    let filteredOptions = [];

    let nullsBeforeRightAnswerIdx = 0;
    for (let i = 0; i < answerOptions.length; i++) {
      if (answerOptions[i] !== null) {
        filteredOptions.push(answerOptions[i]);
      } else if (i < rightAnswerIdx) {
        nullsBeforeRightAnswerIdx++;
      } else if (i === rightAnswerIdx) {
        console.error("right answer is null");
      }
    }
    rightAnswerIdx -= nullsBeforeRightAnswerIdx;

    const requestPayload = {
      makeQuestion: {
        authData: authData,
        requestId: requestId,
        question: question,
        answerOptions: filteredOptions,
        rightAnswerIdx: rightAnswerIdx,
      },
    };
    const buffer = RootRequest.encode(requestPayload).finish();
    this.addTimeoutMessage(requestId, "failed to send make question request");
    this.sendMessageBytes(buffer);
  }

  sendGiveAnswer(
    authData,
    selectedAnswer,
    isHint,
    callback = (response) => {
      console.log("default callback sendAsnwer", response);
      this.clearByRequestId(response.requestId);
    }
  ) {
    let requestId = this.generateRandomCode();
    const requestPayload = {
      giveAnswer: {
        authData: authData,
        requestId: requestId,
        answerIdx: isHint ? null : selectedAnswer,
        hint: isHint ? selectedAnswer : null,
      },
    };
    const buffer = RootRequest.encode(requestPayload).finish();
    this.addTimeoutMessage(requestId, "failed to send give answer request");
    this.callbackByRequestId.set(requestId, (response) => {
      callback();
      this.clearByRequestId(response.requestId);
    });
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
