import React from 'react'
import SelectedDestinationImg1 from '../assets/SelectedDestinationImg1.png'
import SelectedDestinationImg2 from '../assets/SelectedDestinationImg2.png'
import { IoCheckmarkSharp } from "react-icons/io5";


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
        <div className='w-auto lg:w-[50%] lg:flex lg:justify-end'>
            <img src={SelectedDestinationImg1} alt="" />
        </div>
      </div>
        {/* Selected Destination Part is end */}

        {/* Promo every month part is start */}
        <div className='container flex-col gap-10 lg:gap-0 lg:flex-row flex lg:justify-between lg:items-center pt-22 lg:pt-17.5'>
            <div className='w-auto lg:w-[50%]'>
                <img src={SelectedDestinationImg2} alt="" />
            </div>
            <div className='w-auto lg:w-[50%] flex flex-col items-end text-start'>
                <h2 className='font-semibold lg:w-130 w-auto text-[30px] md:text-[35px] lg:text-[40px] text-center lg:text-start'>Always give you promo on every Month / Event</h2>
                <p className='lg:w-130 w-auto leading-7.5 text-secondary my-5 text-center lg:text-start'>
                    We make sure give you a lot of promo every motnh or event based on calendar. If you want, just Subscribe on Newsletter.
                </p>
                <div className='lg:w-130 w-auto gap-x-7 gap-y-3.75 text-secondary flex flex-wrap justify-center lg:justify-normal'>
                    <p className='flex items-center gap-2.5 leading-7.5'>
                        <IoCheckmarkSharp className='text-primary'/>
                        25% for New Members
                    </p>
                    <p className='flex items-center gap-2.5 leading-7.5'>
                        <IoCheckmarkSharp className='text-primary'/>
                        Cancelled refund 100%
                    </p>
                    <p className='flex items-center gap-2.5 leading-7.5'>
                        <IoCheckmarkSharp className='text-primary'/>
                        Up 50% on your birthday
                    </p>
                    <p className='flex items-center gap-2.5 leading-7.5'>
                        <IoCheckmarkSharp className='text-primary'/>
                        Reward for 1000% Points
                    </p>
                    <p className='flex items-center gap-2.5 leading-7.5'>
                        <IoCheckmarkSharp className='text-primary'/>
                        Cashback 10% via OVO
                    </p>
                </div>
            </div>
        </div>
        {/* Promo every month part is end */}
    </div>
  )
}

export default ChooseUs
