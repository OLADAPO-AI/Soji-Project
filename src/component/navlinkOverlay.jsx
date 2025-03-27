import React from "react";
import { FaCircleDot } from "react-icons/fa6";

export const Serv = [
  {
    category: "Creative Solutions",
    path: "/creative-solutions",
    offerings: [
      "Website Design",
      "Graphic Design and Branding",
      "User Interface and Experience",
    ],
  },
  {
    category: "Development",
    offerings: [
      "Web Development",
      "Mobile App Development",
      "E-commerce and CMS Solutions",
    ],
    path: "/development",
  },
  {
    category: "Digital Marketing",
    offerings: [
      "SEO and Content Strategy",
      "Social Media Management",
      "PPC and Online Campaigns",
    ],
    path: "/digital-marketing",
  },
  {
    category: "Technical Services",
    offerings: [
      "IT Support and Maintenance",
      "Cybersecurity",
      "Cloud Infrastructure",
    ],
    path: "/technical-services",
  },
  { category: "Careers", path: "/careers" },
];

// eslint-disable-next-line react-refresh/only-export-components

export const CreativeSolutionOverlay = () => {
  return (
    <div className="absolute left-4 top-full w-[500px] bg-black/80 shadow-lg rounded-lg text-sm  text-white transition duration-300 ease-in-out">
      <div>
        {Serv.map((service, i) => {
          if (service.category === "Creative Solutions") {
            return (
              <div
                key={i}
                className="flex flex-row items-center justify-between w-full h-32 gap-8"
              >
                <h2 className="text-accent backdrop-blur- bg-[#072731] rounded-l-lg  h-full w-2/5 flex items-center justify-center font-semibold text-base">
                  {service.category}
                </h2>
                <ul className="w-3/5  p-6">
                  {service.offerings.map((info, i) => {
                    return (
                      <li
                        className="hover:text-yellow-400 flex flex-row cursor-pointer items-center gap-2"
                        key={i}
                      >
                        <FaCircleDot className="text-yellow-600 text-xs" />
                        {info}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export const DevelopmentOverlay = () => {
  return (
    <div className="absolute left-4 top-full w-[500px] bg-black/80 shadow-lg rounded-lg text-sm  text-white transition duration-300 ease-in-out">
      <div>
        {Serv.map((service, i) => {
          if (service.category === "Development") {
            return (
              <div
                key={i}
                className="flex flex-row items-center justify-between w-full h-32 gap-8"
              >
                <h2 className="text-accent backdrop-blur- bg-[#072731] rounded-l-lg  h-full w-2/5 flex items-center justify-center font-semibold text-base">
                  {service.category}
                </h2>
                <ul className="w-3/5  p-6">
                  {service.offerings.map((info, i) => {
                    return (
                      <li
                        className="hover:text-yellow-400 flex flex-row cursor-pointer items-center gap-2"
                        key={i}
                      >
                        <FaCircleDot className="text-yellow-600 text-xs" />
                        {info}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export const TechnicalServicesOverlay = () => {
  return (
    <div className="absolute left-4 top-full w-[500px] bg-black/80 shadow-lg rounded-lg text-sm  text-white transition duration-300 ease-in-out">
      <div>
        {Serv.map((service, i) => {
          if (service.category === "Technical Services") {
            return (
              <div
                key={i}
                className="flex flex-row items-center justify-between w-full h-32 gap-8"
              >
                <h2 className="text-accent backdrop-blur- bg-[#072731] rounded-l-lg  h-full w-2/5 flex items-center justify-center font-semibold text-base">
                  {service.category}
                </h2>
                <ul className="w-3/5  p-6">
                  {service.offerings.map((info, i) => {
                    return (
                      <li
                        className="hover:text-yellow-400 flex flex-row cursor-pointer items-center gap-2"
                        key={i}
                      >
                        <FaCircleDot className="text-yellow-600 text-xs" />
                        {info}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export const DigitalMarketingOverlay = () => {
  return (
    <div className="absolute left-4 top-full w-[500px] bg-black/80 shadow-lg rounded-lg text-sm  text-white transition duration-300 ease-in-out">
      <div>
        {Serv.map((service, i) => {
          if (service.category === "Digital Marketing") {
            return (
              <div
                key={i}
                className="flex flex-row items-center justify-between w-full h-32 gap-8"
              >
                <h2 className="text-accent backdrop-blur- bg-[#072731] rounded-l-lg  h-full w-2/5 flex items-center justify-center font-semibold text-base">
                  {service.category}
                </h2>
                <ul className="w-3/5  p-6">
                  {service.offerings.map((info, i) => {
                    return (
                      <li
                        className="hover:text-yellow-400 flex flex-row cursor-pointer items-center gap-2"
                        key={i}
                      >
                        <FaCircleDot className="text-yellow-600 text-xs" />
                        {info}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
