import React, { Component } from "react";
import { FaGithub } from "react-icons/fa";

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo-wrapper">
          <img src="owl.svg" alt="owl icon"></img>
          <span>SOME QUIZ GAME</span>
        </div>
        <ul>
          <li key={"guthub"}>
            <a
              className="source-wrapper"
              href="https://github.com/lioshik/quiz-game"
            >
              <FaGithub></FaGithub>
              <span>source code</span>
            </a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
