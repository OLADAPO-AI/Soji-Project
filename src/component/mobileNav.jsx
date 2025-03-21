import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Logo from "./logo";
import { LinkInfo } from "./links";
import { Link } from "react-router-dom";
import Button from "./button";

const MobileNavbar = ({ isOpen, toggleMenu }) => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: isOpen ? "100%" : 0 }}
      className={`fixed -top-20 w-[100vw] mt-[60px] bg-bgImage2  backdrop-blur-sm bg-cover text-white overflow-hidden transition-all duration-300 ${
        isOpen ? "h-screen" : "h-0"
      }`}
    >
      {/* Menu List */}
      <ul className="flex flex-col items-center mt-28 space-y-3">
        {LinkInfo.map((item, index) => (
          <li key={index} className="w-full text-center">
            <Link
              to={item.path}
              onClick={toggleMenu}
              className="flex justify-between w-full max-w-full py-3 px-4 text-base border-b border-gray-400 hover:text-accent-dark"
            >
              {item.title}
              <ArrowUpRight size={20} />
            </Link>
          </li>
        ))}{" "}
      </ul>
    </motion.div>
  );
};

export default MobileNavbar;
