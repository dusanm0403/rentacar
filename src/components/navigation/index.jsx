import React from "react";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <div className="Navigation">
      <div className="Navigation-left">
        <h2>vozni park</h2>
        <h2>o nama</h2>
      </div>
      <div className="Navigation-center">
        <h3>Logo</h3>
      </div>
      <div className="Navigation-right">
        <h2>cenovnik</h2>
        <h2>kontakt</h2>
      </div>
    </div>
  );
};

export default Navigation;
