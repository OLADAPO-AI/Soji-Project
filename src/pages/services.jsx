import React from "react";
import Footer from "../component/Footer";

export const ServiceList = [
  { title: "Custom Software Development", link: "/", image: "/serv8.webp" },
  {
    title: "Web & Mobile App Development",
    link: "/",
    image: "/serv2.webp",
  },
  { title: "Cloud Solutions & Migration", link: "/", image: "/serv3.webp" },
  {
    title: "Enterprise Software Development",
    link: "/",
    image: "/serv4.webp",
  },
  {
    title: "Cloud Automation & Monitoring",
    link: "/",
    image: "/serv5.webp",
  },
];

const Services = () => {
  return (
    <div className="relative bg-slate-200 w-screen min-h-screen">
      <div className="bg-cover bg-bgImage3 object-cover bg-no-repeat bg-center lg:min-h-[85vh] min-h-[70vh] w-screen"></div>

      <div className="lg:pt-[40px] text-center pt-[30px]">
        <h1 className="pb-2 lg:pb-8 font-nunito lg:text-4xl text-xl font-bold">
          Services We Offer
        </h1>
        <p className="text-sm lg:text-base w-4/5 lg:w-2/3 text-center mx-auto">
          At JoroServices, we provide innovative IT and digital solutions to
          help businesses bridge skill gaps, accelerate projects, and scale
          operations. Our tailored services enhance digital capabilities and
          drive business success.
        </p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ServiceList.map((service, index) => (
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
