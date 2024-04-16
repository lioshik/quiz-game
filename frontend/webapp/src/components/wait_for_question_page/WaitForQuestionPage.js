import React, { Component } from "react";
import GamePhaseTitle from "../common/GamePhaseTitle";

export class WaitForQuestionPage extends Component {
  render() {
    return (
      <div className="running-game-wrapper">
        <GamePhaseTitle text="Waiting for question"></GamePhaseTitle>;
      </div>
    );
  }
}

export default WaitForQuestionPage;
