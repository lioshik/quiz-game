import React, { Component } from "react";
import PlayersList from "../common/PlayersList";
import { connect } from "react-redux";
import { GameOverReasonType } from "../common/CommonUtils";
import GamePhaseTitle from "../common/GamePhaseTitle";

export class GameOverPage extends Component {
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
              text={"Game over"}
              secondLineText={
                this.props.gameOverReason ===
                GameOverReasonType.MAIN_PLAYER_DIED
                  ? "Main player lost"
                  : "Main player won"
              }
            ></GamePhaseTitle>
            <div className="rightside-widget">
              <GamePhaseTitle
                text={
                  this.props.gameOverReason ===
                  GameOverReasonType.MAIN_PLAYER_DIED
                    ? "Main player died"
                    : "All regular players died"
                }
                secondLineText={"Main player score: " + this.props.mainPlayerScore.toString()}
              ></GamePhaseTitle>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selfPlayerId: state.authData.playerId,
    players: state.gamestate.gameOver.playersInfo.players,
    gameOverReason: state.gamestate.gameOver.gameOverReason,
    mainPlayerScore: state.gamestate.gameOver.mainPlayerScore,
  };
};

export default connect(mapStateToProps)(GameOverPage);
