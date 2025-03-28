import React, { useEffect, useRef } from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "John Carter",
    role: "CEO, InnovateTech Solutions",
    quote:
      "Their expertise in digital transformation helped us modernize our IT infrastructure and improve operational efficiency by 40%.",
    image: "/photo-7.webp",
  },
  {
    name: "Emily Zhang",
    role: "CTO, CloudNova Inc.",
    quote:
      "The cloud migration strategy they provided was flawless. We achieved zero downtime and reduced costs by 25%.",
    image: "/photo-8.webp",
  },
  {
    name: "Michael O'Connell",
    role: "CIO, SecureNet Systems",
    quote:
      "Their cybersecurity solutions have been a game-changer for us. We now have a robust defense against cyber threats.",
    image: "/photo-4.webp",
  },
  {
    name: "Sarah Thompson",
    role: "VP of IT, DataFlow Corp.",
    quote:
      "Their IT strategy consulting helped us align our technology goals with our business objectives. Highly recommend their services!",
    image: "/photo-6.webp",
  },
  {
    name: "David Kim",
    role: "Director of Engineering, CodeCraft",
    quote:
      "The DevOps practices they implemented have significantly improved our deployment speed and reliability.",
    image: "/photo-5.webp",
  },
  {
    name: "Laura Evans",
    role: "COO, FutureTech Enterprises",
    quote:
      "Their IT consulting services have been instrumental in streamlining our workflows and boosting productivity.",
    image: "/photo-7.webp",
  },
];

const TestimonilaGrid = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Duplicate the testimonials to create a seamless loop
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    // Set the width of the container to accommodate the duplicated testimonials
    const testimonialWidth = container.children[0]?.offsetWidth || 300;
    container.style.width = `${
      duplicatedTestimonials.length * testimonialWidth
    }px`;

    // Scroll animation
    let scrollAmount = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
      container.style.transform = `translateX(-${scrollAmount}px)`;
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);

    // Cleanup animation on unmount
    return () => cancelAnimationFrame(scroll);
  }, []);

  return (
    <div className="w-full overflow-hidden py-8">
      <div ref={containerRef} className="flex flex-row gap-8 lg:gap-0">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[300px] md:w-[400px] lg:w-[500px]"
          >
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonilaGrid;
