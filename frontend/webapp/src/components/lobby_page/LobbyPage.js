import React, { Component } from "react";
import { connect } from "react-redux";
import GamePhaseTitle from "../common/GamePhaseTitle";
import PlayersList from "../common/PlayersList";
import ChangeName from "./ChangeName";
import ChooseMainPlayer from "./ChooseMainPlayer";
import StartGame from "./StartGame";

export class LobbyPage extends Component {
  render() {
    return (
      <div className="running-game-wrapper">
        <GamePhaseTitle
          text="Waiting for players"
          roomCode={this.props.roomCode}
        ></GamePhaseTitle>
        <div className="gamesplit-wrapper">
          <div className="gamesplit-left">
            <PlayersList
              players={this.props.players}
              selfPlayerId={this.props.selfPlayerId}
              mainPlayerChoiceId={this.props.mainPlayerChoiceId}
            ></PlayersList>
          </div>
          <div className="gamesplit-right">
            <ChangeName></ChangeName>
            <ChooseMainPlayer></ChooseMainPlayer>
            <StartGame></StartGame>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    roomCode: state.authData.roomCode,
    selfPlayerId: state.authData.playerId,
    players: state.gamestate.lobby.players,
    mainPlayerChoiceId: state.gamestate.lobby.mainPlayerId,
  };
};

export default connect(mapStateToProps)(LobbyPage);
