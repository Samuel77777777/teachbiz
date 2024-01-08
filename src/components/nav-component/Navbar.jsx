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
import NewSidebar from "./newSidebar";
// import EditAccountModal from "../accountsettingcomponents/EditAccountModal";

const Navbar = () => {
  //  hamburger menu state

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  let isLogedin = true;

  return (
    <div className="nav">
      <Link to="/" className="logo">
        <img src="assets/loggo.jpg" alt="" style={{ width: 84, height: 79 }} />
      </Link>

      <div>
        <Dropdown />
      </div>

      <div className="buttons">
        {/* {isLogedin == true ? (
          <div className="account">
            {" "}
            <img src="assets/mainaccount.png" />
            <div className="account-info">
              <EditAccountModal />
            </div>
          </div>
        ) : (
        
        )} */}

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
