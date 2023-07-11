// eslint-disable-next-line no-unused-vars
import {React} from "react";
import "./card.css";



const Card = (props) => {
  return (
    <div>
      <h1 className="txt--1">{props.h1}</h1>

      <div className="cards">
        <div className="card--1">
          <div className="sec1">
            <img src="assets/round.png"  alt="" />
            <div className="person">
              <h2>Magret Mondeh</h2>
              <p>wrote a review</p>
            </div>
            </div>

              <img src='assets/rec.png' alt=""  className="rec"/>

              <div className="sec2">
                <h3>Chicken Town</h3>
                 <div className="stars">
                  <img src="assets/star.png" alt="" />
                  <img src="assets/star.png" alt="" />
                  <img src="assets/star.png" alt="" />
                  <img src="assets/star.png" alt="" />
                  <img src="assets/star.png" alt="" />
                 </div>
                 <p>Lorem ipsum dolor sit amet consectetur. Sodales sagittis dictumst at lorem .</p>
              </div>

              <div className="emo">
                  <div className="tool-tip">
                  <img src="assets/smile.png" alt=""/>
             
                  </div>
                  <div className="tool-tip">
                  <img src="assets/light.png" alt=""  />
                  <span className="tooltiptext">Like</span>
                  </div>
                  <div className="tool-tip">
                  <img src="assets/sml.png" alt="" />
                  <span className="tooltiptext">Like</span>
                  </div>
              
              
           


              </div>
      




        </div>
        <div className="card--2">
        <div className="card--1">
          <div className="sec1">
            <img src="assets/round.png" alt="" />
            <div className="person">
              <h2>Magret Mondeh</h2>
              <p>wrote a review</p>
            </div>
            </div>

              <img src='assets/rec.png' alt=""  className="rec"/>

              <div className="sec2">
                <h3>Chicken Town</h3>
                 <div className="stars">
                  <img src="assets/star.png" alt="" />
                  <img src="assets/star.png" alt="" />
                  <img src="assets/star.png" alt="" />
                  <img src="assets/star.png" alt="" />
                  <img src="assets/star.png" alt="" />
                 </div>
                 <p>Lorem ipsum dolor sit amet consectetur. Sodales sagittis dictumst at lorem .</p>
              </div>

              <div className="emo">
                <img src="assets/smile.png" alt="" />
                <img src="assets/light.png" alt="" />
                <img src="assets/sml.png" alt="" />

              </div>
      




        </div>


        </div>


        <div className="card--3">
        <div className="card--3-sec1">
            <img src="assets/round.png" alt="" />
            <div className="person">
              <h2>Magret Mondeh</h2>
              <p>wrote a review</p>
            </div>
            </div>
            
          
            <div className="card--3-sec2">
            <h3 className="new">Newyork Pizza</h3>
            <div className="card--3-imgs">
            <div className="img1">
           <img src="assets/cup.png" alt=""  />
              <div className="thumb">
                 <img src="assets/thumb.png" alt="" />
              </div>
           </div>
           <div className="img2">
           <img src="assets/cup.png" alt=""  />
              <div className="thumb">
                 <img src="assets/thumb.png" alt="" />
             
              </div>
           </div>
          
            </div>
          
          
            </div>

              <p className="show">Show all photos</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
