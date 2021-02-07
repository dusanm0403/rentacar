import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-upper">
        <div className="Footer-upper_left">
          <p>LOGO</p>
        </div>
        <div className="Footer-upper_right">
          <h3>Kontakt</h3>
          <p>Adresa</p>
          <p>mail</p>
          <p>telefon</p>
        </div>
      </div>
      <div className="Footer-lower">
        <div className="Footer-lower_left">
          <p>copyrights</p>
        </div>
        <div className="Footer-lower_right">
          <div className="Social-media">
            <p>instagram</p>
            <p>facebook</p>
            <p>linkedin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
