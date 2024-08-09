import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useAnimation,
} from "framer-motion";
import { Rating } from "@mui/material";
import Promotion from "./Promotion";

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

const mobile = window.innerWidth < 640;
const lg = window.innerWidth > 1024;

export const Review = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEndX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      paginate(1);
    }

    if (touchStart - touchEnd < -50) {
      paginate(1);
    }
  };

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
      className=" flex tablet:flex-col justify-center items-center   bg-white/40 gap-12 py-10  mobile:px-3 mobile:py-1 overflow-x-hidden   "
      ref={containerRef}
    >
      {/* LEFT SIDE - REVIEW */}
      <motion.div
        className="relative flex items-center justify-center mobile:flex-col  w-3/4 pl-20 tablet:w-[90%]  h-[20rem] mobile:h-[25rem] tablet:pl-0  "
        animate={mainControls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{
          duration: 0.7,
          delay: 0.5,
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
            className="absolute flex items-center justify-center  h-full  top-0  "
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex flex-col justify-center items-center   bg-white h-full border-2 p-6  gap-4 rounded-lg shadow-lg 
            mobile:text-sm  mobile:gap-1   "
            >
              <div className="mobile:hidden">
                <Rating value={5} name="read-only" size="large" readOnly />
              </div>

              <div className="hidden mobile:block">
                <Rating value={5} name="read-only" size="medium" readOnly />
              </div>

              <div className="flex flex-col text-center mt-2 mobile:mt-1 ">
                <p className="text-slate-600 mobile:text-sm ">
                  {reviews[imageIndex].text}
                </p>
                <p className="mt-4 text-cyan-600 ">
                  {reviews[imageIndex].name}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Navigation Dots */}
        <div className="flex  justify-center items-center gap-2 absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 mobile:bottom-[-3rem] mobile:gap-3">
          {reviews.map((_, index) => (
            <div
              key={index}
              onClick={() => setPage([index, index - page])}
              className={`w-4 h-4 rounded-full cursor-pointer mobile:w-5 mobile:h-5  ${
                imageIndex === index ? "bg-gray-700 " : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* RIGHT SIDE - CONTACT PROMOTION */}
      <motion.div
        className="flex  justify-center h-full w-7/12 tablet:w-full mobile:mt-10  z-[8]  bg-white tablet:px-20 mobile:px-1 tablet:mt-10  "
        animate={mainControls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, x: mobile ? 0 : 100, y: lg ? 0 : 100 },
          visible: { opacity: 1, x: 0, y: 0 },
        }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <Promotion />
      </motion.div>
    </div>
  );
};

export default Review;
