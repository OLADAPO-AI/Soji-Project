/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Footer from "../component/Footer";
import ExperienceSection from "../component/development/experienceSection";
import DevHeroSection from "../component/development/heroSection";
import DevServices from "../component/development/devServices";

function Development() {
  return (
    <div className="min-h-screen bg-black text-text font-poppins">
      <DevHeroSection />
      <ExperienceSection />
      <DevServices />

      <Footer />
    </div>
  );
}

export default Development;
