import React, { Component } from "react";
import PlayersList from "../common/PlayersList";
import { connect } from "react-redux";
import GamePhaseTitle from "../common/GamePhaseTitle";
import { PlayerType, getPlayerWithId } from "../common/CommonUtils";
import AnswerButtonGroup from "./AnswerButtonGroup";

export class WaitForAnswerPage extends Component {
  render() {
    const iAmMain =
      getPlayerWithId(this.props.players, this.props.selfPlayerId)
        .playerType === PlayerType.MAIN;

    return (
      <div className="running-game-wrapper">
        <div className="gamesplit-wrapper">
          <div className="gamesplit-left">
            <PlayersList
              players={this.props.players}
              selfPlayerId={this.props.selfPlayerId}
            ></PlayersList>
          </div>
          <div className="gamesplit-right">
            <GamePhaseTitle
              text={
                this.props.isWaitingForMainPlayer
                  ? "Waiting for main player"
                  : "Waiting for answer"
              }
              milisecondsLeft={this.props.milisecondsLeft}
              noTimer={iAmMain}
            ></GamePhaseTitle>
            <div className="rightside-widget question-widget">
              <div className="game-rule-wrapper">
                <h3>Question:</h3>
                <p>{this.props.question}</p>
              </div>
            </div>
            <AnswerButtonGroup />
          </div>
        </div>
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
    selfPlayerId: state.authData.playerId,
    players: gamestatePhase.playersInfo.players,
    milisecondsLeft: gamestatePhase.milisecondsLeft,
    question: gamestatePhase.questionInfo.question,
    isWaitingForMainPlayer: !state.gamestate.hasOwnProperty("waitForAnswer"),
  };
};

export default connect(mapStateToProps)(WaitForAnswerPage);
