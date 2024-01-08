// eslint-disable-next-line no-unused-vars
// import { React, useState } from "react";
// import "./nav.css";
import { styled } from "styled-components";
// import { useHistory } from "react-router-dom";

const Search = () => {
  // this is the glodal searchbar

  return (
    <Div>
      <form action="">
        <div className="input1">
          <img src="assets/ser.png" alt="" />
          <input
            type="search"
            placeholder="Place to go"
            // value={selected}
            // onChange={handleSelections}
          />
        </div>
        <div className="deep">
          <select
            name=""
            id="dropdown"
            // value={selected}
            // onChange={handleSelections}
            defaultValue={"Filter by"}
          >
            <option value="" disabled selected hidden>
              {" "}
              Filer by <img src="assets/arrowdown.png" alt="" />{" "}
            </option>
            <option value="Freetown">Freetown</option>
            <option value="Makeni">Makeni</option>
          </select>
        </div>

        <button type="submit" style={{ display: "none" }}></button>
      </form>
    </Div>
  );
};

export default Search;

const Div = styled.div`
  form {
    border: 2px solid black;
    display: flex;
    align-items: center;
    max-width: 589px;
    margin: 0 auto;
    border-radius: 15px;
    border: 1px solid #c7db00;
    background: #fff;
    padding: 0 10px;
    gap: 0;
  }

  .input1 {
    display: flex;
    width: 70%;
    align-items: center;
    background: white;
    border-right: 1px solid rgba(0, 0, 0, 0.38);
  }

  .input1 input {
    width: 100%;
    padding: 16px 42px;
    justify-content: center;
    border: none;
    font: 300 19px "Josefin sans", sans-serif;
    border-radius: 15px;
    text-align: center;
    outline: none;
  }

  .input1 img {
    width: 18px;
    height: 18px;
  }

  .deep {
    width: 40%;
    border-radius: 15px;
    border: none;
    display: flex;
  }
  .deep select {
    width: 100%;
    padding: 16px 20px 16px 20px;
    border-radius: 15px;
    border: none;
    text-align: center;
    color: rgba(0, 0, 0, 0.38);
    font: 300 19px "Josefin sans", sans-serif;
    outline: none;

  }
  .deep select option {
    text-align: left;
  
  }
`;

// const Search = () => {
//   return (
//     <Div className="search">
//       <div className="input1">
//         <img src="/assets/search.png" alt="" />
//         <input type="search" placeholder="Place to go" />
//       </div>

//       <div className="input1">
//         <img src="/assets/location.png" alt="" className="img" />
//         <input type="search" placeholder="Wilkinson Road" />
//       </div>
//     </Div>
//   );
// };

// export default Search;

// const Div = styled.div`
//   display: flex;

//   align-items: center;
//   width: 100%;
//   max-width: 63.9375rem;
//   height: 3.8125rem;
//   border-radius: 0.9375rem;
//   border: 2px solid #c7db00;
//   background: #fff;
//   margin: 0 auto;
//   justify-content: space-evenly;
//   padding: 10px;

//   .input1 {
//     margin-left: 10px;
//     display: flex;
//     align-items: center;
//     justify-content: start;
//     margin-bottom: 1rem;
//     background-color: #fff;
//     border-radius: 0.9375rem;

//     @media (min-width: 768px) {
//       margin-bottom: 0;
//     }
//   }
//   .input1 input {
//     outline: none;
//     border: none;
//     color: #000;
//     text-align: center;
//     font-size: 18px;
//     font-family: "Josefin sans", sans-serif;
//     font-style: normal;
//     font-weight: 200;
//     padding: 1rem;
//     background: #fff;
//     padding: 1rem 2.625rem;

//     @media (max-width: 768px) {
//       padding: 1rem 2.625rem;
//     }
//   }

//   .input2 input {
//     outline: none;
//     border: none;
//     color: rgba(0, 0, 0, 0.38);
//     text-align: center;
//     font-size: 18px;
//     font-family: "rubik" san-serif;
//     font-style: normal;
//     font-weight: 300;
//     padding: 1rem 2.625rem;
//     background: #fff;
//   }

//   .img {
//     width: 18px;
//     height: 18px;
//   }

//   p {
//     color: rgba(0, 0, 0, 0.38);
//     font-family: rubik;
//     font-size: 1.25rem;
//     font-style: normal;
//     font-weight: 400;
//     line-height: normal;
//   }

//   @media (max-width: 768px) {
//     display: flex;
//     flex-direction: column;
//     width: 0;
//     margin-top: 50px;

//     .input1 {
//       padding-left:10px;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       margin-bottom: 1rem;
//       background-color: white;

//     }

//     .input1 input {
//     outline: none;
//     border: none;
//     color: #000;
//     text-align: center;
//     font-size: 18px;
//     font-family: "Josefin sans", sans-serif;
//     font-style: normal;
//     font-weight: 200;
//     padding: 1.5rem;
//     background: #fff;
//     padding: 1rem 2.625rem;
//     border-radius: 1.9375rem;

//   }
// `;
