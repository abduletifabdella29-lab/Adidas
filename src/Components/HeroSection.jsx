import React from "react";
import herobg from "../Assests/Images/herobg.png";
import adidas from "../Assests/Icons/adidas.png";
import rightarrow from "../Assests/Icons/rightarrow.png";

function HeroSection() {
  return (
    <>
      <div
        className="mt-4 bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: `url(${herobg})` }}
      >
        <div>
          <h1 className="pt-40 pl-16 text-6xl font-bold bg-gradient-to-red from-red-500 via-black to-black bg-clip-text text-transparent">
            ADICLUB <br /> IS SHOWING OFF.
          </h1>

          <p className="pl-16 pt-5 text-2xl text-white">
            Exclusive releases for our members and more ways <br />
            to unlock those things that you love.
          </p>

          <p className="pl-16 pt-8">
            <a href="#" className="text-white font-extrabold text-3xl">
              <img
                src={rightarrow}
                alt="right-arrow"
                className="inline-block"
              />{" "}
              SEE MORE
            </a>
          </p>

          <p className="pl-16 pt-8">
            <a href="#" className="text-white font-extrabold text-3xl">
              <img
                src={rightarrow}
                alt="right-arrow"
                className="inline-block"
              />{" "}
              BUY NOW
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
