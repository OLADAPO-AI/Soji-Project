import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaPlus } from "react-icons/fa";

const metrics = [
  { desc: "years experience in mobile development and consulting", Fig: 10 },
  { desc: "projects of different complexity and scale", Fig: 50 },
  { desc: "full fledged teams with unique expertise", Fig: 10 },
  {
    desc: "mid-senior devlopers with high performance and motivation",
    Fig: 40,
  },
];

const ExperienceSection = () => {
  return (
    <div className="mb-32 pt-12 px-4 lg:pt-0">
      <h1 className="text-2xl text-white lg:text-4xl pb-8 lg:pb-12 font-semibold text-center">
        Years of experience in mobile development and <br />
        consulting
      </h1>
      <div className="mx-auto flex flex-row flex-wrap justify-center items-start gap-4 ">
        {metrics.map((cate, i) => (
          <MetricCard key={i} fig={cate.Fig} desc={cate.desc} />
        ))}
      </div>
    </div>
  );
};

const MetricCard = ({ fig, desc }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Start animation when 30% of the component is visible
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 }); // Fade-in effect

      let start = 0;
      const duration = 1500; // 1.5 seconds animation
      const stepTime = Math.abs(Math.floor(duration / fig));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= fig) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, fig, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col shadow bg-white/25 backdrop-blur-md px-2 text-center items-center text-white rounded-lg gap-2 xl:w-[250px] sm:w-[200px] w-[150px] h-[150px] sm:h-[200vh] duration-200 justify-center"
    >
      <p className="text-3xl sm:text-5xl text-yellow-500 flex flex-row items-center font-bold justify-center">
        <span>{count}</span>
        <FaPlus className="sm:text-4xl text-2xl" />
      </p>
      <p className="text-[14px]">{desc}</p>
    </motion.div>
  );
};

export default ExperienceSection;
