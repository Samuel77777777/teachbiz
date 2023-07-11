// eslint-disable-next-line no-unused-vars
import React from "react";
import "./nav.css";

const Search = () => {
  return (
    <div className="search">
      <div className="input1">
        <img src="/assets/search.png" alt="" />
        <input type="search" placeholder="search" />
      </div>
      
      <div className="input2">
        <img src="/assets/location.png" alt="" className="img" />
        <input type="search" placeholder="Location" />
      </div>
    </div>
  );
};

export default Search;
