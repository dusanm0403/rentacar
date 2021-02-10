import React from "react";
import logo from '../../assets/images/logo.png'
import "./Footer.scss";
import instagram from "../../assets/icons/instagram.svg"
import viber from "../../assets/icons/viber.svg"
import whatsapp from "../../assets/icons/whatsapp.svg"

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-upper">
        <div className="Footer-upper_left">
          <img src={logo} alt="logo" />
          <p>Rentacar Fića</p>
        </div>
        <div className="Footer-upper_right">
          <p>Braće Jerković 112n</p>
          <a href="mailto: dejancika90@gmail.com">dejancika90@gmail.com</a>
          <a href="tel:+381698291133" >069/8291133</a>
        </div>
      </div>
      <div className="Footer-lower">
          <div className="Social-media">
            <a href="https://www.facebook.com">
              <img src={whatsapp} alt="whatsapp"/>
            </a>
            <a href="https://www.facebook.com">
              <img src={viber} alt="viber"/>
            </a>
            <a href="https://www.instagram.com">
              <img src={instagram} alt="instagram"/>
            </a>
          </div>
          <div className="Copyrights">
          <p>copyrights</p>
          </div>
      </div>
    </div>
  );
};

export default Footer;
