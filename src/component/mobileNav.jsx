import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Plus } from "lucide-react";
import Logo from "./logo";
import { LinkInfo } from "./links";

const MobileNavbar = ({ isOpen }) => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: isOpen ? "100vh" : 0 }}
      className={`fixed top-0 left-0 w-full mt-[81px] bg-black text-white overflow-hidden transition-all duration-300 ${
        isOpen ? "h-screen" : "h-0"
      }`}
    >
      {/* Menu List */}
      <ul className="flex flex-col items-center mt-20 space-y-3">
        {LinkInfo.map((item, index) => (
          <li key={index} className="w-full text-center">
            <button
              className="flex justify-between w-full max-w-full py-3 px-4 text-lg border-b border-gray-400 hover:text-accent-dark"
              onClick={() => toggleExpand(index)}
            >
              {item.title}
              <Plus
                size={20}
                className={`transition-transform ${
                  expanded === index ? "rotate-45 text-blue-400" : ""
                }`}
              />
            </button>
            {expanded === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="pl-6 pb-3 text-gray-400"
              >
                More details about {item.title}
              </motion.div>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default MobileNavbar;
