import React from 'react'
import Button from '../component/button'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className="bg-hero-bg bg-cover bg-no-repeat bg-center min-h-screen w-screen">
      <div className="h-screen bg-black/40 flex items-center justify-center relative text-white">
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
            We provide end-to-end digital services tailored to drive innovation
            and efficiency
          </p>

          {/* Buttons */}
          {/* <div className="flex justify-center gap-4 flex-col sm:flex-row">
            <Link to={'/contact'}>
              <Button
                title={'Get a consultation'}
                bg={'secondary'}
                className="text-lg lg:text-xl px-8 py-3" // Larger button text and padding
              />
            </Link>
          </div> */}
          <div className="flex justify-center gap-4 flex-col sm:flex-row">
            <Link to={'/getintouch'}>
              <div className="text-lg lg:text-xl px-9 py-4  before:bg-accent hover:bg-accent-dark  p-3 rounded-xl bg-accent text-white transition duration-300 ease-in-out font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
                Get a consultation
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
