import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import Homepage from "./pages/Homepage";
import Services from "./pages/servicesPage";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contactPage";
import About from "./pages/contactPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-background-dark min-h-[screen] w-screen font-nunito">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
