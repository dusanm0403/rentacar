import React from "react";
import "./MobileNav.scss";
import { NavLink } from 'react-router-dom'
// import logo from "../../../assets/images/logos/logo.png";

import cx from "classnames"

const MobileNav = ({ burgerActive, setBurgerActive }) => {

  const mobileNavClasses = cx(
    "mobile-nav",
    burgerActive && "mobile-nav__active"
  );
  return (
    <div className={mobileNavClasses}>
      {/* <img className="logo" src={logo} alt="logo" /> */}
      <div className="links">
        <p>O NAMA</p>
        <p>KONTAKT</p>
        <p>VOZNI PARK</p>
        {/* <NavLink className="link" activeClassName="link__active" onClick={() => setBurgerActive(!burgerActive)} exact to='/'>O NAMA</NavLink>
        <NavLink className="link" activeClassName="link__active" onClick={() => setBurgerActive(!burgerActive)} exact to='/'>VOZNI PARK</NavLink>
        <NavLink className="link" activeClassName="link__active" onClick={() => setBurgerActive(!burgerActive)} exact to='/'>KONTAKT</NavLink> */}
      </div>
    </div>
  )
}

export default MobileNav