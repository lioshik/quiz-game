package client

import (
	"errors"
	"game_server/internal/gamestate"
	"game_server/internal/gen/messages"
	"log/slog"
)

func (c *ClientConnection) sendCreateRoomError(
	request *messages.CreateRoomRequest,
	err error,
) {
	slog.Warn(err.Error())
	response := &messages.RootResponse{
		Response: &messages.RootResponse_CreateRoom{
			CreateRoom: &messages.CreateRoomResponse{
				RequestId: request.RequestId,
				Response: &messages.CreateRoomResponse_Err{
					Err: &messages.CreateRoomResponseErr{
						Err: err.Error(),
					},
				},
			},
		},
	}
	c.sendMessage(response)
}

func (c *ClientConnection) handleCreateRoom(request *messages.CreateRoomRequest) {
	roomCode := c.hub.addRoom()
	guardedState, err := c.hub.getGuardedGamestate(roomCode)
	if err != nil {
		c.sendCreateRoomError(request, err)
		return
	}
	guardedState.guard.Lock()
	defer guardedState.guard.Unlock()

	state := guardedState.state

	playerId, err := state.AddPlayer()
	if err != nil {
		c.sendCreateRoomError(request, err)
		return
	}
	authData := &messages.AuthData{
		RoomCode:  string(roomCode),
		PlayerId:  string(playerId),
		AuthToken: "", // TODO
	}
	response := &messages.RootResponse{
		Response: &messages.RootResponse_CreateRoom{
			CreateRoom: &messages.CreateRoomResponse{
				RequestId: request.RequestId,
				Response: &messages.CreateRoomResponse_Ok{
					Ok: &messages.CreateRoomResponseOk{
						AuthData: authData,
					},
				},
			},
		},
	}
	c.sendMessage(response)
}

func (c *ClientConnection) sendJoinRoomError(request *messages.JoinRoomRequest, err error) {
	slog.Warn(err.Error())
	response := &messages.RootResponse{
		Response: &messages.RootResponse_JoinRoom{
			JoinRoom: &messages.JoinRoomResponse{
				RequestId: request.RequestId,
				Response: &messages.JoinRoomResponse_Err{
					Err: &messages.JoinRoomResponseErr{
						Err: err.Error(),
					},
				},
			},
		},
	}
	c.sendMessage(response)
}

func (c *ClientConnection) handleJoinRoom(request *messages.JoinRoomRequest) {
	guardedState, err := c.hub.getGuardedGamestate(roomCode(request.RoomCode))
	if err != nil {
		c.sendJoinRoomError(request, err)
		return
	}

	guardedState.guard.Lock()
	defer guardedState.guard.Unlock()

	state := guardedState.state

	playerId, err := state.AddPlayer()
	if err != nil {
		c.sendJoinRoomError(request, err)
		return
	}

	authData := &messages.AuthData{
		RoomCode:  request.RoomCode,
		PlayerId:  string(playerId),
		AuthToken: "", // TODO
	}

	response := &messages.RootResponse{
		Response: &messages.RootResponse_JoinRoom{
			JoinRoom: &messages.JoinRoomResponse{
				RequestId: request.RequestId,
				Response: &messages.JoinRoomResponse_Ok{
					Ok: &messages.JoinRoomResponseOk{
						AuthData: authData,
					},
				},
			},
		},
	}
	c.sendMessage(response)
}

func (c *ClientConnection) sendChangeNameError(request *messages.ChangeNameRequest, err error) {
	slog.Warn(err.Error())
	response := &messages.RootResponse{
		Response: &messages.RootResponse_ChangeName{
			ChangeName: &messages.ChangeNameResponse{
				RequestId: request.RequestId,
				Response: &messages.ChangeNameResponse_Err{
					Err: &messages.ChangeNameResponseErr{
						Err: err.Error(),
					},
				},
			},
		},
	}
	c.sendMessage(response)
}

