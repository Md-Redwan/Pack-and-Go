import React from 'react'

const TopDestination = () => {
  return (
    <div className='container pt-35'>
      <h2 className='font-semibold text-[30px] md:text-[35px] lg:text-[40px] text-center lg:text-left'>Explore Top Destination</h2>
      <p className='text-secondary leading-7.5 text-center lg:text-left w-auto lg:w-121.25 mt-5'>We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.</p>
      <div>
        <ul className='flex gap-7.5'>
          <li><button className='py-4 px-8.75 rounded-[17px] bg-[#F3F3F3] hover:bg-primary hover:text-white font-medium lg:font-semibold'>Popular Destination</button></li>
          <li><button className='py-4 px-8.75 rounded-[17px] bg-[#F3F3F3] hover:bg-primary hover:text-white font-medium lg:font-semibold'>Destination For Art & Culture</button></li>
          <li><button className='py-4 px-8.75 rounded-[17px] bg-[#F3F3F3] hover:bg-primary hover:text-white font-medium lg:font-semibold'>Destination For Outdoor Adventer</button></li>
          <li><button className='py-4 px-8.75 rounded-[17px] bg-[#F3F3F3] hover:bg-primary hover:text-white font-medium hover:font-semibold'>Mountain</button></li>
          <li><button className='py-4 px-8.75 rounded-[17px] bg-[#F3F3F3]  hover:bg-primary hover:text-white font-medium hover:font-semibold'>Beach Destination</button></li>
        </ul>
      </div>
    </div>
  )
}

export default TopDestination
