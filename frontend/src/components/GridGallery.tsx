import React, { useState } from 'react'

import { Button } from './ui/button'

import { AnimatePresence, motion } from 'framer-motion'

type GridGalleryProps = {
  images: string[]
  imageLength: number
  className?: string
  viewmoreBorder?: string
  viewmoreButton?: string

  handleImageClick: (index: number) => void
}

const GridGallery: React.FC<GridGalleryProps> = ({
  images,
  imageLength,
  className,
  viewmoreBorder,
  viewmoreButton,
  handleImageClick,
}) => {
  const [showAllImages, setShowAllImages] = useState(false)

  const gridConatinerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const gridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  return (
    <motion.div
      className={`grid grid-cols-2 gap-8 tablet:grid-cols-1 tablet:gap-5 ${className} `}
      variants={gridConatinerVariants}
      initial="hidden"
      animate="show"
    >
      <AnimatePresence>
        {images
          .slice(0, showAllImages ? images.length : imageLength)
          .map((image, index) => (
            <div
              key={index}
              className={`relative flex h-[220px] w-auto items-center justify-center overflow-hidden rounded-lg border`}
            >
              <motion.div variants={gridSquareVariants}>
                <img
                  src={image}
                  alt="gallery"
                  className={`border-1 h-auto max-h-full w-auto max-w-full cursor-pointer border-solid border-white/55 object-cover`}
                />
              </motion.div>

              <motion.div
                className="duration-3000 absolute inset-0 flex cursor-pointer items-center justify-center bg-black bg-opacity-50 text-lg text-white opacity-0 transition-all hover:opacity-100"
                onClick={() => handleImageClick(index)}
              >
                Click to view image
              </motion.div>
            </div>
          ))}
      </AnimatePresence>
      <motion.div
        className={`flex h-full w-full items-center justify-center rounded-lg border py-20 tablet:py-14 ${viewmoreBorder} `}
        whileTap={{ scale: 0.95 }}
        variants={gridSquareVariants}
        transition={{ duration: 1, ease: 'easeIn', delay: 2 }}
      >
        <Button
          className={`${viewmoreButton} rounded border`}
          variant="custom"
          onClick={() => {
            setShowAllImages(!showAllImages)
          }}
        >
          {showAllImages ? 'View less' : 'View more'}
        </Button>
      </motion.div>
    </motion.div>
  )
}

export default GridGallery
