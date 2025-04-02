import React from "react";
import CreativeSolutionHeroSection from "../component/creativeSolution/heroSetion";
import Footer from "../component/Footer";
import DesignCard from "../component/creativeSolution/designCard";
import ContactForm from "../component/contactForm";

const CreativeSolution = () => {
  return (
    <div className="min-h-screen bg-black text-text font-poppins">
      <CreativeSolutionHeroSection />
      <DesignCard />
      <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row gap-4 items-center p-6 lg:py-16">
        {/* Left Content */}
        <div className="lg:w-2/5 lg:px-8 lg:mt-20 space-y-6">
          <h1 className="text-2xl lg:text-3xl font-normal">
            Designs that meet your needs and goals
          </h1>
          <p className="text-gray-300 text-sm">
            Whether you're seeking a high-impact advertising campaign or aiming
            to produce high-quality educational materials, our experienced
            graphic designers collaborate with you to craft bespoke solutions
            based on your unique needs. We ensure that your audience finds your
            materials engaging and enticing.
          </p>
          <p className="text-gray-300 text-sm">
            Our designers work closely with marketing experts to align your
            branding and messaging. We also collaborate with content writers to
            create visually stunning designs that not only look great but read
            well too.
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:w-[60%] lg:px-12 lg:h-[80vh] h-[60vh] flex justify-center mt-8 lg:mt-0">
          <img
            src="/pexel1.webp"
            alt="Graphic Designer at work"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
      <div className="bg-white text-black p-6 lg:p-12">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default CreativeSolution;
