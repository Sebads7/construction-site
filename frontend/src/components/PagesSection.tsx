import { easeIn, motion } from "framer-motion";
import { Carrousel } from "./Carrousel";
import { TbPointFilled } from "react-icons/tb";

import Review from "@/components/Review";
import GridGallery from "@/components/GridGallery";
import useInViewAnimation from "./hooks/useInView";
import { useState } from "react";

type PagesSectionProps = {
  content: {
    pageName: string;
    title: string;
    description: string;
    whyChooseUs: string[];
    servicesInclude: string[];
    imageBackground: string;
    ourServices: string;
    WhyChooseUsTitle: string;
    galleryTitle: string;
    images: string[];
  };
};

const PagesSection: React.FC<PagesSectionProps> = ({ content }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };
  const { ref, mainControls } = useInViewAnimation();
  const { ref: containerRef2, mainControls: mainControls2 } =
    useInViewAnimation();

  return (
    <div className="   ">
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-70 -z-50"></div>
      <div className="bg-black opacity-50 w-full h-[76px] flex fixed z-[9] tablet:hidden"></div>
      <div className="w-full h-[60rem] flex  tablet:h-[40rem] z-10  ">
        {/* BACKGROUND IMAGE */}
        <div className="relative  h-full -z-10 bg-gray-900 opacity-70  ">
          <div className="fixed  h-full w-full -z-20  ">
            <img
              src={content.imageBackground}
              alt="background"
              className=" w-full h-screen object-cover "
              onLoad={handleImageLoaded}
            />
          </div>
        </div>
        {imageLoaded && (
          <motion.div
            className="w-full h-[60rem]  tablet:h-[40rem]  left-0 flex  flex-col items-center  
        bg-black/10 py-10 tablet:pt-24 absolute  "
          >
            {/* PAGE NAME */}
            <div className=" w-full h-1/3 flex justify-center items-center   tablet:h-1/4 tablet:mb-10 ">
              <div className=" bg-zinc-700/80 h-[5.5rem] w-[22rem] flex justify-center items-center mobile:w-[17rem]  ">
                <h1 className="flex text-xl  text-center justify-center text-white font-semibold outline  outline-offset-8 outline-gray-300 w-[30rem]  mobile:text-sm lg:text-lg ">
                  {content.pageName}
                </h1>
              </div>
            </div>
            {/* TITLE AND SUBTITLE */}
            <motion.div
              initial={{ opacity: 0, height: "0%", filter: "blur(5px)" }}
              animate={{ opacity: 1, height: "55%", filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: "easeIn", delay: 0.5 }}
              className="flex flex-col justify-center items-center  w-full h-2/4 bg-black/30  tablet:p-2 tablet:h-2/5 "
            >
              <h1 className="mb-4 text-white scroll-m-20 text-4xl font-extrabold tracking-wider mobile:text-lg  lg:text-center xl:text-3xl lg:px-2">
                {content.title}
              </h1>
              <h2 className="w-[70rem] lg:w-[80%] xl:w-full text-white text-center leading-7 [&:not(:first-child)]:mt-6 text-xl  mobile:text-sm lg:text-lg">
                {content.description}
              </h2>
            </motion.div>
          </motion.div>
        )}
      </div>

      {imageLoaded && (
        <div>
          {/* FIRST SECTION */}
          <div className="w-full tablet:py-5 lg:py-10 xl:py-32 bg-white">
            <motion.div
              className="container flex lg:flex-col lg:space-y-5 justify-center items-center w-full lg:px-20 tablet:px-0 py-32  "
              ref={ref}
            >
              {/* LEFT  TEXT */}
              <motion.div className="w-[45%] 2xl:w-[50rem] xl:w-[42rem] lg:w-full  mx-auto">
                <div className="bg-black/10  flex flex-col h-[50rem] lg:h-[43rem] tablet:h-[50rem] justify-center items-center w-full py-5 px-9">
                  <motion.div
                    className=" flex justify-center "
                    animate={mainControls}
                    initial="hidden"
                    variants={{
                      hidden: { opacity: 0, scale: 0.7 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    transition={{
                      duration: 1,

                      ease: easeIn,
                    }}
                  >
                    <div className=" flex flex-col  justify-center items-center   py-10 bg-white shadow-2xl   ">
                      <h3 className="text-xl font-semibold tracking-tight text-center py-5  w-3/4 mobile:w-full mobile:text-sm xl:text-base  ">
                        {content.WhyChooseUsTitle}
                      </h3>
                      <ul className="flex flex-col gap-6 text-base tracking-tight  px-10 pb-5 mobile:text-xs  xl:text-sm text-center  ">
                        {content.whyChooseUs.map((item, index) => (
                          <li key={index}>
                            {item}
                            {index !== content.whyChooseUs.length - 1 && (
                              <hr className="w-48 h-1 mx-auto mt-4 bg-gray-300 border-0 rounded"></hr>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* RIGHT CONTAINER */}
              <div className="flex 2xl:flex-col  w-[60rem] h-[50rem]  2xl:w-[40rem]  xl:w-[30rem]  lg:w-full    lg:space-x-0 space-x-6 2xl:space-y-5  overflow-hidden  mx-auto">
                {/* MIDDLE IMAGE */}
                <div className=" 2xl:h-[15rem]  h-[50rem] w-[26vw] 2xl:w-[42rem] xl:w-[32rem] lg:w-[90vw] lg:h-[20rem] overflow-hidden lg:translate-x-[-22px] tablet:translate-x-0 tablet:h-[25rem] tablet:w-full ">
                  <Carrousel
                    images={content.images}
                    className="border-none rounded-none 2xl:w-full w-[25rem]   2xl:h-[15rem] xl:w-[33rem] lg:w-[60rem] lg:h-[20rem] tablet:w-full tablet:h-[25rem] h-[51.5rem] "
                  />
                </div>
                {/* RIGHT  TEXT */}
                <div className=" bg-gray-200  h-full 2xl:w-[41vw] xl:w-[37vw] lg:w-full  w-full relative ">
                  <motion.div
                    className=" w-full h-full  justify-center items-center flex absolute p-10 "
                    animate={mainControls}
                    initial="hidden"
                    variants={{
                      hidden: { opacity: 0, scale: 0.7 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    transition={{
                      duration: 1,

                      ease: easeIn,
                    }}
                  >
                    <div
                      className="flex  flex-col items-center justify-center w-full  h-4/5 lg:w-[50vw] lg:h-[26rem] tablet:w-[80dvw]  bg-white shadow-2xl 
                  "
                    >
                      <h3 className=" text-xl w-5/6 font-semibold tracking-tight pb-10  text-center mobile:text-sm xl:text-base ">
                        {content.ourServices}
                      </h3>
                      <ul className="flex flex-col gap-5  text-lg tracking-tight mobile:text-xs xl:text-sm ">
                        {content.servicesInclude.map((service, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span className="text-gray-400">
                              <TbPointFilled />
                            </span>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* DIVIDER */}

          <div className="w-full  h-[20rem]  flex bg-black/50 tablet:h-[10rem]"></div>

          {/* REVIEW,  CONTACT */}

          <div className="flex flex-col w-full h-full py-20  bg-white">
            <div className="flex flex-col  justify-center">
              <div className=" flex flex-col justify-center items-center w-full h-[25rem] lg:px-0  px-4 tablet:h-[20rem]   ">
                <h2 className="text-center mb-4  scroll-m-20  font-extrabold tracking-wider text-4xl  mobile:text-lg tablet:text-2xl lg:w-[90%]">
                  The Top Trusted Remodeling Experts in Atlanta
                </h2>
                <h3 className="w-[60rem] lg:w-[90%] text-center leading-7 [&:not(:first-child)]:mt-6 text-lg  mobile:text-sm ">
                  We are committed to delivering the best home improvement
                  experience of your life. We handle the whole process from
                  start to finish, so you have one point of contact through your
                  entire project.
                </h3>
              </div>

              <Review />
            </div>
          </div>

          <div className="w-full  h-[20rem]  mobile:h-[10rem]  flex bg-black/50"></div>

          {/* GALLERY SECTION */}

          <motion.div
            ref={containerRef2}
            className="px-10 tablet:px-0 w-full h-full bg-white p-44 tablet:pt-20 tablet:pb-0"
          >
            <motion.div className="bg-[#272829] w-full h-full  py-20 px-10 bg-opacity-80 shadow-xl tablet:px-5 ">
              <h3 className=" text-2xl font-semibold tracking-tight text-center pb-20 text-white mobile:text-sm  ">
                {content.galleryTitle}
              </h3>
              <motion.div
                animate={mainControls2}
                initial="hidden"
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0.5, 0.71, 0.9, 1.01],
                }}
              >
                <GridGallery
                  images={content.images}
                  imageLength={3}
                  viewmoreBorder="border border-white"
                  viewmoreButton="border border-white "
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="w-full  h-[16rem] tablet:hidden  flex bg-black/50"></div>
        </div>
      )}
    </div>
  );
};

export default PagesSection;
