import React, { Component } from "react";
import Rules from "./Rules";
import JoinOrCreate from "./JoinOrCreate";

export class StartPage extends Component {
  render() {
    return (
      <div>
        <Rules></Rules>
        <JoinOrCreate></JoinOrCreate>
      </div>
    );
  }
}

export default StartPage;
