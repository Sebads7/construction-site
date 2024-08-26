import { Carrousel } from "@/components/Carrousel";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const tablet = window.innerWidth < 900;

const slidesData = [
  {
    title: "CUSTOM CARPENTRY",
    images: [
      "/images/carpentry/Cabinets5.jpeg",
      "/images/carpentry/Cabinets2.jpeg",
      "/images/carpentry/Cabinets3.jpeg",
      "/images/carpentry/Carpentry2.JPG",
    ],
    link: "carpentry",
    description:
      "From custom cabinets and elegant trim work to personalized furniture and intricate woodworking projects, we bring creativity and precision to every detail.",
    variants: {
      hidden: { opacity: 0, x: tablet ? 0 : -100, y: tablet ? 100 : 100 },
      visible: { opacity: 1, x: 1, y: 1 },
    },
  },

  {
    title: "BATHROOM REMODELING",
    images: [
      "/images/bath-remodeling/bath-remodeling1.jpeg",
      "/images/bath-remodeling/bath-remodeling2.jpeg",
      "/images/bath-remodeling/bath-remodeling3.jpeg",

      "/images/bath-remodeling/bath-remodeling5.jpeg",
    ],
    link: "bath-remodeling",
    description:
      "Discover our extensive bathroom remodeling services, including tile installation, cabinetry and storage solutions, lighting and electrical work, plumbing services, flooring installation, and painting.",
    variants: {
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0 },
    },
  },
  {
    title: "INTERIOR AND EXTERIOR PAINTING",
    images: [
      "/images/painting/InteriorPainting1.jpg",
      "/images/painting/InteriorPainting2.jpeg",
      "/images/painting/InteriorPainting3.jpeg",
      "/images/painting/InteriorPainting5.jpeg",
      "/images/painting/InteriorPainting6.jpeg",
    ],
    link: "painting",
    description:
      "Discover our extensive interior and exterior painting services. From detailed surface preparation to expert color selection, we ensure every brushstroke enhances your home’s beauty. ",
    variants: {
      hidden: { opacity: 0, x: 100, y: 100 },
      visible: { opacity: 1, x: 1, y: 1 },
    },
  },
  {
    title: "PRESSURE WASHING",
    images: [
      "/images/pressure washing/pressure-washing4.jpg",
      "/images/pressure washing/pressure-washing5.jpg",
      "/images/pressure washing/pressure-washing-deck.jpg",
    ],
    link: "pressure-washing",
    description:
      "Revitalize your surfaces with our professional pressure washing services. Whether it's your home's exterior, driveway, or deck, we specialize in thorough cleaning to restore beauty and curb appeal. ",
  },

  {
    title: "KITCHEN REMODELING",
    images: [
      "/images/kitchen remodeling/kitch-rem.webp",
      "/images/kitchen remodeling/kitch-rem2.webp",
      "/images/kitchen remodeling/kitch-rem3.jpeg",
    ],
    link: "kitchen-remodeling",
    description:
      "Transform your kitchen, from custom cabinetry and counter-top installation to lighting design and flooring solutions, we specialize in creating functional and stylish spaces tailored to your needs. ",
  },
];

const WhatWeDo = () => {
  const containerRef = useRef(null);
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

  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1279);
  const adjustedLength = isMobile ? slidesData.length : slidesData.length - 2;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1279); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const Prev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slidesData.length - 1));
  };

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
        className="flex 
      flex-row 
      mobile:flex-col 
      justify-center 
      items-center  
      mobile:px-5 
      overflow-hidden 
      relative px-10 
      w-full 
      tablet:px-0 
      no-scrollbar
      "
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* LEFT BUTTON */}
        <motion.div
          className={`lg:hidden flex items-center justify-center w-10 px-2 mr-7 border-2 border-gray-200 hover:bg-gray-200 transition-all cursor-pointer group bg-white z-[2] h-[41rem] ${
            currentSlide === 0
              ? "border-opacity-20 hover:bg-gray-200/[1%] pointer-events-none"
              : ""
          }`}
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
            ease: [0.3, 0.71, 0.9, 1.0],
          }}
        >
          <FaAngleLeft
            className={`fill-slate-500 group-hover:fill-white ${
              currentSlide === 0
                ? "fill-slate-500/20 group-hover:fill-slate-500/20"
                : ""
            }`}
          />
        </motion.div>

        {/* SLIDES */}
        <div className="flex justify-center items-center  w-[90%] tablet:w-full   ">
          <div
            className="grid
           overflow-hidden 
           w-full  
           mobile:w-[20rem] 
           tablet:w-[23rem]
           lg:w-[47rem]
         
           
           
               "
          >
            <motion.div
              className="grid grid-flow-col  gap-8 transition-all duration-700 ease-in-out mobile:mx-0  w-auto  p-2 mobile:gap-3 tablet:gap-5 lg:gap-5 "
              ref={containerRef}
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
                  w-[26vw] 
                  h-[42rem] 
                  pb-5 
                  mobile:w-[19rem] 
                  mobile:h-[35rem]  
                
                  lg:w-[22rem] 
               
                
                 
                  
                  "
                    animate={mainControls}
                    initial="hidden"
                    variants={slide.variants}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
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

        {/* RIGHT BUTTON */}
        <motion.div
          className={`lg:hidden flex items-center px-2 ml-7 border-2 border-gray-200 hover:bg-gray-200 transition-all cursor-pointer group  z-[2] h-[41rem]  ${
            currentSlide === slidesData.length - 3
              ? "border-opacity-20 hover:bg-gray-200/[1%] pointer-events-none"
              : ""
          }`}
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
          <FaAngleRight
            className={`fill-slate-500 group-hover:fill-white ${
              currentSlide === slidesData.length - 3
                ? "fill-slate-500/20 group-hover:fill-slate-500/20 pointer-events-none"
                : ""
            }`}
          />
        </motion.div>
      </div>

      {/* Dots */}
      <div className="flex flex-row gap-2 justify-center pt-5 mobile:gap-3">
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
    </div>
  );
};

export default WhatWeDo;
