import React, { Component } from "react";
import GamePhaseTitle from "../common/GamePhaseTitle";
import PlayersList from "../common/PlayersList";
import { connect } from "react-redux";
import { getPlayerWithId, PlayerType } from "../common/CommonUtils";
import AskQuestion from "./AskQuestion";

export class WaitForQuestionPage extends Component {
  render() {
    const iAmHost =
      getPlayerWithId(this.props.players, this.props.selfPlayerId)
        .playerType === PlayerType.HOST;
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
            <GamePhaseTitle text="Waiting for question"></GamePhaseTitle>
            {iAmHost && <AskQuestion></AskQuestion>}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selfPlayerId: state.authData.playerId,
    players: state.gamestate.waitForQuestion.playersInfo.players,
  };
};

export default connect(mapStateToProps)(WaitForQuestionPage);
