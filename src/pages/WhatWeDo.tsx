import { Carrousel } from "@/components/Carrousel";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import { Link } from "react-router-dom";

const slides1 = [
  "src/assets/carpentry/Carpentry.JPG",
  "src/assets/carpentry/Carpentry2.JPG",
  "src/assets/carpentry/Carpentry3.JPG",
];

const slides2 = [
  "src/assets/bath-remodeling/bth1.JPG",
  "src/assets/bath-remodeling/bth2.JPG",
  "src/assets/bath-remodeling/bth3.JPG",
];

const slides3 = [
  "src/assets/painting/painting1.JPG",
  "src/assets/painting/Painting2.jpg",
  "src/assets/painting/Painting3.jpg",
];

const WhatWeDo = () => {
  // const { scrollYProgress: completionProgress } = useScroll();

  const containerRef = useRef(null);

  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start end", "end end"],
  // });

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

      {/* Images container section */}
      <div className="flex justify-center ">
        <div className="grid  grid-cols-3 gap-12  " ref={containerRef}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="grid  place-items-center shadow-2xl w-[27vw] "
              animate={mainControls}
              initial="hidden"
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              <Carrousel
                images={slides1}
                className="w-full h-[15rem] border-none p-0 "
              />
              <div className="grid  place-items-center px-10 m-5">
                <h1 className="flex justify-center font-bold ">
                  CUSTOM CARPENTRY
                </h1>
                <h2 className="my-5">
                  Set up an appointment to talk in-person or virtually with a
                  Designer about ideas for your home. Together, you will develop
                  design concepts, make product selections, and finalize details
                  on your blueprints. We’ll handle the permits and construction
                  and a dedicated Project Superintendent will make sure
                  everything runs smoothly, all the way through to the final
                  inspection.
                </h2>
                <Link to="carpentry">
                  <button
                    type="button"
                    className="my-5 flex justify-center  bg-yellow-400 px-9 py-3 text-xs font-medium uppercase leading-normal text-black shadow-light-3 transition duration-150 ease-in-out hover:bg-yellow-500 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  >
                    LEARN MORE
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* SECOND SET */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="grid place-items-center shadow-2xl w-[27vw]  "
              animate={mainControls}
              initial="hidden"
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              <Carrousel
                images={slides2}
                className="w-full h-[15rem] border-none p-0 "
              />
              <div className="grid  place-items-center px-10 m-5">
                <h1 className="flex justify-center font-bold ">
                  BATHROOM REMODELING
                </h1>
                <h2 className="my-5">
                  Set up an appointment to talk in-person or virtually with a
                  Designer about ideas for your home. Together, you will develop
                  design concepts, make product selections, and finalize details
                  on your blueprints. We’ll handle the permits and construction
                  and a dedicated Project Superintendent will make sure
                  everything runs smoothly, all the way through to the final
                  inspection.
                </h2>
                <Link to="bathremodeling">
                  <button
                    type="button"
                    className="my-5 flex justify-center  bg-yellow-400 px-9 py-3 text-xs font-medium uppercase leading-normal text-black shadow-light-3 transition duration-150 ease-in-out hover:bg-yellow-500 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  >
                    LEARN MORE
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* THIRD SET */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="grid place-items-center shadow-2xl w-[27vw]  "
              animate={mainControls}
              initial="hidden"
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              <Carrousel
                images={slides3}
                className="w-full h-[15rem] border-none p-0 "
              />
              <div className="grid  place-items-center px-10 m-5">
                <h1 className="flex justify-center font-bold ">
                  INTERIOR AND EXTERIOR PAINTING
                </h1>
                <h2 className="my-5">
                  Set up an appointment to talk in-person or virtually with a
                  Designer about ideas for your home. Together, you will develop
                  design concepts, make product selections, and finalize details
                  on your blueprints. We’ll handle the permits and construction
                  and a dedicated Project Superintendent will make sure
                  everything runs smoothly, all the way through to the final
                  inspection.
                </h2>
                <Link to="painting">
                  <button
                    type="button"
                    className="my-5 flex justify-center  bg-yellow-400 px-9 py-3 text-xs font-medium uppercase leading-normal text-black shadow-light-3 transition duration-150 ease-in-out hover:bg-yellow-500 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  >
                    LEARN MORE
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
