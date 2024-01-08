import React from 'react';
import Dropdown from '../Dropdown';
import styled from 'styled-components';
import Buttons from './Buttons';



const NewSidebar = () => {
    return (
        <Div>
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


           <div>

           <Buttons />
           </div>
     


        </Div>
    )
}

export default NewSidebar;


const Div = styled.div`
background:gray;
min-width:400px;
height:100vh;
display:flex;
flex-direction:column;
gap:15px;
margin-top:0;

 


// .main-drop{
//     padding:20px;
//     gap:20px;
//     display:flex;
//     flex-direction:column;
// }

// .drop {
//     display: flex;
//     flex-direction:column;
//     padding: 10px;
//     align-items: flex-start;
//     gap: 10px;
//     border-radius: 10px;
//     border: 1px solid #d9d9d9;
//     background: rgba(255, 255, 255, 0);
//     margin-bottom: 15px;
//     color:black;
    
//   }
//   .down{
//     display:flex;
//     flex-direction:column;
    
//   }

//   .btn {
//     color: black;
//   }

  .buttons{
    display:flex;
    flex-direction:column;
    padding:20px;


  }

  .login{
    color:black;
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
