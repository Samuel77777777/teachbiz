// eslint-disable-next-line no-unused-vars
import React from "react";
import "./hero.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Dropdown = ({ image }) => {
  return (
    <Div className="down">
      <div className="drop">
        <Link to="/resturant" className="btn">
          Resturant <img src={image} alt="" />
        </Link>

        {/* <div className="drop-items">
          <a href="">
            <span style={{ marginRight: 10 }}>
              {" "}
              <img src="assets/location.png" alt="" />
            </span>
            Near By
          </a>
          <a href="">
            <span style={{ marginRight: 10 }}>
              <img src="assets/location.png" alt="" />
            </span>
            Freetown
          </a>
        </div> */}
      </div>

      {/* // Hotels */}
      <div className="drop">
        <Link to="/hotel" className="btn">
          Hotels <img src={image} alt="" />
        </Link>
        {/* <div className="drop-items">
          <a href="">
            <span style={{ marginRight: 10 }}>
              {" "}
              <img src="assets/location.png" alt="" />
            </span>
            Near By
          </a>
          <a href="">
            <span style={{ marginRight: 10 }}>
              <img src="assets/location.png" alt="" />
            </span>
            Freetown
          </a>
        </div> */}
      </div>

      {/* Pharmarcy */}

      <div className="drop">
        <Link to="/pharmarcy" className="btn">
          Pharmarcy <img src={image} alt="" />
        </Link>
        {/* <div className="drop-items">
          <a href="">
            <span style={{ marginRight: 10 }}>
              {" "}
              <img src="assets/location.png" alt="" />
            </span>
            Near By
          </a>
          <a href="">
            <span style={{ marginRight: 10 }}>
              <img src="assets/location.png" alt="" />
            </span>
            Freetown
          </a>
        </div> */}
      </div>

      {/* Ngo */}

      <div className="drop">
        <Link to="/ngo" className="btn">
          NGO'S <img src={image} alt="" />
        </Link>
        {/* <div className="drop-items">
          <a href="">
            <span style={{ marginRight: 10 }}>
              {" "}
              <img src="assets/location.png" alt="" />
            </span>
            Near By
          </a>
          <a href="">
            <span style={{ marginRight: 10 }}>
              <img src="assets/location.png" alt="" />
            </span>
            Freetown
          </a>
        </div> */}
      </div>
    </Div>
  );
};

export default Dropdown;

const Div = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 200px;

  .drop {
    display: flex;
    padding: 10px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 10px;
    border: 1px solid #fff;
    background: rgba(255, 255, 255, 0);
    color: #7e0808;
    text-align: center;
    font-family: "Josefin" sans-serif;
    font-size: 25px;
    font-weight: 400;
    margin-top: 5px;
    cursor: pointer;
  }

  .btn {
    color: #fff;
    text-align: center;
    font: 400 20px "Josefin Sans", sans-serif;
    line-height: normal;
    background-color: transparent;
    text-decoration: none;
  }

  .drop-items {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    top: 50px;
    gap: 10px;
    border-radius: 10px;
  }
  .drop-items a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    color: #6cc1ff;
    font-family: "Josefin sans", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-align: left;
  }

  .drop-items a:hover {
    background-color: #ddd;
  }

  .drop:hover .drop-items {
    display: block;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
