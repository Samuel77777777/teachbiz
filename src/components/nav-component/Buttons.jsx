// import React from 'react';
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <Div>
      <div className="buttons">
        <Link to="/login" className="login">
          Login
        </Link>

        <Link to="/signup">
          <button className="signup">Sign up</button>
        </Link>
      </div>
    </Div>
  );
};

export default Buttons;

const Div = styled.div`
  .buttons {
    display: flex;
    gap: 20px;
    margin-top: 10px;
  }

  .login {
    width: 8.3125rem;
    padding: 0.625rem 0.9375rem;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.5rem;
    border: 2px solid #c7db00;
    background-color: transparent;
    color: white;
    font: 500 20px "Josefin sans", sans-serif;
    line-height: normal;
    transform: translateY(-0.2em);
    transition: transform 0.1s ease;
    text-align: center;
    text-decoration: none;
  }

  .signup {
    width: 9.8125rem;
    padding: 0.625rem 0.9375rem;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.5rem;
    background: #c7db00;
    border: none;
    color: #000;
    font: 400 20px "Josefin sans", sans-serif;
    transform: translateY(-0.2em);
    transition: transform 0.1s ease;
  }

  .login:hover {
    transform: translateY(-0.33em);
    background: #c7db00;
    color: black;
  }

  .login:active {
    transform: translateY(0);
  }

  .signup:hover {
    transform: translateY(-0.33em);
    background: white;
    border: 2px solid #c7db00;
  }

  .signup:active {
    transform: translateY(0);
  }
`;
