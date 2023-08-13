// import React from "react";
import Navbar from "../components/nav-component/Navbar";
import Styled from "styled-components";
import Search from "../components/nav-component/Search";
import CardSlider from "../components/Sliders/HotelSlider";
import CardTest from "../components/Card-components/Card-test";
import SearchCard from "../components/Card-components/SearchCard";
import Footer from "../components/Footer";

const HotelHompage = () => {
  const cardsData = [
    {
      name: "magret Mondeh",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sodales sagittis dictumst at lorem .",
      image: "assets/Hotel-card1.png",
      title: "Chicken Town",
    },

    {
      name: "Pope Kamara",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sodales sagittis dictumst at lorem .",
      image: "assets/Hotel-card2.png",
      title: "Basha",
    },

    {
      name: "Samuel Kamara",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sodales sagittis dictumst at lorem .",
      image: "assets/Hotel-card3.png",
      title: "Basha",
    },
    {
      name: "Maggie Kamara",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sodales sagittis dictumst at lorem .",
      image: "assets/Hotel-card4.png",
      title: "Basha",
    },
    {
      name: "Maggie Kamara",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sodales sagittis dictumst at lorem .",
      image: "assets/Hotel-card5.png",
      title: "Basha",
    },
    {
      name: "Maggie Kamara",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sodales sagittis dictumst at lorem .",
      image: "assets/Hotel-card6.png",
      title: "Basha",
    },
    {
      name: "Maggie Kamara",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sodales sagittis dictumst at lorem .",
      image: "assets/Hotel-card3.png",
      title: "Basha",
    },

    {
      name: "Maggie Kamara",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sodales sagittis dictumst at lorem .",
      image: "assets/card2.png",
      title: "Basha",
    },
    {
      name: "Maggie Kamara",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sodales sagittis dictumst at lorem .",
      image: "assets/Hotel-card3.png",
      title: "Basha",
    },
  ];

  const cardDataArray = [
    {
      imageSrc: "assets/Hotelrelate1.png",
      title: "Basha Bakery & Restaurant",
      address: "73 Wilkinson Road",
      phone: "Phone (+232 76611000)",

      description:
        "um sit a. Sit ut dolor iaculis volutpat montes mauris nunc volutpat fermentum.",
    },
    {
      imageSrc: "assets/Hotelrelate2.png",
      title: "Pa Sweet Bakery",
      address: "Basha Bakery & Resturant",
      phone: "Phone (+232 76611000)",

      description:
        "um sit a. Sit ut dolor iaculis volutpat montes mauris nunc volutpat fermentum.",
    },
    {
      imageSrc: "assets/Hotelrelate3.png",
      title: "City Sandwich",
      address: "70 Wilkinson Road",
      phone: "Phone (+232 76611000)",

      description:
        "um sit a. Sit ut dolor iaculis volutpat montes mauris nunc volutpat fermentum.",
    },

    {
      imageSrc: "assets/Hotelrelate4.png",
      title: "Basha Bakery & Restaurant",
      address: "73 Wilkinson Road",
      phone: "Phone (+232 76611000)",

      description:
        "um sit a. Sit ut dolor iaculis volutpat montes mauris nunc volutpat fermentum.",
    },
    {
      imageSrc: "assets/Hotelrelate3.png",
      title: "Pa Sweet Bakery",
      address: "Basha Bakery & Resturant",
      phone: "Phone (+232 76611000)",

      description:
        "um sit a. Sit ut dolor iaculis volutpat montes mauris nunc volutpat fermentum.",
    },
    {
      imageSrc: "assets/Hotelrelate2",
      title: "City Sandwich",
      address: "70 Wilkinson Road",
      phone: "Phone (+232 76611000)",

      description:
        "um sit a. Sit ut dolor iaculis volutpat montes mauris nunc volutpat fermentum.",
    },
  ];

  return (
    <Div>
      <div className="header">
        <Navbar />
      </div>
      <div className="search">
        <Search />
      </div>
      {/* main content */}

      <main>
        <div className="head">
          <div className="head-1">
            <img src="assets/chicken.png" alt="" />
            <h1>Chicken Town(Lumley)</h1>
          </div>
          <div className="head-2">
            <img src="assets/star.png" alt="" />
            <img src="assets/star.png" alt="" />
            <img src="assets/star.png" alt="" />
            <img src="assets/star.png" alt="" />
            <img src="assets/star.png" alt="" />
          </div>
        </div>

        <div className="slider">
          <CardSlider />
        </div>
        <div className="share">
          <button>
            <span>Share </span>
            <img src="assets/share.png" alt="" />
          </button>
          <button>
            <span> favourite </span>
            <img src="assets/favourite.png" alt="" />
          </button>

          <button>
            <span> Write a Review</span>
            <img src="assets/star.png" alt="" />
          </button>
        </div>

        <div className="direc--photo">
          <div className="photos">
            <h1 className="menu--head">Photos</h1>

            <div className="photoss">
              <div className="photo">
                <img src="assets/Hotel5.png" alt="" />
                <h3>Pool</h3>
              </div>
              <div className="photo">
                <img src="assets/Hotel6.png" alt="" />
                <h3>Wine Bar</h3>
              </div>
              <div className="photo">
                <img src="assets/Hotel7.png" alt="" />
                <h3>Fine Dinning</h3>
              </div>
              <div className="photo">
                <img src="assets/Hotel8.png" alt="" />
                <h3>Gym</h3>
              </div>
            </div>
          </div>

          <div className="direction">
            <button>
              <img src="assets/redlocation.png" alt="" />
              <span>73 Wilkinson Road</span>
            </button>
            <button>
              <img src="assets/direction.png" alt="" />
              <span>Get Direction</span>
            </button>
            <button>
              <img src="assets/phone1.png" alt="" />
              <span>Phone (+232) 76772277</span>
            </button>
            <button>
              <img src="assets/website.png" alt="" />
              <span>Go to website</span>
            </button>
            <button>
              <img src="assets/media.png" alt="" />
              <span>Social media link</span>
            </button>
          </div>
        </div>
        <br />

        <div className="description">
          <h1>Description</h1>

          <div className="desc">
            <div className="desc1">
              <h3>Price range</h3>
              <p>SLL 200/ SLL 500</p>
            </div>

            <div className="desc2">
              <h3>Cuisine</h3>
              <p>
                Lebanese, Africana, Italian, Traditional Vegetarian, Vegan Meals
              </p>
            </div>

            <div className="desc2">
              <h3>Features</h3>
              <p>Bar, Dinning, Bakery, free wifi, Reservations</p>
            </div>
          </div>
        </div>
      </main>

      <section className="carrd">
        {cardsData.map((data, index) => (
          <CardTest
            key={index}
            name={data.name}
            title={data.title}
            review={data.review}
            image={data.image}
          />
        ))}
      </section>
      <div className="last-sec">
        <h1>More Option for you</h1>
        <div className="cardss">
          {cardDataArray.map((data, index) => (
            <SearchCard
              key={index}
              imageSrc={data.imageSrc}
              title={data.title}
              address={data.address}
              phone={data.phone}
              description={data.description}
            />
          ))}
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </Div>
  );
};

