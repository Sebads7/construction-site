import ButtonUp from "@/components/ButtonUp";

import GridGallery from "@/components/GridGallery";
import { Button } from "@/components/ui/button";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const grid1 = [
  "src/assets/bath-remodeling/Bathroom Remodeling1.jpeg",
  "src/assets/bath-remodeling/Bathroom Remodeling2.jpeg",
  "src/assets/bath-remodeling/Bathroom Remodeling3.jpeg",
  "src/assets/bath-remodeling/Bathroom Remodeling4.jpeg",
  "src/assets/bath-remodeling/Bathroom Remodeling5.jpeg",
  "src/assets/bath-remodeling/Bathroom Remodeling6.jpeg",
  "src/assets/bath-remodeling/Bathroom Remodeling7.jpeg",
  "src/assets/bath-remodeling/Bathroom Remodeling8.jpeg",
  "src/assets/bath-remodeling/Bathroom Remodeling9.jpeg",
  "src/assets/bath-remodeling/Bathroom Remodeling10.jpeg",
  "src/assets/bath-remodeling/Bathroom Remodeling11.jpeg",
];

const SeeOurWork = () => {
  const [activeSection, setActiveSection] = useState("bath");

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const handleSectionChange = (section: string) => {
    setTimeout(() => {
      setActiveSection(section);
    }, 300);
  };
  return (
    <div>
      <div className="bg-black opacity-50 w-full h-[65px] flex fixed "></div>

      <div className="w-ful  h-[25rem]  flex ">
        <div className="bg-black/30 w-full h-full fixed -z-10 "> </div>
        <div className="fixed w-full h-full  -z-20  ">
          <img
            src="src/assets/fronthouse.jpeg"
            alt="background"
            className=" w-full h-screen object-cover"
          />
        </div>

        <div className="w-full left-0 h-full flex  flex-col items-center -z-10    pt-10  absolute">
          <div className=" w-full h-[423px] flex justify-center items-center  ">
            <div className=" bg-red-500/90 h-[4.5rem] w-[18rem] flex justify-center items-center  ">
              <h1 className="flex text-lg  text-center justify-center text-white font-semibold outline  outline-offset-8 outline-gray-300 w-[25rem]  ">
                See our Work
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex  justify-center items-center flex-col border-l-8 border-t-8 ml-32 border-white/40  ">
        <div className="flex  w-full h-[2rem]   bg-black/[70%]  "></div>
        <div className="flex  justify-center items-center w-full h-[5rem] bg-black/[70%] ">
          <div className="flex gap-5">
            <Button
              variant="custom"
              className={` py-5 ${
                activeSection === "bath" ? "bg-white text-black" : ""
              }`}
              onClick={() => {
                handleSectionChange("bath");
              }}
            >
              Bath
            </Button>
            <Button
              variant="custom"
              className={` py-5 ${
                activeSection === "kitchen" ? "bg-white text-black" : ""
              }`}
              onClick={() => {
                handleSectionChange("kitchen");
              }}
            >
              Kitchen
            </Button>
            <Button
              variant="custom"
              className={` py-5 ${
                activeSection === "carpentry" ? "bg-white text-black" : ""
              }`}
              onClick={() => {
                handleSectionChange("carpentry");
              }}
            >
              Carpentry
            </Button>
            <Button
              variant="custom"
              className={` py-5 ${
                activeSection === "painting" ? "bg-white text-black" : ""
              }`}
              onClick={() => {
                handleSectionChange("painting");
              }}
            >
              Painting
            </Button>
          </div>
        </div>

        <div className="flex h-full justify-center items-center w-full bg-black/[70%]  px-10">
          {/* Bath section  */}
          {activeSection === "bath" && (
            <div
              className={`h-full mx-5 transition-opacity duration-300 ${
                activeSection === "bath" ? "opacity-100" : "opacity-0"
              } delay-300`}
            >
              <div
                className={`flex flex-row  h-full  py-10 justify-center transition-opacity duration-300 ${
                  activeSection === "bath" ? "opacity-100" : "opacity-0"
                } delay-300`}
              >
                {/* left side */}
                <motion.div
                  className="w-[60vw] text-white flex flex-col"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                >
                  <h1 className="mb-4  scroll-m-20 text-4xl font-extrabold tracking-wider lg:text-5xl text-left   ">
                    Transform Your Bathroom into a Luxurious Oasis
                  </h1>

                  <div className="flex flex-row mt-14 ml-5 ">
                    <div className="w-2 bg-white mr-10"></div>
                    <h2 className="w-[34vw] leading-8 text-xl  ">
                      Embark on a journey of transformation with our exquisite
                      bathroom remodeling gallery, showcasing the epitome of
                      craftsmanship and innovation. Explore a symphony of design
                      possibilities, from contemporary marvels to timeless
                      classics, each image a testament to our dedication to
                      excellence. Witness the fusion of functionality and
                      aesthetics, as our skilled artisans breathe new life into
                      every space. Let our gallery inspire your imagination and
                      elevate your vision for the perfect bathroom retreat. At
                      Britez Remodeling, we turn dreams into reality, one
                      immaculate renovation at a time.
                    </h2>
                  </div>
                </motion.div>

                {/*gallery */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                  className="w-[50%]"
                >
                  <GridGallery images={grid1} imageLength={5} />
                </motion.div>
              </div>
            </div>
          )}

          {/* Kitchen section  */}
          {activeSection === "kitchen" && (
            <div
              className={`h-full mx-5 transition-opacity duration-300 ${
                activeSection === "kitchen" ? "opacity-100" : "opacity-0"
              } delay-300`}
            >
              <div className="flex flex-row  h-full  py-10 justify-center">
                {/* left side */}
                <div className="w-[60vw] text-white flex flex-col ">
                  <h1 className="mb-4  scroll-m-20 text-4xl font-extrabold tracking-wider lg:text-5xl text-left   ">
                    Transform Your Kitchen Lorem ipsum
                  </h1>

                  <div className="flex flex-row mt-14 ml-5">
                    <div className="w-2 bg-white mr-10"></div>
                    <h2 className="w-[34vw] leading-8 text-xl  ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sit, doloremque non nihil sapiente nulla vero aperiam
                      nostrum sint suscipit ducimus magni magnam accusantium.
                      Ipsum earum porro architecto pariatur itaque libero.
                    </h2>
                  </div>
                </div>

                {/*gallery */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                  className="w-[50%]"
                >
                  <GridGallery images={grid1} imageLength={5} />
                </motion.div>
              </div>
            </div>
          )}

          {/* Carpentry section  */}
          {activeSection === "carpentry" && (
            <div className="h-full mx-5  ">
              <div className="flex flex-row  h-full  py-10 justify-center">
                <div className="w-[60vw] text-white flex flex-col ">
                  <h1 className="mb-4  scroll-m-20 text-4xl font-extrabold tracking-wider lg:text-5xl text-left   ">
                    Custom carpentry, cabinets, Furniture Lorem ipsum
                  </h1>

                  <div className="flex flex-row mt-14 ml-5">
                    <div className="w-2 bg-white mr-10"></div>
                    <h2 className="w-[34vw] leading-8 text-xl  ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sit, doloremque non nihil sapiente nulla vero aperiam
                      nostrum sint suscipit ducimus magni magnam accusantium.
                      Ipsum earum porro architecto pariatur itaque libero.
                    </h2>
                  </div>
                </div>
                {/*gallery */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                  className="w-[50%]"
                >
                  <GridGallery images={grid1} imageLength={5} />
                </motion.div>
              </div>
            </div>
          )}

          {/* Painting section  */}
          {activeSection === "painting" && (
            <div className="h-full mx-5  ">
              <div className="flex flex-row  h-full  py-10 justify-center">
                <div className="w-[60vw] text-white flex flex-col ">
                  <h1 className="mb-4  scroll-m-20 text-4xl font-extrabold tracking-wider lg:text-5xl text-left   ">
                    Painting, Drywall, and Finishing Services Lorem ipsum
                  </h1>

                  <div className="flex flex-row mt-14 ml-5">
                    <div className="w-2 bg-white mr-10"></div>
                    <h2 className="w-[34vw] leading-8 text-xl  ">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sit, doloremque non nihil sapiente nulla vero aperiam
                      nostrum sint suscipit ducimus magni magnam accusantium.
                      Ipsum earum porro architecto pariatur itaque libero.
                    </h2>
                  </div>
                </div>

                {/*gallery */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                  className="w-[50%]"
                >
                  <GridGallery images={grid1} imageLength={5} />
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </div>
      <ButtonUp />
    </div>
  );
};

export default SeeOurWork;
