import React, { useState } from "react";
import "./Carousel.scss";
import Item from "./item";

const Carousel = (props) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  let x;
  let y;
  let xM;
  let yM;

  const handleTouchStart = (event) => {
    x = event.touches[0].clientX;
    y = event.touches[0].clientY;
  };

  const handleTouchMove = (event) => {
    xM = event.changedTouches[0].clientX;
    yM = event.changedTouches[0].clientY;
    const xDiff = xM - x;
    const yDiff = yM - y;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        swipe("prev");
      } else {
        swipe("next");
      }
    }
    x = null;
    y = null;
  };

  const swipe = (direction) => {
    // const MAX_SWIPE = data.boxes.length - 1;
    // if (direction === "next" && activeSlideIndex < MAX_SWIPE) {
    //   setActiveSlideIndex(activeSlideIndex + 1);
    // } else if (direction === "prev" && activeSlideIndex !== 0) {
    //   setActiveSlideIndex(activeSlideIndex - 1);
    // }
  };

  const initialMarginOffset = 15;

  const remIncrement =
    activeSlideIndex === 1
      ? initialMarginOffset
      : initialMarginOffset + 10 * (activeSlideIndex - 1);

  const isSmall = props.breakpoint === "sm";

  const transform = isSmall
    ? activeSlideIndex === 0
      ? "translateX(4rem)"
      : `translateX(calc(${-100 * activeSlideIndex}% + ${remIncrement}rem))`
    : "none";

  return (
    <div
      className="Carousel"
      onTouchStart={(event) => handleTouchStart(event)}
      onTouchMove={(event) => handleTouchMove(event)}
      style={{
        transform,
      }}
    >
      {
        //mapa
      }
      <Item isActive={activeSlideIndex === "index"} />
    </div>
  );
};

export default Carousel;
