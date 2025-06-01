import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Rating } from '@mui/material'
import useScreenSizes from '@/components/hooks/useScreenSize'
import useInViewAnimation from './hooks/useInView'

const reviews = [
  {
    id: 1,
    text: 'ABJ Painting & Remodeling deserves a solid five-star rating for their exceptional service and attention to detail. Their skilled craftsmen exceeded our expectations, delivering results that not only refreshed our home but also revitalized our living experience. We highly recommend ABJ Painting & Remodeling for anyone seeking top-notch service and impeccable craftsmanship.',
    name: 'Jackson L.',
  },
  {
    id: 2,
    text: "If you're seeking a painting and remodeling service that combines expert craftsmanship with exceptional customer care, look no further than ABJ Painting & Remodeling. Their team's impressive skill and dedication truly set them apart. They transformed our home with a level of precision and artistry that exceeded all our expectations. For anyone in need of high-quality service and stunning results, ABJ Painting & Remodeling is the ideal choice. Highly recommended!",
    name: 'John S.',
  },
  {
    id: 3,
    text: "When it comes to exceptional home renovation, ABJ Painting & Remodeling is a standout choice. Their team delivered an outstanding performance, handling every detail with skill and precision. From the initial consultation to the final touches, their professionalism and commitment were evident. If you're looking for superior craftsmanship and a stress-free experience, ABJ Painting & Remodeling is the go-to company. Highly recommended!",
    name: 'Logan D.',
  },
]

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
}

export const Review = () => {
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEndX] = useState(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      paginate(1)
    }

    if (touchStart - touchEnd < -50) {
      paginate(1)
    }
  }

  const [[page, direction], setPage] = useState([0, 0])
  const imageIndex = ((page % reviews.length) + reviews.length) % reviews.length // Wrap around

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  // Interval to automatically paginate
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1) // Change to -1 for reverse direction
    }, 9000) // Change interval time as needed (7000 ms = 7 seconds)

    return () => clearInterval(interval) // Cleanup on component unmount
  }, [page])

  const { ref, mainControls } = useInViewAnimation()

  const { isMobile, isLarge } = useScreenSizes()
  // // Conditional check to avoid applying animations before the state is set
  if (isLarge === null || isMobile === null) {
    return null
  }

  return (
    <div
      className="relative mx-auto flex h-[25rem] max-w-3xl items-center justify-center gap-12 py-10 xl:flex-col lg:h-[30rem] mobile:max-w-xs mobile:px-3 mobile:py-1"
      ref={ref}
    >
      {/* LEFT SIDE - REVIEW */}
      <motion.div
        className="flex w-full max-w-3xl items-center justify-center xl:w-[90%] mobile:flex-col"
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
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.1 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            className="absolute top-0 flex items-center justify-center py-2"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg border-2 bg-white/80 p-6 shadow-lg lg:h-[22rem] mobile:gap-1 mobile:text-sm">
              <p className="text-center text-cyan-600 lg:mb-2">
                {reviews[imageIndex].name}
              </p>
              <div className="mobile:hidden">
                <Rating value={5} name="read-only" size="large" readOnly />
              </div>
              <div className="hidden mobile:block">
                <Rating value={5} name="read-only" size="medium" readOnly />
              </div>

              <div className="mt-2 flex flex-col mobile:mt-1">
                <p className="text-center text-slate-600 lg:text-start mobile:text-sm">
                  {reviews[imageIndex].text}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Navigation Dots */}
        <div className="relative mx-auto flex h-[20rem] w-full justify-center lg:h-[22rem]">
          <div className="absolute bottom-0 flex gap-2 mobile:gap-3">
            {reviews.map((_, index) => (
              <div
                key={index}
                onClick={() => setPage([index, index - page])}
                className={`h-4 w-4 cursor-pointer rounded-full mobile:h-5 mobile:w-5 ${
                  imageIndex === index ? 'bg-gray-700' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Review
