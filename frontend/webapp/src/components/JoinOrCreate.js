import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";
import JoinRoom from "./JoinRoom";

export class JoinOrCreate extends Component {
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
      <section className="join-or-create-wrapper main-content-wrapper">
        <JoinRoom></JoinRoom>
        <button>
          <span>create</span>
          <FaPlus></FaPlus>
        </button>
      </section>
    );
  }
}

export default JoinOrCreate;
