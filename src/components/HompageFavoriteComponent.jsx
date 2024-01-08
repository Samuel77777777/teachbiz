import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import FavouritePage from "./FavouritePage";
import { Link } from "react-router-dom";

const HompageFavoriteComponent = () => {
  return (
    <Div>
      <div className="containerr">
        <div className="favourite-heading">
          <h2>Favourite </h2>
          <FontAwesomeIcon icon={faHeart} className="love-icon" />
        </div>




        <div className="favourite-boxes">




         {/* all favorite starts here */}
         <Link to='/mainfavoritepage' style={{textDecoration: "none"}}> 
          <div className="all-favourite">

            <section className="all-favourite-images">
              <img src="assets/frame1.png" alt="" className="image-1" />
              <img src="assets/frame5.png" alt="" className="image-2" />
              <img src="assets/frame3.png" alt="" className="image-3" />
              <img src="assets/frame4.png" alt="" className="image-4" />
              <img src="assets/frame2.png" alt="" className="image-5" />
            </section>

            <section className="section">
              <h3>All</h3>



              <p>30 Favouritre</p>

            </section>




          </div>
          </Link>

          {/* all favorite ends here */}





    {/* ngo favorite starts here */}

    

    <Link to='/mainfavoritepage' style={{textDecoration: "none"}}> 
          <div className="ngo-favourite">

            <div className="all-favourite">

              <section className="all-favourite-images">
                <img src="assets/frame1.png" alt="" className="image-1" />
                <img src="assets/frame5.png" alt="" className="image-2" />
                <img src="assets/frame3.png" alt="" className="image-3" />
                <img src="assets/frame4.png" alt="" className="image-4" />
                <img src="assets/frame2.png" alt="" className="image-5" />
              </section>

              <section className="section">
                <h3>All</h3>



                <p>30 Favouritre</p>

              </section>




            </div>








          </div>
          </Link>

              {/* ngo favorite ends here */}




   {/* hotel favorite starts here */}
   <Link to='/mainfavoritepage' style={{textDecoration: "none"}}> 
          <div className="hotel-favourite">

            <div className="all-favourite">

              <section className="all-favourite-images">
                <img src="assets/frame1.png" alt="" className="image-1" />
                <img src="assets/frame5.png" alt="" className="image-2" />
                <img src="assets/frame3.png" alt="" className="image-3" />
                <img src="assets/frame4.png" alt="" className="image-4" />

                <img src="assets/frame2.png" alt="" className="image-5" />

              </section>

              <section className="section">
                <h3>All</h3>



                <p>30 Favouritre</p>

              </section>




            </div>

          </div>
          </Link>
             {/* hotel favorite ends here */}




   
        {/* resturant favorite starts here */}
        <Link to='/mainfavoritepage' style={{textDecoration: "none"}}> 
          <div className="resturant-favourite">

            <div className="all-favourite">

              <section className="all-favourite-images">
                <img src="assets/frame1.png" alt="" className="image-1" />
                <img src="assets/frame5.png" alt="" className="image-2" />
                <img src="assets/frame3.png" alt="" className="image-3" />
                <img src="assets/frame4.png" alt="" className="image-4" />
                <img src="assets/frame2.png" alt="" className="image-5" />
              </section>

              <section className="section">
                <h3>All</h3>



                <p>30 Favouritre</p>

              </section>




            </div>

          </div>

          </Link>
               {/* resturant favorite ends here */}






    {/* pharmarcy favorite starts here */}


    <Link to='/mainfavoritepage' style={{textDecoration: "none"}}> 

          <div className="pharmarcy-favourite">

            <div className="all-favourite">

              <section className="all-favourite-images">
                <img src="assets/frame1.png" alt="" className="image-1" />
                <img src="assets/frame5.png" alt="" className="image-2" />
                <img src="assets/frame3.png" alt="" className="image-3" />
                <img src="assets/frame4.png" alt="" className="image-4" />
                <img src="assets/frame2.png" alt="" className="image-5" />
              </section>

              <section className="section">
                <h3>All</h3>



                <p>30 Favouritre</p>

              </section>




            </div>

          </div>
          </Link>


            {/* pharmarcy favorite ends here */}


          





        </div>

      </div>






    </Div>
  );
};

export default HompageFavoriteComponent;

const Div = styled.div`

align-items:center;
margin-top:50px;
display:flex;



.containerr{
  align-items:start;
  display:flex;
  flex-direction:column;
  margin:0 auto;
  gap:174px;
  margin-bottom:100px;


}

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

.favourite-boxes{
  display:flex;
  gap:40px;
  justify-content:center;
  flex-wrap:wrap;
}

.favourite-boxes div{
  width: 286px;
height: 223px;
border-radius: 10px;
background: #FFF;
box-shadow: 4px 4px 4px 1px rgba(0, 0, 0, 0.25);
}

.all-favourite-images{
display:flex;
position:relative;
align-items:center;
margin-bottom:50px;
}


.all-favourite{
display:flex;
align-items:center;
gap:20px;
}



.all-favourite-images img{
  max-width:61px;
  height:61px;
}

.image-1{
  position:absolute;
  left:60px;
}

.image-2{
  position:absolute;
  left:100px;
}

.image-3{
  position:absolute;
  left:130px;
}

.image-4{
  position:absolute;
  left:150px;
}

.image-5{
  position:absolute;
  left:170px;
}


.section{
  display:flex;
  flex-direction:column;
  gap:20px;
  margin-top:100px;
}


section h3{
color: #000;
text-align: center;
font-family: "Josefin Sans", sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 600;
line-height: normal;

}

section p{
color: #000;
text-align: center;
font-family: "Josefin Sans", sans-serif;
font-size: 12px;
font-style: normal;
font-weight: 300;
line-height: normal;
}






`;
