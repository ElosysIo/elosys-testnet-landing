// import logo from './logo.svg';
import '../../App.scss';
import React, { useState, useEffect } from "react";
import Banner from './main-banner/Banner.js';
import Navbar from './header/Navbar';
import Testnet from './Testnet/Testnet.js';
import Twice from './Twice/Twice.js';
import Interested from './Interested/Interested.js';
import Footer from './footer/Footer.js';



function Landing() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      <Navbar />
      <Banner />
      <Testnet />
      <Twice />
      <Interested />
      <Footer/>
    </>
  );
}

export default Landing;