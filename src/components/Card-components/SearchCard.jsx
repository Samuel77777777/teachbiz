// import React from "react";
import styled from "styled-components";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const SearchCard = ({ imageSrc, title, address, phone, description }) => {
  const [status, setStatus] = useState(false);

  const handleStatus = () => {
    setStatus(!status);
  };

  return (
    <Div>
      {/* this is the card in the find page  */}

      <div className="card-header">
        <div className="open-status" onClick={handleStatus}>
          {!status ? (
            <p className="open">Open</p>
          ) : (
            <p className="closed">closed</p>
          )}
   
        </div>

        <div className="card-content">
          <div className="left-content">
            <img src={imageSrc} alt="" />
            <div className="stars">
              <img src="assets/star.png" alt="" />
              <img src="assets/star.png" alt="" />
              <img src="assets/star.png" alt="" />
              <img src="assets/star.png" alt="" />
              <img src="assets/star.png" alt="" />
            </div>
          </div>

          <div className="sec2--2">
            <div className="text">
              <h5 className="bake">{title}</h5>
              <h5 className="address">
                <span>
                  <img src="assets/location.png" alt="" />
                </span>{" "}
                {address}
              </h5>
              <h5 className="phone">
                <span>
                  <img src="assets/phone.png" alt="" />
                </span>{" "}
                {phone}
              </h5>
            </div>

            <div className="lists">
              <span>Delivery</span>
              <span>Takeouts</span>
              <span>Bakery</span>
              <span>Bakes</span>
            </div>

            <p className="txts">{description}</p>
          </div>
        </div>
        <div className="sec3">
          <h5>Learn More</h5>
        </div>
      </div>
    </Div>
  );
};

export default SearchCard;

const Div = styled.div`
  margin: 0;
  padding: 0;

  .card-header {
    display: flex;
    flex-direction: column;
    max-width: 650px;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    justify-content: center;
    margin-bottom: 20px;
  }

  .open {
    text-align: right;
    color: #38c706;
    font: 500 16px "Josefin Sans", sans-serif;
    margin-right: 5px;
    margin-bottom: 0px;
  }

  .closed {
    text-align: right;
    color: red;
    font: 500 16px "Josefin Sans", sans-serif;
    margin-right: 5px;
    margin-bottom: 0px;
  }

  .card-content {
    display: flex;
    gap: 12px;
  }

  h5 {
    margin: 0px;
  }
  .text {
    display: flex;
    flex-direction: column;
    margin: 0;
    gap: 2px;
  }
  .bake {
    color: #000000;
    text-align: left;
    font: 600 21px "Josefin Sans", sans-serif;
    margin-bottom: 5px;
  }
  .address {
    display: flex;
    alig-items: center;
    gap: 5px;
    color: #000000;
    font: 400 16px "Josefin Sans", sans-serif;
    margin-bottom: 5px;
  }
  .address img {
    height: 15px;
    width: 15px;
  }
  .phone {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #000000;
    font: 400 16px "Josefin Sans", sans-serif;
    margin-bottom: 10px;
  }

  .lists {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
    flex-wrap: wrap;
  }
  .lists span {
    color: #000000;
    text-align: center;
    font: 300 12px "Josefin Sans", sans-serif;
    border-radius: 5px;
    padding: 2px 10px;
    border: 1px solid rgba(0, 0, 0, 0.13);
    background: #ffffff;
    max-width: 60px;
  }

  .left-content {
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .stars {
    display: flex;
    gap: 5px;
  }
  .stars img {
    width: 25px;
    height: 25px;
  }

  .txts {
    color: #000000;
    text-align: left;
    font-weight: 300;
    font-size: 16px;
    font-family: "Josefin Sans", sans-serif;
    line-height: normal;
  }

  .sec3 h5 {
    text-align: center;
    color: #000000;
    font: 700 16px "Josefin Sans", sans-serif;
    margin-top: 25px;
    margin-bottom: 10px;
  }
`;
