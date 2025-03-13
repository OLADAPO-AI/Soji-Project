import React from "react";
import Button from "../component/button";

const Homepage = () => {
  return (
    <div className="bg-hero-bg bg-cover bg-no-repeat bg-center min-h-screen w-screen">
      <div className="h-screen bg-black/30 flex items-center relative text-text">
        <div className="lg:ml-4 px-4 pb-4 bg-neutral-600/30 lg:w-[50%] md:w-[50%] w-full mx-auto lg:mx-0 lg:h-[50%] h-[50%]  pt-12 absolute font-bold flex flex-col bottom-10">
          <div className="flex flex-row tracking-wider pb-4 items-center gap-8">
            <span className="h-5 w-5 bg-accent-dark rounded-full"></span>
            <span className="uppercase text-base lg:text-base font-serif">
              Your digital partner
            </span>
          </div>
          <h2 className="text-[32px] lg:text-[50px]">
            Smart Digital Solutions, Real Business Growth
          </h2>

          <p className="lg:text-[20px] text-[14px]">
            We provide end-to-end digital services tailored to drive innovation
            and efficiency
          </p>
          <div className="flex gap-2 lg:gap-4 pt-4 w-full  md:flex-row flex-col">
            <Button
              title={"Get a consultation"}
              bg={"secondary"}
              textsize={"20px"}
            />
            <Button title={"Get a consultation"} textsize={"20px"} bg={""} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
