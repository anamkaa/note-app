import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="ff-hero-wrap">
        <div className="ff-hero-container-main flex flex-row-rev flex-wrap flex-justify-space-evenly flex-align-center">
          <div className="ff-hero-container-img">
            <img
              src="../assets/noteHero.svg"
              className="image image-md ff-hero-img"
              alt="hero-img"
            />
          </div>

          <div className="ff-hero-container-text flex flex-col text-left flex-align-start">
            <p className="ff-hero-text-box">
              <p className="h6 text-black"> WE ARE NOTING </p>
              <p className="h1">KEEP NOTES </p>
              <p className="h1">
                WITH <span className="text-black"> NOTEAPP</span>
              </p>
            </p>
            <Link to="/noteTaking">
              <button class="btn btn-warning-ghost ff-btn-primary btn-lg">
                NOTE NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