func (c *ClientConnection) handleChangeName(request *messages.ChangeNameRequest) {
	guardedState, err := c.hub.getGuardedGamestate(roomCode(request.AuthData.RoomCode))
	if err != nil {
		c.sendChangeNameError(request, err)
		return
	}

	guardedState.guard.Lock()
	defer guardedState.guard.Unlock()

	state := guardedState.state

	playerId := gamestate.PlayerId(request.AuthData.PlayerId)
	newName := gamestate.PlayerName(request.NewName)
	err = state.PlayerChangeName(
		&playerId,
		&newName,
	)
	if err != nil {
		c.sendChangeNameError(request, err)
		return
	}

	response := &messages.RootResponse{
		Response: &messages.RootResponse_ChangeName{
			ChangeName: &messages.ChangeNameResponse{
				RequestId: request.RequestId,
				Response: &messages.ChangeNameResponse_Ok{
					Ok: &messages.ChangeNameResponseOk{},
				},
			},
		},
	}
	c.sendMessage(response)
}

func (c *ClientConnection) sendChooseMainPlayerError(
	request *messages.ChooseMainPlayerRequest,
	err error,
) {
	slog.Warn(err.Error())
	response := &messages.RootResponse{
		Response: &messages.RootResponse_ChooseMainPlayer{
			ChooseMainPlayer: &messages.ChooseMainPlayerResponse{
				RequestId: request.RequestId,
				Response: &messages.ChooseMainPlayerResponse_Err{
					Err: &messages.ChooseMainPlayerResponseErr{
						Err: err.Error(),
					},
				},
			},
		},
	}
	c.sendMessage(response)
}

func (c *ClientConnection) handleChooseMainPlayer(request *messages.ChooseMainPlayerRequest) {
	guardedState, err := c.hub.getGuardedGamestate(roomCode(request.AuthData.RoomCode))
	if err != nil {
		c.sendChooseMainPlayerError(request, err)
		return
	}

	guardedState.guard.Lock()
	defer guardedState.guard.Unlock()

	state := guardedState.state

	var strategy gamestate.ChooseMainPlayerStrategy
	switch requestStrategy := request.ChoiceStrategy.(type) {
	case *messages.ChooseMainPlayerRequest_Random:
		strategy = gamestate.ChooseMainPlayerStrategy{
			ChoiceType: gamestate.RandomChoice,
		}
	case *messages.ChooseMainPlayerRequest_SpecificPlayerId:
		playerId := gamestate.PlayerId(requestStrategy.SpecificPlayerId)
		strategy = gamestate.ChooseMainPlayerStrategy{
			ChoiceType:     gamestate.SpecificChoice,
			ChoicePlayerId: &playerId,
		}
	}

	chooserPlayerId := gamestate.PlayerId(request.AuthData.PlayerId)
	err = state.PlayerChoosesMainPlayer(
		&chooserPlayerId,
		&strategy,
	)
	if err != nil {
		c.sendChooseMainPlayerError(request, err)
		return
	}

	response := &messages.RootResponse{
		Response: &messages.RootResponse_ChooseMainPlayer{
			ChooseMainPlayer: &messages.ChooseMainPlayerResponse{
				RequestId: request.RequestId,
				Response: &messages.ChooseMainPlayerResponse_Ok{
					Ok: &messages.ChooseMainPlayerResponseOk{},
				},
			},
		},
	}
	c.sendMessage(response)
}

func (c *ClientConnection) sendStartGameError(request *messages.StartGameRequest, err error) {
	slog.Warn(err.Error())
	response := &messages.RootResponse{
		Response: &messages.RootResponse_StartGameResponse{
			StartGameResponse: &messages.StartGameResponse{
				RequestId: request.RequestId,
				Response: &messages.StartGameResponse_Err{
					Err: &messages.StartGameResponseErr{
						Err: err.Error(),
					},
				},
			},
		},
	}
	c.sendMessage(response)
}

