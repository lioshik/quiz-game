package gamestate

import (
	"errors"
	"fmt"
	"log/slog"
	"math/rand"
	"strconv"
	"unicode/utf8"
)

type StateType int

const (
	Lobby StateType = iota
	WaitForQuestion
	WaitForAnswer
	WaitForMainPlayer
	RoundResultState
	GameOver
)

type PlayerType int

const (
	Regular PlayerType = iota
	Main
	Host
)

type ChoiceType int

const (
	SpecificChoice ChoiceType = iota
	RandomChoice
)

type AnswerType int

const (
	SpecificAnswer AnswerType = iota
	HintAnswer
)

type HintType int

const (
	MajorityOpinion = iota
	SkipQuestion
	TwoOpinions
)

type GivenAnswer struct {
	AnswerType AnswerType
	AnswerIdx  int
	HintType   HintType
}

type PlayerId string
type PlayerName string

type Player struct {
	playerType PlayerType
	id         *PlayerId
	name       *PlayerName
	alive,
	answerGiven bool
	answer *GivenAnswer
}

type ChooseMainPlayerStrategy struct {
	ChoiceType     ChoiceType
	ChoicePlayerId *PlayerId
}

type HintsAvailability struct {
	skipQuestion,
	majorityOpinion,
	twoOpinions bool
}

type Question string
type AnswerOption string
type QuestionInfo struct {
	Question       *Question
	AnswerOptions  []*AnswerOption
	RightAnswerIdx int
}

const MilisecondsForAnswer uint64 = 10000

type SpoiledAnswer struct {
	playerId  *PlayerId
	answerIdx int
}

type GameState struct {
	stateType                StateType
	players                  map[PlayerId]*Player
	chooseMainPlayerStrategy *ChooseMainPlayerStrategy
	mainPlayerScore          int64
	hintsAvailability        *HintsAvailability
	milisecondsLeft          uint64
	questionInfo             *QuestionInfo
	spoiledAnswers           []*SpoiledAnswer
	logger                   *slog.Logger
}

func (state *GameState) errorIfPlayerNotExists(id *PlayerId) error {
	if _, exists := state.players[*id]; !exists {
		return fmt.Errorf("No player with id=%q", *id)
	}
	return nil
}

func NewEmptyGameState(logger *slog.Logger) *GameState {
	return &GameState{
		stateType: Lobby,
		players:   make(map[PlayerId]*Player),
		chooseMainPlayerStrategy: &ChooseMainPlayerStrategy{
			ChoiceType: RandomChoice,
		},
		mainPlayerScore: 0,
		hintsAvailability: &HintsAvailability{
			skipQuestion:    true,
			majorityOpinion: true,
			twoOpinions:     true,
		},
		milisecondsLeft: 0,
		logger:          logger,
	}
}

func (state *GameState) AddPlayer() (PlayerId, error) {
	if state.stateType != Lobby {
		return "", errors.New("Adding player is available only in Lobby")
	}
	var (
		playerId   = PlayerId("player_id_" + strconv.Itoa(len(state.players)))
		playerName = PlayerName("Player " + strconv.Itoa(len(state.players)))
		playerType = Regular
	)
	if len(state.players) == 0 {
		playerType = Host
	}
	state.players[playerId] = &Player{
		playerType:  playerType,
		id:          &playerId,
		name:        &playerName,
		alive:       true,
		answerGiven: false,
		answer:      &GivenAnswer{},
	}
	state.logger.Info(
		fmt.Sprintf(
			"Added player: id=%q name=%q",
			*state.players[playerId].id,
			*state.players[playerId].name,
		),
	)
	return playerId, nil
}

func (state *GameState) PlayerChangeName(id *PlayerId, newName *PlayerName) error {
	if state.stateType != Lobby {
		return errors.New("Changing name is available only in Lobby")
	}
	if len(*newName) == 0 {
		return errors.New("Name can't be empty")
	}
	if utf8.RuneCountInString(string(*newName)) > 10 {
		return errors.New("Name can't bet longer than 10 characters")
	}
	if err := state.errorIfPlayerNotExists(id); err != nil {
		return err
	}
	nameAlreadyTaken := false
	for _, player := range state.players {
		if *player.name == *newName {
			nameAlreadyTaken = true
			break
		}
	}
	if nameAlreadyTaken {
		return errors.New("Name is already taken")
	}
	state.players[*id].name = newName
	state.logger.Info(fmt.Sprintf("Player with id=%q changed name to %q", *id, *newName))
	return nil
}

