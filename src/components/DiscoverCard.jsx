import React from 'react'



const DiscoverCard = ({cardIcon,cardPrice,cardTitle}) => {
  return (
    <div className='transition ease-in-out w-67.5 px-8 py-15.5 hover:bg-primary rounded-[17px] group bg-white'>
      <div className='w-18.5 py-5.5 px-5 group-hover:bg-white bg-[#e5f2ef] rounded-[14px] text-[34.45px] text-primary'>
        {cardIcon}
      </div>
      <h5 className='group-hover:text-white text-[40px] font-semibold'>{cardPrice}</h5>
      <p className='font-medium text-[25px] group-hover:text-white'>{cardTitle}</p>
    </div>
  )
}

export default DiscoverCard
