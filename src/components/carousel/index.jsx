import * as React from "react";
import "./Carousel.scss";
import { withWindow } from "react-window-decorators";
import data from "../../data/data"

import Item from "./item"
class Services extends React.Component {
  state = {
    activeSlideIndex: 0,
  };


  handleTouchStart(event) {
    this.x = event.touches[0].clientX;
    this.y = event.touches[0].clientY;
  }

  handleTouchMove(event) {
    this.xM = event.changedTouches[0].clientX;
    this.yM = event.changedTouches[0].clientY;
    const xDiff = this.xM - this.x;
    const yDiff = this.yM - this.y;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        this.swipe("prev");
      } else {
        this.swipe("next");
      }
    }
    this.x = null;
    this.y = null;
  }

  swipe = (direction) => {
    const  cars  = data.cars
    const { activeSlideIndex } = this.state;
    const MAX_SWIPE = cars.length - 1;
    if (direction === "next" && activeSlideIndex < MAX_SWIPE) {
      this.setState({
        activeSlideIndex: activeSlideIndex + 1,
      });
    } else if (direction === "prev" && activeSlideIndex !== 0) {
      this.setState({
        activeSlideIndex: activeSlideIndex - 1,
      });
    }
  };

  render() {
    const { breakpoint } = this.props;
    const { activeSlideIndex } = this.state;

    const initialMarginOffset = 15;

    const remIncrement =
      activeSlideIndex === 1
        ? initialMarginOffset
        : initialMarginOffset + 10 * (activeSlideIndex - 1);

    const isSmall = breakpoint === "sm";

    const transform = isSmall
      ? activeSlideIndex === 0
        ? "translateX(4rem)"
        : `translateX(calc(${-100 * activeSlideIndex}% + ${remIncrement}rem))`
      : "none";


    return (
            <div
              className="carousel-items"
              onTouchStart={(event) => this.handleTouchStart(event)}
              onTouchMove={(event) => this.handleTouchMove(event)}
              style={{
                transform,
              }}
            >
              {data.cars.map((car, index) => (
                <Item
                  isActive={activeSlideIndex === index}
                  key={index}
                  data={car}
                />
              ))}
        </div>
    );
  }
}


export default withWindow(Services);
