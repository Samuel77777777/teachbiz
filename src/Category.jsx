import React from 'react'
import './category.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Category = () => {
  return (
    <div>
        <h1>Category</h1>


        <div className="car">
            <div className="img-txt">
                <img src="assets/resturant.png" alt="" />
                <p>Resturant</p>
            </div>
            <div className="img-txt">
                <img src="assets/hotel.png" alt="" />
                <p>Hotel</p>
            </div>
            <div className="img-txt">
                <img src="assets/pharmarcy.png" alt="" />
                <p>Pharmarcy</p>
            </div>
            <div className="img-txt">
                <img src="assets/ngo.png" alt=""    />
       
                <p>NGO</p>
            </div>


        </div>
    


        
    </div>
  )
}

export default Category