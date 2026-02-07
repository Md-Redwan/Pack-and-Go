import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCalendarMinus } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <section className="lg:bg-[url(assets/heroImg.png)] bg-center bg-cover bg-no-repeat px-5 lg:px-0">
      <div className="container font-poppins pb-20 lg:pb-33.75">
        <h1 className="w-75 lg:w-143.25 font-semibold pt-15 lg:pt-33.75 text-[40px] lg:text-[65px] leading-15 lg:leading-20">
            Start Exploring to Find Inner Peace by Traveling
        </h1>
        <p className="lg:w-149.25 leading-7.5 text-secondary mt-7.5 text-xl">
            Lost yourself with Vacation and Travel into the place that you never visit before. We have thousand places in our database for you.
        </p>
        <button className="font-semibold py-4 px-8.75 rounded-[17px] bg-primary text-white cursor-pointer mt-10">Discover Now</button>

        <div className="bg-white p-6 lg:w-fit mt-21 flex flex-col lg:flex-row gap-15 lg:items-center justify-center rounded-lg shadow-xl">
          <div>
            <div className="flex items-center gap-3.5 font-bold text-xl pb-2">
              <IoLocationOutline className="text-primary"/>
              <h5>Location</h5>
              <IoIosArrowDown className="text-primary"/>
            </div>
            <input type="text" placeholder="Enter your location" className="ml-8.5"/>
          </div>
          <div>
            <div className="flex items-center gap-3.5 font-bold text-xl pb-2">
              <FaRegCalendarMinus className="text-primary"/>
              <h5>Date</h5>
              <IoIosArrowDown className="text-primary"/>
            </div>
            <input type="text" placeholder="When you start?" className="ml-8.5"/>
          </div>
          <div>
            <div className="flex items-center gap-3.5 font-bold text-xl pb-2">
              <CiUser className="text-primary"/>
              <h5>People</h5>
              <IoIosArrowDown className="text-primary"/>
            </div>
            <input type="text" placeholder="How many people?" className="ml-8.5"/>
          </div>
          
          <button className="py-7.5 px-20 lg:p-7.5 bg-primary text-white rounded-lg cursor-pointer flex items-center justify-center gap-3">
            <h2 className="lg:hidden text-[22px]">Search</h2>
            <CiSearch className="text-[30px] lg:text-[22px]"/>
          </button>
        </div> 
      </div>
    </section>
  );
};

export default Hero;