func (state *GameState) PlayerChoosesMainPlayer(
	chooser_id *PlayerId,
	choice *ChooseMainPlayerStrategy,
) error {
	if state.stateType != Lobby {
		return errors.New("Choosing main player available only in Lobby")
	}
	if err := state.errorIfPlayerNotExists(chooser_id); err != nil {
		return err
	}
	if state.players[*chooser_id].playerType != Host {
		return fmt.Errorf("Player with id=%q is not host to choose main player", *chooser_id)
	}
	if choice.ChoiceType == SpecificChoice {
		if err := state.errorIfPlayerNotExists(choice.ChoicePlayerId); err != nil {
			return err
		}
		if state.players[*choice.ChoicePlayerId].playerType != Regular {
			return fmt.Errorf(
				"Player with id=%q is not regular player to choose him as main player",
				*choice.ChoicePlayerId,
			)
		}
	}

	state.chooseMainPlayerStrategy = choice
	state.logger.Info(
		fmt.Sprintf(
			"Player with id=%q as host changed main player select strategy to %+v",
			*chooser_id,
			*choice,
		),
	)
	if choice.ChoiceType == SpecificChoice {
		state.logger.Info(
			fmt.Sprintf(
				"New selected main player id: %+v",
				*choice.ChoicePlayerId,
			),
		)
	}
	return nil
}

func (state *GameState) chooseMainPlayer() {
	switch state.chooseMainPlayerStrategy.ChoiceType {
	case SpecificChoice:
		err := state.errorIfPlayerNotExists(state.chooseMainPlayerStrategy.ChoicePlayerId)
		if err != nil {
			panic(err)
		}
		state.players[*state.chooseMainPlayerStrategy.ChoicePlayerId].playerType = Main
		state.logger.Info(
			fmt.Sprintf(
				"choosed specific main player. id=%s",
				*state.chooseMainPlayerStrategy.ChoicePlayerId,
			),
		)
	case RandomChoice:
		playerIds := make([]*PlayerId, 0, len(state.players))
		for _, player := range state.players {
			if player.playerType == Regular {
				playerIds = append(playerIds, player.id)
			}
		}
		if len(playerIds) < 2 {
			panic("too few players")
		}
		choice := *playerIds[rand.Int()%len(playerIds)]
		state.players[choice].playerType = Main
		state.logger.Info(
			fmt.Sprintf(
				"choosed random main player. id=%s",
				choice,
			),
		)
	default:
		panic("unknown choice type")
	}
}

func (state *GameState) PlayerStartsGame(starterPlayerId *PlayerId) error {
	if state.stateType != Lobby {
		return errors.New("Game is already started")
	}
	if err := state.errorIfPlayerNotExists(starterPlayerId); err != nil {
		return err
	}
	if state.players[*starterPlayerId].playerType != Host {
		return fmt.Errorf("Player with id=%q is not host to start game", *starterPlayerId)
	}
	if len(state.players) < 3 {
		return errors.New("Too few players")
	}
	state.chooseMainPlayer()
	state.beginWaitingForQuestion()
	state.logger.Info(fmt.Sprintf("Player with id=%q started game", *starterPlayerId))
	return nil
}

func (state *GameState) clearAnswersAndQuestionInfo() {
	state.questionInfo = &QuestionInfo{}
	state.spoiledAnswers = make([]*SpoiledAnswer, 0, 2)
	for _, player := range state.players {
		player.answerGiven = false
	}
}

func (state *GameState) beginWaitingForQuestion() {
	state.clearAnswersAndQuestionInfo()
	state.stateType = WaitForQuestion
	state.logger.Info("Game now is in WaitForQuestion state")
}

func (state *GameState) beginWaitingForAnswers(questionInfo *QuestionInfo) {
	state.questionInfo = questionInfo
	state.stateType = WaitForAnswer
	state.milisecondsLeft = MilisecondsForAnswer
	for _, player := range state.players {
		if player.answerGiven {
			panic("player answers not cleared at the beginning of beginWaitingForAnswers state")
		}
	}
}

func (state *GameState) PlayerAsksQuestion(playerId *PlayerId, questionInfo *QuestionInfo) error {
	if state.stateType != WaitForQuestion {
		return errors.New("Game is not in state WaitForQuestion to ask question")
	}
	if err := state.errorIfPlayerNotExists(playerId); err != nil {
		return err
	}
	if state.players[*playerId].playerType != Host {
		return fmt.Errorf("Player with id=%q is not host to ask question", *playerId)
	}
	if len(questionInfo.AnswerOptions) == 0 {
		return errors.New("Empty answer options")
	}
	if questionInfo.RightAnswerIdx >= len(questionInfo.AnswerOptions) {
		return errors.New("Bad right answer index")
	}
	state.beginWaitingForAnswers(questionInfo)
	state.logger.Info(
		fmt.Sprintf("Player with id=%q as host asks question: %+v", *playerId, *questionInfo),
	)
	return nil
}

