import React, { Component } from "react";
import PlayersList from "../common/PlayersList";
import { connect } from "react-redux";
import GamePhaseTitle from "../common/GamePhaseTitle";

export class WaitForAnswerPage extends Component {
  render() {
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
              text="Waiting for players"
              roomCode={this.props.roomCode}
            ></GamePhaseTitle>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selfPlayerId: state.authData.playerId,
    players: state.gamestate.waitForAnswer.playersInfo.players,
  };
};

export default connect(mapStateToProps)(WaitForAnswerPage);