export default HotelHompage;

const Div = Styled.div`
overflow:hidden;

.header{
  margin-top:5px;
}


  .login {
    color: black;
  }
  .btn {
    color: black;
  }

  .drop {
    display: flex;
    padding: 10px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 10px;
    border: 1px solid #d9d9d9;
    background: rgba(255, 255, 255, 0);
    margin-top: 0px;
  }

.header{
    margin-bottom:70px;
}

.head{
  display:flex;
  justify-content:space-between;
   align-items:center;
}

.head-1{
  display:flex;
    gap:30px;
    align-items:center;
    margin-left: 5px;
    margin-top:30px;
}

.head-1 img{
max-width:98px;
max-height:95px;
}

.head-1 h1{
   color: #000000;
  text-align: left;
  font-size:40px;
  font-weight: 700;
  font-family:"Josefin Sans", sans-serif;
  margin:0;
}

.head-2{
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:5px;
}



.share{
  justify-content:center;
  display:flex;
  margin-bottom:20px;
  gap:8px;
}

.share button{
  height:45px;
  border-right: 4px solid  red;
  border-left:none;
  border-top:none;
  border-bottom:none;
  background: white;
   color: #000000;
  text-align: center;
  font: 500 21px "Josefin Sans", sans-serif;
  display:flex;
  align-items:center; 
  padding:10px;
}

.photos{
  display:flex;
  flex-direction:column;
  gap:20px;
  margin-left:20px;
  flex-wrap:wrap;

}

.photoss{
  display:flex;
  gap:20px;
}



.photo{
  display:flex;
  flex-direction: column;
  gap:13px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  max-width:198px;

}

.photo h3{
  color: #000000;
  text-align: left;
  font: 400 21px "Josefin Sans", sans-serif;
  margin-top:10px;
  margin-bottom:10px;
}

.menu--head{
  color: #000000;
  font: 700 21px "Josefin sans", sans-serif;
  margin-bottom:0px;
  margin-top:0px;
  text-align:left;w
}

.direc--photo{
  display:flex;
  justify-content: space-between;
  margin-bottom:20px;
  margin-left:20px;
  margin-right:20px;


}


.direction{
display:flex;
flex-direction:column;
align-items:flex-start;
background: #FFF;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
max-width: 327px;
gap:10px;
overflow:hidden;
}

.direction button{
  display:flex;
  align-items:center;
  gap:10px;
  border:none;
border-bottom: 1px solid rgba(0, 0, 0, 0.25);
background: #FFF;
padding:10px;
width:100%;


color: rgba(250, 11, 11, 0.99);
font-family: 'Josefin Sans', sans-serif;
font-size: 21px;
font-style: normal;
font-weight: 400;
line-height: normal;
cursor:pointer;

}
.direction button:hover{
  background:rgba(0, 0, 0, 0.25);

}


.direction button img{
  width:24px;
  height:24px;
}

.desc{
  display:flex;
  margin-bottom: 150px;
  gap:30px;
}

.desc1{
display:flex;
flex-direction:column;
max-width:243px;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 4px 4px 0px #C7CDFE;
gap:10px;
padding:10px;
height:89px;
}

.desc2{
  display:flex;
  max-width:333px;
  flex-direction:column;
  gap:15px;
  border-radius: 10px;
background: #FFF;
box-shadow: 0px 4px 4px 0px #C7CDFE;
padding:10px;
height:108px;

}




.description h3{
color: black;
font-family: "Josefin sans", sans-serif;
font-size: 21px;
font-style: normal;
font-weight: 700;
line-height: normal;

}


.description h1{
  color: black;
font-family: "Josefin sans", sans-serif;
font-size: 21px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin:0px;
text-align:left;
}




.description p{
  color: #000;
font-family: "Josefin sans", sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 300;
line-height: normal;
}

.description{
margin-left:30px;
display:flex;
flex-direction:column;
gap:20px;
align-items:flex-start;

} 






  .last-sec{
    display:flex;
    flex-direction:column;
  }


  .last-sec h1{
    color: #000;
text-align: center;
font-family: "Josefin sans", sans-serif;
font-size: 21px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top:50px;
margin-bottom:50px;

  }


  .carrd {
    display: grid;
    grid-template-columns: repeat(3, 400px); 
    justify-items: center;
    justify-content:center;
    gap:20px;
    margin: 0 auto;

  }

  .card--1{
    margin:0;
    
  }




  .cardss{
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    margin-left:10px;
    margin-right:10px;
    gap:20px;
  }



.cardsss{
  max-width:580px;
  flex-basis: calc(50% - 20px);

  
}










  @media (max-width: 1024px) {
    .cards {
      grid-template-columns: repeat(2, 1fr);
      justify-content: center; /* Adjust spacing for laptop screens */
    }
  }






  @media (max-width: 768px) {
    overflow:hidden;
    .cards {
      grid-template-columns: repeat(1, 1fr);
      justify-content: center; /* Adjust for smaller screens */
    }


    .head-1{
  display:flex;
    gap:10px;
    align-items:center;
    margin-left:1px;
    justify-content:center;
}

.head{
  align-items:center;
}

.head-1 img{
  width:50px;
  height:50px;

}

.head-1 h1{
     font-size:20px;
 }

.head-2 {

}

.share button{
  font-size:15px;
}

.photoss{
  display:flex;
  gap:50px;
  flex-direction:column;
  justify-content:center;
   margin-left:50px;
   text-align:center;
   margin-bottom:20px;
}
.direction{
  justify-content:center;
  margin:0 auto;
}


.direc--photo{
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  margin-bottom:20px;
}

.desc{
  display:flex;
  flex-wrap:wrap;
  margin-left:2px;
}

.cardss{
  display:flex;
  flex-direction:column;
  gap:20px;
}

.drop{
  display:none;
}

.icon{
  color:black;
}

.search{
  border:1px solid black;
}

.myimage{
  max-width:100%;
  height:200px;
  object-fit:cover;
  position:center;

}



  }
`;
