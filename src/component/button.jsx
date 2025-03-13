import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, bg, textsize }) => {
  return (
    <Link
      to={"/getintouch"}
      className={`relative isolate text-nowrap flex justify-center items-center select-none overflow-hidden rounded-md border align-middle transition-all duration-500 before:absolute before:-start-3 before:top-0 before:-z-10 before:h-full before:w-[calc(100%+1.5rem)] before:origin-right before:-skew-x-[16deg] before:scale-x-0 before:transition-transform before:duration-500 hover:[&:not(:disabled)]:before:scale-x-100 focus-visible:[&:not(:disabled)]:before:scale-x-100 active:[&:not(:disabled)]:scale-[1.01] disabled:opacity-70 border-secondary-dark border-r-accent  px-6 py-3 text-2xl hover:[&:not(:disabled)]:tracking-[0.075em]  hover:[&:not(:disabled)]:text-primary focus-visible:text-red-800 ${
        textsize
          ? `text-[${textsize}] lg:text-md xl:text-2xl`
          : "text-[16px] lg:text-[20px]"
      }  hover:bg-secondary before:bg-accent hover:text-secondary bg-${bg}  disabled:cursor-progress max-sm:w-full"
      type="submit`}
      fdprocessedid="1fi6k"
    >
      {title}
    </Link>
  );
};

export default Button;
