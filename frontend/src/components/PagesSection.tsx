import { motion, useAnimation, useInView } from "framer-motion";
import { Carrousel } from "./Carrousel";
import { TbPointFilled } from "react-icons/tb";
import slide from "@/assets/SlideImages.json";
import { useEffect, useRef } from "react";

type PagesSectionProps = {
  content: {
    pageName: string;
    title: string;
    description: string;
    whyChooseUs: string[];
    servicesInclude: string[];
    imageBackground: string;
    WhyChooseUsTitle: string;
  };
};

const PagesSection: React.FC<PagesSectionProps> = ({ content }) => {
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
      <div className="w-full h-[60rem] flex   ">
        <div className="  h-full -z-20 bg-gray-900 opacity-70  ">
          <div className="fixed  h-full w-full -z-20  ">
            <img
              src={content.imageBackground}
              alt="background"
              className=" w-full h-screen object-cover "
            />
          </div>
        </div>

        <motion.div
          className="w-full h-[60rem]  left-0 
    flex  
    flex-col items-center  bg-black/50 py-10 absolute "
        >
          <div className=" w-full h-1/3 flex justify-center items-center  ">
            <div className=" bg-zinc-700/80 h-[5.5rem] w-[22rem] flex justify-center items-center   ">
              <h1 className="flex text-xl  text-center justify-center text-white font-semibold outline  outline-offset-8 outline-gray-300 w-[30rem]  ">
                {content.pageName}
              </h1>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: 1 }}
            className="flex flex-col justify-center items-center  w-full h-2/4 bg-gray-900/10 p-10"
          >
            <h1 className="mb-4 text-white scroll-m-20 text-4xl font-extrabold tracking-wider lg:text-5xl  ">
              {content.title}
            </h1>
            <h2 className="w-[70rem] text-white text-center leading-7 [&:not(:first-child)]:mt-6 text-xl">
              {content.description}
            </h2>
          </motion.div>
        </motion.div>
      </div>

      <div className="h-[15rem] w-full bg-white/95"></div>

      <motion.div
        className="flex  w-full h-full   bg-white  "
        ref={containerRef}
      >
        {/* LEFT  TEXT */}
        <motion.div
          // initial={{ opacity: 0, y: -100 }}
          // animate={{ opacity: 1, y: 0 }}

          className="w-[50%]"
        >
          <div className="bg-black/10 flex flex-col  justify-center items-center h-[45rem]  ">
            <motion.div
              className="bg-gray-200 w-3/4    p-10 flex justify-center  shadow-2xl "
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
              <div className=" flex flex-col  justify-center  bg-slate-50/90 shadow-2xl    ">
                <h3 className="text-xl font-semibold tracking-tight text-center py-5  ">
                  {content.WhyChooseUsTitle}
                </h3>
                <ul className="flex flex-col gap-6 text-base tracking-tight  px-10 pb-5  ">
                  {content.whyChooseUs.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="flex flex-col w-[50%]">
          <div className="flex ">
            <Carrousel
              images={slide.kitchenRemodeling}
              className="border-none w-[22rem] h-[46.5rem]"
            />
            {/* RIGHT  TEXT */}
            <div className="bg-black/10  flex h-[45rem] w-full   justify-center items-center ">
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
                className=" bg-gray-200 shadow-2xl  flex flex-col justify-center  p-10  "
              >
                <div className="  bg-slate-50/90 p-10 py-20  h-full items-center justify-center flex flex-col shadow-2xl  ">
                  <h3 className=" text-xl font-semibold tracking-tight pb-5 ">
                    Our Services Include:
                  </h3>
                  <ul className="flex flex-col gap-5  text-lg tracking-tight ">
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

      <div className="h-[15rem] w-full bg-white/95"></div>

      <div className="w-full  h-[20rem]  flex bg-black/50"></div>
    </div>
  );
};

export default PagesSection;
