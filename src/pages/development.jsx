/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Footer from "../component/Footer";
import ExperienceSection from "../component/deelopment/experienceSection";
import DevHeroSection from "../component/deelopment/heroSection";
import DevServices from "../component/deelopment/devServices";

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
