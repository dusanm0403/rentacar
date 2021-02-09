import React from "react";
import "./Navigation.scss";
import classNames from "classnames";
import logo from "../../assets/images/logo.png"

const Navigation = ({ isScrolled, isAnimated }) => {
  const navClasses = classNames(
    "Navigation",
    isScrolled && "Navigation-animated",
    isAnimated && "Navigation-hidden"
  );

  return (
    <div className={navClasses}>
      <div className="Navigation-left">
        <h2>vozni park</h2>
        <h2>o nama</h2>
      </div>
      <div className="Navigation-center">
        <img src={logo} alt="logo"/>
      </div>
      <div className="Navigation-right">
        <h2>cenovnik</h2>
        <h2>kontakt</h2>
      </div>
    </div>
  );
};

export default Navigation;
