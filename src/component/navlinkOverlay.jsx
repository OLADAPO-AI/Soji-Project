import React from "react";
import { OurServices } from "../pages/servicesPage";

// eslint-disable-next-line react-refresh/only-export-components

export const ServiceOverlay = () => {
  return (
    <div className="absolute left-4 top-full w-[600px] bg-black/80 shadow-lg rounded-lg p-6 text-sm text-white transition duration-300 ease-in-out">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-accent font-semibold mb-2">Our Services →</h3>
          <ul className="space-y-2">
            {OurServices[0].serviceList.map((serv, i) => {
              return (
                <li>
                  <a href="#" key={i} className="hover:text-yellow-300">
                    {serv.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="text-accent font-semibold mb-2">
            Specialized Services
          </h3>
          <ul className="space-y-2">
            {OurServices[1].SpecializedServiceList.map((serv, i) => {
              return (
                <li>
                  <a href="#" key={i} className="hover:text-yellow-300">
                    {serv.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
