import React from "react";
import { Link } from "react-router-dom";
import LogoSlider from "../component/slider";
import Footer from "../component/Footer";
import TestimonilaGrid from "../component/TestimonialGrid";
import ImpressionCard from "../component/impressionCard";
import { ServiceList } from "./services";
import InsightsSection from "../component/insightSection.jsx";
import FAQSection from "../component/faq.jsx";

const Homepage = () => {
  return (
    <div className=" max-w-[100vw] overflow-x-hidden">
      {/* hero page */}
      <div
        id="hero"
        className="bg-hero-bg bg-cover bg-no-repeat bg-center overflow-hidden min-h-screen w-[100vw]"
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
      <div className="min-h-screen w-screen bg-[#f1f1f1]">
        <div className="px-4 lg:pt-24 lg:w-4/5 mx-auto pt-10 ">
          <div className="grid lg:grid-cols-5 col-span-1 gap-4">
            <h2 className="text-4xl  text-slate-900 lg:text-5xl font-bold leading-tight lg:col-span-3">
              Software development services
            </h2>
            <p className="lg:col-span-2 font-semibold text-slate-500 leading-normal">
              At Joroservices, we provide end-to-end IT and digital services
              designed to drive innovation and efficiency across industries.
              Whether you need expert support to bridge skill gaps, accelerate
              project timelines, or scale your digital operations, we deliver
              tailored solutions to enhance your technological capabilities and
              achieve your business objectives.
            </p>
          </div>
          {/* services card */}
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ServiceList.map((service, index) => (
                <div key={index} className="relative group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-52 object-cover rounded-3xl group-hover:opacity-80 transition"
                  />
                  <div className="absolute inset-0 bg-accent/40 flex items-center justify-center rounded-3xl opacity-0 group-hover:opacity-100 transition">
                    <h3 className="text-white text-lg font-semibold">
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}

              <div className=" w-full h-52 object-cover group-hover:opacity-80 transition sm:col-span-2 col-span-1 bg-[#46868f] backdrop-blur-xl rounded-3xl relative bg-gradient-to-bl flex justify-center flex-col px-4">
                <h3 className="text-center text-white sm:text-3xl lg:text-4xl text-lg leading-tight font-bold">
                  Innovative Digital Agency
                </h3>
                <p className=" text-white/80 text-center lg:text-base text-sm pt-2 pb-2 lg:pb-4">
                  Offering insights and guidance to refine and elevate your
                  digital products
                </p>
                <Link
                  to={"/getintouch"}
                  className="bg-accent rounded-2xl shadow-md py-2 lg:py-3 lg:mt-4 shadow-white hover:bg-accent-dark duration-200 ring-offset-2 ring-cya-500 ring-1 text-white text-center text-base lg:text-xl px-4 font-bold items-center w-full flex-row  justify-center md:mt-8  mt-2"
                >
                  <span>Free Consulting 30 min</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial and Gett to know section */}
      <section className="h-auto bg-slate-900 pb-20  w-screen rounded-[40px] overflow-hidden">
        <div className="rounded-2xl">
          <div className="flex flex-col justify-between align-middle gap-4 lg:pt-16 pt-10">
            <h2 className="text-4xl mx-auto text-white text-start lg:text-5xl font-bold leading-tight lg:col-span-3 px-8">
              Testimonials and reviews
            </h2>
            <div className="h-auto pt-2 w-full  flex flex-col lg:flex-row gap-4 justify-center items-center lg:gap-8 lg:justify-between lg:items-start">
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
      <InsightsSection />

      {/* Faq section */}
      <FAQSection />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
