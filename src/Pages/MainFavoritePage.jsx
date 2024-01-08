import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";




const MainFavoritePage = () => {
  return (
    <Div>

      <div className="favourite-heading">

        <img src="assets/arrowback.png" alt="" style={{ marginRight: 40 }} />
        <h2>Favourite </h2>
        <FontAwesomeIcon icon={faHeart} className="love-icon" />
      </div>
      <h2 className='all'>All</h2>

      <div className="favorites">

        <div className='favorite-card'>
          <div className="logos">
            <img src="assets/mack.png" alt="" />
            <h2>Mack Pharmacy</h2>
          </div>
          <img src="assets/mack2.png" alt="" />

          <div>
            <img src="assets/redheart.png" alt="" />
          </div>





        </div>


        <div className='favorite-card'>
          <div className="logos">
            <img src="assets/pearl.png" alt="" />
            <h2>Pearl Hotel</h2>
          </div>
          <img src="assets/pearl2.png" alt="" />

          <div>
            <img src="assets/redheart.png" alt="" />
          </div>

        </div>



        <div className='favorite-card'>
          <div className="logos">
            <img src="assets/chickentown.png" alt="" />
            <h2>Chicken Town</h2>
          </div>
          <img src="assets/chicken2.png" alt="" />

          <div>
            <img src="assets/redheart.png" alt="" />
          </div>

        </div>




        <div className='favorite-card'>
          <div className="logos">
            <img src="assets/basha.png" alt="" />
            <h2>Basha</h2>
          </div>
          <img src="assets/basha2.png" alt="" />

          <div>
            <img src="assets/redheart.png" alt="" />
          </div>

        </div>



        <div className='favorite-card'>
          <div className="logos">
            <img src="assets/mack.png" alt="" />
            <h2>Mack Pharmacy</h2>
          </div>
          <img src="assets/mack2.png" alt="" />

          <div>
            <img src="assets/redheart.png" alt="" />
          </div>





        </div>


        <div className='favorite-card'>
          <div className="logos">
            <img src="assets/pearl.png" alt="" />
            <h2>Pearl Hotel</h2>
          </div>
          <img src="assets/pearl2.png" alt="" />

          <div>
            <img src="assets/redheart.png" alt="" />
          </div>

        </div>



        <div className='favorite-card'>
          <div className="logos">
            <img src="assets/chickentown.png" alt="" />
            <h2>Chicken Town</h2>
          </div>
          <img src="assets/chicken2.png" alt="" />

          <div>
            <img src="assets/redheart.png" alt="" />
          </div>

        </div>




        <div className='favorite-card'>
          <div className="logos">
            <img src="assets/basha.png" alt="" />
            <h2>Basha</h2>
          </div>
          <img src="assets/basha2.png" alt="" />

          <div>
            <img src="assets/redheart.png" alt="" />
          </div>

        </div>












      </div>








    </Div>
  )
}

export default MainFavoritePage;

const Div = styled.div`
margin-left:40px;
margin-top:40px;






.favourite-heading{
  display:flex;
  gap:10px;
  align-items:center;
  flex-wrap:wrap;

}


.favourite-heading h2{
  color: #000;
text-align: center;
font-family: "Josefin Sans",sans-serif;
font-size: 21px;
font-style: normal;
font-weight: 700;
line-height: normal;
}


.love-icon{
color:red;
  width:24px;
  height:24px;
}

.all{
color: #000;
text-align: left;
font-family: 'Josefin Sans',sans-serif;
font-size: 21px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top:50px;
margin-left:50px;

}

.favorite-card{
display: flex;
max-width: 388px;
height: 376px;
padding: 0px 5px;
flex-direction: column;
align-items: flex-start;
gap: 15px;
background: rgba(246, 245, 221, 0.37);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.50);
}

.logos{
  display:flex;
  gap:20px;
  align-items:center;
}

.logos h2{
  color: #000;
font-family: "Josefin Sans",sans-serif;
font-size: 21px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.favorites{
  display:flex;
  gap:100px;
  flex-wrap:wrap;
  margin-top:50px;

}






`;