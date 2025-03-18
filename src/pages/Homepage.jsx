import React from 'react'
import { Link } from 'react-router-dom'
import LogoSlider from '../component/slider'
import Footer from '../component/Footer'
import TestimonilaGrid from '../component/TestimonialGrid'
import { ImAirplane } from 'react-icons/im'
import ImpressionCard from '../component/impressionCard'
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
              <Link to={'/getintouch'}>
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
                    className="w-full h-40 object-cover rounded-lg group-hover:opacity-80 transition"
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
                    className="w-full h-52 object-cover rounded-lg group-hover:opacity-80 transition"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <h3 className="text-white text-lg font-semibold">
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* featured  */}
      <div className=" min-h-screen w-screen text-neutral-50">
        featured post
      </div>
      <section className=" min-h-screen w-screen text-neutral-50">
        portfolio{' '}
      </section>
      <section className=" min-h-screen  w-screen text-neutral-50">
        blog
      </section>
      {/* Testimonial and Gett to know section */}
      <section className="h-auto bg-white  w-screen rounded-[40px] overflow-hidden">
        <div className="rounded-2xl">
          <div className="flex flex-col justify-between align-middle gap-4 lg:pt-16 pt-10">
            <h2 className="text-4xl text-start lg:text-5xl font-bold leading-tight lg:col-span-3 px-8">
              Testimonials and reviews
            </h2>
            <div className="h-auto pt-4 w-full flex flex-col lg:flex-row gap-4 justify-center items-center lg:gap-8 lg:justify-between lg:items-start">
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
      <Footer />
    </div>
  )
}

export default Homepage
