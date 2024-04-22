import React, { Component } from "react";
import StartPage from "./start_page/StartPage";
import { connect } from "react-redux";
import LobbyPage from "./lobby_page/LobbyPage";
import WaitForQuestionPage from "./wait_for_question/WaitForQuestionPage";
import WaitForAnswerPage from "./wait_for_answer/WaitForAnswerPage";

export class MainSection extends Component {
  render() {
    const gamestate = this.props.gamestate;
    return (
      <main>
        {gamestate === null && <StartPage></StartPage>}
        {gamestate !== null && gamestate.hasOwnProperty("lobby") && (
          <LobbyPage></LobbyPage>
        )}
        {gamestate !== null && gamestate.hasOwnProperty("waitForQuestion") && (
          <WaitForQuestionPage />
        )}
        {gamestate !== null &&
          (gamestate.hasOwnProperty("waitForAnswer") ||
            gamestate.hasOwnProperty("waitForMainPlayer")) && (
            <WaitForAnswerPage />
          )}
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gamestate: state.gamestate,
  };
};

export default connect(mapStateToProps)(MainSection);
