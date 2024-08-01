import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useAnimation,
} from "framer-motion";
import { Rating } from "@mui/material";
import ContactForm from "./ContactForm";

const reviews = [
  {
    id: 1,
    text: "ABJ Painting & Remodeling deserves a solid five-star rating for their exceptional service and attention to detail. Their skilled craftsmen exceeded our expectations, delivering results that not only refreshed our home but also revitalized our living experience. We highly recommend ABJ Painting & Remodeling for anyone seeking top-notch service and impeccable craftsmanship.",
    name: "Jackson L.",
  },
  {
    id: 2,
    text: "If you're seeking a painting and remodeling service that combines expert craftsmanship with exceptional customer care, look no further than ABJ Painting & Remodeling. Their team's impressive skill and dedication truly set them apart. They transformed our home with a level of precision and artistry that exceeded all our expectations. For anyone in need of high-quality service and stunning results, ABJ Painting & Remodeling is the ideal choice. Highly recommended!",
    name: "John S.",
  },
  {
    id: 3,
    text: "When it comes to exceptional home renovation, ABJ Painting & Remodeling is a standout choice. Their team delivered an outstanding performance, handling every detail with skill and precision. From the initial consultation to the final touches, their professionalism and commitment were evident. The transformation they achieved was remarkable, revitalizing our home beyond our expectations. If you're looking for superior craftsmanship and a stress-free experience, ABJ Painting & Remodeling is the go-to company. Highly recommended!",
    name: "Logan D.",
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

export const Review = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex =
    ((page % reviews.length) + reviews.length) % reviews.length; // Wrap around

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  // Interval to automatically paginate
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1); // Change to -1 for reverse direction
    }, 9000); // Change interval time as needed (7000 ms = 7 seconds)

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [page]);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      className=" flex mobile:flex-col justify-center items-center   bg-white/40 gap-12 py-10 px-36 mobile:px-1 mobile:py-1 "
      ref={containerRef}
    >
      <motion.div
        className="relative flex items-center justify-center mobile:flex-col  w-3/4 mobile:w-full h-[20rem]  "
        animate={mainControls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{
          duration: 1,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.1 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            className="absolute flex items-center justify-center  h-full  top-0 "
          >
            <div
              className="flex flex-col justify-center items-center bg-white h-[20rem] border-2 p-6  gap-4 rounded-lg shadow-lg 
            mobile:text-sm  mobile:gap-1"
            >
              <div className="mobile:hidden">
                <Rating value={5} name="read-only" size="large" readOnly />
              </div>

              <div className="hidden mobile:block">
                <Rating value={5} name="read-only" size="medium" readOnly />
              </div>

              <div className="flex flex-col text-center mt-6 mobile:mt-1">
                <p className="text-slate-600  ">{reviews[imageIndex].text}</p>
                <p className="mt-4 text-cyan-600 ">
                  {reviews[imageIndex].name}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Navigation Dots */}
        <div className="flex gap-2 absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 mobile:bottom-[-3rem] mobile:gap-3">
          {reviews.map((_, index) => (
            <div
              key={index}
              onClick={() => setPage([index, index - page])}
              className={`w-4 h-4 rounded-full cursor-pointer mobile:w-6 mobile:h-6  ${
                imageIndex === index ? "bg-gray-700" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Right side of the grid */}
      <motion.div
        className="flex h-full w-5/12 mobile:w-full mobile:mt-10 "
        animate={mainControls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <div className="bg-yellow-300 shadow-2xl  z-[2] h-full py-20 px-1  flex flex-col  justify-center items-center w-full ">
          <h1 className="text-center text-2xl font-semibold h-full pb-10 ">
            UP TO
            <span className="h-full text-4xl font-semibold border-b border-black pb-2 flex justify-center  ">
              20% OFF
            </span>
          </h1>
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
