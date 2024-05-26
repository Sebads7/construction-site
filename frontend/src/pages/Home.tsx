import Container from "@/components/Container";
import WhatWeDo from "./WhatWeDo";
import ButtonUp from "@/components/ButtonUp";
import Review from "@/components/Review";
import Promotion from "@/components/Promotion";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Container>
        <div className="bg-black opacity-50 w-full h-[65px] flex fixed "></div>
        <div className="w-full h-[60rem] grid grid-rows-2">
          <div className="w-full  bg-black/90  ">
            <img
              src="src/assets/fronthouse.jpeg"
              alt="background"
              className="w-full h-screen object-cover"
            />
          </div>

          <div className="w-full h-full  justify-center    bg-black/20  absolute  ">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              className="flex flex-col justify-center items-center h-full w-[50%] bg-black/30 px-8 z-10"
            >
              <h1 className="text-center mb-4 text-white scroll-m-20  font-extrabold tracking-wider lg:text-5xl  ">
                Atlanta's Top Remodeling Experts
              </h1>
              <h2 className="w-[full] text-white text-center leading-7 [&:not(:first-child)]:mt-6 text-lg ">
                Experience the ultimate in home improvement with ABJ Painting &
                Remodeling. Our dedicated team oversees every aspect, ensuring
                seamless progress from beginning to end. Enjoy peace of mindn
                with a single point of contact throughout your project. Sit
                back, unwind, and watch as your dream home takes shape, all
                without lifting a finger.
              </h2>
            </motion.div>
          </div>

          {/* Fade In from right to center */}

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.4 }}
            className="w-[50%]  h-full absolute right-0   "
          >
            <Promotion />
          </motion.div>
        </div>
      </Container>
      <WhatWeDo />
      <div className="w-full h-[10rem]"></div>

      <div>
        <div className=" flex flex-col justify-center items-center w-full h-[25rem] ">
          <h2 className="text-center mb-4  scroll-m-20  font-extrabold tracking-wider lg:text-4xl  ">
            The Top Trusted Remodeling Experts in Atlanta
          </h2>
          <h3 className="w-[60rem]  text-center leading-7 [&:not(:first-child)]:mt-6 text-lg ">
            We are committed to delivering the best home improvement experience
            of your life. We handle the whole process from start to finish, so
            you have one point of contact through your entire project.
          </h3>
        </div>
      </div>
      <div className="flex justify-center">
        <Review />
      </div>

      <div className="w-full h-[10rem]"></div>

      <ButtonUp />
    </>
  );
};

export default Home;
