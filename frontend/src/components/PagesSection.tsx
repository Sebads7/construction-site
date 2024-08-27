import { motion } from "framer-motion";
import { Carrousel } from "./Carrousel";
import { TbPointFilled } from "react-icons/tb";

import Review from "@/components/Review";
import GridGallery from "@/components/GridGallery";
import useInViewAnimation from "./hooks/useInView";

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
  const { ref, mainControls } = useInViewAnimation();
  const { ref: containerRef2, mainControls: mainControls2 } =
    useInViewAnimation();

  return (
    <div className=" z-0">
      <div className="bg-black opacity-50 w-full h-[76px] flex fixed z-[9] tablet:hidden"></div>
      <div className="w-full h-[60rem] flex  tablet:h-[40rem]   ">
        {/* BACKGROUND IMAGE */}
        <div className="relative  h-full -z-10 bg-gray-900 opacity-70  ">
          <div className="fixed  h-full w-full -z-20  ">
            <img
              src={content.imageBackground}
              alt="background"
              className=" w-full h-screen object-cover "
            />
          </div>
        </div>

        <motion.div
          className="w-full h-[60rem]  tablet:h-[40rem]  left-0 
    flex  
    flex-col 
    items-center  
    bg-black/50 
    py-10
    tablet:pt-24 
    absolute  "
        >
          {/* PAGE NAME */}
          <div className=" w-full h-1/3 flex justify-center items-center   tablet:h-1/4 tablet:mb-10 ">
            <div className=" bg-zinc-700/80 h-[5.5rem] w-[22rem] flex justify-center items-center mobile:w-[17rem]  ">
              <h1 className="flex text-xl  text-center justify-center text-white font-semibold outline  outline-offset-8 outline-gray-300 w-[30rem]  mobile:text-sm">
                {content.pageName}
              </h1>
            </div>
          </div>
          {/* TITLE AND SUBTITLE */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="flex flex-col justify-center items-center  w-full h-2/4 bg-gray-900/10 tablet:p-2 tablet:h-2/5 "
          >
            <h1 className="mb-4 text-white scroll-m-20 text-4xl font-extrabold tracking-wider lg:text-5xl  mobile:text-lg  tablet:text-center tablet:text-3xl">
              {content.title}
            </h1>
            <h2 className="w-[70rem] text-white text-center leading-7 [&:not(:first-child)]:mt-6 text-xl tablet:w-full mobile:text-sm tablet:text-lg">
              {content.description}
            </h2>
          </motion.div>
        </motion.div>
      </div>

      <div className="h-[15rem] w-full bg-white/95 mobile:h-32 tablet:hidden"></div>

      {/* FIRST SECTION */}

      <motion.div
        className="flex tablet:flex-col  w-full h-full   bg-white  "
        ref={ref}
      >
        {/* LEFT  TEXT */}
        <motion.div
          // initial={{ opacity: 0, y: -100 }}
          // animate={{ opacity: 1, y: 0 }}

          className="w-[47%] tablet:w-full "
        >
          <div className="bg-black/10 flex flex-col  justify-center items-center h-[45rem] w-full ">
            <motion.div
              className="bg-gray-200 w-10/12    p-10 flex justify-center  shadow-2xl tablet:w-full tablet:px-5 "
              animate={mainControls}
              initial="hidden"
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{
                duration: 1.5,
                delay: 0.5,
                ease: [0.4, 0.7, 0.4, 1.01],
              }}
            >
              <div className=" flex flex-col  justify-center items-center bg-slate-50/90 shadow-2xl   ">
                <h3 className="text-xl font-semibold tracking-tight text-center py-5  w-3/4 mobile:w-full mobile:text-sm   ">
                  {content.WhyChooseUsTitle}
                </h3>
                <ul className="flex flex-col gap-6 text-base tracking-tight  px-10 pb-5 mobile:text-xs   ">
                  {content.whyChooseUs.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="flex flex-col  w-[53%] tablet:w-full ">
          <div className="flex tablet:flex-col ">
            <Carrousel
              images={content.images}
              className="border-none w-[22rem] h-[46.5rem] tablet:w-full mobile:h-[25rem] tablet:mt-3"
            />

            {/* RIGHT  TEXT */}
            <div className="bg-black/10  flex h-[45rem] w-full   justify-center items-center  ">
              <motion.div
                animate={mainControls}
                initial="hidden"
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.7,
                  ease: [0.4, 0.7, 0.4, 1.01],
                }}
                className=" bg-gray-200 shadow-2xl  flex flex-col justify-center  p-10 tablet:w-full mobile:px-5 "
              >
                <div className="  bg-slate-50/90  py-20  h-full items-center justify-center flex flex-col shadow-2xl bg-red ">
                  <h3 className=" text-xl font-semibold tracking-tight pb-5 px-2  w-3/4 text-center mobile:text-sm  mobile:w-full">
                    {content.ourServices}
                  </h3>
                  <ul className="flex flex-col gap-5  text-lg tracking-tight mobile:text-xs ">
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
        </div>
      </motion.div>

      <div className="h-[15rem] w-full bg-white/95 tablet:hidden"></div>

      <div className="w-full  h-[20rem]  flex bg-black/50 tablet:h-[10rem]"></div>

      {/* REVIEW,  CONTACT */}

      <div className="flex flex-col w-full h-full py-20  bg-white/95">
        <div className="flex flex-col  justify-center">
          <div className=" flex flex-col justify-center items-center w-full h-[25rem]  px-4 tablet:h-[20rem]   ">
            <h2 className="text-center mb-4  scroll-m-20  font-extrabold tracking-wider text-4xl  mobile:text-lg tablet:text-2xl">
              The Top Trusted Remodeling Experts in Atlanta
            </h2>
            <h3 className="w-[60rem] tablet:w-full text-center leading-7 [&:not(:first-child)]:mt-6 text-lg  mobile:text-sm ">
              We are committed to delivering the best home improvement
              experience of your life. We handle the whole process from start to
              finish, so you have one point of contact through your entire
              project.
            </h3>
          </div>
          <Review />
        </div>
      </div>

      <div className="w-full  h-[20rem]  mobile:h-[10rem]  flex bg-black/50"></div>

      {/* GALLERY SECTION */}

      <motion.div
        ref={containerRef2}
        className="px-10 tablet:px-0 w-full h-full bg-white/95 p-44 tablet:pt-20 tablet:pb-0"
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
            <GridGallery images={content.images} imageLength={3} />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="w-full  h-[16rem] tablet:hidden  flex bg-black/50"></div>
    </div>
  );
};

export default PagesSection;
