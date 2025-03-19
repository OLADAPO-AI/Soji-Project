import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import Homepage from "./pages/Homepage";
import Services from "./pages/servicesPage";
import DevelopmentPage from "./pages/developmentPage";
import CareersPage from "./pages/careersPage";
import Blogpage from "./pages/blogPage";
import WhyjoroPage from "./pages/whyjoroPage";

import Contact from "./pages/contactPage";
import UnderDevelopment from "./pages/under-development";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-background-dark min-h-[screen] w-screen font-nunito">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/development" element={<DevelopmentPage />} />
          <Route path="/joroServices" element={<WhyjoroPage />} />
          <Route path="/blog" element={<Blogpage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/getintouch" element={<Contact />} />
          <Route path="*" element={<UnderDevelopment />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
