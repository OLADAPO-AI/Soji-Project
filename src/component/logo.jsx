import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="pl-4 lg:pl-8">
      <Link
        to={"/"}
        className="lg:text-3xl text-2xl font-bold tracking-wide text-secondary-dark flex"
      >
        <span>Joro</span> <span className="text-accent-dark">Services</span>
      </Link>
    </div>
  );
};

export default Logo;
