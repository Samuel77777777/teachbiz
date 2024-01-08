// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./nav-component/Navbar";
import "./hero.css";
import Search from "./nav-component/Search";
// import TestSearch from "./nav-component/TestSearch";

const Hero = () => {
  return (
    //heading section
    <div className="main">
      <Navbar />

      {/* <div className="serc">
        <Search />
      </div> */}

      {/* 
    main content in the hero section */}

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
