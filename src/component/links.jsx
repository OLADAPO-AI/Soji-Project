import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ServiceOverlay } from "./navlinkOverlay";

// eslint-disable-next-line react-refresh/only-export-components
export const LinkInfo = [
  { title: "Services", path: "/services" },
  { title: "Development", path: "/development" },
  { title: "Why JoroServices", path: "/joroServices" },
  { title: "Careers", path: "/careers" },
  { title: "Blog", path: "/blog" },
];

const NavLink = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);

  return (
    <div className="hidden lg:flex items-center w-3/5">
      <div className="flex flex-row relative mx-auto w-full justify-around tracking-wider px-2 items-center">
        {LinkInfo.map((link, i) => (
          <div
            key={i}
            className="relative group"
            onMouseEnter={() =>
              link.title === "Services" && setIsDropdownOpen(true)
            }
            onMouseLeave={() => setIsDropdownOpen(false)} // CLOSE DROPDOWN WHEN MOUSE LEAVES
          >
            <Link
              to={link.path}
              className={`text-[16px] lg:text-[14px] font-semibold relative lg:font-bold hover:bg-neutral-700/70 xl:px-8 lg:px-2 py-2 ${
                location.pathname === link.path ? "text-accent" : "text-white"
              } group transition-all duration-300`}
            >
              {link.title}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-accent group-hover:scale-x-100 scale-x-0 origin-left transition-transform duration-300 ease-in-out"></span>
            </Link>

            {/* Dropdown */}
            {isDropdownOpen && link.title === "Services" && (
              <div className="absolute -left-4 top-full mt-[6px] w-64 bg-black/90 text-white shadow-lg rounded-md z-50">
                <ServiceOverlay />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavLink;
