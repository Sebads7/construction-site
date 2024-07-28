import GridGallery from "@/components/GridGallery";
import Review from "@/components/Review";
import PagesSection from "@/components/PagesSection";
import PageContent from "@/assets/pageContent.json";

import slide from "@/assets/SlideImages.json";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const BathRemodeling = () => {
  const containerRef = useRef(null);

  const isInView = useInView(containerRef);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div>
      <div className="bg-black opacity-50 w-full h-[65px] flex fixed z-[8]"></div>

      <PagesSection content={PageContent.bathroomRemodeling} />

      {/* REVIEW AND CONTACT SECTION */}

      <div className="flex flex-col w-full h-full py-20 z-10 bg-white/95">
        <div className="flex  flex-col  justify-center">
          <div className=" flex flex-col justify-center items-center w-full h-[25rem] ">
            <h2 className="text-center mb-4  scroll-m-20  font-extrabold tracking-wider lg:text-4xl  ">
              The Top Trusted Remodeling Experts in Atlanta
            </h2>
            <h3 className="w-[60rem]  text-center leading-7 [&:not(:first-child)]:mt-6 text-lg ">
              We are committed to delivering the best home improvement
              experience of your life. We handle the whole process from start to
              finish, so you have one point of contact through your entire
              project.
            </h3>
          </div>
          <Review />
        </div>

        <div className="h-[20rem] w-full "></div>

        {/* GALLERY SECTION */}

        <motion.div ref={containerRef} className="px-10">
          <motion.div className="bg-[#272829] opacity-85 py-20 px-10 shadow-xl ">
            <h3 className=" text-2xl font-semibold tracking-tight text-center pb-20 text-white">
              VIEW OUR RECENT BATHROOM REMODELING PROJECTS
            </h3>
            <motion.div
              animate={mainControls}
              initial="hidden"
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.5, 0.71, 0.9, 1.01],
              }}
            >
              <GridGallery images={slide.kitchenRemodeling} imageLength={3} />
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="h-[10rem] w-full "></div>
      </div>
      <div className="w-full  h-[20rem]  flex bg-black/50"></div>
    </div>
  );
};

export default BathRemodeling;
