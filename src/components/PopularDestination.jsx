import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import PopularDestinationCard from './PopularDestinationCard'
import PopularCardImg1 from '../assets/PopularCardImg1.png'
import PopularCardImg2 from '../assets/PopularCardImg2.png'
import PopularCardImg3 from '../assets/PopularCardImg3.png'
import PopularCardImg4 from '../assets/PopularCardImg4.png'
import PopularCardImg5 from '../assets/PopularCardImg5.png'

const PopularDestination = () => {

  function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="hidden w-11.5 h-11.5 bg-[#F5F5F5] rounded-full lg:flex justify-center items-center absolute top-75 right-5.5 cursor-pointer z-10"
      onClick={onClick}
    >
      <FiArrowRight className="text-2xl "/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="hidden w-11.5 h-11.5 bg-[#F5F5F5] rounded-full lg:flex justify-center items-center absolute top-75 left-5.5 cursor-pointer z-10"
      onClick={onClick}
    >
      <FiArrowLeft className="text-2xl "/>
    </div>
  );
}

 
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <div className='pb-37.5'>

    <div className="container font-poppins pt-20 lg:pt-37.5 pb-10 ">
      <h2 className="font-semibold text-[30px] lg:text-[40px] text-center">
        Popular Destination
      </h2>
      <p className="text-secondary lg:w-173 text-center mx-auto mt-5 pb-12.5">
        We are self-service data analytics software that lets you create
        visually appealing data visualizations and insightful dashboards in
        minutes.
      </p>
    </div>



    <Slider {...settings} className='flex gap-2'>
      <div>
        <PopularDestinationCard image={PopularCardImg1} heading="Mount Agung, Bali" description="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam" price="150"/>
      </div>
      <div>
        <PopularDestinationCard image={PopularCardImg2} heading="Venice, Italy" description="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam" price="150"/>
      </div>
      <div>
        <PopularDestinationCard image={PopularCardImg3} heading="Paris, France" description="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam" price="150"/>
      </div>
      <div>
        <PopularDestinationCard image={PopularCardImg4} heading="Santorini, Greece" description="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam" price="150"/>
      </div>
      <div>
        <PopularDestinationCard image={PopularCardImg5} heading="Lake Thun, Switzerland" description="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam" price="150"/>
      </div>
      <div>
        <PopularDestinationCard image={PopularCardImg3} heading="Mount Agung, Bali" description="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam" price="150"/>
      </div>

    </Slider>

    </div>
  )
}

export default PopularDestination
