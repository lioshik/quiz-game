import React, { Component } from "react";
import { FaGithub } from "react-icons/fa";

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo-wrapper">
          <img src="owl.svg"></img>
          <span>SOME QUIZ GAME</span>
        </div>
        <ul>
          <li>
            <a
              className="source-wrapper"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
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
