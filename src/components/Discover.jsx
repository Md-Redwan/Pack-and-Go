import React from 'react'
import { IoCheckmark } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { ImTrophy } from "react-icons/im";
import { HiUserGroup } from "react-icons/hi2";
import { ImLocation2 } from "react-icons/im";

import DiscoverCard from './DiscoverCard';


const Discover = () => {
  return (
    <div className='font-poppins py-37.5 bg-[#f4f4f4]'>
      <div className='container flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between '>
        <div className='w-auto lg:w-[35%]'>
            <h3 className='font-semibold text-[40px]'>Go Travel, Discover Remember Us</h3>
            <p className='leading-7.5 text-secondary mt-5'>
                We are self-service data analytics software that lets 
                you create visually appealing data visualizations and insightful dashboards in minutes.
            </p>
            <p className='flex gap-2.5 items-start text-secondary mt-2.5'>
                <IoCheckmark className='text-2xl text-primary'/>
                We are self-service data software visually  appealing data visualizations.
            </p>
            <p className='flex gap-2.5 items-start text-secondary mt-2.5'>
                <IoCheckmark className='text-2xl text-primary'/>
                We are self-service data software visually  appealing data visualizations.
            </p>
            <p className='flex gap-2.5 items-start text-secondary mt-2.5'>
                <IoCheckmark className='text-2xl text-primary'/>
                We are self-service data software visually  appealing data visualizations.
            </p>
            <div className='flex justify-center lg:justify-start'>
              <button className='py-4 px-9 bg-primary font-semibold rounded-[17px] mt-10 text-white cursor-pointer'>
                Discover Place
            </button>
            </div>
        </div>
        <div className='w-auto lg:w-[50%]'>
          <div className='flex flex-wrap items-center justify-center lg:justify-end gap-7.5'>
            <DiscoverCard cardIcon={<FaUser/>} cardPrice="500k+" cardTitle="Satisfied Clients"/>
            <DiscoverCard cardIcon={<ImTrophy/>} cardPrice="250+" cardTitle="Active Achieve"/>
            <DiscoverCard cardIcon={<HiUserGroup/>} cardPrice="15k+" cardTitle="Active Members"/>
            <DiscoverCard cardIcon={<ImLocation2/>} cardPrice="10k+" cardTitle="Tour Destination"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discover
