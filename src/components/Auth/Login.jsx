import React from 'react';
import { styled } from 'styled-components';

const Login = () => {
  return (
    <Div>
      <div className="form">  
      <h3 className="log">Login</h3>

       <div className="circle">
       <img src="assets/circle.png" alt=""  />
      
        <h3>The user</h3>
       </div>
     



      <div className="form">

      
              <div className="username  input-1">
              <img src="assets/password.png" alt=""  />
            <div className="inputBox">
                <input type="password" required="required"/>
                <span>Username</span>
            </div>
            </div>
           


            <div className="username">
              <img src="assets/email.png" alt="" />
            <div className="inputBox">
                <input type="password" required="required"/>
                <span>Password</span>
            </div>
            </div>
             

             <p className="forgot"> Forgot Password</p>

          <button className="login">
            Login
          </button>
          <h4 style={{marginBottom: 40}}>If you don't have an account  <a href="" className="reg">Register here</a> </h4>
    
        <h4>Or Sign up Using.......</h4>
      <div className="social-login">
        <button className="google">
        <img src="assets/google.png" alt="" />
        </button>
        <button className='twitter'>
          <img src="assets/twit.png" alt="" />
        </button>

      </div>

    

      </div>

    

      </div>

        <div className="sec-2">
          <img src="assets/login.png" alt="" width="100%" />

        </div>


    </Div>
  )
}

export default Login

const Div = styled.div`
display: flex;
justify-content: space-between;
gap: 40px;



.form{
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
   width: 100%;
}

.log{
  margin-top: 58px;
  color: #000;
text-align: center;
font-family: sans-serif;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: 52px;
}

.circle h3{
margin: 12px;
color: #000;
text-align: center;
font-family: sans-serif;
font-size: 21px;
font-style: normal;
font-weight: 400;
line-height: normal;
}




.inputBox
 {
  position: relative;
  width: 250px;
}

.inputBox input {
  width: 100%;
  padding: 10px;
  outline: none;
  border: none;
  color: #000;
  font-size: 1em;
  background: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.50);
  transition: 0.1s;

}

.inputBox span {
  margin-top: 5px;
  position: absolute;
  left: 0;
  transform: translateY(-4px);
  margin-left: 10px;
  padding: 10px;
  pointer-events: none;
  font-size: 12px;
  font-family: sans-serif;
  color: #000;
  text-transform: uppercase;
  transition: 0.5s;
  border-radius: 8px;
}

.inputBox input:valid~span,
.inputBox input:focus~span {
  transform: translateX(113px) translateY(-15px);
  font-size: 0.8em;
  padding: 5px 10px;
  background: rgba(0, 0, 0, 0.50);
  letter-spacing: 0.2em;
  color: #fff;
  border: 2px;
}


.inputBox input:valid,
.inputBox input:focus {
  border: 2px solid #000;
  border-radius: 8px;
}


.form{
  margin-top:115px;
}

.username{
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-1{
margin-bottom:50px;

}

.username img{
  object-fit: cover;
  width:24px;
  height: 24px;
  margin-right: 5px;

}



.login{
  border-radius: 8px;
background: #C7DB00;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
color: #FFF;
text-align: center;
font-family: Rubik;
font-size: 21px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 50px;
margin-bottom: 10px;
}

h4{
  color: #000;
font-family: Rubik;
font-size: 21px;
font-style: normal;
font-weight: 400;
line-height: normal;

margin-bottom: 20px;
}


.social-login{
  display: flex;
  gap: 20px;
}

.google{ 
  border: none;
  padding: 18px;
border-radius: 9px;
background: #FFF;
box-shadow: 0px 4px 4px 0px rgba(250, 11, 11, 0.99);
}

.twitter{
  border: none;
  padding: 18px;
  border-radius: 9px;
background: #FFF;
box-shadow: 0px 4px 4px 0px #3771C8;
}

.forgot{
  margin-top: 30px;
  color: #000;
  text-decoration: none;
}

.reg{
text-decoration: none;
  
}

a:hover{
  color:  #C7DB00;
  cursor: pointer;
  text-decoration: underline;
}
.forgot:hover{
  color:  #C7DB00;
  cursor: pointer;
  text-decoration: underline;
}




.login:hover{
  transform: translateY(-0.33em);
}

.login:active {

  transform: translateY(0);
}

.google,.twitter:hover {

  transform: translateY(-0.33em);
}

.google,.twitter:active {

  transform: translateY(0);
}
.google:hover {

transform: translateY(-0.33em);
}

.google:active {

transform: translateY(0);
}



.sec-2 img{
  height: 100vh;
  object-fit: cover;
  justify-content: center;

}

@media (max-width: 1024px) {
  display: block;


.log{
  margin-top: 0px;
}

  .sec-2{
    display: none;
  }

.social-login{
  margin-bottom: 20px;
}
  
}



`;