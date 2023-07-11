// eslint-disable-next-line no-unused-vars
import React from "react";
import "./nav.css";
import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const  handleClick=()=>{
    setShow(!show);
  }


  return (
    <div className="nav">
      <div className="logo">
        <img src="techbiz.png" alt="" style={{ width: 84, height: 79 }} />
      </div>
      <div className="search">
        <Search />
      </div>

      <div className="buttons">
        <button className="login">Login</button>
        <button className="signup">Sing up</button>
      </div>
         
          <div onClick={handleClick}  className="side">
            {
              show === true ?     <FontAwesomeIcon  icon={faTimes}  color="white" className="icon"  /> :     <FontAwesomeIcon  icon={faBars}  color="white" className="icon"  />
            }

          </div>
      
            {
              show && <Sidebar />

            }
         
        
      


    </div>
  );
};

export default Navbar;
