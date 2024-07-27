import { Carrousel } from "@/components/Carrousel";
import slide from "@/assets/SlideImages.json";
import Review from "@/components/Review";
import GridGallery from "@/components/GridGallery";
import { GiSevenPointedStar } from "react-icons/gi";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { TbPointFilled } from "react-icons/tb";

const KitchenRemodeling = () => {
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);

  const isInView = useInView(containerRef);
  const isInView2 = useInView(containerRef2);
  const mainControls = useAnimation();
  const mainControls2 = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    if (isInView2) {
      mainControls2.start("visible");
    }
  }, [isInView, mainControls, isInView2, mainControls2]);

  return (
    <div>
      <div className="bg-black opacity-50 w-full h-[65px] flex fixed z-[8]"></div>

      {/* IMAGE AND TITLE */}

      <div className="w-full h-[60rem] flex   ">
        <div className="w-full  h-full -z-20 bg-gray-900 opacity-70  ">
          <div className="fixed w-full h-full  -z-20  ">
            <img
              src="./src/assets/kitchen remodeling/kitch-rem2.webp"
              alt="background"
              className="w-full h-screen object-cover "
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
                Kitchen Remodeling
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
              Revitalize Your Kitchen: Expert Remodeling Services
            </h1>
            <h2 className="w-[70rem] text-white text-center leading-7 [&:not(:first-child)]:mt-6 text-xl">
              Welcome to our world of craftsmanship, where wood meets creativity
              and precision. With a passion for transforming spaces, we
              specialize in bespoke carpentry solutions that blend timeless
              elegance with functional design, ensuring every project reflects
              your unique vision and exceeds expectations.
            </h2>
          </motion.div>
        </motion.div>
      </div>

      {/* FIRST SECTION */}

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
                  Why choose us for your kitchen remodeling project?
                </h3>
                <ul className="flex flex-col gap-6 text-base tracking-tight  px-10 pb-5  ">
                  <li>
                    Expert Design Consultation: Our seasoned designers will
                    collaborate closely with you to grasp your preferences,
                    cooking habits, and budget, ensuring every aspect of your
                    new kitchen reflects your needs.
                  </li>
                  <li>
                    Quality Craftsmanship: With years of industry experience,
                    our craftsmen are committed to delivering top-notch
                    workmanship. From bespoke cabinetry to intricate back-splash
                    designs, we meticulously attend to every detail to uphold
                    the highest standards of quality.
                  </li>
                  <li>
                    Timely Completion: We understand that a kitchen renovation
                    can disrupt your daily life. That's why we prioritize
                    finishing every project promptly and within budget, allowing
                    you to enjoy your upgraded kitchen without unnecessary
                    delays.
                  </li>
                  <li>
                    Personalized Solutions: We believe your kitchen should be a
                    reflection of your unique style. Whether you prefer
                    contemporary chic or classic warmth, we customize our
                    designs and solutions to complement your aesthetic
                    preferences and lifestyle.
                  </li>
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
                    <li className="flex items-center gap-2">
                      <span className=" text-gray-400 ">
                        <TbPointFilled />
                      </span>
                      Custom Cabinetry
                    </li>
                    <li className="flex items-center gap-2">
                      <span className=" text-gray-400 ">
                        <TbPointFilled />
                      </span>
                      Counter-tops
                    </li>
                    <li className="flex items-center gap-2">
                      <span className=" text-gray-400 ">
                        <TbPointFilled />
                      </span>
                      Lighting Design
                    </li>
                    <li className="flex items-center gap-2">
                      <span className=" text-gray-400 ">
                        <TbPointFilled />
                      </span>
                      Flooring
                    </li>
                    <li className="flex items-center gap-2">
                      <span className=" text-gray-400 ">
                        <TbPointFilled />
                      </span>
                      Plumbing and Fixtures
                    </li>
                    <li className="flex items-center gap-2">
                      <span className=" text-gray-400 ">
                        <TbPointFilled />
                      </span>
                      Painting and Wall Treatments
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="h-[15rem] w-full bg-white/95"></div>

      <div className="w-full  h-[20rem]  flex bg-black/50"></div>

      <div className="flex flex-col w-full h-full py-20 z-10 bg-white/95">
        <div className="flex flex-col  justify-center">
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

        <motion.div ref={containerRef2} className="px-10">
          <motion.div className="bg-[#272829] opacity-85 py-20 px-10 shadow-xl ">
            <h3 className=" text-2xl font-semibold tracking-tight text-center pb-20 text-white">
              VIEW OUR RECENT KITCHEN REMODELING PROJECTS
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
                delay: 0.4,
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

export default KitchenRemodeling;
