import React, { Component } from "react";
import { connect } from "react-redux";
import { getPlayerWithId, PlayerType } from "../common/CommonUtils";
import { webSocketService } from "../..";

export class StartGame extends Component {
  render() {
    const iAmHost =
      getPlayerWithId(this.props.players, this.props.authData.playerId)
        .playerType === PlayerType.HOST;
    return (
      <div className="rightside-widget start-game-widget">
        {
          <button
            disabled={
              !iAmHost || this.props.players.length < 3 ? true : undefined
            }
            onClick={() => {
              webSocketService.sendStartGame(this.props.authData);
            }}
          >
            start game
          </button>
        }
        {this.props.players.length < 3 ? (
          <span className="small-clarification-text">
            Need at least 3 players to start
          </span>
        ) : !iAmHost ? (
          <span className="small-clarification-text">
            Only host can start game
          </span>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authData: state.authData,
    players: state.gamestate.lobby.players,
  };
};

export default connect(mapStateToProps)(StartGame);