func (c *ClientConnection) handleStartGame(request *messages.StartGameRequest) {
	guardedState, err := c.hub.getGuardedGamestate(roomCode(request.AuthData.RoomCode))
	if err != nil {
		c.sendStartGameError(request, err)
		return
	}

	guardedState.guard.Lock()
	defer guardedState.guard.Unlock()

	state := guardedState.state

	playerId := gamestate.PlayerId(request.AuthData.PlayerId)
	err = state.PlayerStartsGame(
		&playerId,
	)
	if err != nil {
		c.sendStartGameError(request, err)
		return
	}

	response := &messages.RootResponse{
		Response: &messages.RootResponse_StartGameResponse{
			StartGameResponse: &messages.StartGameResponse{
				RequestId: request.RequestId,
				Response: &messages.StartGameResponse_Ok{
					Ok: &messages.StartGameResponseOk{},
				},
			},
		},
	}
	c.sendMessage(response)
}

func (c *ClientConnection) sendMakeQuestionError(request *messages.MakeQuestionRequest, err error) {
	slog.Warn(err.Error())
	response := &messages.RootResponse{
		Response: &messages.RootResponse_MakeQuestionResponse{
			MakeQuestionResponse: &messages.MakeQuestionResponse{
				RequestId: request.RequestId,
				Response: &messages.MakeQuestionResponse_Err{
					Err: &messages.MakeQuestionResponseErr{
						Err: err.Error(),
					},
				},
			},
		},
	}
	c.sendMessage(response)
}

func (c *ClientConnection) handleMakeQuestion(request *messages.MakeQuestionRequest) {
	guardedState, err := c.hub.getGuardedGamestate(roomCode(request.AuthData.RoomCode))
	if err != nil {
		c.sendMakeQuestionError(request, err)
		return
	}

	guardedState.guard.Lock()
	defer guardedState.guard.Unlock()

	state := guardedState.state

	question := gamestate.Question(request.Question)
	questionInfo := &gamestate.QuestionInfo{
		Question:       &question,
		AnswerOptions:  make([]*gamestate.AnswerOption, 0, len(request.AnswerOptions)),
		RightAnswerIdx: int(request.RightAnswerIdx),
	}
	for _, answerOption := range request.AnswerOptions {
		gamestateAnswerOption := gamestate.AnswerOption(answerOption)
		questionInfo.AnswerOptions = append(
			questionInfo.AnswerOptions,
			&gamestateAnswerOption,
		)
	}

	playerId := gamestate.PlayerId(request.AuthData.PlayerId)
	err = state.PlayerAsksQuestion(
		&playerId,
		questionInfo,
	)
	if err != nil {
		c.sendMakeQuestionError(request, err)
		return
	}

	response := &messages.RootResponse{
		Response: &messages.RootResponse_MakeQuestionResponse{
			MakeQuestionResponse: &messages.MakeQuestionResponse{
				RequestId: request.RequestId,
				Response: &messages.MakeQuestionResponse_Ok{
					Ok: &messages.MakeQuestionResponseOk{},
				},
			},
		},
	}
	c.sendMessage(response)
}

func (c *ClientConnection) sendGiveAnswerError(request *messages.GiveAnswerRequest, err error) {
	slog.Warn(err.Error())
	response := &messages.RootResponse{
		Response: &messages.RootResponse_GiveAnswerResponse{
			GiveAnswerResponse: &messages.GiveAnswerResponse{
				RequestId: request.RequestId,
				Response: &messages.GiveAnswerResponse_Err{
					Err: &messages.GiveAnswerResponseErr{
						Err: err.Error(),
					},
				},
			},
		},
	}
	c.sendMessage(response)
}

func toHintType(h messages.HintType) (gamestate.HintType, error) {
	switch h {
	case messages.HintType_MajorityOpinion:
		return gamestate.MajorityOpinion, nil
	case messages.HintType_SkipQuestion:
		return gamestate.SkipQuestion, nil
	case messages.HintType_TwoOpinions:
		return gamestate.TwoOpinions, nil
	default:
		return gamestate.HintType(0), errors.New("unknown hint type")
	}
}

