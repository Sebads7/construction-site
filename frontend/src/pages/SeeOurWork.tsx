import ButtonUp from "@/components/ButtonUp";
import useScreenSizes from "@/components/hooks/useScreenSize";
import GridGallery from "@/components/GridGallery";
import { work_data } from "@/constants/index";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    setSections(work_data);
  }, []);

  const handleSectionChange = (section: string) => {
    setTimeout(() => {
      setActiveSection(section);
    }, 300);
  };

  const { isMobile, isLarge } = useScreenSizes();
  if (isLarge === null || isMobile === null) {
    return null;
  }

  return (
    <div>
      <div className="bg-black/80 z-[5] w-full h-[80px] flex fixed tablet:hidden"></div>

      <div className="w-full  h-[30rem]   flex tablet:h-[20rem] ">
        <div className="bg-black/30   w-full h-full fixed -z-10 "> </div>
        <div className="fixed w-full h-full  -z-20  ">
          <img
            src="/images/fronthouse-lg.webp"
            alt="background"
            className=" w-full h-screen object-cover"
          />
        </div>
        {/* PAGE NAME */}
        <div className="w-full h-[30rem]  left-0 flex  flex-col items-center justify-center    py-10 absolute  tablet:h-[10rem] tablet:mt-16">
          <div className=" w-full h-[300px]  flex justify-center items-center  ">
            <div className=" bg-zinc-700/85 h-[5.5rem] w-[22rem] flex justify-center items-center mobile:w-[17rem] mobile:h-[5rem]  ">
              <h1 className="flex text-xl  text-center justify-center text-white font-semibold outline  outline-offset-8 outline-gray-300 w-[30rem] mobile:text-sm  ">
                See Our Work
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex  justify-center items-center flex-col border-b-8 border-t-8 bg-black/20 border-white/40 mobile:text-xs  tablet:border-none  ">
        <div className="flex  w-full h-[2rem]  tablet:hidden "></div>

        {/* MOBILE TEXT */}
        {sections[activeSection] && (
          <div className="w-auto  text-white bg-zinc-700 pb-5   flex-col mobile:text-xs hidden tablet:flex ">
            <h1
              className="mb-4 w-full  text-4xl  font-extrabold 
            tracking-wider  text-center lg:text-5xl mobile:text-base  
              tablet:p-5 tablet:text-xl"
            >
              {sections[activeSection].title}
            </h1>
            <div className="flex flex-row mt-14 ml-5 tablet:ml-0 mobile:px-4 tablet:px-3 tablet:mt-0 ">
              <h2 className="w-[34vw] text-center leading-8 text-xl tablet:w-full mobile:text-sm tablet:text-base ">
                {sections[activeSection].description}
              </h2>
            </div>
          </div>
        )}

        <div className="  w-full h-[5rem]   bg-black/30 hidden mobile:fex border-b-8 border-t-8 border-white/40 "></div>

        <div className="flex    justify-center items-center w-full h-[5rem]  mobile:my-2  ">
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

        <div className="flex h-full justify-center  items-center w-full    px-10 tablet:px-0 ">
          {sections[activeSection] && (
            <div className="  h-full mx-5 tablet:mx-0  tablet:w-full ">
              <div className="relative  flex flex-row h-full py-10 justify-center  tablet:flex-col mobile:py-0 mobile:pb-1  ">
                {/* LEFT CONTAINER  */}
                <motion.div
                  className="relative w-[50%] text-white flex flex-col tablet:w-full  mobile:text-xs tablet:hidden tablet:mb-10"
                  initial={{
                    opacity: 0,
                    translateY: 100,
                  }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                >
                  <div className="sticky top-28 bg-zinc-700/85 shadow-2xl shadow-white/20 py-7 mr-5">
                    <h1 className=" mb-4 scroll-m-20  w-4/5 mx-auto text-4xl font-extrabold tracking-wider lg:text-5xl text-center  tablet:text-center mobile:text-base  tablet:px-5 mobile:text-center tablet:pt-10 tablet:text-xl ">
                      {sections[activeSection].title}
                    </h1>
                    <div className=" flex flex-row mt-14 ml-5 mobile:ml-0 tablet:px-4 mobile:mt-5  ">
                      <div className="w-2 bg-white mr-10 mobile:mr-2 "></div>
                      <h2 className="w-[34vw] leading-8 text-xl tablet:w-full mobile:text-sm ">
                        {sections[activeSection].description}
                      </h2>
                    </div>
                  </div>
                </motion.div>

                {/* RIGHT CONTAINER (IMAGES) */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                  className="w-[65%] tablet:w-full bg-[#787072] tablet:px-8 tablet:py-10  p-9 "
                >
                  <GridGallery
                    images={sections[activeSection].images || []}
                    imageLength={isMobile ? 3 : 7}
                    viewmoreBorder="border border-white "
                    viewmoreButton="border border-white "
                  />
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-full  h-[10rem] tablet:h-[10rem]  tablet:border-none flex border-white/40 border-t-8 ">
        <div className="bg-black/30 w-full h-full fixed -z-10 "> </div>
      </div>

      <ButtonUp />
    </div>
  );
};

export default SeeOurWork;
