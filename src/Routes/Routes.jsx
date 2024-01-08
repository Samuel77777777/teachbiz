// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginHomePage from "../Pages/LoginHomePage";
import ResturantHompage from "../Pages/ResturantHompage";
// import ResturantHompage from "../Pages/ResturantHompage";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/Signup";
import Otp from "../components/Auth/Otp";
import Find from "../Pages/Find";
import HotelHompage from "../Pages/HotelHompage";
import Pharmarcy from "../Pages/Pharmarcy";
import Ngo from "../Pages/Ngos";
import ForgetPassword from "../components/Auth/ForgetPassword";
import ResetPassword from "../components/Auth/ResetPassword";
import ReviewCard from "../components/ReviewCard";
import EditAccount from "../components/accountsettingcomponents/EditAccount";
import MainFavoritePage from "../Pages/MainFavoritePage";
import Sidebar from "../components/nav-component/Sidebar";
import NewSidebar from "../components/nav-component/newSidebar";

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
          <Route path="/forgotpassword" element={<ForgetPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/review" element={<ReviewCard />} />
          <Route path="/loginhompage" element={<LoginHomePage />} />
          <Route path="/editaccount" element={<EditAccount />} />
          <Route path="/mainfavoritepage" element={<MainFavoritePage />} />
          <Route path="/sidebar" element={<NewSidebar />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routess;
