// eslint-disable-next-line no-unused-vars
import React from "react";

import Hero from '../components/Hero'
import Card from "../components/Card-components/Card";
import Category from "../Category";
import Footer from "../components/Footer";




const HomePage = () => {
  return (
  <div>   

      <Hero />
      <Card  h1='Recent Activity' />
      <Card />
      <Card />
      <Category /> 
      <Footer />
  
    </div>
  );
};

export default HomePage;
