import { Rating } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import ContactForm from "./ContactForm";
import { motion, useAnimation, useInView } from "framer-motion";

const Review = () => {
  const [value] = useState<number | null>(5);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div
      className="  grid   place-items-center gap-12 grid-cols-3 py-[1rem] px-36"
      ref={containerRef}
    >
      <motion.div
        className=" grid    h-[25rem] border-2 col-span-2   "
        animate={mainControls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className=" place-items-center self-center grid">
          <Rating
            value={value}
            name="read-only "
            defaultValue={4.5}
            size="large"
            onChange={() => {}}
            readOnly
          />
          <div className="text-center px-10 mt-10">
            <h2 className=" px-10 text-slate-600 ">
              ABJ Painting & Remodeling deserves a solid five-star rating for
              their exceptional service and attention to detail. Their skilled
              craftsmen exceeded our expectations, delivering results that not
              only refreshed our home but also revitalized our living
              experience. We highly recommend ABJ Painting & Remodeling for
              anyone seeking top-notch service and impeccable craftsmanship.
            </h2>
            <p className="mt-5 text-cyan-600">John Doe</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="grid  h-[40rem] w-[30rem]  col-span-1"
        animate={mainControls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <div className=" bg-yellow-300/90 grid place-items-center  shadow-2xl py-10 ">
          <div className="w-full  flex justify-center items-center text-center">
            <h1 className="flex flex-col  scroll-m-20 text-1xl  font-semibold tracking-tight ">
              UP TO
              <span className="scroll-m-20 border-b border-black pb-5 text-4xl font-semibold tracking-tight first:mt-0 mb-9 ">
                20% OFF
              </span>
            </h1>
          </div>
          <ContactForm
            secondButton={true}
            checkBox={true}
            showSelectOption={true}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Review;