func (c *ClientConnection) handleGiveAnswer(request *messages.GiveAnswerRequest) {
	guardedState, err := c.hub.getGuardedGamestate(roomCode(request.AuthData.RoomCode))
	if err != nil {
		c.sendGiveAnswerError(request, err)
		return
	}

	guardedState.guard.Lock()
	defer guardedState.guard.Unlock()

	state := guardedState.state

	var answer gamestate.GivenAnswer

	switch requestAnswer := request.Answer.(type) {
	case *messages.GiveAnswerRequest_AnswerIdx:
		answer.AnswerType = gamestate.SpecificAnswer
		answer.AnswerIdx = int(requestAnswer.AnswerIdx)
	case *messages.GiveAnswerRequest_Hint:
		answer.AnswerType = gamestate.HintAnswer
		answer.HintType, err = toHintType(requestAnswer.Hint)
		if err != nil {
			c.sendGiveAnswerError(request, err)
			return
		}
	default:
		c.sendGiveAnswerError(request, errors.New("Unknown answer type"))
		return
	}

	playerId := gamestate.PlayerId(request.AuthData.PlayerId)
	err = state.PlayerGivesAnswer(
		&playerId,
		&answer,
	)
	if err != nil {
		c.sendGiveAnswerError(request, err)
		return
	}

	response := &messages.RootResponse{
		Response: &messages.RootResponse_GiveAnswerResponse{
			GiveAnswerResponse: &messages.GiveAnswerResponse{
				RequestId: request.RequestId,
				Response: &messages.GiveAnswerResponse_Ok{
					Ok: &messages.GiveAnswerResponseOk{},
				},
			},
		},
	}
	c.sendMessage(response)
}

func (c *ClientConnection) sendGetGameStateError(request *messages.GetGameStateRequest, err error) {
	slog.Warn(err.Error())
	response := &messages.RootResponse{
		Response: &messages.RootResponse_GetGamestateResponse{
			GetGamestateResponse: &messages.GetGameStateResponse{
				RequestId: request.RequestId,
				Response: &messages.GetGameStateResponse_Err{
					Err: &messages.GetGameStateResponseErr{
						Err: err.Error(),
					},
				},
			},
		},
	}
	c.sendMessage(response)
}

func (c *ClientConnection) handleGetGameState(request *messages.GetGameStateRequest) {
	guardedState, err := c.hub.getGuardedGamestate(roomCode(request.AuthData.RoomCode))
	if err != nil {
		c.sendGetGameStateError(request, err)
		return
	}

	guardedState.guard.Lock()
	defer guardedState.guard.Unlock()

	state := guardedState.state

	response := &messages.RootResponse{
		Response: &messages.RootResponse_GetGamestateResponse{
			GetGamestateResponse: &messages.GetGameStateResponse{
				RequestId: request.RequestId,
				Response: &messages.GetGameStateResponse_Ok{
					Ok: &messages.GetGameStateResponseOk{
						Gamestate: state.Serialize(),
					},
				},
			},
		},
	}
	c.sendMessage(response)
}

func (c *ClientConnection) sendSkipTimeError(request *messages.SkipTimeRequest, err error) {
	slog.Warn(err.Error())
	response := &messages.RootResponse{
		Response: &messages.RootResponse_SkipTimeResponse{
			SkipTimeResponse: &messages.SkipTimeResponse{
				RequestId: request.RequestId,
				Response: &messages.SkipTimeResponse_Err{
					Err: &messages.SkipTimeResponseErr{
						Err: err.Error(),
					},
				},
			},
		},
	}
	c.sendMessage(response)
}

func (c *ClientConnection) handleSkipTime(request *messages.SkipTimeRequest) {
	guardedState, err := c.hub.getGuardedGamestate(roomCode(request.RoomCode))
	if err != nil {
		c.sendSkipTimeError(request, err)
		return
	}

	guardedState.guard.Lock()
	defer guardedState.guard.Unlock()

	state := guardedState.state
	state.NotifyTimePassed(request.Miliseconds)

	response := &messages.RootResponse{
		Response: &messages.RootResponse_SkipTimeResponse{
			SkipTimeResponse: &messages.SkipTimeResponse{
				RequestId: request.RequestId,
				Response: &messages.SkipTimeResponse_Ok{
					Ok: &messages.SkipTimeResponseOk{},
				},
			},
		},
	}
	c.sendMessage(response)
}
