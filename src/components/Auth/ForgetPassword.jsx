import styled from "styled-components";

const ForgotPasswordForm = () => {
  return (
    <StyledForm>
      <div className="forgot-password-container">
        <h1 className="forgot-password-heading">Forgot Your Password</h1>
        <div className="input-container">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
    </StyledForm>
  );
};

export default ForgotPasswordForm;

const StyledForm = styled.div`
  justify-content: center;
  height: 300px;
  box-shadow: 0px 106px 42px rgba(0, 0, 0, 0.01),
    0px 59px 36px rgba(0, 0, 0, 0.05), 0px 26px 26px rgba(0, 0, 0, 0.09),
    0px 7px 15px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 11px;
  width: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;

  .forgot-password-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    text-align: center;
  }

  .forgot-password-heading {
    color: #000;
    text-align: center;
    font-family: "Josefin sans", sans-serif;
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 10px 0 20px 0;
  }

  .input-container {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    width: 95%;
  }

  .input-container label {
    color: #000;
    font-family: "Josefin sans", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .input-container input {
    width: 100%;
    border-radius: 19px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    background: #d9d9d9;
    padding: 20px;
    outline: none;
    color: #000;
    font-family: "Josefin sans", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .submit-button {
    width: 90%;
    padding: 10px 15px;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background: #c7db00;
    outline: none;
    border: none;
    color: #000;
    text-align: center;
    font-family: "Josefin Sans", sans-serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 20px;
    cursor: pointer;
  }
`;
