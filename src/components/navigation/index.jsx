import React from "react";
import "./Navigation.scss";
import classNames from "classnames";
import logo from "../../assets/images/logo.png";

const Navigation = ({
  isScrolled,
  isAnimated,
  setBurgerActive,
  burgerActive,
}) => {
  const navClasses = classNames(
    "Navigation",
    isScrolled && "Navigation-animated",
    isAnimated && "Navigation-hidden",
    burgerActive && "Navigation-burger-opened"
  );

  const burgerClasses = classNames("burger", burgerActive && "burger__active");

  return (
    <div className={navClasses}>
      <div className="Navigation-left">
        <h5>vozni park</h5>
        <h5>o nama</h5>
      </div>
      <div className="Navigation-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="Navigation-right">
        <h5>cenovnik</h5>
        <h5>kontakt</h5>
      </div>
      {/* <div className="burgerContainer"> */}
      <button
        className={burgerClasses}
        onClick={() => setBurgerActive(!burgerActive)}
      >
        <span />
        <span />
        <span />
      </button>
      {/* </div> */}
    </div>
  );
};

export default Navigation;
