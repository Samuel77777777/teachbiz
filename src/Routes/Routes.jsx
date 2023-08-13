// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ResturantHompage from "../Pages/ResturantHompage";
// import ResturantHompage from "../Pages/ResturantHompage";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/Signup";
import Otp from "../components/Auth/Otp";
import Find from "../Pages/Find";
import HotelHompage from "../Pages/HotelHompage";
import Pharmarcy from "../Pages/Pharmarcy";
import Ngo from "../Pages/Ngos";

const Routess = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/resturant" element={<ResturantHompage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/find" element={<Find />} />
          <Route path="/hotel" element={<HotelHompage />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/pharmarcy" element={<Pharmarcy />} />
          <Route path="/ngo" element={<Ngo />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routess;
