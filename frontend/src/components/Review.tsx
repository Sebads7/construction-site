import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rating } from "@mui/material";
import Promotion from "./Promotion";
import useScreenSizes from "@/components/hooks/useScreenSize";
import useInViewAnimation from "./hooks/useInView";

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
    text: "When it comes to exceptional home renovation, ABJ Painting & Remodeling is a standout choice. Their team delivered an outstanding performance, handling every detail with skill and precision. From the initial consultation to the final touches, their professionalism and commitment were evident. If you're looking for superior craftsmanship and a stress-free experience, ABJ Painting & Remodeling is the go-to company. Highly recommended!",
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

  const { ref, mainControls } = useInViewAnimation();

  const { isMobile, isLarge } = useScreenSizes();
  // // Conditional check to avoid applying animations before the state is set
  if (isLarge === null || isMobile === null) {
    return null;
  }

  const variants2 = {
    hidden: { opacity: 0, x: isMobile ? 0 : 100, y: isLarge ? 0 : 100 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <div
      className=" flex 
      xl:flex-col 
      justify-center 
      items-center   
      bg-white/40 
      gap-12 
      py-10  
      mobile:px-3 
      mobile:py-1 
      overflow-x-hidden "
      ref={ref}
    >
      {/* LEFT SIDE - REVIEW */}
      <motion.div
        className="relative 
        flex 
        items-center 
        justify-center 
        w-3/4 
        pl-20 
        h-[20rem] 
        mobile:flex-col  
        mobile:h-[25rem] 

        lg:pl-0 
        xl:w-[90%]  
        "
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
            className="absolute flex items-center justify-center  h-full py-2 top-0  "
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex  flex-col   justify-center   items-center    bg-white   h-full 
              border-2  p-6  gap-4  rounded-lg  shadow-lg  mobile:text-sm  mobile:gap-1   "
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
        <div className="flex  justify-center items-center gap-2 absolute bottom-[-2rem]  mobile:bottom-[-3rem] mobile:gap-3">
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
        className="flex  justify-center h-full w-8/12 xs:w-full mobile:w-full tablet:w-[75%]  lg:w-[80%] xl:w-[70%] mobile:mt-10 py-5  z-[8]  bg-white xs:px-0 mobile:px-20  tablet:mt-10  tablet:py-16 "
        animate={mainControls}
        initial="hidden"
        variants={variants2}
        transition={{ duration: 0.8, delay: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <Promotion />
      </motion.div>
    </div>
  );
};

export default Review;
