import React from "react";
import { FaCircleDot } from "react-icons/fa6";
import Slider from "../slider/slider";

const DigitalHeroSection = () => {
  return (
    <section className="relative pt-20 p-4  w-full overflow-hidden grid grid-cols-1 lg:grid-cols-2 h-screen bg-black gap-4">
      <div className="col-span-1 flex flex-col justify-center">
        <p className="flex flex-row pt-4 items-center gap-4 pb-4 text-xs">
          <FaCircleDot className="text-red-400" />
          <span>Digital Marketing</span>
        </p>

        <h1 className="text-3xl lg:text-5xl font-[500] text-white">
          Strategic Marketing, All in One Place
        </h1>

        <h2 className="text-base lg:text-lg text-blue-300 mt-2 font-medium">
          Elegant marketing. Unified delivery.
        </h2>

        <p className="text-sm lg:text-base text-gray-300 w-4/5 mt-4">
          Our full-service marketing retainer is designed to provide end-to-end
          support across digital channels. From strategy and execution to
          reporting and optimisation, we cover every aspect to help you meet
          your business goals effectively.
        </p>
      </div>

      <div className="col-span-1 h-[50vh] lg:h-[80vh]">
        <Slider />
      </div>
    </section>
  );
};

export default DigitalHeroSection;
