import React, { Component } from "react";

export class GamePhaseTitle extends Component {
  render() {
    return (
      <div className="gamephase-title-wrapper">
        <h2 className="game-phase-text">
          {this.props.text}
          {this.props.roomCode !== null ? <br></br> : null}
          {this.props.roomCode !== null ? "Room code: " : null}
          {this.props.roomCode !== null ? <span>{this.props.roomCode}</span> : null}
        </h2>
      </div>
    );
  }
}

GamePhaseTitle.defaultProps = {
  text: "",
  roomCode: null,
};

export default GamePhaseTitle;
