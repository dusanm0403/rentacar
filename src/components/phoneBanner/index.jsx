import React from "react";
import "./PhoneBanner.scss";
import phone from "../../assets/icons/phone.png";

const PhoneBanner = () => {
  return (
    <div className="PhoneBanner">
      <h3>
        Mogućnost preuzimanja vozila na lokaciji po dogovoru.Lorem Ipsum is
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type
        specimen book.
      </h3>
      <div className="PhoneNumber">
        <img src={phone} alt="phone /" />
        <a href="tel:+381698291133">069/8291133</a>
      </div>
    </div>
  );
};

export default PhoneBanner;
