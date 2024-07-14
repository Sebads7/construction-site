import { Carrousel } from "@/components/Carrousel";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import slidesData from "./slides.json";

import { Link } from "react-router-dom";

const WhatWeDo = () => {
  // const { scrollYProgress: completionProgress } = useScroll();

  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const slidesToShow = 3;

  const Prev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      Math.min(prev + 1, slidesData.length - slidesToShow)
    );
  };

  return (
    <div>
      <div className=" flex flex-col justify-center items-center w-full h-[25rem] mt-[5rem] ">
        <h2 className="text-center mb-4  scroll-m-20  font-extrabold tracking-wider lg:text-4xl  ">
          The Top Trusted Remodeling Experts in Atlanta
        </h2>
        <h3 className="w-[60rem]  text-center leading-7 [&:not(:first-child)]:mt-6 text-lg ">
          We are committed to delivering the best home improvement experience of
          your life. We handle the whole process from start to finish, so you
          have one point of contact through your entire project.
        </h3>
      </div>

      {/* SLIDES CONTAINER SECTION */}
      <div className="flex justify-center ">
        {/* LEFT BUTTON */}
        <motion.div
          className="flex items-center bg-slate-200 px-2 mr-7 hover:bg-slate-300 cursor-pointer"
          animate={mainControls}
          onClick={Prev}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{
            duration: 0.8,
            delay: 1.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <FaAngleLeft />
        </motion.div>

        {/* SLIDES */}
        <motion.div className="grid  grid-cols-3 gap-12   " ref={containerRef}>
          {slidesData
            .slice(currentSlide, currentSlide + slidesToShow)
            .map((slide, index) => (
              <motion.div
                className=""
                whileHover={{ scale: 1.01 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  key={index}
                  className="grid grid-rows-3 place-items-center shadow-2xl w-[27vw] h-[45rem]  "
                  animate={mainControls}
                  initial="hidden"
                  variants={slide.variants}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                >
                  <div className=" flex h-full  w-full">
                    <Carrousel
                      images={slide.images}
                      className="flex w-full h-[17rem] border-none p-0  m-0 "
                    />
                  </div>

                  <div className="grid  h-full mt-20 p-10  ">
                    <h1 className="text-center font-bold ">{slide.title}</h1>
                    <h2 className="my-5">{slide.description}</h2>
                  </div>
                  <Link to={slide.link}>
                    <button
                      type="button"
                      className="my-5 grid  bg-yellow-400 px-9 py-3 text-xs font-medium uppercase leading-normal text-black shadow-light-3 transition duration-150 ease-in-out hover:bg-yellow-500 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    >
                      LEARN MORE
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
        </motion.div>

        {/* RIGHT BUTTON */}
        <motion.div
          className="flex items-center bg-slate-200 px-2 ml-7 hover:bg-slate-300 cursor-pointer"
          animate={mainControls}
          onClick={nextSlide}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{
            duration: 0.8,
            delay: 1.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <FaAngleRight />
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;
