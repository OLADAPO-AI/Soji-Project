import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Logo from "./logo";
import { LinkInfo } from "./links";
import { Link } from "react-router-dom";

const MobileNavbar = ({ isOpen, toggleMenu }) => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: isOpen ? "100%" : 0 }}
      className={`fixed top-0 left-0 w-full mt-[81px] bg-black text-white overflow-hidden transition-all duration-300 ${
        isOpen ? "h-screen" : "h-0"
      }`}
    >
      {/* Menu List */}
      <ul className="flex flex-col items-center mt-20 space-y-3">
        {LinkInfo.map((item, index) => (
          <li key={index} className="w-full text-center">
            <Link
              to={item.path}
              onClick={toggleMenu}
              className="flex justify-between w-full max-w-full py-3 px-4 text-lg border-b border-gray-400 hover:text-accent-dark"
            >
              {item.title}
              <ArrowUpRight size={20} />
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default MobileNavbar;
