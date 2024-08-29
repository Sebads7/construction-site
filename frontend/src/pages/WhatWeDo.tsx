import { Carrousel } from "@/components/Carrousel";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import useScreenSizes from "@/components/hooks/useScreenSize";

import { slidesData } from "@/constants/index";
import useInViewAnimation from "@/components/hooks/useInView";

const WhatWeDo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEndX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      Prev();
    }
  };

  // Hook to animate the slides

  const { ref, mainControls } = useInViewAnimation();

  // Function to handle the previous slide
  const Prev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };
  // Function to handle the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slidesData.length - 1));
  };

  // Hook to handle screen sizes
  const { isMobile } = useScreenSizes();

  if (isMobile === null) {
    return null;
  }

  // Adjust the length of the slides based on the screen size
  const adjustedLength = isMobile ? slidesData.length : slidesData.length - 2;

  return (
    <div className="w-full   ">
      <div className="flex flex-col justify-center items-center w-full h-[25rem] px-4 mobile:h-[15rem] mobile:mt-10 ">
        <h2 className="text-center mb-4 scroll-m-20 font-extrabold tracking-wider text-4xl mobile:text-lg tablet:text-xl">
          The Top Trusted Remodeling Experts in Atlanta
        </h2>
        <h3
          className="w-[60rem] 
        text-center 
        leading-7 
        mt-6 
        text-lg 
        mobile:text-sm 
        tablet:text-base
        tablet:w-full
         lg:w-[50rem] "
        >
          We are dedicated to providing an exceptional home improvement
          experience from start to finish. With us, you'll enjoy a smooth,
          hassle-free process with a single point of contact overseeing every
          aspect of your project.
        </h3>
      </div>

      {/* SLIDES CONTAINER SECTION */}
      <div
        className="flex flex-row mobile:flex-col  justify-center items-center  overflow-hidden relative  tablet:px-0  xl:px-14  2xl:px-16   px-28 container no-scrollbar
      "
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* SLIDES */}
        <div className="flex mx-auto justify-center items-center container ">
          <div
            className="grid overflow-hidden  w-full   mobile:-translate-x-2
           mobile:w-[26rem]  tablet:w-[30rem] lg:w-[47rem] scale-95 "
          >
            <motion.div
              className="grid grid-flow-col  gap-8 transition-all duration-700 ease-in-out mobile:mx-0  w-auto  py-2 mobile:gap-3 tablet:gap-5 lg:gap-5  "
              ref={ref}
              style={{
                transform: `translateX(-${
                  currentSlide * (100 / slidesData.length)
                }%)`,
              }}
            >
              {slidesData.map((slide, index) => (
                <motion.div
                  className="transition-all ease-in-out delay-200"
                  whileHover={{ scale: 1.002 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                    ease: "easeInOut",
                    delay: 0.1,
                  }}
                  key={index}
                >
                  <motion.div
                    className="grid 
                  grid-rows-3 
                  place-items-center
                  shadow-md border-2 
                  w-[25.5vw] 
                  h-[42rem] 
                  pb-5 
                  mobile:w-[19rem] 
                  mobile:h-[35rem]  
                  tablet:w-[23rem]
                  lg:w-[24rem] 
                  2xl:w-[25rem] 
                  "
                  >
                    <div className="flex h-full w-full">
                      <Carrousel
                        images={slide.images}
                        className="flex w-full h-[17rem] mobile:h-[13rem] tablet:h-[13rem] 
                       mobile:w-full border-none p-0 m-0"
                      />
                    </div>

                    <div className="grid h-full mt-20 mobile:mt-5 p-10 tablet:p-5">
                      <h1 className="text-center font-bold mobile:mt-3 text-lg mobile:text-base">
                        {slide.title}
                      </h1>
                      <h2 className="mt-5 text-center text-base mobile:text-sm tablet:text-base tablet:mt-2">
                        {slide.description}
                      </h2>
                    </div>
                    <div className="flex w-full h-full items-end  tablet:h-2/4 mobile:mt-10">
                      <Link
                        to={slide.link}
                        className="w-full h-2/4 mobile:h-1/4   flex items-center justify-center"
                      >
                        <button
                          type="button"
                          className="flex justify-center items-center bg-yellow-400 px-9 py-3 text-xs font-medium uppercase leading-normal text-black shadow-light-3 transition duration-150 ease-in-out hover:bg-yellow-500 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                        >
                          LEARN MORE
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="flex w-full h-full pt-5 justify-center items-center">
        {/* LEFT BUTTON */}
        <motion.div
          className={` flex items-center justify-center w-10 px-2  mr-3 transition-all cursor-pointer group   ${
            currentSlide === 0 ? " pointer-events-none" : ""
          }`}
          animate={mainControls}
          onClick={Prev}
          onMouseEnter={Prev}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{
            duration: 0.8,
            delay: 1.5,
            ease: [0.3, 0.71, 0.9, 1.0],
          }}
        >
          <FaAngleLeft
            className={`fill-slate-500  ${
              currentSlide === 0
                ? "fill-slate-500/20 group-hover:fill-slate-500/20"
                : ""
            }`}
          />
        </motion.div>

        {/* Dots */}
        <div className="flex flex-row gap-2   mobile:gap-3">
          {Array.from({
            length: Math.ceil(adjustedLength),
          }).map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full cursor-pointer transition-all ease-out mobile:w-5 mobile:h-5 ${
                currentSlide === index
                  ? "bg-gray-700 scale-110"
                  : "bg-gray-300 scale-95"
              }`}
            />
          ))}
        </div>

        {/* RIGHT BUTTON */}
        <motion.div
          className={`flex items-center justify-center ml-3 w-10 px-2  transition-all cursor-pointer group   ${
            currentSlide === slidesData.length - 3 ? " pointer-events-none" : ""
          }`}
          animate={mainControls}
          onClick={nextSlide}
          onMouseEnter={nextSlide}
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
          <FaAngleRight
            className={`fill-slate-500  ${
              currentSlide === slidesData.length - 3
                ? "fill-slate-500/20 group-hover:fill-slate-500/20 pointer-events-none"
                : ""
            }`}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;
