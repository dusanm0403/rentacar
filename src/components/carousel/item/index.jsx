import React from "react";
import "./Item.scss";

const Item = (item) => {
  return (
    <div className="Item">
      <div className="ItemImg">
        <img src={item.car.coverImg} alt="cover" />
      </div>
      <div className="ItemDescription">
        <div className="CarBrand">
          <h3>{item.car.brand}</h3>
          <h5>{item.car.model}</h5>
        </div>
        <div className="DescriptionLine">
          <p>Kubikaža:</p>
          <p>{item.car.specifications.engineVolume}</p>
        </div>
        <div className="DescriptionLine">
          <p>Menjač:</p>
          <p>{item.car.specifications.transmission}</p>
        </div>
        <div className="DescriptionLine">
          <p>Gorivo:</p>
          <p>{item.car.specifications.fuel}</p>
        </div>
        <div className="DescriptionLine">
          <p>Snaga:</p>
          <p>{item.car.specifications.powerHP}</p>
        </div>
        <div className="DescriptionLine">
          <p>Godište:</p>
          <p>{item.car.specifications.yearOfMaking}</p>
        </div>
      </div>
    </div>
  )
};

export default Item;
