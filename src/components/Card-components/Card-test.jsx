// eslint-disable-next-line no-unused-vars
import { React } from "react";
import styled from "styled-components";

const CardTest = ({ name, review, image, title }) => {
  // const cardsData = Array.from({ length: 9 }, (_, _index) => ({
  //   name: "Magret Mondeh",
  //   review:
  //     "Lorem ipsum dolor sit amet consectetur. Sodales sagittis dictumst at lorem .",
  //   rating: 5,
  //   image: 'ass'
  // }));

  return (
    <Div>
      <div className="">
        <div className="card--1">
          <div className="sec1">
            <img src="assets/round.png" alt="" />
            <div className="person">
              <h2>{name}</h2>
              <p>wrote a review</p>
            </div>
          </div>

          <img src={image} alt="" className="rec" />

          <div className="sec2">
            <h3>{title}</h3>
            <div className="stars">
              <img src="assets/star.png" alt="" />
              <img src="assets/star.png" alt="" />
              <img src="assets/star.png" alt="" />
              <img src="assets/star.png" alt="" />
              <img src="assets/star.png" alt="" />
            </div>
            <p>{review}</p>
          </div>

          <div className="emo">
            <div className="tool-tip">
              <img src="assets/smile.png" alt="" />
              <span className="tooltiptext">Like</span>
            </div>
            <div className="tool-tip">
              <img src="assets/light.png" alt="" />
              <span className="tooltiptext">Like</span>
            </div>
            <div className="tool-tip">
              <img src="assets/sml.png" alt="" />
              <span className="tooltiptext">Like</span>
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
};

export default CardTest;

const Div = styled.div`
  margin: 0;
  padding: 0;

  // justify-content: center;
  // display: flex;
  // margin: 0 auto;
  // box-sizing: border-box;
  // flex-direction: column;

  // .cards {
  //   display: grid;
  //   grid-template-columns: repeat(3, 1fr); /* Display three items per row */
  //   margin: 0 auto;
  //   justify-content: center;
  // }

  .card--1 {
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.32);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 400px;
    padding: 0.625rem 0rem;
  }

  .rec {
    object-fit: cover;
    width: 100%;
    height: 178px;
  }

  .sec1 {
    display: flex;
    padding: 20px 10px;
    gap: 32px;
  }

  .person h2 {
    color: #000000;
    text-align: left;
    font: 700 21px "Josefin sans", sans-serif;
    margin-bottom: 5px;
  }

  .person p {
    color: #000000;
    text-align: left;
    font: 400 16px "Josefin sans", sans-serif;
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
    color: #000000;
    text-align: left;
    font: 600 21px "Josefin sans", sans-serif;
  }
  .sec2 p {
    color: #000000;
    text-align: left;
    font: 300 18px "Josefin sans", sans-serif;
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
    visibility: hidden;
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
    .cards {
      grid-template-columns: repeat(2, 1fr);
      justify-content: center; /* Adjust spacing for laptop screens */
    }
  }

  @media (max-width: 768px) {
    .cards {
      grid-template-columns: repeat(1, 1fr);
      justify-content: center; /* Adjust for smaller screens */
    }
  }
`;
