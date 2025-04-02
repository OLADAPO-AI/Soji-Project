/* eslint-disable react-hooks/rules-of-hooks */
import { useAnimation, useInView, motion } from "framer-motion";
import { div } from "framer-motion/client";
import React, { useEffect, useRef } from "react";
import { FaCircleDot, FaPlus } from "react-icons/fa6";
import { FaDatabase, FaLaptopCode } from "react-icons/fa6";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import {
  MdAnalytics,
  MdApi,
  MdCloudUpload,
  MdShoppingBag,
} from "react-icons/md";
import { GiPlatform } from "react-icons/gi";
import { FaRobot } from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";

const offerings = [
  {
    title: "Web Development",
    image: "/bg8.webp",
    tagline: "Designing websites tailored to your business needs.",
    desc: "From the first consultation to continuous support, we are dedicated to delivering outstanding service and ensuring your satisfaction. Our focus is on building a lasting partnership founded on trust, transparency, and clear communication. With a deep understanding of your objectives, our web team will recommend the most suitable CMS or custom solution to help you achieve your goals.",
    category: [
      { title: "Front-end development", icon: LiaLaptopCodeSolid },
      { title: "Back-end development", icon: FaDatabase },

      { title: "Ecommerce development", icon: MdShoppingBag },
    ],
  },
  {
    title: "Custom Mobile App Development",
    image: "/bg9.webp",
    tagline: "Innovative and scalable apps for seamless user experiences.",
    desc: "We create high-performance mobile applications tailored to your business needs, ensuring a seamless experience across all devices. Whether it's iOS, Android, or cross-platform development, our expert team leverages cutting-edge technology to build intuitive and scalable solutions that engage users and drive business growth.",
    category: [
      { title: "Native app development", icon: FaLaptopCode },
      { title: "Cross-platform development", icon: GiPlatform },
      { title: "Hybrid app development", icon: FaRobot },
    ],
  },
  {
    title: "Data Management",
    image: "/pexel3.webp",
    tagline: "Transforming data into actionable insights and efficiency.",
    desc: "Leverage the power of structured data to make informed decisions, optimize workflows, and enhance business intelligence. Our data management solutions ensure seamless data integration, security, and accessibility, helping you unlock valuable insights while maintaining compliance and governance.",
    category: [
      { title: "Data Integration & Migration", icon: MdCloudUpload },
      { title: "Data Security & Compliance", icon: BsShieldCheck },
      { title: "Big Data & Analytics", icon: MdAnalytics },
    ],
  },
];

const DevServices = () => {
  return (
    <div className="mt-10 bg-white rounded-t-xl py-20 px-4 min-h-[100vh] grid grid-cols-1 gap-12">
      {offerings.map((serv, i) => {
        const control = useAnimation();
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true }); // Only animate once when in view

        useEffect(() => {
          if (isInView) {
            control.start("visible");
          }
        }, [isInView, control]);

        return (
          <motion.div
            key={i}
            ref={ref} // Attach ref to track visibility
            variants={{
              hidden: { opacity: 0, y: 75 }, // Alternate direction
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={control}
            transition={{ duration: 1.5, delay: i * 0.3 }} // Stagger effect
            className="z-10 flex flex-col rounded-lg shadow-lg"
          >
            <div
              className={`text-black p-6  flex flex-col  ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-4 lg:gap-12 `}
            >
              <div className="lg:w-1/2">
                <img src={serv.image} alt="" />
              </div>
              <div className="flex lg:w-1/2  flex-col justify-center">
                <p className="flex flex-row items-center gap-4 pb-4 text-sm text-gray-700 font-semibold">
                  <FaCircleDot
                    className={`${
                      i % 2 !== 0 ? "text-red-400" : "text-yellow-400"
                    }`}
                  />
                  <span>{serv.title}</span>
                </p>
                <h2 className="text-2xl font-semibold">{serv.tagline}</h2>
                <p className="mt-2 text-sm">{serv.desc}</p>
                <div className="flex py-6 flex-row justify-center rounded-b-lg gap-2 flex-wrap lg:gap-8">
                  {" "}
                  {serv.category.map((cate, i) => {
                    return (
                      <div
                        className="flex flex-col shadow  bg-black  px-2 text-center  items-center text-white rounded-lg gap-2 w-[120px] sm:w-[150px] h-[120px]  justify-center"
                        key={i}
                      >
                        <p className="text-[12px] ">{cate.title}</p>
                        <p
                          className={`text-[50px]  ${
                            i % 2 !== 0 ? "text-accent-dark" : "text-accent"
                          }`}
                        >
                          <cate.icon />
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default DevServices;
