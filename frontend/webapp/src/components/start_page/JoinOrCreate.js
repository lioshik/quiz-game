import React, { Component } from "react";
import JoinRoom from "./JoinRoom";
import CreateRoom from "./CreateRoom";

export class JoinOrCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
    };
  }

  handleTextChange = (e) => {
    this.setState({ inputText: e.target.value.toUpperCase() });
  };

  render() {
    return (
      <section className="join-or-create-wrapper main-content-wrapper">
        <JoinRoom></JoinRoom>
        <CreateRoom></CreateRoom>
      </section>
    );
  }
}

export default JoinOrCreate;
