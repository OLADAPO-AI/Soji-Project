import React from "react";
import { FaCircleDot } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";

const CreativeSolutionHeroSection = () => {
  return (
    <section className="grid p-4 justify-center grid-cols-1 lg:grid-cols-4 lg:items-center gap-4 min-h-[100vh]">
      <div className="flex pt-20 lg:pt-10 lg:col-span-2 flex-col">
        <p className="flex flex-row items-center gap-4 pb-4 text-xs">
          <FaCircleDot className="text-red-400" />
          <span>Creative Solutions</span>
        </p>
        <h1 className="text-2xl h-28  lg:h-36  lg:text-5xl font-[500] text-white">
          <Typewriter
            words={[
              `Capture your users with a stunning and engaging website`,
              "Catch the eye of your users with clever and creative graphic design",
            ]}
            loop={true}
            cursor
            cursorStyle="<"
            typeSpeed={30}
            deleteSpeed={20}
            cursorColor="blue"
            delaySpeed={1000}
          />
        </h1>
        <p className="text-sm lg:text-base text-gray-300 pr-4 mt-4">
          For over a decade, we've crafted visually stunning websites that bring
          brands to life. Our expertise lies in designing user-centric,
          functional digital experiences and striking graphic design services.
          From brand identity to packaging and print solutions, we offer bespoke
          graphic design services tailored to elevate businesses across all
          industries.
        </p>
      </div>
      <div className="bg-bgImage8 h-[50vh] lg:h-[80vh] mt-12 lg:col-span-2 rounded-lg bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default CreativeSolutionHeroSection;
