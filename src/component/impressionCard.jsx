import React from "react";
import { Link } from "react-router-dom";

const image = [
  { img: "/photo-4.webp", alt: "photo-1" },
  { img: "/photo-5.webp", alt: "photo-3" },
  { img: "/photo-6.webp", alt: "photo-4" },
  { img: "/photo-8.webp", alt: "photo-5" },
  { img: "/photo-5.webp", alt: "photo-6" },
  { img: "/photo-6.webp", alt: "photo-7" },
  { img: "/photo-7.webp", alt: "photo-8" },
];

const metrics = [
  { title: "Brand Onboard", value: "1k" },
  { title: "Vetted Engineers Involved", value: "500+" },
  { title: "Projects Accomplished", value: "1000+" },
];

function ImpressionCard() {
  return (
    <div className="w-4/5 rounded-2xl  gap-4 p-6 sm:p-8 h-auto bg-white/20 backdrop-blur-lg mb-6  shadow-2xl overflow-hidden border border-white/10 flex flex-col justify-center items-center border-accent-dark mx-auto">
      {/* Image Grid */}
      <div className="flex justify-center gap-3 sm:gap-4 items-center flex-wrap">
        {image.map((item, index) => (
          <img
            key={index}
            src={item.img}
            alt={item.alt}
            className="w-14 h-14 sm:w-20 sm:h-20 rounded-full m-1 sm:m-2"
          />
        ))}
      </div>

      {/* Heading */}
      <div className="flex flex-col justify-center items-center mt-2 lg:mt-4">
        <h3 className="text-center text-base sm:text-lg font-semibold text-white px-2 sm:px-0">
          We blend the technical and business expertise of skilled teams and
          engineers to achieve excellence.
        </h3>
      </div>

      {/* Metrics */}
      <div className="flex flex-row justify-center items-center gap-4 sm:gap-8 lg:mt-4 flex-wrap">
        {metrics.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 sm:gap-4 items-center mt-2"
          >
            <p className="text-center text-3xl sm:text-5xl font-bold text-white">
              {item.value}
            </p>
            <h3 className="text-center text-sm sm:text-xl font-semibold text-white">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center gap-4 flex-col sm:flex-row mt-2 lg:mt-4">
        <Link to={"/getintouch"}>
          <div className="text-base sm:text-lg lg:text-xl px-6 sm:px-9 py-3 sm:py-4 before:bg-accent hover:bg-accent-dark p-3 rounded-xl bg-accent text-white transition duration-300 ease-in-out font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
            Get a consultation
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ImpressionCard;
