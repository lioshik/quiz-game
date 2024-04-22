import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getPlayerWithId,
  PlayerType,
  SelectedAnswerType,
  HintType,
} from "../common/CommonUtils";
import { IoIosFastforward } from "react-icons/io";
import { FcBinoculars } from "react-icons/fc";
import { PiUsersThreeFill } from "react-icons/pi";
import { webSocketService } from "../..";
import { setSelectedAnswer } from "../../store";

function selectedAnswerIsSkipHint(selectedAnswer) {
  if (selectedAnswer === null) {
    return false;
  }
  return (
    selectedAnswer.selectedAnswerType === SelectedAnswerType.HINT &&
    selectedAnswer.selectedAnswer === HintType.SKIP_QUESTION
  );
}

function selectedAnswerIsTwoOpinions(selectedAnswer) {
  if (selectedAnswer === null) {
    return false;
  }
  return (
    selectedAnswer.selectedAnswerType === SelectedAnswerType.HINT &&
    selectedAnswer.selectedAnswer === HintType.TWO_OPINIONS
  );
}

function selectedAnswerIsMajorityOpinion(selectedAnswer) {
  if (selectedAnswer === null) {
    return false;
  }
  return (
    selectedAnswer.selectedAnswerType === SelectedAnswerType.HINT &&
    selectedAnswer.selectedAnswer === HintType.MAJORITY_OPINION
  );
}

export class HintsButtonGroup extends Component {
  render() {
    const iAmMain =
      getPlayerWithId(this.props.players, this.props.selfPlayerId)
        .playerType === PlayerType.MAIN;

    return (
      <div className="rightside-widget hint-buttons-widget">
        <ol className="hint-buttons-list">
          {/* skip question */}
          {this.props.hintSkipQuestionAvailable && (
            <button
              className={
                "hint-button " +
                (selectedAnswerIsSkipHint(this.props.selectedAnswer)
                  ? "selected-button"
                  : "")
              }
              disabled={!iAmMain ? true : undefined}
              onClick={() =>
                webSocketService.sendGiveAnswer(
                  this.props.authData,
                  HintType.SKIP_QUESTION,
                  true,
                  () => {
                    console.log("callback from setting selected answer");
                    this.props.dispatch(
                      setSelectedAnswer({
                        selectedAnswerType: SelectedAnswerType.HINT,
                        selectedAnswer: HintType.SKIP_QUESTION,
                      })
                    );
                  }
                )
              }
            >
              <IoIosFastforward />
            </button>
          )}
          {!this.props.hintSkipQuestionAvailable && (
            <div className="hint-placeholder">
              <IoIosFastforward />
            </div>
          )}
          {/* two opinions */}
          {this.props.hintTwoOpinionsAvailable && (
            <button
              className={
                "hint-button " +
                (selectedAnswerIsTwoOpinions(this.props.selectedAnswer)
                  ? "selected-button"
                  : "")
              }
              disabled={!iAmMain ? true : undefined}
              onClick={() =>
                webSocketService.sendGiveAnswer(
                  this.props.authData,
                  HintType.TWO_OPINIONS,
                  true,
                  () => {
                    console.log("callback from setting selected answer");
                    this.props.dispatch(
                      setSelectedAnswer({
                        selectedAnswerType: SelectedAnswerType.HINT,
                        selectedAnswer: HintType.TWO_OPINIONS,
                      })
                    );
                  }
                )
              }
            >
              <FcBinoculars />
            </button>
          )}
          {!this.props.hintTwoOpinionsAvailable && (
            <div className="hint-placeholder">
              <FcBinoculars />
            </div>
          )}
          {/* majority opinion */}
          {this.props.hintMajorityOpinionAvailable && (
            <button
              className={
                "hint-button " +
                (selectedAnswerIsMajorityOpinion(this.props.selectedAnswer)
                  ? "selected-button"
                  : "")
              }
              disabled={!iAmMain ? true : undefined}
              onClick={() =>
                webSocketService.sendGiveAnswer(
                  this.props.authData,
                  HintType.MAJORITY_OPINION,
                  true,
                  () => {
                    console.log("callback from setting selected answer");
                    this.props.dispatch(
                      setSelectedAnswer({
                        selectedAnswerType: SelectedAnswerType.HINT,
                        selectedAnswer: HintType.MAJORITY_OPINION,
                      })
                    );
                  }
                )
              }
            >
              <PiUsersThreeFill />
            </button>
          )}
          {!this.props.hintMajorityOpinionAvailable && (
            <div className="hint-placeholder">
              <PiUsersThreeFill />
            </div>
          )}
        </ol>
        {iAmMain ? null : (
          <span className="small-clarification-text">
            Only main player can use hints
          </span>
        )}
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
    isWaitingForMainPlayer: !state.gamestate.hasOwnProperty("waitForAnswer"),
    hintSkipQuestionAvailable:
      gamestatePhase.playersInfo.hintSkipQuestionAvailable,
    hintTwoOpinionsAvailable:
      gamestatePhase.playersInfo.hintTwoOpinionsAvailable,
    hintMajorityOpinionAvailable:
      gamestatePhase.playersInfo.hintMajorityOpinionAvailable,
    selectedAnswer: state.selectedAnswer,
  };
};

export default connect(mapStateToProps)(HintsButtonGroup);
