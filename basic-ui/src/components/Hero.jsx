import React from "react";
import "../Css/Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="overlay">
        <h1>Welcome to Code Monks</h1>
        <p>
          We build awesome things. Ready to grow your brand?
          Let’s build <br></br>something great together.
        </p>
        <button>Explore Our Services</button>
      </div>
    </div>
  );
}

export default Hero;