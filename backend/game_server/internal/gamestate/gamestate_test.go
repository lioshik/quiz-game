package gamestate

import (
	"bytes"
	"fmt"
	"log/slog"
	"testing"

	"github.com/stretchr/testify/require"
)

var hostPlayerId PlayerId = "player_id_0"

func getPlayerId(i int) *PlayerId {
	result := PlayerId(fmt.Sprintf("player_id_%d", i))
	return &result
}

func prepareState() (*GameState, *bytes.Buffer) {
	logsBuffer := bytes.NewBuffer([]byte{})
	handler := slog.NewTextHandler(logsBuffer, nil)
	logger := slog.New(handler)
	state := NewEmptyGameState(logger)
	return state, logsBuffer
}

const (
	green   = "\033[0;32m"
	noColor = "\033[0m"
)

func printLogsIfFailed(t *testing.T, logsBuffer *bytes.Buffer) {
	if t.Failed() {
		t.Log(green + "Gamestate logs:\n" + noColor + logsBuffer.String())
	}
}

func TestAddPlayersAndStart(t *testing.T) {
	state, logs := prepareState()
	defer printLogsIfFailed(t, logs)

	for i := 0; i < 2; i++ {
		id, err := state.AddPlayer()
		require.Nil(t, err)
		player := state.players[id]
		require.Equal(t, *player.id, id)
		require.Equal(t, *player.id, *getPlayerId(i))
		require.Equal(t, *player.name, PlayerName(fmt.Sprintf("Player %d", i)))
		require.True(t, player.alive)
		require.False(t, player.answerGiven)
		if i == 0 {
			require.Equal(t, player.playerType, Host)
		} else {
			require.Equal(t, player.playerType, Regular)
		}
	}
	require.Equal(t, state.stateType, Lobby)

	err := state.PlayerStartsGame(getPlayerId(1))
	require.ErrorContains(t, err, "is not host to start game")

	err = state.PlayerStartsGame(&hostPlayerId)
	require.ErrorContains(t, err, "Too few players")

	state.AddPlayer()
	err = state.PlayerStartsGame(&hostPlayerId)
	require.Nil(t, err)
	require.Equal(t, state.stateType, WaitForQuestion)

	err = state.PlayerStartsGame(&hostPlayerId)
	require.ErrorContains(t, err, "already started")
	require.Equal(t, state.stateType, WaitForQuestion)

	err = state.PlayerChoosesMainPlayer(
		&hostPlayerId,
		&ChooseMainPlayerStrategy{SpecificChoice, getPlayerId(1)},
	)
	require.ErrorContains(t, err, "Choosing main player available only in Lobby")
}

func TestChooseSpecificMainPlayerStrategy(t *testing.T) {
	state, logs := prepareState()
	defer printLogsIfFailed(t, logs)

	for i := 0; i < 6; i++ {
		_, err := state.AddPlayer()
		require.Nil(t, err)
	}

	choosedMainPlayerId := getPlayerId(3)
	err := state.PlayerChoosesMainPlayer(
		getPlayerId(1),
		&ChooseMainPlayerStrategy{
			ChoiceType:     SpecificChoice,
			ChoicePlayerId: choosedMainPlayerId,
		},
	)
	require.ErrorContains(t, err, "is not host to choose main player")

	err = state.PlayerChoosesMainPlayer(
		&hostPlayerId,
		&ChooseMainPlayerStrategy{
			ChoiceType:     SpecificChoice,
			ChoicePlayerId: &hostPlayerId,
		},
	)
	require.ErrorContains(t, err, "is not regular player to choose him")

	err = state.PlayerChoosesMainPlayer(
		&hostPlayerId,
		&ChooseMainPlayerStrategy{
			ChoiceType:     SpecificChoice,
			ChoicePlayerId: choosedMainPlayerId,
		},
	)
	require.Nil(t, err)

	err = state.PlayerStartsGame(&hostPlayerId)
	require.Nil(t, err)
	require.Equal(t, state.stateType, WaitForQuestion)
	for _, player := range state.players {
		switch player.playerType {
		case Host:
			require.Equal(t, player.id, &hostPlayerId)
		case Main:
			require.Equal(t, player.id, choosedMainPlayerId)
		case Regular:
		default:
			require.FailNow(t, "unknown player type")
		}
	}

	err = state.PlayerChoosesMainPlayer(
		&hostPlayerId,
		&ChooseMainPlayerStrategy{
			ChoiceType:     SpecificChoice,
			ChoicePlayerId: choosedMainPlayerId,
		},
	)
	require.ErrorContains(t, err, "Choosing main player available only in Lobby")
}

