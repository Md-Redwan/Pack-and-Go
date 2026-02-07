import React from "react";
import TravelBenefitCard from "./TravelBenefitCard";
import BenefitCardImg1 from "../assets/BenefitCardImg1.png";
import BenefitCardImg2 from "../assets/BenefitCardImg2.png";
import BenefitCardImg3 from "../assets/BenefitCardImg3.png";
import BenefitCardImg4 from "../assets/BenefitCardImg4.png";
import BenefitCardImg5 from "../assets/BenefitCardImg5.png";
import BenefitCardImg6 from "../assets/BenefitCardImg6.png";

const TravelBenefit = () => {
  return (
    <div className="container font-poppins pt-20 lg:pt-37.5 pb-10">
      <h2 className="font-semibold text-[30px] lg:text-[40px] text-center">
        Travel Benefit For User
      </h2>
      <p className="text-secondary lg:w-173 text-center mx-auto mt-5 pb-28">
        We are self-service data analytics software that lets you create
        visually appealing data visualizations and insightful dashboards in
        minutes.
      </p>
      <div className="flex justify-center flex-wrap gap-7.5">
        <TravelBenefitCard
          BenefitCardImage={BenefitCardImg1}
          BenefitCardHeading="Cheap than Other"
          BenefitCardDescription="Travelya is cheaper than other travel agency."
        />
        <TravelBenefitCard
          BenefitCardImage={BenefitCardImg2}
          BenefitCardHeading="Secure Payment"
          BenefitCardDescription="You can pay your book without doubt again."
        />
        <TravelBenefitCard
          BenefitCardImage={BenefitCardImg3}
          BenefitCardHeading="Easy To Book"
          BenefitCardDescription="Follow flow, Click, Pay. Wait just wait e-ticket."
        />
        <TravelBenefitCard
          BenefitCardImage={BenefitCardImg4}
          BenefitCardHeading="24/7 Support"
          BenefitCardDescription="We’re ready help you anytime and anywhere you are."
        />
        <TravelBenefitCard
          BenefitCardImage={BenefitCardImg5}
          BenefitCardHeading="Best Offers"
          BenefitCardDescription="Inform you about all best offers for all destination."
        />
        <TravelBenefitCard
          BenefitCardImage={BenefitCardImg6}
          BenefitCardHeading="Fast Refund"
          BenefitCardDescription="If you canceled. We can refund your money 1*12."
        />
      </div>
    </div>
  );
};

export default TravelBenefit;
