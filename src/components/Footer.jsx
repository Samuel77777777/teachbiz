import React from 'react';
import { styled } from 'styled-components';

const Footer = () => {
  return (
    <Div>
        <footer className="footer">
            <div className="list">
                <ul className="list-1"> 
                    <h3>Home</h3>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                </ul>
                <ul className="list-1"> 
                    <h3>Home</h3>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                </ul>
                <ul className="list-1"> 
                    <h3>Home</h3>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                    <li>Pope</li>
                </ul>

  
                <div className="socials">
                <h3>You can follow us on:</h3>
                <div className="social-img">
                <img src="assets/facebook.png" alt="" />
                <img src="assets/twiter.png" alt="" />
                <img src="assets/instagram.png" alt="" />
                <img src="assets/link.png" alt="" />
                <img src="assets/tiktok.png" alt="" />
                </div>
          
            </div>
            </div>

 

        </footer>



    </Div>
  )
}

export default Footer;

const Div = styled.div`

.footer{
    width: 100% !important;
    height: 600px;
    background: #D9D9D9;
    margin-top: 60px;




    .list{
        margin-left: 70px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 40px;
        justify-content: space-evenly;
      


        .list-1{
  align-items: center;
    gap: 30px;
            h3{
         
color: rgba(0, 0, 0, 0.62);
text-align: center;
font-family: Josefin Sans;
font-size: 30px;
font-style: normal;
font-weight: 600;
line-height: normal;
            }
            

      li{
        list-style: none;
        margin: 20px 0px;
      }
      li:hover{
        text-decoration: underline;
      }
        
    }
    }

    .socials{
        display: block;
        gap: 20px;


    }

    .socials img{
        width: 60px;
        height: 60px;
        object-fit: cover;
       

    }


    .socials img:hover{ 
         transform: scale(105%);
  animation: beatingHeart 1.2s infinite;

    }

    
  

  

@keyframes beatingHeart {
  0% {
    transform: scale(1);
  }

  15% {
    transform: scale(1.15);
  }

  30% {
    transform: scale(1);
  }

  45% {
    transform: scale(1.15);
  }

  60% {
    transform: scale(1);
  }
}
}


`;

