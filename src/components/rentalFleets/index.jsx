import React from "react";
import Carousel from "../carousel";
import "./RentalFleets.scss";

const RentalFleets = () => {
  return (
    <div className="RentalFleets-wrapper">
      <h2>Vozila u ponudi</h2>
      <div class="divider div-transparent" />
      <Carousel />
    </div>
  );
};

export default RentalFleets;
