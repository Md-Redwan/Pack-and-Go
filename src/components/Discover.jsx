import React from 'react'
import { IoCheckmark } from "react-icons/io5";


const Discover = () => {
  return (
    <div className='font-poppins py-37.5 bg-[#f4f4f4]'>
      <div className='container flex justify-between'>
        <div className='w-[35%]'>
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
            <button className='py-4 px-9 bg-primary font-semibold rounded-[17px] mt-10 text-white cursor-pointer'>
                Discover Place
            </button>
        </div>
        <div className='w-[50%]'></div>
      </div>
    </div>
  )
}

export default Discover
