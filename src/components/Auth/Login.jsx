import { useState } from "react";
import { styled } from "styled-components";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  // this is the state that handles the password eye toggle

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  // I use react hook form to handle the validation

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    reset();
  };

  return (
    <Div>
      <div className="login-form">
        <h3 className="login-heading">Login</h3>

        {/* the login form    */}

        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          {/* email field */}
          <div className="input_container">
            <img
              src="assets/password.png"
              alt=""
              className="input-icon"
              width={20}
            />
            <input
              name="input-name"
              placeholder="Email"
              type="text"
              className="input_field"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <br />
            <span className="error">{errors.email?.message}</span>
          </div>

          {/* </div> */}

          {/* password field */}
          <div className="input_container">
            <img
              src="assets/password1.png"
              alt=""
              className="input-icon"
              width={20}
            />
            <input
              placeholder="Password"
              name="input-password"
              className="input_field"
              {...register("password", { required: "Password is required" })}
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
            <span className="error"> {errors.password?.message}</span>
          </div>

          {/*
          {/* // icon goees */}

          <Link to="/resetpassword" className="forgot-password-link">
            Forgot Password?
          </Link>

          {/* login button    */}
          <button className="login-button" type="submit">
            Login
          </button>
          <h4 style={{ marginBottom: 10 }}>
            If you dont have an account{" "}
            <Link to="/signup" className="register-link">
              register here
            </Link>{" "}
          </h4>
          <h4>Or Login Using.......</h4>
          {/* 
          social media login buttons */}
          <div className="social-login-button">
            <button className="google-login-button">
              <img src="assets/google.png" alt="Google" />
            </button>
            <button className="twitter-login-button" type="">
              <img src="assets/twit.png" alt="" type />
            </button>
          </div>
        </form>
      </div>

      <div className="image-container">
        <img src="assets/login.png" alt="" width="100%" />
      </div>
    </Div>
  );
};

export default Login;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  height: 580px;
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

  .login-form {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    height: 100%;
    width: 100%;
    gap: 10px;
  }

  .login-heading {
    color: #000;
    text-align: center;
    font-family: "inter", sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 25px;
  }

  .login-button {
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

  .social-login-button {
    display: flex;
    gap: 20px;
  }

  .google-login-button {
    border: none;
    padding: 18px;
    border-radius: 9px;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(250, 11, 11, 0.99);
    transform: translateY(-0.2em);
    transition: transform 0.1s ease;
  }

  .twitter-login-button {
    border: none;
    padding: 18px;
    border-radius: 9px;
    background: #fff;
    box-shadow: 0px 4px 4px 0px #3771c8;
    transform: translateY(-0.2em);
    transition: transform 0.1s ease;
  }

  .forgot-password-link {
    margin-top: 40px;
    margin-right: 120px;
    text-decoration: none;
    text-align: left;
    color: rgba(0, 0, 0, 0.37);
    font-family: "Rubik", sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .register-link {
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: #c7db00;
    cursor: pointer;
    text-decoration: underline;
  }
  .forgot-password-link:hover {
    color: #c7db00;
    cursor: pointer;
    text-decoration: underline;
  }

  .login-button:hover {
    transform: translateY(-0.33em);
  }

  .login-button:active {
    transform: translateY(0);
  }

  .google-login-button,
  .twitter-login-button:hover {
    transform: translateY(-0.33em);
  }

  .google-login-button,
  .twitter-login-button:active {
    transform: translateY(0);
  }
  .google-login-button:hover {
    transform: translateY(-0.33em);
  }

  .google-login-button:active {
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

    .login-heading {
      margin-top: 0px;
    }

    .image-container {
      display: none;
    }

    .social-login-button {
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
`;

// import React from "react";
// import { useForm } from "react-hook-form";

// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//     },
//   });
//   console.log(errors);

//   return (
//     <div>
//       <form
//         action=""
//         onSubmit={handleSubmit((data) => {
//           console.log(data);
//         })}
//       >
//         <input
//           {...register("firstName", { required: "This is required" })}
//           placeholder="First Name"
//         />
//         <p>{errors.firstName?.message}</p>
//         <input
//           {...register("lastName", {
//             required: "This is required.",
//             minLength: { value: 4, message: "Min Length 4" },
//           })}
//           placeholder="Last Name"
//         />
//         <p>{errors.lastName?.message}</p>
//         <input type="submit" />
//       </form>
//     </div>
//   );
// };

// export default Login;