func (state *GameState) hintAvailabilityReference(hintType HintType) *bool {
	switch hintType {
	case MajorityOpinion:
		return &state.hintsAvailability.majorityOpinion
	case TwoOpinions:
		return &state.hintsAvailability.twoOpinions
	case SkipQuestion:
		return &state.hintsAvailability.skipQuestion
	default:
		panic("Unknown hint type")
	}
}

func (state *GameState) PlayerGivesAnswer(playerId *PlayerId, givenAnswer *GivenAnswer) error {
	if state.stateType != WaitForAnswer && state.stateType != WaitForMainPlayer {
		return errors.New("Game is not in state to receive answers")
	}
	if state.players[*playerId].playerType == Host {
		return fmt.Errorf("Player with id=%q is host and can't give answers", *playerId)
	}
	if err := state.errorIfPlayerNotExists(playerId); err != nil {
		return err
	}
	if !state.players[*playerId].alive {
		return fmt.Errorf("Player with id=%q is dead and can't give answers", givenAnswer.AnswerIdx)
	}
	if givenAnswer.AnswerIdx >= len((state.questionInfo.AnswerOptions)) {
		return errors.New("Answer option out of range")
	}
	if state.stateType == WaitForMainPlayer {
		if state.players[*playerId].playerType != Main {
			return errors.New("In WaitForMainPlayerState only main player can give answers")
		}
		if givenAnswer.AnswerType == HintAnswer {
			hintAvailable := state.hintAvailabilityReference(givenAnswer.HintType)
			if !*hintAvailable {
				return errors.New("Hint is unavailable")
			}
		}
		state.logger.Info(
			fmt.Sprintf(
				"Player with id=%q as main player gives answer: %+v",
				*playerId,
				*givenAnswer,
			),
		)
		state.endWaitingForMainPlayer(playerId, givenAnswer)
		return nil
	}
	if givenAnswer.AnswerType == HintAnswer {
		if state.players[*playerId].playerType != Main {
			return fmt.Errorf("Player with id=%q is regular player and can't use hints", *playerId)
		}
		hintAvailable := state.hintAvailabilityReference(givenAnswer.HintType)
		if !*hintAvailable {
			return errors.New("Hint is unavailable")
		}
	}
	state.players[*playerId].answerGiven = true
	state.players[*playerId].answer = givenAnswer
	state.logger.Info(
		fmt.Sprintf("Player with id=%q gives answer: %+v", *playerId, *givenAnswer),
	)
	return nil
}

func (state *GameState) endWaitingForAnswer() {
	var (
		shouldWaitForMainPlayer           = true
		mainPlayerId            *PlayerId = nil
	)
	for id, player := range state.players {
		id := id
		switch player.playerType {
		case Host:
			continue
		case Main:
			mainPlayerId = &id
			state.logger.Info(
				fmt.Sprintf(
					"Player with id=%s is main",
					*mainPlayerId,
				),
			)
			if player.answerGiven {
				shouldWaitForMainPlayer = false
			}
		case Regular:
			if !player.answerGiven {
				continue
			}
			if player.answer.AnswerType != SpecificAnswer {
				panic("Regular player answer type is not Specific")
			}
		default:
			panic("unknown player type")
		}
	}
	if mainPlayerId == nil {
		panic("Not found main player")
	}
	if !shouldWaitForMainPlayer {
		state.logger.Info(
			fmt.Sprintf("About to end waiting for main player. Main player id=%s", *mainPlayerId),
		)
		state.endWaitingForMainPlayer(mainPlayerId, state.players[*mainPlayerId].answer)
		return
	}
	state.logger.Info("Game going to state WaitForMainPlayer")
	state.stateType = WaitForMainPlayer
}

func (state *GameState) killWrongRegularPlayers() {
	for _, player := range state.players {
		if !player.alive || player.playerType != Regular {
			continue
		}
		if !player.answerGiven || player.answer.AnswerIdx != state.questionInfo.RightAnswerIdx {
			state.logger.Info(
				fmt.Sprintf("Player with id=%q died duto to wrong answer or no answer", *player.id),
			)
			player.alive = false
		}
	}
}

func (state *GameState) gameOverIfAllRegularPlayersDied() bool {
	atLeastOneAlive := false
	for _, player := range state.players {
		if player.playerType == Regular && player.alive {
			atLeastOneAlive = true
			break
		}
	}

	if !atLeastOneAlive {
		state.logger.Info("All regular players died. Game over")
		state.logger.Info("All regular players died. Game over")
		state.logger.Info("All regular players died. Game over")
		state.stateType = GameOver
		return true
	}

	return false
}

