import { useState } from "react";
import { styled } from "styled-components";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const [fromErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    //perform validation and set error message

    const errors = {};

    if (!formData.username) {
      errors.username = "Username is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    }
    if (!formData.phone) {
      errors.phone = "phone is required";
    }

    //if there are errors, update the formerrors state and return
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    //if there is no errors, you can submit the form data
    console.log("form data submitted", formData);

    setFormData({
      username: "",
      email: "",
      password: "",
      phone: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    //clear the corresponding error message when the user types
    setFormErrors({
      ...fromErrors,
      [name]: "",
    });
  };

  // this is the state that handles the password eye toggle

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  return (
    <Div>
      <div className="form-container">
        <h3 className="form-title">Sign Up</h3>

        {/* sign up form */}
        <form className="form-container" onSubmit={handleSubmit}>
          {/* username input field */}

          <div className="input_container">
            <img
              src="assets/password.png"
              alt=""
              className="input-icon"
              width={20}
            />
            <input
              name="username"
              placeholder="Username"
              type="text"
              className="input_field"
              value={formData.username}
              onChange={handleInputChange}
            />
            <br />
            <span className="error">{fromErrors.username}</span>
          </div>

          {/* Email input field */}

          <div className="input_container">
            <img
              src="assets/email.png"
              alt=""
              className="input-icon"
              width={20}
            />
            <input
              name="email"
              placeholder="Email"
              type="text"
              className="input_field"
              value={formData.email}
              onChange={handleInputChange}
            />
            <br />
            <span className="error">{fromErrors.email}</span>
          </div>

          {/* </div> */}

          {/* password input field */}

          <div className="input_container">
            <img
              src="assets/password1.png"
              alt=""
              className="input-icon"
              width={20}
            />
            <input
              placeholder="Password"
              name="password"
              className="input_field"
              value={formData.password}
              onChange={handleInputChange}
              type={passwordVisible ? "password" : "text"}
            />
            <div onClick={togglePasswordVisibility} className="password-toggle">
              {passwordVisible ? (
                <FontAwesomeIcon icon={faEyeSlash} />
              ) : (
                <FontAwesomeIcon icon={faEye} />
              )}
            </div>
            <br />
            <span className="error">{fromErrors.password}</span>
          </div>

          {/* phone input field */}

          <div className="input_container">
            <PhoneInput
              name="phone"
              country={"us"}
              type="tel"
              className="phone_input"
              value={formData.phone}
              onChange={(phone) => setFormData({ ...formData, phone })}
              inputProps={{
                style: { width: 260 }, // Add the style here
                className: "input_field", // You can also apply your class if needed
                placeholder: "Phone", // Placeholder text
              }}
            />

            <br />
            <span className="error">{fromErrors.phone}</span>
          </div>

          {/*
          {/* // icon goees */}

          {/* submit button */}
          <button className="submit-button" type="submit">
            Sign Up
          </button>

          <h4 style={{ marginBottom: 10 }}>
            If you dont have an account{" "}
            <Link to="/login" className="login-link">
              Login here
            </Link>{" "}
          </h4>
        </form>
      </div>

      <div className="image-container">
        <img src="assets/sign.png" alt="" />
      </div>
    </Div>
  );
};

export default SignUp;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  height: 550px;
  box-shadow: 0px 106px 42px rgba(0, 0, 0, 0.01),
    0px 59px 36px rgba(0, 0, 0, 0.05), 0px 26px 26px rgba(0, 0, 0, 0.09),
    0px 7px 15px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 11px;
  width: 800px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;

  .image-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .form-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    height: 100%;
    width: 100%;
    gap: 10px;
  }

  .form-title {
    color: #000;
    text-align: center;
    font-family: "inter", sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 25px;
  }

  .submit-button {
    width: 8.2rem;
    padding: 0.625rem 0.9375rem;
    margin-top: 50px;
    margin-bottom: 10px;
    border-radius: 0.5rem;
    background: #c7db00;
    border: #c7db00;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #000;

    font: 700 18px "Josefin Sans", sans-serif;
    transition: all 1s ease;
    transform: translateY(-0.2em);
    transition: transform 0.1s ease;
  }

  h4 {
    color: #000;
    font-family: "Rubik", sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 20px;
  }

  .login-link {
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: #c7db00;
    cursor: pointer;
    text-decoration: underline;
  }
  .forgot:hover {
    color: #c7db00;
    cursor: pointer;
    text-decoration: underline;
  }

  .submit-button:hover {
    transform: translateY(-0.33em);
  }

  .submit-button:active {
    transform: translateY(0);
  }

  .google,
  .twitter:hover {
    transform: translateY(-0.33em);
  }

  .google,
  .twitter:active {
    transform: translateY(0);
  }
  .google:hover {
    transform: translateY(-0.33em);
  }

  .google:active {
    transform: translateY(0);
  }

  .image-container img {
    height: 100vh;
    object-fit: cover;
    justify-content: center;
  }

  @media (max-width: 764px) {
    padding: 20px;
  }

  @media (max-width: 1024px) {
    display: block;

    .log {
      margin-top: 0px;
    }

    .sec-2 {
      display: none;
    }

    .social-login {
      margin-bottom: 20px;
    }
  }

  .input_container {
    width: 260px;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .input-icon {
    width: 20px;
    position: absolute;
    z-index: 99;
    left: 12px;

    top: 10px;
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
    border-radius: 5px;
    outline: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
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
  .password-toggle {
    position: absolute;
    right: 0px;
    top: 10px;
  }

  .error {
    color: rgba(250, 11, 11, 0.99);
    font-family: "Josefin sans", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    position: absolute;
    top: 45px;
    left: 5px;
  }
  .error2 {
    color: rgba(250, 11, 11, 0.99);
    font-family: "Josefin sans", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    position: absolute;
    bottom: 0px;
  }

  .sec-2 {
    width: 100%;
  }
  .sec-2 img {
    object-fit: cover;
    width: 100%;
  }
`;
