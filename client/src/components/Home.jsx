import React from "react";
import "./Home.css";

const Home=()=>{
  return (
    <div className="home-container">
      <div className="background-image"></div>
      <div className="welcome-message">
        <h1 className="title">Welcome to our website</h1>
        <p className="subtitle">Explore and comunicate with your friends</p>
        <button className="button">
          precedent
        </button>
      </div>
    </div>
  );
}

export default Home;
