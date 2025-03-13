import React from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import NavLink from "./links";

const Navbar = () => {
  return (
    <div className="bg-background/15 shadow shadow-accent flex justify-between py-2 mx-auto h-20 items-center lg:h-24 rounded-b-md  fixed top-0 left-0 w-full z-50  text-white px-2">
      <div className="pl-4 lg:pl-20">
        <Link
          to={"/"}
          className="lg:text-4xl text-2xl font-bold font-sans tracking-wide text-secondary-dark flex"
        >
          <span>Joro</span> <span className="text-accent-dark">Services</span>
        </Link>
      </div>
      <NavLink />
      <div className="md:flex hidden justify-center w-[300px] ">
        <Button bg={""} size={"xl"} title={"Get in Touch"} />
      </div>
    </div>
  );
};

export default Navbar;
