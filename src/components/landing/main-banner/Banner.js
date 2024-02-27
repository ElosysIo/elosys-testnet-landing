
import React from "react";
import "./banner.scss";
import "react-toastify/dist/ReactToastify.css";

const Banner = () => {
  return (
    <>
      <section className="main-banner">
        <img src="\assets\shadows\banner-bg.png" alt="img" className="img-fluid banner-bg" />
          <div className="custom-container">
            <div className="main-content">
              <h6>Privacy matters.</h6>
              <p>Find out more about the Elosys testnet or interact with it directly.</p>
              <a href="explorer.elosys.io" target="_blank" className="green-btn">Launch the Testnet</a>
            </div>
            <div className="wrapper-img">
              <img src="\assets\banner\banner-main.svg" alt="img" className="img-fluid" />
            </div>
          </div>
      </section>
    </>
  );
};

export default Banner;
