import React, { Component } from "react";
import { ReactFitty } from "react-fitty";
import { webSocketService } from "../..";
import { connect } from "react-redux";

export class AskQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: null,
      answerOptions: [null, null, null, null],
      rightAnswerIdx: null,
    };
  }

  handleQuestionChange = (e) => {
    let newText = e.target.value;
    if (newText === "") {
      newText = null;
    }

    this.setState({
      ...this.state,
      question: newText,
    });
  };

  handleOptionChange = (idx, e) => {
    const newAnswerOptions = this.state.answerOptions;
    let newRightAnswerIdx = this.state.rightAnswerIdx;

    let newText = e.target.value;
    if (newText === "") {
      newText = null;
    }
    newAnswerOptions[idx] = newText;

    const firstNonNullOptionIdx = newAnswerOptions.findIndex(
      (element) => element !== null
    );
    if (newText === null && this.state.rightAnswerIdx === idx) {
      if (firstNonNullOptionIdx === -1) {
        newRightAnswerIdx = null;
      } else {
        newRightAnswerIdx = firstNonNullOptionIdx;
      }
    }

    const countNotNull = newAnswerOptions.reduce((acc, value) => {
      return value !== null ? acc + 1 : acc;
    }, 0);
    if (countNotNull === 1) {
      newRightAnswerIdx = firstNonNullOptionIdx;
    }

    this.setState({
      ...this.state,
      answerOptions: newAnswerOptions,
      rightAnswerIdx: newRightAnswerIdx,
    });
  };

  handleRadioClick = (idx) => {
    this.setState({
      ...this.state,
      rightAnswerIdx: idx,
    });
  };

  render() {
    return (
      <div className="rightside-widget ask-question-widget">
        <ReactFitty className="widget-header" maxSize={21}>
          Come up with question:
        </ReactFitty>

        <input
          className="question-input"
          placeholder="your question"
          onChange={(e) => this.handleQuestionChange(e)}
        ></input>

        <ol className="list-options-input">
          {[...Array(4).keys()].map((idx) => {
            return (
              <div className="options-input-item" key={idx}>
                <input
                  className="options-input"
                  placeholder={"option #" + (idx + 1)}
                  onChange={(e) => this.handleOptionChange(idx, e)}
                  maxLength={150}
                ></input>
                {this.state.answerOptions[idx] !== null && (
                  <label>
                    <input
                      type="radio"
                      value="option2"
                      className="right-answer-radio"
                      maxLength={50}
                      checked={this.state.rightAnswerIdx === idx}
                      onChange={() => this.handleRadioClick(idx)}
                    />
                  </label>
                )}
              </div>
            );
          })}
        </ol>
        <div className="submit-button-wrapper">
          <button
            className="submit-button"
            disabled={
              this.state.question === null ||
              this.state.answerOptions.reduce(
                (c, el) => (el !== null ? c + 1 : c),
                0
              ) < 2
                ? true
                : undefined
            }
            onClick={() => {
              webSocketService.sendMakeQuestion(
                this.props.authData,
                this.state.question,
                this.state.answerOptions,
                this.state.rightAnswerIdx
              );
            }}
          >
            submit
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
}

export default connect(mapStateToProps)(AskQuestion);
