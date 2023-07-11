// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./nav-component/Navbar";
import "./hero.css";
import Dropdown from "./Dropdown";

const Hero = () => {
  return (
    <div className="main">
      <Navbar />
      <Dropdown />

      <p className="text">
        The Best of Salone <br /> at your finger tip.
      </p>

      <div className="download">
        <button>
          Download App{" "}
          <span>
            {" "}
            <img src="assets/download.png" alt="" />
          </span>{" "}
        </button>
      </div>
    </div>
  );
};

export default Hero;
