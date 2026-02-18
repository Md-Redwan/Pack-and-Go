import React from 'react'
import SelectedDestinationImg1 from '../assets/SelectedDestinationImg1.png'

const ChooseUs = () => {
  return (
    <div className='container pt-37.5 font-poppins'>
        {/* Selected Destination Part is start */}
      <div className='flex flex-col-reverse lg:flex-row justify-between items-center'>
        <div className='w-auto lg:w-[40%]'>
            <h4 className='font-semibold text-[30px] md:text-[35px] lg:text-[40px] text-center lg:text-left mt-10 lg:mt-0'>
                We have more than 1000 selected Destination
            </h4>
            <p className='text-secondary leading-7.5 mt-5 mb-10 text-center lg:text-left'>
                You can choose one of many option that we have on our website. Every destination have been 4+ star rated by our user before. You can search by clicking our button on below of the this text man.
            </p>
            <div className='flex justify-center lg:justify-start'>
                <button className='py-4 px-8.75 bg-primary text-white rounded-[17px] font-semibold cursor-pointer'>
                    Search Destination
                </button>
            </div>
        </div>
        <div className='w-auto lg:w-[50%]'>
            <img src={SelectedDestinationImg1} alt="" />
        </div>
        {/* Selected Destination Part is end */}

      </div>
    </div>
  )
}

export default ChooseUs
