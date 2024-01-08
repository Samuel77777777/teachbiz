// import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

// import Mod from "./Modals";

const EditAccountModal = () => {
  const [account, setAccount] = useState(false);

  const handleClick = () => {
    setAccount(!account);
  };

  return (
    <Div>
      <button onClick={handleClick}>
        Obinna Browne <img src="assets/arrowdown.png" alt="" />
      </button>

      {account == true ? (
        <div className="edit-modal">
          <div>
            <img src="assets/solarpen.png" alt="" />
            <Link to="/editaccount" style={{ textDecoration: "none" }}>
              {" "}
              <p>Edit Account</p>
            </Link>
          </div>

          <div>
            <img src="assets/logout.png" alt="" />
            <p>Log Out</p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </Div>
  );
};

export default EditAccountModal;

const Div = styled.div`
  button {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 5px;
    cursor: pointer;
    background: transparent;
    outline: none;
    border: 0px;
  }

  button img {
    width: 18px;
    height: 18px;
  }

  button {
    color: #fff;
    text-align: center;
    font-family: "Josefin Sans", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .edit-modal {
    display: flex;
    height: 100px;
    padding: 10px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    background: #fff;
  }

  .edit-modal img {
    width: 25px;
    height: 25px;
  }

  .edit-modal div {
    display: flex;
    gap: 20px;
    cursor: pointer;
  }

  .edit-modal div p {
    color: #000;
    font-family: "Josefin Sans", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .edit-modal div:hover {
    background: grey;
    width: 100%;
  }
`;
