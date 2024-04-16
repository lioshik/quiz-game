import React, { Component } from "react";
import StartPage from "./start_page/StartPage";
import { connect } from "react-redux";
import LobbyPage from "./lobby_page/LobbyPage";
import WaitForQuestionPage from "./wait_for_question_page/WaitForQuestionPage";

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
