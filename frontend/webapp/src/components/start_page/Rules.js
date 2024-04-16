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
      showNextButton: true,
      showPrevButton: false,
    };

    this.updateSlideIdx = this.updateSlideIdx.bind(this);
  }

  updateSlideIdx = (slideIdx) => {
    let newState = {
      showNextButton: slideIdx < RulesTextItems.length - 1,
      showPrevButton: slideIdx > 0,
    };
    this.setState((prevState) => {
      return newState;
    });
  };

  render() {
    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
      return (
        <div className="carousel-button-group">
          {" "}
          <button
            className="regular-button"
            onClick={() => previous()}
            style={
              !this.state.showPrevButton
                ? { visibility: "hidden", pointerEvents: "none" }
                : null
            }
          >
            <TiArrowBack></TiArrowBack>
            <span>prev</span>
          </button>
          <button
            style={
              !this.state.showNextButton
                ? { visibility: "hidden", pointerEvents: "none" }
                : null
            }
            onClick={() => next()}
          >
            <span>next</span>
            <TiArrowForward></TiArrowForward>
          </button>
        </div>
      );
    };

    return (
      <section className="game-rules-wrapper main-content-wrapper">
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
              <div key={title}>
                <div className="game-rule-wrapper">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </section>
    );
  }
}

export default Rules;
