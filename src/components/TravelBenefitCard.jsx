import React from 'react'

const TravelBenefitCard = ({BenefitCardHeading, BenefitCardDescription, BenefitCardImage}) => {
  return (
    <div className='w-auto md:w-[47%] lg:w-[30%] font-poppins rounded-[14px] py-15.75 px-13.5 hover:shadow-rounded hover:transform transition delay-50 duration-250 ease-in-out'>
      <img src={BenefitCardImage} alt="" />
      <h4 className='font-semibold text-[25px] leading-6 mt-10 mb-5'>{BenefitCardHeading}</h4>
      <p className='w-auto lg:w-65.75 leading-7.5 text-secondary font-medium'>{BenefitCardDescription}</p>
    </div>
  )
}

export default TravelBenefitCard
