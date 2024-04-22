import React, { Component } from "react";
import { connect } from "react-redux";
import { ReactFitty } from "react-fitty";
import { getPlayerWithId } from "../common/CommonUtils";

export class SpoiledAnswers extends Component {
  render() {
    if (
      !this.props.isWaitingForMainPlayer ||
      !Array.isArray(this.props["spoiledAnswers"]) ||
      this.props.spoiledAnswers.length === 0
    ) {
      return null;
    }
    return (
      <div className="rightside-widget spoiled-answers-widget">
        <ReactFitty className="widget-header" maxSize={21}>
          Spoiled answers
        </ReactFitty>
        <ol className="spoiled-answers-list">
          {this.props.spoiledAnswers.map((item) => {
            return (
              <div className="game-rule-wrapper">
                <h3>
                  {
                    getPlayerWithId(this.props.players, item.playerId)
                      .playerName
                  }
                </h3>
                <p>{this.props.answerOptions[item.answerIdx]}</p>
              </div>
            );
          })}
        </ol>
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
    players: gamestatePhase.playersInfo.players,
    answerOptions: gamestatePhase.questionInfo.answerOptions,
    spoiledAnswers: !state.gamestate.hasOwnProperty("waitForAnswer")
      ? gamestatePhase.spoiledAnswers
      : [],
    isWaitingForMainPlayer: !state.gamestate.hasOwnProperty("waitForAnswer"),
  };
};

export default connect(mapStateToProps)(SpoiledAnswers);