func (state *GameState) mainPlayerDied(mainPlayerId *PlayerId) {
	if _, exists := state.players[*mainPlayerId]; !exists {
		panic("no player with such id")
	}
	if state.players[*mainPlayerId].playerType != Main {
		panic("player type is not main")
	}
	// TODO
	state.logger.Info(fmt.Sprintf("Main player with id=%q died. Game over", *mainPlayerId))
	state.logger.Info(fmt.Sprintf("Main player with id=%q died. Game over", *mainPlayerId))
	state.logger.Info(fmt.Sprintf("Main player with id=%q died. Game over", *mainPlayerId))
	state.players[*mainPlayerId].alive = false
	state.stateType = GameOver
}

func (state *GameState) spoilTwoAnswers() []*SpoiledAnswer {
	result := make([]*SpoiledAnswer, 0, len(state.players))
	for id, player := range state.players {
		id := id
		switch player.playerType {
		case Main, Host:
			continue
		case Regular:
			if !player.answerGiven {
				continue
			}
			if player.answer.AnswerType != SpecificAnswer {
				panic("regular player answer type is not specific")
			}
			result = append(result, &SpoiledAnswer{
				playerId:  &id,
				answerIdx: player.answer.AnswerIdx,
			})
		default:
			panic("unknown player type")
		}
	}
	rand.Shuffle(len(result), func(i, j int) {
		result[i], result[j] = result[j], result[i]
	})
	if len(result) > 2 {
		return result[:2]
	}
	state.logger.Info(fmt.Sprintf("Two spoiled answers result: %+v", result))
	return result
}

func (state *GameState) getMajorityOpinion() int {
	var (
		votesCountByAnswerOption    = make(map[int]int)
		answerOptionIdxWithMaxVotes = 0
	)
	for _, player := range state.players {
		switch player.playerType {
		case Main, Host:
			continue
		case Regular:
			if !player.answerGiven {
				continue
			}
			if player.answer.AnswerType != SpecificAnswer {
				panic("regular player answer type is not specific")
			}
			votesCountByAnswerOption[player.answer.AnswerIdx]++
			if votesCountByAnswerOption[player.answer.AnswerIdx] > votesCountByAnswerOption[answerOptionIdxWithMaxVotes] {
				answerOptionIdxWithMaxVotes = player.answer.AnswerIdx
			}
		default:
			panic("unknown player type")
		}
	}
	return answerOptionIdxWithMaxVotes
}

func (state *GameState) endWaitingForMainPlayer(
	mainPlayerId *PlayerId,
	mainPlayerAnswer *GivenAnswer,
) {
	switch mainPlayerAnswer.AnswerType {
	case HintAnswer:
		hintAvailability := state.hintAvailabilityReference(mainPlayerAnswer.HintType)
		if !*hintAvailability {
			panic("hint is already used")
		}
		*hintAvailability = false
		switch mainPlayerAnswer.HintType {
		case SkipQuestion:
			state.killWrongRegularPlayers()
			if state.gameOverIfAllRegularPlayersDied() {
				return
			}
			state.beginWaitingForQuestion()
			return
		case TwoOpinions:
			state.spoiledAnswers = state.spoilTwoAnswers()
			return
		case MajorityOpinion:
			majorityOpinion := state.getMajorityOpinion()
			if majorityOpinion != state.questionInfo.RightAnswerIdx {
				state.killWrongRegularPlayers()
				if state.gameOverIfAllRegularPlayersDied() {
					return
				}
				state.logger.Info(
					fmt.Sprintf(
						"Main player with id=%q died due to wrong majority opinion",
						*mainPlayerId,
					),
				)
				state.mainPlayerDied(mainPlayerId)
			} else {
				state.killWrongRegularPlayers()
				if state.gameOverIfAllRegularPlayersDied() {
					return
				}
				state.beginWaitingForQuestion()
			}
			return
		default:
			panic("unknown hint type")
		}
	case SpecificAnswer:
		state.killWrongRegularPlayers()
		if state.gameOverIfAllRegularPlayersDied() {
			return
		}
		if mainPlayerAnswer.AnswerIdx != state.questionInfo.RightAnswerIdx {
			state.logger.Info(
				fmt.Sprintf(
					"Main player with id=%q died due to wrong answer",
					*mainPlayerId,
				),
			)
			state.mainPlayerDied(mainPlayerId)
			return
		}
		state.beginWaitingForQuestion()
	default:
		panic("unknown answer type")
	}
}

func (state *GameState) NotifyTimePassed(milisecondsAmount uint64) {
	if state.stateType != WaitForAnswer {
		return
	}
	if state.milisecondsLeft < milisecondsAmount {
		state.endWaitingForAnswer()
		return
	}
	state.milisecondsLeft -= milisecondsAmount
}
