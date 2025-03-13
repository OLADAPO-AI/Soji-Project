import React from "react";
import { Link } from "react-router-dom";

const linkInfo = [
  { title: "Services", path: "/services" },
  { title: "Portfolio", path: "/portfolio" },
  { title: "Contact", path: "/contact" },
];

const NavLink = () => {
  return (
    <div className="hidden items-center lg:flex px-12 w-2/5">
      <div className="flex flex-row space-x-2 mx-auto w-full justify-between tracking-wider px-4 items-center">
        {linkInfo.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className="relative text-[20px] lg:text-[24px] font-semibold hover:bg-black/10 xl:px-12 lg:px-2 py-4 text-text group hover:text-text-dark transition-all duration-300"
          >
            {link.title}
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-secondary group-hover:scale-x-100 scale-x-0 origin-left transition-transform duration-300 ease-in-out hover:scale-x-100"></span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavLink;
