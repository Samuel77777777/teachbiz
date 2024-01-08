/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import styled from "styled-components";
// import Dropdown from "../components/Dropdown";
// import Buttons from "../components/nav-component/Buttons";
import Search from "../components/nav-component/Search";
import SearchCard from "../components/Card-components/SearchCard";
import Navbar from "../components/nav-component/Navbar";

const Find = () => {
  // this is  to select multiple buttons all as they get clicked.
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleClick = (buttonName) => {
    if (selectedButtons.includes(buttonName)) {
      // If the button is already selected, remove it from the selectedButtons array
      setSelectedButtons((prevSelected) =>
        prevSelected.filter((name) => name !== buttonName)
      );
    } else {
      // If the button is not selected, add it to the selectedButtons array
      setSelectedButtons((prevSelected) => [...prevSelected, buttonName]);
    }
  };

  //  this is dummy data for the cards in this page

  const cardDataArray = [
    {
      imageSrc: "assets/card-img.png",
      title: "Basha Bakery & Restaurant",
      address: "73 Wilkinson Road",
      phone: "Phone (+232 76611000)",

      description:
        "um sit a. Sit ut dolor iaculis volutpat montes mauris nunc volutpat fermentum.",
    },
    {
      imageSrc: "assets/card-11.png",
      title: "Pa Sweet Bakery",
      address: "Basha Bakery & Resturant",
      phone: "Phone (+232 76611000)",

      description:
        "um sit a. Sit ut dolor iaculis volutpat montes mauris nunc volutpat fermentum.",
    },
    {
      imageSrc: "assets/card-12.png",
      title: "City Sandwich",
      address: "70 Wilkinson Road",
      phone: "Phone (+232 76611000)",

      description:
        "um sit a. Sit ut dolor iaculis volutpat montes mauris nunc volutpat fermentum.",
    },

    {
      imageSrc: "assets/card-img.png",
      title: "Basha Bakery & Restaurant",
      address: "73 Wilkinson Road",
      phone: "Phone (+232 76611000)",

      description:
        "um sit a. Sit ut dolor iaculis volutpat montes mauris nunc volutpat fermentum.",
    },
    {
      imageSrc: "assets/card-11.png",
      title: "Pa Sweet Bakery",
      address: "Basha Bakery & Resturant",
      phone: "Phone (+232 76611000)",

      description:
        "um sit a. Sit ut dolor iaculis volutpat montes mauris nunc volutpat fermentum.",
    },
    {
      imageSrc: "assets/card-12.png",
      title: "City Sandwich",
      address: "70 Wilkinson Road",
      phone: "Phone (+232 76611000)",

      description:
        "um sit a. Sit ut dolor iaculis volutpat montes mauris nunc volutpat fermentum.",
    },
  ];

  return (
    <Div>
      <Navbar />



<div className="search">
  <Search />
</div>
      <main>
        {/* <div className="">
          <Search />
        </div> */}

        {/* this the main section of this page   */}

        {/* the checkbox at the side starts here */}
        <div className="fill">
          {/* first checkbox section */}
          <div className="line-up">
            <h4 className="suggested">Suggested</h4>
            <form action="">
              <div className="check">
                <input type="checkbox" name="" id="checkbox" />
                <label htmlFor="checkbox">Open now</label>
              </div>

              <div className="check">
                <input type="checkbox" name="" id="checkbox1" />
                <label htmlFor="checkbox1">Today's Special</label>
              </div>

              <div className="check">
                <input type="checkbox" name="" id="checkbox2" />
                <label htmlFor="checkbox2">Dinners</label>
              </div>
              <div className="check">
                <input type="checkbox" name="" id="checkbox3" />
                <label htmlFor="checkbox3"> Reservation</label>
              </div>

              <div className="check">
                <input type="checkbox" name="" id="checkbox4" />
                <label htmlFor="checkbox4">Delivery</label>
              </div>
            </form>

            {/* categories */}

            <div className="cat">
              <h4 className="cat-head">Categories</h4>
              <div className="cat--1">
                <button
                  onClick={() => handleClick("Breakfast")}
                  style={{
                    background: selectedButtons.includes("Breakfast")
                      ? "green"
                      : "white",
                  }}
                >
                  Breakfast
                </button>
                <button
                  onClick={() => handleClick("Brunch")}
                  style={{
                    background: selectedButtons.includes("Brunch")
                      ? "green"
                      : "white",
                  }}
                >
                  Brunch
                </button>
              </div>
              <button
                className="cat--2"
                onClick={() => handleClick("Meal")}
                style={{
                  background: selectedButtons.includes("Meal")
                    ? "green"
                    : "white",
                }}
              >
                Traditional meals
              </button>

              <div className="cat--1">
                <button
                  onClick={() => handleClick("Lebanese")}
                  style={{
                    background: selectedButtons.includes("Lebanese")
                      ? "green"
                      : "white",
                  }}
                >
                  Lebanese
                </button>
                <button
                  onClick={() => handleClick("Chinese")}
                  style={{
                    background: selectedButtons.includes("Chinese")
                      ? "green"
                      : "white",
                  }}
                >
                  Chinese
                </button>
              </div>
            </div>
            {/* form 2 */}

            {/* last checkbox section */}

            <form action="" style={{ marginTop: 20 }}>
              <h4 className="suggested">Features</h4>
              <div className="check">
                <input type="checkbox" name="" id="checkbox-0" />
                <label htmlFor="checkbox-0">Child friendly</label>
              </div>

              <div className="check">
                <input type="checkbox" name="" id="checkbox-1" />
                <label htmlFor="checkbox-1">Pool</label>
              </div>

              <div className="check">
                <input type="checkbox" name="" id="checkbox-2" />
                <label htmlFor="checkbox-2">Outdoor Seating</label>
              </div>
              <div className="check">
                <input type="checkbox" name="" id="checkbox-3" />
                <label htmlFor="checkbox-3"> Free Wifi</label>
              </div>
            </form>
          </div>

          {/* the checkbox at the side ends here */}

          {/* card section in this page */}


          <div className="map-card-section">

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
            {/* card section ends here */}

            {/* map section ends here */}

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.2300359536!2d-13.275695224137722!3d8.47699909738354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf04c481ad63930d%3A0x956661af6bc1a91b!2sWilkinson%20Road%2C%20Freetown!5e0!3m2!1sen!2ssl!4v1690645005165!5m2!1sen!2ssl"
                className="map"
                height="1347"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* map section ends here */}
          </div>
        </div>
      </main>
    </Div>
  );
};

