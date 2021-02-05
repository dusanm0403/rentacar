import React from "react";
import "./Header.scss";
import hero from "../../assets/images/hero.jpg";

const Header = () => {
  return (
    <div className="Header" style={{ backgroundImage: `url(${hero})` }}>
      <div className="Header-content">
        <h3 className="Header-title">Title</h3>
        <h5 className="Header-subTitle">Subtitle</h5>
        <p className="Header-desc">Description</p>
        <div className="Scrolling-mouse" />
      </div>
    </div>
  );
};

export default Header;
