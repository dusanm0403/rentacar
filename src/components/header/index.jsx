import React, { useState, useEffect } from "react";
import "./Header.scss";
import hero from "../../assets/images/main.jpg";

const Header = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [direction, setDirection] = useState("");

  const handleScroll = () => {
    const windowScroll = window.pageYOffset || window.scrollY;
    const isScrollingDown = windowScroll > scrollPos;
    setDirection(isScrollingDown ? "bottom" : "top");
    setScrollPos(windowScroll);
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
        <h3 className="Header-title">Rentacar</h3>
        <h3 className="Header-subTitle">Fića</h3>
        <p className="Header-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div
          className="Scrolling-mouse"
          style={{ opacity: hideMouse ? 0 : 1 }}
        />
      </div>
    </div>
  );
};

export default Header;
