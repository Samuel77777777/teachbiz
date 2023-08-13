// eslint-disable-next-line no-unused-vars
import { React } from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <Div>
      <div className="cards">
        <div className="card--1">
          <div className="sec1">
            <img src="assets/round.png" alt="" />
            <div className="person">
              <h2>Magret Mondeh</h2>
              <p>wrote a review</p>
            </div>
          </div>

          <img src="assets/rec.png" alt="" className="rec" />

          <div className="sec2">
            <h3>Chicken Town</h3>
            <div className="stars">
              <img src="assets/star.png" alt="" />
              <img src="assets/star.png" alt="" />
              <img src="assets/star.png" alt="" />
              <img src="assets/star.png" alt="" />
              <img src="assets/star.png" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sodales sagittis dictumst
              at lorem .
            </p>
          </div>

          <div className="emo">
            <div className="tool-tip">
              <img src="assets/smile.png" alt="" title="Smile" />
            </div>
            <div className="tool-tip">
              <img src="assets/light.png" alt="" title="Light" />
              <span className="tooltiptext">Like</span>
            </div>
            <div className="tool-tip">
              <img src="assets/sml.png" alt="" title="Small" />
              <span className="tooltiptext">Like</span>
            </div>
          </div>
        </div>

        <div className="card--2">
          <div className="card--1">
            <div className="sec1">
              <img src="assets/round.png" alt="" />
              <div className="person">
                <h2>Magret Mondeh</h2>
                <p>wrote a review</p>
              </div>
            </div>

            <img src="assets/rec.png" alt="" className="rec" />

            <div className="sec2">
              <h3>Chicken Town</h3>
              <div className="stars">
                <img src="assets/star.png" alt="" />
                <img src="assets/star.png" alt="" />
                <img src="assets/star.png" alt="" />
                <img src="assets/star.png" alt="" />
                <img src="assets/star.png" alt="" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Sodales sagittis
                dictumst at lorem .
              </p>
            </div>

            <div className="emo">
              <img src="assets/smile.png" alt="" />
              <img src="assets/light.png" alt="" />
              <img src="assets/sml.png" alt="" />
            </div>
          </div>
        </div>

        <div className="card--2">
          <div className="card--1">
            <div className="sec1">
              <img src="assets/round.png" alt="" />
              <div className="person">
                <h2>Magret Mondeh</h2>
                <p>wrote a review</p>
              </div>
            </div>

            <img src="assets/rec.png" alt="" className="rec" />

            <div className="sec2">
              <h3>Chicken Town</h3>
              <div className="stars">
                <img src="assets/star.png" alt="" />
                <img src="assets/star.png" alt="" />
                <img src="assets/star.png" alt="" />
                <img src="assets/star.png" alt="" />
                <img src="assets/star.png" alt="" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Sodales sagittis
                dictumst at lorem .
              </p>
            </div>

            <div className="emo">
              <img src="assets/smile.png" alt="" />
              <img src="assets/light.png" alt="" />
              <img src="assets/sml.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
};

export default Card;

const Div = styled.div`
  .cards {
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin-bottom: 3.19rem;
    margin-left: 100px;
    margin-right: 100px;
  }

  .card--1 {
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.32);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 465px;
    padding: 0.625rem 0rem;
  }

  .rec {
    object-fit: cover;
    width: 100%;
  }

  .sec1 {
    display: flex;
    padding: 20px 10px;
    gap: 32px;
  }

  .person h2 {
    color: #000;
    font-family: Rubik;
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 5px;
  }

  .person p {
    color: #000;
    font-family: Rubik;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .sec2 {
    display: flex;
    padding: 12px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    border-bottom: 1px solid rgba(0, 0, 0, 0.24);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  .sec2 h3 {
    color: #000;
    font-family: Rubik;
    font-size: 21px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    align-self: stretch;
  }

  .sec2 p {
    color: #000;
    font-family: Rubik;
    font-size: 21px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    align-self: stretch;
  }

  .star {
    gap: 5px;
  }

  .emo {
    display: flex;
    padding: 11px 76px;
    align-items: flex-start;
    gap: 30px;
    align-self: stretch;
    background: #fff;
  }

  .tool-tip {
    position: relative;
  }

  .tool-tip:hover .tooltiptext {
    display: block;
  }

  .tooltiptext {
    position: absolute;
    bottom: 25px;
    visibility: visible;
    right: 20px;
    display: none;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    z-index: 1;
  }

  @media (max-width: 1024px) {
    /* Adjust for laptop screens */
    .cards {
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    .cards {
      grid-template-columns: 1fr;
      justify-content: center;
      place-content: center;
      margin-left: 20px;
      margin-right: 20px;
    }
  }
`;
