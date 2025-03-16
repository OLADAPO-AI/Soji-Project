import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ServiceOverlay } from "./navlinkOverlay";

// eslint-disable-next-line react-refresh/only-export-components
export const LinkInfo = [
  { title: "Services", path: "/services" },
  { title: "Portfolio", path: "/portfolio" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const NavLink = () => {
  const [hoveredLink, setHoveredLink] = useState(false);
  return (
    <div className="hidden items-center lg:flex w-2/5">
      <ul className="flex flex-row space-x-2 mx-auto w-full justify-between tracking-wider items-center">
        {LinkInfo.map((link, i) => (
          <Link
            key={i}
            onMouseEnter={() => setHoveredLink(link.title)}
            onMouseLeave={() => setHoveredLink(null)}
            onClick={() => setHoveredLink(null)}
            to={link.path}
            className="relative text-[16px] xl:px-8 lg:px-2 py-1 px-4 lg:text-[20px] font-semibold hover:bg-white/10 text-white group hover:text-text-dark transition-all duration-300"
          >
            {link.title}
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-accent group-hover:scale-x-100 scale-x-0 origin-left transition-transform duration-300 ease-in-out hover:scale-x-100"></span>
          </Link>
        ))}
        {/* Render overlay only when hovering over "Services" */}
        {hoveredLink === "Services" && (
          <div
            className="absolute left-2/5 top-[58px]  w-full flex justify-start"
            onMouseEnter={() => setHoveredLink("Services")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <ServiceOverlay />
          </div>
        )}
      </ul>
    </div>
  );
};

export default NavLink;
