import { Rating } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import ContactForm from "./ContactForm";
import { motion, useAnimation, useInView } from "framer-motion";

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

const Review = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [value] = useState<number | null>(5);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div
      className="relative grid place-items-center gap-12 grid-cols-3 py-[1rem] px-36"
      ref={containerRef}
    >
      <div className="relative w-full col-span-2 row-span-2">
        {reviews.map((review, index) => (
          <motion.div
            className="relative grid items-center"
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
            <motion.div
              key={review.id}
              className={`absolute content-center h-[25rem] border-2 bg-white/[80%]
              ${currentReview === index ? "opacity-100" : "opacity-0"} `}
              initial="hidden"
              animate={currentReview === index ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, x: -300 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div
                className={`place-items-center self-center grid transition-opacity ease-in-out`}
              >
                <Rating
                  value={value}
                  name="read-only "
                  defaultValue={4.5}
                  size="large"
                  onChange={() => {}}
                  readOnly
                />
                <div className="text-center px-10 mt-10">
                  <h2 className=" px-10 text-slate-600 ">{review.text}</h2>
                  <p className="mt-5 text-cyan-600">{review.name}</p>
                </div>
              </div>
            </motion.div>

            {/* Dots */}
            <div className="absolute bottom-[-14.5rem] left-1/2 transform -translate-x-1/2  grid grid-cols-3 gap-3 ">
              {reviews.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-4 h-4 rounded-full cursor-pointer ${
                    currentReview === index ? "bg-cyan-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Right side of the grid */}
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
        <div className=" bg-yellow-300/90 grid place-items-center  shadow-2xl py-10 z-[2] ">
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
