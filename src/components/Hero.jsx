import React from "react";
import heroImg from "../assets/heroImg.png";

const Hero = () => {
  return (
    <div className="bg-[url(assets/heroImg.png)] bg-center bg-cover bg-no-repeat px-5 lg:px-0">
      <div className="container font-poppins">
        <h1 className="w-75 lg:w-143.25 font-semibold pt-15 lg:pt-33.75 text-[40px] lg:text-[65px] leading-15 lg:leading-20">
            Start Exploring to Find Inner Peace by Traveling
        </h1>
        <p className="lg:w-149.25 leading-7.5 text-[#616161] mt-7.5 bg-white lg:bg-transparent rounded-lg">
            Lost yourself with Vacation and Travel into the place that you never visit before. We have thousand places in our database for you.
        </p>
        <button className="font-semibold py-4 px-8.75 rounded-[17px] bg-primary text-white cursor-pointer mt-10">Discover Now</button>   
      </div>
    </div>
  );
};

export default Hero;