export default Find;

const Div = styled.div`
  margin-top: 5px;

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

  main {
    margin-top: 2.81rem;
  }
  // .search {
  //   border-radius: 15px;
  //   border: 2px solid #c7db00;
  //   background: #fff;
  // }

  .fill {
    margin-top: 2.81rem;
    display: flex;
    gap: 300px;
    width:100%;
  }

  .map-card-section {
   display: flex;
  gap: 50px;
  width:100%

  }

  .line-up {
    display: flex;
    flex-direction: column;
    margin-left: 2.38rem;
    margin-right: 2.38rem;
  }

  .check {
    display: flex;
    align-items: stretch;
    align-self: stretch;
    background-color: #fff;
    gap: 10px;
  }
  .check label {
    text-align: left;
    color: rgba(0, 0, 0, 0.7);
    font: 400 20px "Josefin sans", sans-serif;
  }

  .suggested {
    color: #000000;
    text-align: left;
    font: 600 21px "Josefin sans", sans-serif;
    text-decoration: underline;
    margin-bottom: 5px;
  }

  input[type="checkbox"] {
    accent-color: black;
  }

  .cat-head {
    color: #000000;
    text-align: left;
    font: 600 21px "Rubik", sans-serif;
    text-decoration: underline;
    margin-top: 41px;
    margin-bottom: 5px;
  }

  .cat--1 {
    display: flex;
    gap: 10px;
  }

  // .cat--1 p:active {
  //   background: red;
  // }

  .cat--1 button {
    color: rgba(0, 0, 0, 0.7);
    text-align: center;
    font: 400 20px "Josefin sans", sans-serif;
    padding: 4px 4px;
    border-radius: 18px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    background: #fff;
    max-width: 199px;
    margin-bottom: 5px;
    margin-top: 5px;
    cursor: pointer;
  }
  .cat--2 {
    color: rgba(0, 0, 0, 0.7);
    text-align: center;
    font: 400 20px "Josefin sans", sans-serif;
    padding: 4px 4px;
    border-radius: 18px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    background: #fff;
    max-width: 206px;
    cursor: pointer;
  }

  cardss {
    gap: 10px;

  }

  .card-header {
    display: flex;
    flex-direction: column;
    max-width:1000px;



  }

  .map-container {
    width: 100%;

  }

  .map {
    width: 100%;
  }

  .icon {
    color: black;
  }

  .search{
    display:none;
  }


  



  
  @media (max-width: 1024px) {
    .fill {
      margin-top: 2.81rem;
      display: flex;
      gap: 50px;
      width:100%;
    }




  }





  @media (max-width: 765px) {
    .map {
      display: none;
    }
    .line-up {
      display: none;
    }

    // .input1 {
      // border: 2px solid #c7db00;
    // }

    .drop {
      display: none;
    }

    .main-drop{
      display:none;
    }

    .map-container{
      display:none;
    }

    .cardss{
      margin:20px;

    }
    .search{
      display:block;
      margin:20px;
    }




  }
`;
