import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const LinkInfo = [
  { title: "Services", path: "/services" },
  { title: "Portfolio", path: "/portfolio" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const NavLink = () => {
  return (
    <div className="hidden items-center lg:flex w-2/5">
      <div className="flex flex-row space-x-2 mx-auto w-full justify-between tracking-wider px-4 items-center">
        {LinkInfo.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className="relative text-[16px] lg:text-[20px] font-semibold hover:bg-white/10 xl:px-8 lg:px-2 py-2 text-white group hover:text-text-dark transition-all duration-300"
          >
            {link.title}
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-accent group-hover:scale-x-100 scale-x-0 origin-left transition-transform duration-300 ease-in-out hover:scale-x-100"></span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavLink;
