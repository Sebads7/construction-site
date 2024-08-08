import ButtonUp from "@/components/ButtonUp";

import GridGallery from "@/components/GridGallery";
import sectionData from "@/assets/SeeOurWork.json";

import { Button } from "@/components/ui/button";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Section {
  title: string;
  description: string;
  images?: string[];
}

interface SectionsData {
  [key: string]: Section;
}

const SeeOurWork = () => {
  const [activeSection, setActiveSection] = useState<string>("bath");
  const [sections, setSections] = useState<SectionsData>({});

  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [isLarge, setIsLarge] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsLarge(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  useEffect(() => {
    setSections(sectionData);
  }, []);

  const handleSectionChange = (section: string) => {
    setTimeout(() => {
      setActiveSection(section);
    }, 300);
  };
  return (
    <div>
      <div className="bg-black opacity-50 w-full h-[65px] flex fixed tablet:hidden"></div>

      <div className="w-full  h-[30rem]  flex tablet:h-[20rem] ">
        <div className="bg-black/30 w-full h-full fixed -z-10 "> </div>
        <div className="fixed w-full h-full  -z-20  ">
          <img
            src="/images/fronthouse.jpeg"
            alt="background"
            className=" w-full h-screen object-cover"
          />
        </div>
        {/* PAGE NAME */}
        <div className="w-full h-[30rem]  left-0 flex  flex-col items-center justify-center  bg-black/10 py-10 absolute  tablet:h-[10rem] tablet:mt-16">
          <div className=" w-full h-[300px]  flex justify-center items-center  ">
            <div className=" bg-zinc-700/85 h-[5.5rem] w-[22rem] flex justify-center items-center mobile:w-[17rem] mobile:h-[5rem]  ">
              <h1 className="flex text-xl  text-center justify-center text-white font-semibold outline  outline-offset-8 outline-gray-300 w-[30rem] mobile:text-sm  ">
                See Our Work
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex  justify-center items-center flex-col border-b-8 border-t-8 border-white/40 mobile:text-xs   ">
        <div className="flex  w-full h-[2rem]   bg-black/30  "></div>

        {sections[activeSection] && (
          <div className="w-[60vw] text-white  flex-col tablet:w-full mobile:text-xs hidden tablet:flex tablet:mb-10">
            <h1 className="mb-4 scroll-m-20 text-4xl font-extrabold tracking-wider lg:text-5xl text-left mobile:text-base  mobile:px-5 tablet:text-center tablet:pt-10 tablet:text-xl">
              {sections[activeSection].title}
            </h1>
            <div className="flex flex-row mt-14 ml-5 tablet:ml-0 mobile:px-4 tablet:px-3 tablet:mt-5 ">
              <div className="w-2 bg-white mr-10 tablet:mr-2 "></div>
              <h2 className="w-[34vw] leading-8 text-xl tablet:w-full mobile:text-sm tablet:text-base ">
                {sections[activeSection].description}
              </h2>
            </div>
          </div>
        )}

        <div className="  w-full h-[5rem]   bg-black/30 hidden mobile:fex border-b-8 border-t-8 border-white/40 "></div>

        <div className="flex   justify-center items-center w-full h-[5rem] bg-black/30 mobile:mt-10  ">
          <div className="flex gap-5 mobile:gap-2  ">
            {Object.keys(sections).map((section) => (
              <Button
                key={section}
                variant="custom"
                className={`py-5 mobile:py-2 mobile-text-xs mobile:w-[5rem] ${
                  activeSection === section ? "bg-white text-black" : ""
                }`}
                onClick={() => handleSectionChange(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex h-full justify-center items-center w-full bg-black/30  px-10 tablet:px-0 ">
          {sections[activeSection] && (
            <div className="h-full mx-5 tablet:mx-0  tablet:w-full ">
              <div className="flex flex-row h-full py-10 justify-center  tablet:flex-col mobile:py-0 mobile:pb-1  ">
                <div className="w-[60vw] text-white flex flex-col tablet:w-full  mobile:text-xs tablet:hidden tablet:mb-10">
                  <h1 className="mb-4 scroll-m-20 text-4xl font-extrabold tracking-wider lg:text-5xl text-left tablet:text-center mobile:text-base  tablet:px-5 mobile:text-center tablet:pt-10 tablet:text-xl ">
                    {sections[activeSection].title}
                  </h1>
                  <div className="flex flex-row mt-14 ml-5 mobile:ml-0 tablet:px-4 mobile:mt-5  ">
                    <div className="w-2 bg-white mr-10 mobile:mr-2 "></div>
                    <h2 className="w-[34vw] leading-8 text-xl tablet:w-full mobile:text-sm ">
                      {sections[activeSection].description}
                    </h2>
                  </div>
                </div>

                <motion.div
                  initial={{
                    opacity: 0,
                    x: isMobile ? 0 : 100,
                    y: isLarge ? 0 : 100,
                  }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                  className="w-[50%] tablet:w-full tablet:bg-[#272829] tablet:px-8 tablet:py-10 "
                >
                  <GridGallery
                    images={sections[activeSection].images || []}
                    imageLength={isMobile ? 3 : 7}
                    className="mobile:space-y-4 "
                  />
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* <div className="w-full h-full pb-20 bg-white/95">
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
        <Review />
      </div> */}

      <div className="w-full  h-[30rem] tablet:h-[10rem]  flex border-white/40 border-t-8 ">
        <div className="bg-black/30 w-full h-full fixed -z-10 "> </div>
      </div>

      <ButtonUp />
    </div>
  );
};

export default SeeOurWork;
