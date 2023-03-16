import React from "react";
import logo from "../assets/logo.jpeg";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <div className="hero-img"></div>
      <div className="hero-container">
        <img src={logo} alt="" className="logo" />
        <h1 className="hero-text">It is time to fly through our Clouds...</h1>
        <a href="/store">
          <div className="hero-btn">Fly Now</div>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
