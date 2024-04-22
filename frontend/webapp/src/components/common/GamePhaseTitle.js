import React, { Component } from "react";

function millisecondsToMinutesAndSeconds(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds % 60;

  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return `${formattedMinutes}:${formattedSeconds}`;
}

export class GamePhaseTitle extends Component {
  render() {
    const shouldShowTimer =
      this.props.milisecondsLeft !== null && this.props.noTimer === false;
    return (
      <div className="gamephase-title-wrapper">
        <h2 className="game-phase-text">
          {this.props.text}
          {/* room code */}
          {this.props.roomCode !== null ? <br></br> : null}
          {this.props.roomCode !== null ? "Room code: " : null}
          {this.props.roomCode !== null ? (
            <span>{this.props.roomCode}</span>
          ) : null}
          {/* timer */}
          {shouldShowTimer && <br></br>}
          {shouldShowTimer &&
            millisecondsToMinutesAndSeconds(this.props.milisecondsLeft)}
          {/* second line text */}
          {this.props.secondLineText !== null ? <br></br> : null}
          {this.props.secondLineText !== null
            ? this.props.secondLineText
            : null}
        </h2>
      </div>
    );
  }
}

GamePhaseTitle.defaultProps = {
  text: "",
  secondLineText: null,
  roomCode: null,
  milisecondsLeft: null,
  noTimer: false,
};

export default GamePhaseTitle;
