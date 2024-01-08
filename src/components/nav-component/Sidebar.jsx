// import React from 'react';
import { styled } from 'styled-components';
import Buttons from './Buttons';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <Div>
    <aside className="side">



     
    <div className="downs">
        <div className="drops">
          <Link to="/resturant" className="btns">
            Resturant
          </Link>
        </div>

        {/* // Hotels */}
        <div className="drops">
          <Link to="/hotel" className="btns">
            Hotels
          </Link>
    
        </div>

        {/* Pharmarcy */}

        <div className="drops">
          <Link to="/pharmarcy" className="btns">
            Pharmarcy
          </Link>
    
        </div>

        {/* Ngo */}

        <div className="drops">
          <Link to="/ngo" className="btns">
            NGO'S
          </Link>
    
        </div>
      </div>

      <br />


    
    
      <Buttons />
      

      
    </aside>



    </Div>
  )
}

export default Sidebar

const Div =  styled.div`
   position: relative;


   
    aside{
        background-color:#c7db00 ;
        width: 400px;
        height: 100vh;
        right: 0%;
        box-shadow: 10px -5px 47px 0px rgba(0, 0, 0, 0);
        animation: myAnim 2s ease 0s 1 normal forwards;
    }


    .buttons{
      display:flex;
      flex-direction:column;
      justify-content:center;
      margin:10px;
    }

    .login{
color:black;
border:1px solid white;
    }
    .signup{
      color:black;
      border:1px solid white;
          }
      


    .downs {
      display: flex;
      flex-direction:column;
      gap: 15px;
      align-items: left;
      justify-content: left;
      flex-wrap: wrap;
      padding:10px;


    }
  
    .drops {
      padding: 10px;
      align-items: flex-start;
      gap: 10px;
      border-radius: 10px;
      border: 1px solid #fff;
      background: rgba(255, 255, 255, 0);
      color: black;
      text-align: center;
      font-family: "Josefin" sans-serif;
      font-size: 25px;
      font-weight: 400;
      margin-top: 5px;
      cursor: pointer;
      width:150px;
    }
  
    .btns {
      color: black;
      text-align: center;
      font: 400 20px "Josefin Sans", sans-serif;
      line-height: normal;
      background-color: transparent;
      text-decoration: none;
      align-items: center;
    }



@keyframes myAnim {
	0% {
		opacity: 0;
		transform: translateX(50px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}
    }




    

`;