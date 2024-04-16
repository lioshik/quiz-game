import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";
import { webSocketService } from "../..";

export class CreateRoom extends Component {
  render() {
    return (
      <button
        onClick={() => webSocketService.sendCreateRoom()}
        className="create-room-button"
      >
        <span>create</span>
        <FaPlus></FaPlus>
      </button>
    );
  }
}

export default CreateRoom;
