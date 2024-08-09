import WhatWeDo from "./WhatWeDo";

import Review from "@/components/Review";
import Promotion from "@/components/Promotion";
import { motion } from "framer-motion";

const mobile = window.innerWidth < 900;
const lg = window.innerWidth > 1024;

const Home = () => {
  return (
    <div className="w-full h-full ">
      <div className=" relative flex flex-row mobile:flex-col h-full  ">
        <div className=" w-full h-[60rem]   bg-black/90  ">
          <img
            src="/images/fronthouse-lg.jpg"
            alt="background"
            className=" w-full h-screen tablet:h-full  object-cover"
          />
        </div>

        <div
          className="flex w-full h-full flex-row   bg-black/20  absolute mobile:items-center 
        
        tablet:flex-col mobile:h-2/4 
        
        "
        >
          <motion.div
            initial={{ opacity: 0, x: mobile ? 0 : -100, y: lg ? 0 : -100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.4, 0.3, 0.8, 1.01],
              delay: 0.2,
            }}
            className="
            flex
             flex-col
             justify-center
             items-center 
             h-auto
             w-full 
          bg-black/30
              px-8
              mobile:px-4
              z-2"
          >
            <h1 className=" text-center pt-1 tablet:pt-[5rem]  mb-4   text-white scroll-m-20  font-extrabold tracking-wider text-5xl mobile:text-lg tablet:text-xl ">
              Atlanta's Top Remodeling Experts
            </h1>
            <h2 className="w-4/5 text-white text-center leading-7 mt-6 text-xl mobile:text-sm mobile:pb-10 tablet:text-base tablet:pb-1 tablet:w-full  ">
              Discover top-notch home improvement with ABJ Painting &
              Remodeling. Our expert team manages every detail from start to
              finish, ensuring a smooth and stress-free experience. Enjoy peace
              of mind with a single point of contact while your dream home
              becomes a reality—no effort required on your part.
            </h2>
          </motion.div>

          {/* Fade In from right to center */}

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.1, 0.2, 0.6, 1.01],
              delay: 1.4,
            }}
            className="
            flex 
            justify-center
             items-center  
             h-full 
             w-3/4 
             mt-5
            
            mobile:w-11/12 
            mobile:px-2
            mobile:mt-10
            tablet:mt-0
            tablet:w-full
            tablet:px-24
            
            "
          >
            <Promotion />
          </motion.div>
        </div>
      </div>

      <WhatWeDo />
      <div className="w-full h-[10rem] mobile:h-10"></div>

      {/* REVIEW AND PROMO */}

      <div>
        <div className=" flex flex-col justify-center items-center w-full h-[25rem]  px-4 mobile:h-[20rem]   ">
          <h2 className="text-center mb-4  scroll-m-20  font-extrabold tracking-wider text-4xl  mobile:text-lg tablet:text-xl">
            Atlanta's Premier Remodeling Experts
          </h2>
          <h3 className="w-[60rem] mobile:w-full tablet:w-[40rem] text-center leading-7 [&:not(:first-child)]:mt-6 text-lg  mobile:text-sm tablet:text-base ">
            Experience the best home improvements with our dedicated team. We
            manage every detail from beginning to end, ensuring a seamless
            process with a single point of contact for your entire project.
            Plus, enjoy 20% off your next renovation with our special promotion!
          </h3>
        </div>
        <Review />
      </div>

      <div className="w-full h-[10rem]"></div>
    </div>
  );
};

export default Home;
