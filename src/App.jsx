import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import Homepage from "./pages/Homepage";
import Services from "./pages/servicesPage";
// import DevelopmentPage from "./pages/developmentPage";
// import CareersPage from "./pages/careersPage";
// import Blogpage from "./pages/blogPage";
// import WhyjoroPage from "./pages/whyjoroPage";

import Contact from "./pages/contactPage";
import UnderDevelopment from "./pages/under-development";
import { FaArrowUp, FaArrowUp19 } from "react-icons/fa6";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300); // Show after scrolling 300px
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <BrowserRouter>
      <div className="bg-background-dark min-h-[100vw] w-full font-nunito">
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-800 transition z-50 duration-300 animate-bounce"
          >
            <FaArrowUp className="text-xl" />
          </button>
        )}

        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/development" element={<DevelopmentPage />} />
          <Route path="/joroServices" element={<WhyjoroPage />} />
          <Route path="/blog" element={<Blogpage />} />
          <Route path="/careers" element={<CareersPage />} /> */}
          <Route path="/getintouch" element={<Contact />} />
          <Route path="*" element={<UnderDevelopment />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
