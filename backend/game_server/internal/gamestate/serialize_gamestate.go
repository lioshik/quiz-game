package gamestate

import "game_server/internal/gen/messages"

func (player *Player) serializePlayer() *messages.Player {
	result := &messages.Player{
		PlayerId:    string(*player.id),
		PlayerName:  string(*player.name),
		PlayerType:  0, // fill below
		AnswerGiven: player.answerGiven,
		StillAlive:  player.alive,
	}

	switch player.playerType {
	case Regular:
		result.PlayerType = messages.PlayerType_Participant
	case Main:
		result.PlayerType = messages.PlayerType_MainPlayer
	case Host:
		result.PlayerType = messages.PlayerType_Host
	default:
		panic("unknown player type")
	}

	return result
}

func (state *GameState) serializePlayers() []*messages.Player {
	result := make([]*messages.Player, 0, len(state.players))
	for _, player := range state.players {
		result = append(result, player.serializePlayer())
	}
	return result
}

func (state *GameState) serializePlayersInfo() *messages.RunningGamePlayersInfo {
	result := &messages.RunningGamePlayersInfo{
		Players:                      state.serializePlayers(),
		MainPlayerScore:              state.mainPlayerScore,
		HintSkipQuestionAvailable:    state.hintsAvailability.skipQuestion,
		HintMajorityOpinionAvailable: state.hintsAvailability.majorityOpinion,
		HintTwoOpinionsAvailable:     state.hintsAvailability.twoOpinions,
	}
	return result
}

func (state *GameState) serializeQuestinInfo() *messages.QuestionInfo {
	result := &messages.QuestionInfo{
		Question: string(*state.questionInfo.Question),
		AnswerOptions: make(
			[]string,
			0,
			len(state.questionInfo.AnswerOptions),
		), // fill below
	}

	for _, answerOption := range state.questionInfo.AnswerOptions {
		result.AnswerOptions = append(
			result.AnswerOptions,
			string(*answerOption),
		)
	}
	return result
}

func (state *GameState) Serialize() *messages.RootGameState {
	result := &messages.RootGameState{}

	switch state.stateType {
	case Lobby:
		lobby := &messages.LobbyGameState{
			Players:                  state.serializePlayers(),
			ChooseMainPlayerStrategy: 0, // fill below
			MainPlayerId:             (*string)(state.chooseMainPlayerStrategy.ChoicePlayerId),
		}
		switch state.chooseMainPlayerStrategy.ChoiceType {
		case SpecificChoice:
			lobby.ChooseMainPlayerStrategy = messages.ChooseMainPlayerStrategy_Specific
		case RandomChoice:
			lobby.ChooseMainPlayerStrategy = messages.ChooseMainPlayerStrategy_Random
		default:
			panic("unknown choice type")
		}

		result.State = &messages.RootGameState_Lobby{Lobby: lobby}

	case WaitForQuestion:
		waitForQuestion := &messages.WaitForQuestionState{
			PlayersInfo: state.serializePlayersInfo(),
		}

		result.State = &messages.RootGameState_WaitForQuestion{WaitForQuestion: waitForQuestion}
	case WaitForAnswer:
		waitForAnswer := &messages.WaitForAnswerState{
			PlayersInfo:     state.serializePlayersInfo(),
			QuestionInfo:    state.serializeQuestinInfo(),
			MilisecondsLeft: state.milisecondsLeft,
		}

		result.State = &messages.RootGameState_WaitForAnswer{WaitForAnswer: waitForAnswer}
	case WaitForMainPlayer:
		waitForMainPlayer := &messages.WaitForMainPlayerState{
			PlayersInfo:    state.serializePlayersInfo(),
			QuestionInfo:   state.serializeQuestinInfo(),
			SpoiledAnswers: make([]*messages.SpoiledAnswer, 0), // TODO
		}

		result.State = &messages.RootGameState_WaitForMainPlayer{
			WaitForMainPlayer: waitForMainPlayer,
		}
	case RoundResultState:
		panic("TODO")
	case GameOver:
		result.State = &messages.RootGameState_GameOver{
			GameOver: &messages.GameOver{},
		}
	default:
		panic("unknown game state")
	}

	return result
}
