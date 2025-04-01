import React from "react";
import { FaCircleDot } from "react-icons/fa6";

const DevHeroSection = () => {
  return (
    <section className="grid p-4 justify-center grid-cols-1 lg:grid-cols-5 lg:items-center gap-4 min-h-[100vh]">
      <div className="flex pt-16 lg:col-span-3 flex-col">
        <p className="flex flex-row items-center gap-4 pb-4 text-xs">
          <FaCircleDot className="text-red-400" />
          <span>Development</span>
        </p>
        <h1 className="text-3xl lg:text-5xl font-[500] text-white">
          Build Your Digital Presence <br />
          with JoroServices
        </h1>
        <p className="text-sm lg:text-base text-gray-300 w-4/5 mt-4">
          Partnering with us means getting a website that truly represents your
          brand, highlights your strengths, and leaves a lasting impression on
          your visitors.
        </p>
      </div>
      <div className="bg-bgImage3 h-[40vh] lg:h-[50vh] mt-8 lg:col-span-2 rounded-lg bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default DevHeroSection;
