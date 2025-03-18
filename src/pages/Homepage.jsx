import React from "react";
import { Link } from "react-router-dom";
import LogoSlider from "../component/slider";
import Footer from "../component/Footer";
import TestimonilaGrid from "../component/TestimonialGrid";
import { ImAirplane } from "react-icons/im";
import ImpressionCard from "../component/impressionCard";
import { OurServices } from "./servicesPage";
import { FaDotCircle } from "react-icons/fa";
import { insightData } from "../data";
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
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {OurServices[0].serviceList.map((service, index) => (
                <div key={index} className="relative group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-52 object-cover rounded-3xl group-hover:opacity-80 transition"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <h3 className="text-white text-lg font-semibold">
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
              {OurServices[1].SpecializedServiceList.map((service, index) => (
                <div key={index} className="relative group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-52 object-cover rounded-3xl group-hover:opacity-80 transition"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <h3 className="text-white text-lg font-semibold">
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
              <div className=" w-full h-52 object-cover group-hover:opacity-80 transition sm:col-span-2 col-span-1 from-secondary via-accent to-secondary backdrop-blur-xl rounded-3xl bg-gradient-to-bl flex flex-col px-4">
                <h3 className="text-center mt-8 sm:text-3xl lg:text-4xl text-2xl font-bold">
                  Need a technical solution?
                </h3>
                <Link
                  to={"/getintouch"}
                  className="bg-black/60 w-full rounded-2xl shadow-lg py-3 mt-12 shadow-black/70 hover:bg-black/50 hover:text-white/80 text-center text-xl font-bold"
                >
                  Reach out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* featured  */}
      <div className=" min-h-screen w-screen text-neutral-50">
        featured post
      </div>
      {/* portfolio */}
      <section className=" min-h-screen w-screen text-neutral-50">
        portfolio{" "}
      </section>
      {/* blog */}
      <section className=" min-h-screen  w-screen text-neutral-50">
        blog
      </section>
      {/* Testimonial and Gett to know section */}
      <section className="h-auto bg-black/50 text-white  w-screen rounded-[40px] overflow-hidden">
        <div className="rounded-2xl">
          <div className="flex flex-col justify-between align-middle gap-4 lg:pt-16 pt-10">
            <h2 className="text-4xl text-start lg:text-5xl font-bold leading-tight lg:col-span-3 px-8">
              Testimonials and reviews
            </h2>
            <div className="h-auto pt-2 w-full flex flex-col lg:flex-row gap-4 justify-center items-center lg:gap-8 lg:justify-between lg:items-start">
              {/* Slider Container */}
              <div className="w-screen ">
                <TestimonilaGrid />
              </div>
            </div>
            <div className=" h-auto w-screen">
              <ImpressionCard />
            </div>
          </div>
        </div>
      </section>
      {/* latest insigth */}
      <section className="min-h-screen bg-white/90 rounded-t-3xl pt-20 lg:px-20 px-6 sm:px-10">
        <div className="flex flex-col divide-y-[1px] divide-gray-300 w-full">
          <div className="pb-8">
            <div className="flex text-secondary items-center flex-row gap-4 text-sm font-semibold">
              <FaDotCircle />
              <span className="uppercase text-gray-500">Featured News</span>
            </div>
            <div className="pt-4 font-bold text-3xl capitalize">
              latest news and insights
            </div>
          </div>

          {insightData.map((data, i) => {
            return (
              <Link
                key={i}
                to={data.link}
                className="grid lg:gap-20 md:gap-10 gap-2 py-8 grid-cols-1 md:grid-cols-5"
              >
                <div className="md:col-span-2 ">
                  <img
                    src={data.image}
                    className="h-[200px] rounded-xl w-full lg:w-4/5"
                  />
                </div>
                <div className="md:col-span-3 py-2 relative ">
                  {data.category && (
                    <div className="flex text-secondary items-center flex-row md:py-3 gap-4 text-sm font-semibold">
                      <FaDotCircle />
                      <span className="uppercase text-gray-500">
                        {data.category}
                      </span>
                    </div>
                  )}
                  <h2 className="md:pt-4 pb-2 hover:underline text-base lg:text-lg font-semibold tracking-wider font-sans">
                    {data.title}
                  </h2>
                  <div className="flex md:pt-10 mt-auto flex-row ">
                    <img
                      src={data.authorImg}
                      alt={data.author}
                      className="w-12 h-12 mr-4 rounded-full "
                    />
                    <p className="rounded-xl  bg-white text-center px-4 my-auto py-1 ml-2 text-gray-500 text-sm">
                      {data.author}
                    </p>
                    <p className="rounded-xl  bg-white text-center px-4 my-auto py-1 ml-2 text-gray-500 text-sm">
                      {data.datePosted}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
