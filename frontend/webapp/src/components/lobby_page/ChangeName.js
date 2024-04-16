import React, { Component } from "react";
import { VscNewline } from "react-icons/vsc";
import { webSocketService } from "../..";
import { connect } from "react-redux";
import { ReactFitty } from "react-fitty";

export class ChangeName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: "",
    };
  }

  handleChange = (e) => {
    this.setState({ inputName: e.target.value });
  };

  render() {
    return (
      <div className="rightside-widget change-name-widget">
        <ReactFitty className="widget-header" maxSize={21}>
          Change name
        </ReactFitty>
        <div className="change-name-input-group">
          <input
            maxLength={10}
            type="text"
            value={this.state.inputName}
            onChange={this.handleChange}
            placeholder="new name"
          ></input>
          <button
            disabled={this.state.inputName === ""}
            onClick={() => {
              console.log("change name button working");
              webSocketService.sendChangeName(
                this.props.authData,
                this.state.inputName
              );
              this.setState({ ...this.state, inputName: "" });
            }}
          >
            <VscNewline />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authData: state.authData,
  };
};

export default connect(mapStateToProps)(ChangeName);
