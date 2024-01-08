import styled from "styled-components";
import { useState } from "react";

const Card = ({ name, review, image, title }) => {
  const [like, setLike] = useState(false);

  function handleLike() {
    setLike(!like);
  }

  return (
    <Div>
      {/* heading part of the card */}
      <div className="card-content">
        <div className="card-header">
          <img src="assets/round.png" alt="User" />
          <div className="person">
            <h2>{name}</h2>
            <p>wrote a review</p>
          </div>
        </div>

        {/* the image in the card */}
        <img src={image} alt="Review" className="review-image" />

        {/* the body of the card  */}
        <div className="card-body">
          <h3>{title}</h3>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((index) => (
              <img key={index} src="assets/star.png" alt="Star" />
            ))}
          </div>
          <p>{review}</p>
        </div>

        {/* the like button in the card */}
        <div className="like-button">
          <button onClick={handleLike}>
            {like === true ? (
              <img src="assets/liked.png" width={20} />
            ) : (
              <img src="assets/like.png" width={20} />
            )}
          </button>
        </div>
      </div>
    </Div>
  );
};

export default Card;

const Div = styled.div`
  margin: 0;
  padding: 0;

  .card-content {
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.32);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 400px;
    padding: 0.625rem 0rem;
  }

  .review-image {
    object-fit: cover;
    width: 100%;
    height: 178px;
  }

  .card-header {
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

  .card-body {
    display: flex;
    padding: 12px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    border-bottom: 1px solid rgba(0, 0, 0, 0.24);
    // box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  .card-body h3 {
    color: #000000;
    text-align: left;
    font: 600 21px "Josefin sans", sans-serif;
  }

  .card-body p {
    color: #000000;
    text-align: left;
    font: 300 18px "Josefin sans", sans-serif;
    align-self: stretch;
  }

  .stars {
    gap: 5px;
  }

  .like-button {
    padding: 11px 21px;
  }

  .like-button button {
    border: none;
    outline: none;
    background: white;
  }

  .emojie @media (max-width: 1024px) {
    .card-content {
      max-width: 300px; /* Adjust the width for smaller screens */
    }
  }

  @media (max-width: 768px) {
    .card-content {
      max-width: 100%; /* Make the card full width on smaller screens */
    }
  }
`;
