import styled from "styled-components";
import { useState } from "react";

const LikeButton = () => {
  const [like, setLike] = useState(false);

  function handleLike() {
    setLike(!like);
  }
  return (
    <Div>
      <button onClick={handleLike}>
        <p>favourite</p>
        {like === true ? (
          <img src="assets/love2.png" width={20} />
        ) : (
          <img src="assets/love1.png" width={20} />
        )}
      </button>
    </Div>
  );
};

export default LikeButton;

const Div = styled.div`
  button {
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
`;
