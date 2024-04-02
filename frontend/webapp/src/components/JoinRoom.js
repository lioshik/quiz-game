import React, { Component } from "react";
import { FaPlay } from "react-icons/fa6";

export class JoinRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
    };
  }

  handleChange = (e) => {
    this.setState({ inputText: e.target.value.toUpperCase() });
  };
  render() {
    return (
      <div className="join-room-wrapper">
        <input
          className={this.state.inputText.length != 0 ? "non-empty-input" : ""}
          type="text"
          maxLength={6}
          value={this.state.inputText}
          onChange={this.handleChange}
          placeholder="enter code"
        />
        <button>
          <span>JOIN</span>
          <FaPlay></FaPlay>
        </button>
      </div>
    );
  }
}

export default JoinRoom;