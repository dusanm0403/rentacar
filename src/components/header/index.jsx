import React, { useState, useEffect } from "react";
import "./Header.scss";
import hero from "../../assets/images/hero.jpg";

const Header = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [isScrollDetected, setIsScrollDetected] = useState(false);
  const [direction, setDirection] = useState("");

  const handleScroll = () => {
    const windowScroll = window.pageYOffset || window.scrollY;
    const isScrollingDown = windowScroll > scrollPos;
    setDirection(isScrollingDown ? "bottom" : "top");
    setScrollPos(windowScroll);
    if (scrollPos > 1) {
      setIsScrollDetected(true);
    } else {
      console.log("vratio se na top");
      setIsScrollDetected(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  const hideMouse = direction === "bottom" || scrollPos > 0;

  return (
    <div className="Header" style={{ backgroundImage: `url(${hero})` }}>
      <div className="Header-content">
        <h3 className="Header-title">Title</h3>
        <h5 className="Header-subTitle">Subtitle</h5>
        <p className="Header-desc">Description</p>
        <div
          className="Scrolling-mouse"
          style={{ opacity: hideMouse ? 0 : 1 }}
        />
      </div>
    </div>
  );
};

export default Header;
