import React, { useEffect, useState } from "react";
import Button from "./button";
import NavLink from "./links";
import MobileNavbar from "./mobileNav";
import Logo from "./logo";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  // Close the mobile menu when window size is larger than lg (1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-background/15 shadow shadow-accent flex justify-between py-2 mx-auto h-20 items-center lg:h-24 rounded-b-md fixed top-0 left-0 w-full z-50 text-white px-2">
      <Logo />
      <NavLink />
      <div className="md:flex hidden justify-center w-[250px] mr-8">
        <Button bg={""} size={"xl"} title={"Get in Touch"} />
      </div>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden absolute bg-accent/20 p-1 lg:p-2 right-4 rounded-md"
        onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Navbar */}
      <MobileNavbar isOpen={openNav} toggleMenu={() => setOpenNav(!openNav)} />
    </div>
  );
};

export default Navbar;
