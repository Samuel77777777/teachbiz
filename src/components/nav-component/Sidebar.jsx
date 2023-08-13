// import React from 'react';
import { styled } from 'styled-components';
import Search from './Search';

const Sidebar = () => {
  return (
    <Div>
    <aside className="side">
        <Search  className="search"/>

        <div className="buttons">
        <button className="login">Login</button>
        <button className="signup">Sing up</button>
      </div>

    </aside>



    </Div>
  )
}

export default Sidebar

const Div =  styled.div`
   position: relative;


   
    aside{
        background-color: red;
        width: 400px;
        height: 100vh;
        right: 0%;
        box-shadow: 10px -5px 47px 0px rgba(0, 0, 0, 0);
        animation: myAnim 2s ease 0s 1 normal forwards;

        
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: 15px;

  align-self: center;
  flex-direction: column;
  gap: 40px;
}

.input1 {
  display: flex;
  justify-content: center;
  align-items: center;
 border: 2px solid black;
 background-color: white;
 border-radius: 15px;
 padding: 0px 10px;
 
}
.input1 input {
  outline: none;
  border: none;
  color: #000;
  text-align: center;
  font-size: 18px;
  font-family: Inter;
  font-style: normal;
  font-weight: 200;
  padding: 30px 40px;
  
}

.input2{
    display: flex;
  justify-content: center;
  align-items: center;
 border: 2px solid black;
 background-color: white;
 border-radius: 15px;
 padding: 0px 10px;
 
}
.input2 input {
  outline: none;
  border: none;
  color: #000;
  text-align: center;
  font-size: 18px;
  font-family: Inter;
  font-style: normal;
  font-weight: 200;
  padding: 30px 40px;
}

.img {
  width: 18px;
  height: 18px;
  background-color: white;
}
.buttons{
display:flex;
flex-direction: column;
gap: 20px;
justify-content: center;

}
.login,.signup{
    width: 200px;
    margin: 0 auto;


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