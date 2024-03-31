import React, { Component } from "react";
import RulesTextItems from "./RulesTextItems";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { TiArrowBack } from "react-icons/ti";
import { TiArrowForward } from "react-icons/ti";

const responsive = {
  default: {
    breakpoint: { max: 1e9, min: -1e9 },
    items: 1,
    slidesToSlide: 1,
  },
};

export class Rules extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_next_button: true,
      show_prev_button: false,
    };

    this.updateSlideIdx = this.updateSlideIdx.bind(this);
  }

  updateSlideIdx = (slideIdx) => {
    let new_state = {
      show_next_button: slideIdx < RulesTextItems.length - 1,
      show_prev_button: slideIdx > 0,
    };
    //   console.log(new_state);
    this.setState((prevState) => {
      return new_state;
    });
  };

  render() {
    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
      console.log("render button group");
      console.log(rest);
      return (
        <div className="carousel-button-group">
          {" "}
          <button
            className="regular-button"
            onClick={() => previous()}
            style={
              !this.state.show_prev_button
                ? { visibility: "hidden", pointerEvents: "none" }
                : null
            }
          >
            <TiArrowBack></TiArrowBack>
            <span>prev</span>
          </button>
          <button
            style={
              !this.state.show_next_button
                ? { visibility: "hidden", pointerEvents: "none" }
                : null
            }
            className="regular-button"
            onClick={() => next()}
          >
            <span>next</span>
            <TiArrowForward></TiArrowForward>
          </button>
        </div>
      );
    };

    return (
      <div className="game-rules-wrapper">
        <Carousel
          customButtonGroup={<ButtonGroup state={this.state} />}
          renderButtonGroupOutside={true}
          arrows={false}
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={false}
          autoPlay={false}
          keyBoardControl={false}
          transitionDuration={200}
          containerClass="carousel-container"
          deviceType={this.props.deviceType}
          itemClass="carousel-item"
          afterChange={(previousSlide, { currentSlide, onMove }) => {
            this.updateSlideIdx(currentSlide);
          }}
        >
          {RulesTextItems.map(({ title, text }) => {
            return (
              <div>
                <div key={title} className="game-rule-wrapper">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default Rules;
