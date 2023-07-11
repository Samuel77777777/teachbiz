// eslint-disable-next-line no-unused-vars
import React from "react";
import "./hero.css";

const Dropdown = () => {
  return (
    <div className="down">
      <div className="drop">
        <img src="assets/arrowdown.png" alt="" />
        <p className="btn">Resturant</p>
      </div>
      <div className="drop">
        <img src="assets/arrowdown.png" alt="" />
        <p className="btn">Hotels</p>
      </div>

      <div className="drop">
        <img src="assets/arrowdown.png" alt="" />
        <p className="btn">Pharmarcy</p>
      </div>

      <div className="drop">
        <img src="assets/arrowdown.png" alt="" />
        <p className="btn">NGo</p>
      </div>

      <div className="drop">
        <img src="assets/arrowdown.png" alt="" />
        <p className="btn">More</p>
      </div>
    </div>
  );
};

export default Dropdown;
