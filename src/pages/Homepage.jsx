import React from "react";
import Button from "../component/button";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="bg-hero-bg  bg-cover bg-no-repeat bg-center min-h-screen w-screen">
      <div className="h-screen bg-black/40 flex items-center relative text-white">
        <div className="lg:ml-4 px-4 pb-4 bg-black/20 xl:justify-center md:w-[50%] sm:w-[60%] xl:w-[40%] w-full mx-auto lg:mx-0 lg:h-[50%] h-[40%]  pt-4 absolute font-bold flex flex-col bottom-10">
          <div className="flex flex-row tracking-wider pb-2 lg:pb-4 items-center gap-4">
            <span className="h-4 w-4 bg-red-600 rounded-full"></span>
            <span className="uppercase text-sm lg:text-base font-serif">
              Your digital partner
            </span>
          </div>
          <h2 className="text-2xl leading-tight lg:text-4xl">
            Smart Digital Solutions, Real Business Growth
          </h2>

          <p className="lg:text-base text-sm">
            We provide end-to-end digital services tailored to drive innovation
            and efficiency
          </p>
          <div className="flex gap-2 lg:gap-4 pt-4 w-full px-4 sm:px-0 sm:flex-row flex-col">
            <Link to={"/contact"}>
              <Button title={"Get a consultation"} bg={"secondary"} />
            </Link>
            <Link to={"/contact"}>
              <Button title={"Get a consultation"} bg={"secondary"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
