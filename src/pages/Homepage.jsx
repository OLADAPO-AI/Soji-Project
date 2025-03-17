import React from "react";
import { Link } from "react-router-dom";
import LogoSlider from "../component/slider";
import Footer from "../component/Footer";

const Homepage = () => {
  return (
    <div>
      {/* hero page */}
      <div
        id="hero"
        className="bg-hero-bg bg-cover bg-no-repeat bg-center overflow-hidden min-h-screen w-screen"
      >
        <div className="h-screen bg-black/40 flex flex-col items-center justify-center relative text-white">
          {/* Centered Content Container */}
          <div className="px-4 sm:px-6 lg:px-8 text-center w-full max-w-4xl mx-auto">
            {/* Red Dot and "Your Digital Partner" */}
            <div className="flex flex-row justify-center items-center gap-4 mb-6">
              {/* <span className="h-4 w-4 bg-red-600 rounded-full"></span>
            <span className="uppercase text-lg lg:text-xl font-serif tracking-wider">
              Your digital partner
            </span> */}
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Smart Digital Solutions, Real Business Growth
            </h2>

            {/* Subheading */}
            <p className="text-lg lg:text-xl mb-8">
              We provide end-to-end digital services tailored to drive
              innovation and efficiency
            </p>
            <div className="flex justify-center gap-4 flex-col sm:flex-row">
              <Link to={"/getintouch"}>
                <div className="text-lg lg:text-xl px-9 py-4  before:bg-accent hover:bg-accent-dark  p-3 rounded-xl bg-accent text-white transition duration-300 ease-in-out font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
                  Get a consultation
                </div>
              </Link>
            </div>
          </div>
          <LogoSlider />
        </div>
      </div>

      {/* services section */}
      <div className="min-h-screen w-screen  text-neutral-50 bg-[#55412688]">
        <div className="px-4 lg:pt-24 w-4/5 mx-auto pt-10 ">
          <div className="grid lg:grid-cols-5 col-span-1 gap-4">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight lg:col-span-3">
              Software development services
            </h2>
            <p className="lg:col-span-2 leading-normal">
              At Timspark, we provide comprehensive software development
              services designed to empower businesses across industries. Whether
              you need to fill skill gaps, meet deadlines, or scale operations,
              we offer tailored solutions to transform your digital capabilities
              and achieve your business goals.
            </p>
          </div>
          {/* services card */}
          <div></div>
        </div>
      </div>

      {/* featured post section */}
      <div className=" min-h-screen w-screen text-neutral-50">
        featured post
      </div>
      <div className=" min-h-screen w-screen text-neutral-50">portfolio </div>
      <div className=" min-h-screen w-screen text-neutral-50">blog</div>
      <div className=" min-h-screen w-screen text-neutral-50">metrics</div>
      <Footer />
    </div>
  );
};

export default Homepage;
