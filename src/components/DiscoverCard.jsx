import React from 'react'
import { FaUser } from "react-icons/fa6";
import { ImTrophy } from "react-icons/im";
import { HiUserGroup } from "react-icons/hi2";
import { ImLocation2 } from "react-icons/im";


const DiscoverCard = () => {
  return (
    <div className='w-67.5 px-8 py-15.5 hover:bg-primary rounded-[17px] group'>
      <div className='w-18.5 py-5.5 px-5 hover:bg-white bg-[#e5f2ef] rounded-[14px]'>
        <FaUser className='text-[34.45px] text-primary'/>
      </div>
      <h5 className='hover:text-white text-[40px] font-semibold'>500k</h5>
      <p className='font-medium text-[25px] hover:text-white'>Satisfied Clients</p>
    </div>
  )
}

export default DiscoverCard
