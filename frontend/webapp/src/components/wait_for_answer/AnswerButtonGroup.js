import React, { Component } from "react";
import { connect } from "react-redux";
import { setSelectedAnswer } from "../../store";
import { webSocketService } from "../..";
import {
  getPlayerWithId,
  PlayerType,
  SelectedAnswerType,
} from "../common/CommonUtils";

function selectedAnswerIsIdx(selectedAnswer, idx) {
  if (selectedAnswer === null) {
    return false;
  }
  return (
    selectedAnswer.selectedAnswerType === SelectedAnswerType.ANSWER_OPTION &&
    selectedAnswer.selectedAnswer === idx
  );
}

export class AnswerButtonGroup extends Component {
  componentWillUnmount() {
    console.log("answer buttons will unmount");
    this.props.dispatch(setSelectedAnswer(null));
  }

  render() {
    const iAmHost =
      getPlayerWithId(this.props.players, this.props.authData.playerId)
        .playerType === PlayerType.HOST;
    const iAmMain =
      getPlayerWithId(this.props.players, this.props.selfPlayerId)
        .playerType === PlayerType.MAIN;
    const isWaitingForMainPlayer = this.props.isWaitingForMainPlayer;
    const iAmAlive = getPlayerWithId(
      this.props.players,
      this.props.selfPlayerId
    ).stillAlive;

    return (
      <div className="rightside-widget answer-button-group">
        <ol>
          {this.props.answerOptions.map((item, idx) => {
            return (
              <button
                key={idx}
                className={`answer-option-button ${
                  selectedAnswerIsIdx(this.props.selectedAnswer, idx)
                    ? "selected-button"
                    : ""
                }`}
                disabled={
                  iAmHost || !iAmAlive || (isWaitingForMainPlayer && !iAmMain)
                    ? true
                    : undefined
                }
                onClick={() =>
                  webSocketService.sendGiveAnswer(
                    this.props.authData,
                    idx,
                    false,
                    () => {
                      console.log("callback fro setting selected answer");
                      this.props.dispatch(
                        setSelectedAnswer({
                          selectedAnswerType: SelectedAnswerType.ANSWER_OPTION,
                          selectedAnswer: idx,
                        })
                      );
                    }
                  )
                }
              >
                {item}
              </button>
            );
          })}
        </ol>
        {!iAmHost ? null : (
          <span className="small-clarification-text">
            Host cant's give answers
          </span>
        )}
        {iAmAlive ? null : (
          <span className="small-clarification-text">
            You died and can't give answers
          </span>
        )}
        {isWaitingForMainPlayer && !iAmMain ? (
          <span className="small-clarification-text">
            Now only answers from main player accepted
          </span>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let gamestatePhase = null;
  if (state.gamestate.hasOwnProperty("waitForAnswer")) {
    gamestatePhase = state.gamestate.waitForAnswer;
  } else {
    gamestatePhase = state.gamestate.waitForMainPlayer;
  }
  return {
    authData: state.authData,
    selfPlayerId: state.authData.playerId,
    players: gamestatePhase.playersInfo.players,
    question: gamestatePhase.questionInfo.question,
    answerOptions: gamestatePhase.questionInfo.answerOptions,
    selectedAnswer: state.selectedAnswer,
    isWaitingForMainPlayer: !state.gamestate.hasOwnProperty("waitForAnswer"),
  };
};

export default connect(mapStateToProps)(AnswerButtonGroup);