func TestChooseRandomMainPlayerStrategyFlaky(t *testing.T) {
	choicesCountById := make(map[PlayerId]int)

	for j := 0; j < 100; j++ {
		state, _ := prepareState()
		for i := 0; i < 4; i++ {
			state.AddPlayer()
		}
		state.PlayerChoosesMainPlayer(&hostPlayerId,
			&ChooseMainPlayerStrategy{
				ChoiceType: RandomChoice,
			},
		)
		err := state.PlayerStartsGame(&hostPlayerId)
		require.Nil(t, err)
		require.Equal(t, state.stateType, WaitForQuestion)
		for _, player := range state.players {
			switch player.playerType {
			case Host:
				require.Equal(t, player.id, &hostPlayerId)
			case Main:
				choicesCountById[*player.id]++
			case Regular:
			default:
				require.FailNow(t, "unknown player type")
			}
		}
	}

	// All regular players were chosen at least once
	require.Equal(t, len(choicesCountById), 3)
	for _, count := range choicesCountById {
		// All regular players were chosen at least five times
		require.GreaterOrEqual(t, count, 5)
	}
}

func getCorrectQuestionInfo() *QuestionInfo {
	question := Question("question text")
	option1 := AnswerOption("option1 wrong")
	option2 := AnswerOption("option2 correct")
	option3 := AnswerOption("option3 wrong")

	return &QuestionInfo{
		Question: &question,
		AnswerOptions: []*AnswerOption{
			&option1,
			&option2,
			&option3,
		},
		RightAnswerIdx: 1,
	}
}

func getWrongIndexQuestionInfo() *QuestionInfo {
	question := Question("question text")
	option1 := AnswerOption("option1 wrong")
	option2 := AnswerOption("option2 correct")
	option3 := AnswerOption("option3 wrong")

	return &QuestionInfo{
		Question: &question,
		AnswerOptions: []*AnswerOption{
			&option1,
			&option2,
			&option3,
		},
		RightAnswerIdx: 3,
	}
}

func getEmptyOptionsQuestionInfo() *QuestionInfo {
	question := Question("question text")

	return &QuestionInfo{
		Question:       &question,
		AnswerOptions:  []*AnswerOption{},
		RightAnswerIdx: 3,
	}
}

func TestWaitForQuestion(t *testing.T) {
	state, logs := prepareState()
	defer printLogsIfFailed(t, logs)

	for i := 0; i < 3; i++ {
		_, err := state.AddPlayer()
		require.Nil(t, err)
	}

	err := state.PlayerAsksQuestion(&hostPlayerId, getCorrectQuestionInfo())
	require.ErrorContains(t, err, "Game is not in state WaitForQuestion to ask question")

	err = state.PlayerStartsGame(&hostPlayerId)
	require.Nil(t, err)
	require.Equal(t, state.stateType, WaitForQuestion)

	err = state.PlayerAsksQuestion(getPlayerId(1), getCorrectQuestionInfo())
	require.ErrorContains(t, err, "is not host to ask question")

	err = state.PlayerAsksQuestion(&hostPlayerId, getWrongIndexQuestionInfo())
	require.ErrorContains(t, err, "Bad right answer index")

	err = state.PlayerAsksQuestion(&hostPlayerId, getEmptyOptionsQuestionInfo())
	require.ErrorContains(t, err, "Empty answer options")

	err = state.PlayerAsksQuestion(&hostPlayerId, getCorrectQuestionInfo())
	require.Nil(t, err)
	require.Equal(t, state.stateType, WaitForAnswer)
	require.Equal(t, state.questionInfo, getCorrectQuestionInfo())
}

