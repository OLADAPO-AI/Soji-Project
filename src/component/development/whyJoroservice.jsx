import { Tag } from "lucide-react";
import React from "react";
import { BsDot } from "react-icons/bs";
import { FaDotCircle } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const websiteServices = [
  {
    tag: "Custom Websites for Your Business:",
    tagline:
      "We design websites that align with your brand identity and captivate your audience.",
  },
  {
    tag: "Vast Industry Experience:",
    tagline:
      "With thousands of websites built, our expertise spans from simple CMS platforms to complex web applications.",
  },
  {
    tag: "Easy-to-Use and Maintainable:",
    tagline:
      "Our websites are intuitive and simple to manage, giving you full control over updates and content.",
  },
  {
    tag: "Professional Support and Training:",
    tagline:
      "Our team offers expert guidance, training, and ongoing assistance to help you maximize your website's potential.",
  },
];

const WhyJoroservice = () => {
  return (
    <div className="grid pb-16 lg:h-[50vh] bg-white grid-cols-1 lg:grid-cols-2 gap-4  px-16 justify-center ">
      <div className=" lg:col-span-1 lg:pt-8">
        <h1 className="text-black font-normal text-2xl  lg:text-4xl px-8 lg:py-6">
          Why choose JoroServices as your
          <Typewriter
            words={[
              " mobile app development partner?",
              "  web apllication development partner?",
              " software development partner?",
            ]}
            loop={true}
            cursor
            cursorStyle="<"
            typeSpeed={80}
            deleteSpeed={50}
            cursorColor="blue"
            delaySpeed={1000}
          />
        </h1>
      </div>

      <div className="flex flex-col gap-5">
        {websiteServices.map((serv, i) => {
          return (
            <div className="flex flex-row items-center gap-6" key={i}>
              <FaDotCircle className="text-lg text-accent" />
              <div className=" text-black/60 text-sm pr-8">
                <span className="text-black">{serv.tag}</span> {serv.tagline}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyJoroservice;
