/* eslint-disable react/no-unknown-property */
// import React from "react";
import { styled } from "styled-components";

const Loginx = () => {
  return (
    <Div>
      <form className="form_container">
        <div className="input_container">
          <img src="assets/password.png" alt="" className="rex" width={20} />
          <input
            placeholder="Password"
            title="Inpit title"
            name="input-name"
            type="password"
            className="input_field"
            id="password_field"
          />
        </div>
      </form>
    </Div>
  );
};

export default Loginx;

const Div = styled.div`
  .form_container {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 50px 40px 20px 40px;
    background-color: #ffffff;
    box-shadow: 0px 106px 42px rgba(0, 0, 0, 0.01),
      0px 59px 36px rgba(0, 0, 0, 0.05), 0px 26px 26px rgba(0, 0, 0, 0.09),
      0px 7px 15px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 11px;
    font-family: "Inter", sans-serif;
    margin: 0 auto;
  }

  .input_container {
    width: 100%;
    height: fit-content;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .rex {
    width: 20px;
    position: absolute;
    z-index: 99;
    left: 12px;
    bottom: 9px;
  }

  .input_field {
    width: auto;
    height: 40px;
    padding: 0 0 0 40px;
    border-radius: 7px;
    outline: none;
    border-bottom: 1px solid #e5e5e5;
    border-top: none;
    border-left: none;
    border-right: none;
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
  }

  .input_field:focus {
    border: 1px solid transparent;
    box-shadow: 0px 0px 0px 2px #242424;
    background-color: transparent;
  }
`;
