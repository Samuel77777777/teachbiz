// eslint-disable-next-line no-unused-vars
import React from "react";
import "./nav.css";
import Dropdown from "../Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="nav">
      <Link to="/" className="logo">
        <img src="assets/loggo.jpg" alt="" style={{ width: 84, height: 79 }} />
      </Link>

      <div className="">
        <Dropdown />
      </div>
      <div className="buttons">
        <Buttons />
      </div>

      <div onClick={handleClick} className="side">
        {show === true ? (
          <FontAwesomeIcon icon={faTimes} color="white" className="icon" />
        ) : (
          <FontAwesomeIcon icon={faBars} color="white" className="icon" />
        )}
      </div>

      {show && <Sidebar />}
    </div>
  );
};

export default Navbar;