func requireQuestionInfoEqual(t *testing.T, first *QuestionInfo, second *QuestionInfo) {
	require.Equal(t, *first.Question, *second.Question)
	require.Equal(t, first.RightAnswerIdx, second.RightAnswerIdx)
	require.Equal(t, len(first.AnswerOptions), len(second.AnswerOptions))
	for i := range first.AnswerOptions {
		require.Equal(t, *first.AnswerOptions[i], *second.AnswerOptions[i])
	}
}

func TestAnswerQuestions(t *testing.T) {
	state, logs := prepareState()
	defer printLogsIfFailed(t, logs)

	for i := 0; i < 6; i++ {
		_, err := state.AddPlayer()
		require.Nil(t, err)
	}

	err := state.PlayerChoosesMainPlayer(
		&hostPlayerId,
		&ChooseMainPlayerStrategy{ChoiceType: SpecificChoice, ChoicePlayerId: getPlayerId(1)},
	)
	require.Nil(t, err)
	err = state.PlayerStartsGame(&hostPlayerId)
	require.Nil(t, err)

	err = state.PlayerAsksQuestion(&hostPlayerId, getCorrectQuestionInfo())
	require.Nil(t, err)
	require.Equal(t, state.stateType, WaitForAnswer)
	requireQuestionInfoEqual(t, state.questionInfo, getCorrectQuestionInfo())
	require.Equal(t, state.milisecondsLeft, MilisecondsForAnswer)

	err = state.PlayerGivesAnswer(&hostPlayerId, &GivenAnswer{})
	require.ErrorContains(t, err, "is host and can't give answers")
	err = state.PlayerGivesAnswer(
		getPlayerId(1),
		&GivenAnswer{AnswerType: SpecificAnswer, AnswerIdx: 3},
	)
	require.ErrorContains(t, err, "Answer option out of range")
	err = state.PlayerGivesAnswer(
		getPlayerId(2),
		&GivenAnswer{AnswerType: HintAnswer},
	)
	require.ErrorContains(t, err, "is regular player and can't use hints")

	roundsData := []struct {
		answerOptionById  map[PlayerId]int
		expectedAliveById map[PlayerId]bool
	}{
		{
			// all right
			answerOptionById: map[PlayerId]int{
				*getPlayerId(1): 1,
				*getPlayerId(2): 1,
				*getPlayerId(3): 1,
				*getPlayerId(4): 1,
				*getPlayerId(5): 1,
			},
			expectedAliveById: map[PlayerId]bool{
				*getPlayerId(1): true,
				*getPlayerId(2): true,
				*getPlayerId(3): true,
				*getPlayerId(4): true,
				*getPlayerId(5): true,
			},
		},
		{
			// 2nd wrong
			answerOptionById: map[PlayerId]int{
				*getPlayerId(1): 1,
				*getPlayerId(2): 0,
				*getPlayerId(3): 1,
				*getPlayerId(4): 1,
				*getPlayerId(5): 1,
			},
			expectedAliveById: map[PlayerId]bool{
				*getPlayerId(1): true,
				*getPlayerId(2): false,
				*getPlayerId(3): true,
				*getPlayerId(4): true,
				*getPlayerId(5): true,
			},
		},
		{
			answerOptionById: map[PlayerId]int{
				*getPlayerId(1): 1,
				// dead player can't give answers
				*getPlayerId(2): 1,
				// no answer from 3rd player
				*getPlayerId(4): 1,
				*getPlayerId(5): 1,
			},
			expectedAliveById: map[PlayerId]bool{
				*getPlayerId(1): true,
				*getPlayerId(2): false,
				*getPlayerId(3): false,
				*getPlayerId(4): true,
				*getPlayerId(5): true,
			},
		},
	}

	for _, roundInfo := range roundsData {
		require.Equal(t, state.stateType, WaitForAnswer)
		for id, answerOption := range roundInfo.answerOptionById {
			require.False(t, state.players[id].answerGiven)
			answer := GivenAnswer{AnswerType: SpecificAnswer, AnswerIdx: answerOption}
			err = state.PlayerGivesAnswer(
				&id,
				&answer,
			)
			if state.players[id].alive {
				require.Nil(t, err)
				require.True(t, state.players[id].answerGiven)
				require.Equal(t, *state.players[id].answer, answer)
			} else {
				require.ErrorContains(t, err, "is dead and can't give answers")
				require.False(t, state.players[id].answerGiven)
			}
		}
		state.NotifyTimePassed(MilisecondsForAnswer - 1)
		require.Equal(t, state.stateType, WaitForAnswer)
		state.NotifyTimePassed(2)
		require.Equal(t, state.stateType, WaitForQuestion)
		for id, isAlive := range roundInfo.expectedAliveById {
			require.Equal(t, state.players[id].alive, isAlive)
		}
		err = state.PlayerAsksQuestion(&hostPlayerId, getCorrectQuestionInfo())
		require.Nil(t, err)
	}
	// next round -- main player don't give answer at first
	err = state.PlayerGivesAnswer(
		getPlayerId(4),
		&GivenAnswer{AnswerType: SpecificAnswer, AnswerIdx: 1},
	)
	require.Nil(t, err)
	require.True(t, state.players[*getPlayerId(4)].answerGiven)
	state.NotifyTimePassed(MilisecondsForAnswer - 1)
	require.Equal(t, state.stateType, WaitForAnswer)
	state.NotifyTimePassed(2)
	require.Equal(t, state.stateType, WaitForMainPlayer)

	err = state.PlayerGivesAnswer(
		getPlayerId(5),
		&GivenAnswer{AnswerType: SpecificAnswer, AnswerIdx: 1},
	)
	require.ErrorContains(t, err, "only main player can give answers")
	err = state.PlayerGivesAnswer(
		getPlayerId(1),
		&GivenAnswer{AnswerType: SpecificAnswer, AnswerIdx: 1},
	)
	require.Nil(t, err)
	require.Equal(t, state.stateType, WaitForQuestion)
	expectedAliveById := map[PlayerId]bool{
		*getPlayerId(1): true,
		*getPlayerId(2): false,
		*getPlayerId(3): false,
		*getPlayerId(4): true,
		*getPlayerId(5): false,
	}
	for id, isAlive := range expectedAliveById {
		require.Equal(t, state.players[id].alive, isAlive)
	}

	for _, player := range state.players {
		require.False(t, player.answerGiven)
	}

	err = state.PlayerAsksQuestion(&hostPlayerId, getCorrectQuestionInfo())
	require.Nil(t, err)
	// last round -- main player dies
	err = state.PlayerGivesAnswer(
		getPlayerId(4),
		&GivenAnswer{AnswerType: SpecificAnswer, AnswerIdx: 1},
	)
	require.Nil(t, err)
	state.NotifyTimePassed(MilisecondsForAnswer - 1)
	require.Equal(t, state.stateType, WaitForAnswer)
	state.NotifyTimePassed(2)
	require.Equal(t, state.stateType, WaitForMainPlayer)

	err = state.PlayerGivesAnswer(
		getPlayerId(1),
		&GivenAnswer{AnswerType: SpecificAnswer, AnswerIdx: 2},
	)
	require.Nil(t, err)
	require.Equal(t, state.stateType, GameOver)
	expectedAliveById = map[PlayerId]bool{
		*getPlayerId(1): false,
		*getPlayerId(2): false,
		*getPlayerId(3): false,
		*getPlayerId(4): true,
		*getPlayerId(5): false,
	}
	for id, isAlive := range expectedAliveById {
		require.Equal(t, state.players[id].alive, isAlive)
	}
}
