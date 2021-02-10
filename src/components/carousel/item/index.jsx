import React from "react";
import "./Item.scss";
import cx from "classnames";

const Item = ({ isActive, data }) => {
  const itemClasses = cx({
    Item: true,
    "Item-active": isActive,
  });

  return (
    <div className={itemClasses}>
      <div className="ItemImg">
        <img src={data.coverImg} alt="cover" />
      </div>
      <div className="slideDescription">
        <div className="CarBrand">
          <h3>{data.brand}</h3>
          <h3>{data.model}</h3>
        </div>
        <div className="DescriptionLine">
          <p>Kubikaža:</p>
          <p>{data.specifications.engineVolume}</p>
        </div>
        <div className="DescriptionLine">
          <p>Menjač:</p>
          <p>{data.specifications.transmission}</p>
        </div>
        <div className="DescriptionLine">
          <p>Gorivo:</p>
          <p>{data.specifications.fuel}</p>
        </div>
        <div className="DescriptionLine">
          <p>Snaga:</p>
          <p>{data.specifications.powerHP}</p>
        </div>
        <div className="DescriptionLine">
          <p>Godište:</p>
          <p>{data.specifications.yearOfMaking}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
