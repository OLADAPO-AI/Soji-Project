import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="w-80 h-[350px] bg-white/20 backdrop-blur-lg mb-6 rounded-2xl shadow-2xl overflow-hidden border border-white/10 flex flex-col justify-between">
      <div className="px-6 py-8">
        <p className="text-xl text-white font-medium italic">
          "{testimonial.quote}"
        </p>
      </div>
      <div className="bg-white/50 h-[100px] backdrop-blur-sm px-6 py-4">
        <div className="flex items-center">
          <img
            className="w-14 h-14 rounded-full mr-4 border-2 border-white/30"
            src={testimonial.image}
            alt={testimonial.name}
          />
          <div>
            <h2 className="text-lg lg:text-xl font-semibold text-gray-800">
              {testimonial.name}
            </h2>
            <p className="text-base lg:text-lg text-gray-700">
              {testimonial.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
