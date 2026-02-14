import React from 'react'
import { FaStar } from "react-icons/fa";


const PopularDestinationCard = ({image, heading, description, price}) => {
  return (
    <div className='w-auto h-auto xl:w-87 xxl:w-92.5 lg:h-148 p-5 shadow-lg rounded-lg my-5'>
      <img src={image} alt="" />
      <div className='flex items-center gap-2.5 mt-8.75 text-[#FF8B00]'>
        <div className='text-[#E0E0E0] flex items-center gap-1.5'>
            <FaStar className='text-[#FF8B00]'/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
        </div>
        <p>5 review</p>
      </div>
      <h4 className='text-[25px] mt-4.25 leading-6 font-medium'>{heading}</h4>
      <p className='text-secondary leading-7.5 my-5'>{description}</p>
      <h5 className='font-semibold text-xl leading-6'>${price} <span className='text-secondary font-normal text-[16px]'>/ Person</span></h5>
      <button className='py-2.5 px-9 bg-primary text-white rounded-[17px] mt-7.5 cursor-pointer'>Book Now</button>
    </div>
  )
}

export default PopularDestinationCard
