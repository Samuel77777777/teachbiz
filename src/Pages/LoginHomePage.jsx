// eslint-disable-next-line no-unused-vars
import React from "react";

import Hero from "../components/Hero";
//
import Category from "../Category";
import Footer from "../components/Footer";
import { styled } from "styled-components";
import Card from "../components/Card-components/Card";
import HompageFavoriteComponent from "../components/HompageFavoriteComponent";

const LoginHomePage = () => {
  //this is the data that's in the review cards at the homepage

  const cardsData = [
    {
      id: 1,
      name: "magret Mondeh",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sodales sagittis dictumst at lorem .",
      image: "assets/rec.png",
      title: "Chicken Town",
    },

    {
      id: 2,
      name: "Pope Kamara",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sodales sagittis dictumst at lorem .",
      image: "assets/card1.png",
      title: "Basha",
    },

    {
      id: 3,
      name: "Samuel Kamara",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sodales sagittis dictumst at lorem .",
      image: "assets/card2.png",
      title: "Basha",
    },
    {
      id: 4,
      name: "Maggie Kamara",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sodales sagittis dictumst at lorem .",
      image: "assets/card4.png",
      title: "Basha",
    },
    {
      id: 5,
      name: "Maggie Kamara",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sodales sagittis dictumst at lorem .",
      image: "assets/card5.png",
      title: "Basha",
    },
    {
      id: 6,
      name: "Maggie Kamara",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sodales sagittis dictumst at lorem .",
      image: "assets/card2.png",
      title: "Basha",
    },
    {
      id: 7,
      name: "Maggie Kamara",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sodales sagittis dictumst at lorem .",
      image: "assets/card3.png",
      title: "Basha",
    },

    {
      id: 8,
      name: "Maggie Kamara",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sodales sagittis dictumst at lorem .",
      image: "assets/card2.png",
      title: "Basha",
    },
    {
      id: 9,
      name: "Maggie Kamara",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sodales sagittis dictumst at lorem .",
      image: "assets/card2.png",
      title: "Basha",
    },
  ];

  return (
    <Div>
      {/* hero section  starts here but more info is in the hero component*/}
      <Hero />
      {/* write a review section  */}
      <div className="share">
        <button>
          <span>Share </span>
          <img src="assets/share.png" alt="" />
        </button>

        <button>
          <span> Write a Review</span>
          <img src="assets/star.png" alt="" />
        </button>
      </div>

      {/* favorite section starts here */}
      <HompageFavoriteComponent />

      <h1 className="recent">Recent Activities</h1>

      {/* 
      review card section starts here */}
      <div className="cards">
        {cardsData.map((card, id) => (
          <Card
            key={id}
            name={card.name}
            image={card.image}
            review={card.review}
            title={card.title}
          />
        ))}
      </div>
      {/* review card section ends here */}

      <Category />
      <Footer />
    </Div>
  );
};

export default LoginHomePage;

const Div = styled.div`
  margin: 0;
  padding: 0;
  overflow: hidden;
  box-sizing: border-box;

  .recent {
    margin-top: 3.19rem;
    margin-bottom: 4.25rem;
    color: #000;
    text-align: center;
    font-family: rubik;
    font-size: 1.3125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(3, 400px);
    justify-items: center;
    justify-content: center;
    gap: 30px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .share {
    justify-content: center;
    display: flex;
    margin-bottom: 20px;
    gap: 8px;
  }

  .share button {
    height: 45px;
    border-right: 4px solid red;
    border-left: none;
    border-top: none;
    border-bottom: none;
    background: white;
    color: #000000;
    text-align: center;
    font: 500 21px "Josefin Sans", sans-serif;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 10px;
    transition: 0.2s linear;
  }
  button:hover > img {
    transform: scale(1.2);
  }

  .card--1 {
    max-width: 400px;
    height: 100%;
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

    .main-drop{
      display:none;
    }

    .favourite-heading h2{
      margin-left:20px;
      margin-bottom:0;


    }

  }
`;
