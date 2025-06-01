import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

type GridGalleryProps = {
  images: string[]
  imageLength: number
  className?: string
  viewmoreBorder?: string
  viewmoreButton?: string
}

const GridGallery: React.FC<GridGalleryProps> = ({
  images,
  imageLength,
  className,
  viewmoreBorder,
  viewmoreButton,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  )
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

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index)
    console.log('click')
  }

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex !== null
        ? prevIndex === 0
          ? images.length - 1
          : prevIndex - 1
        : 0,
    )
  }

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex !== null ? (prevIndex + 1) % images.length : 0,
    )
  }

  const handleCloseModal = () => {
    setSelectedImageIndex(null)
  }

  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
    // Clean up the effect when the component is unmounted
    return () => {
      document.body.style.overflowY = 'auto'
    }
  }, [selectedImageIndex])

  // Calculate indices for showing images
  const getVisibleImages = (index: number | null) => {
    if (index === null) return []
    const halfVisibleCount = 3 // Half of the 5 images shown
    const totalVisibleCount = 5
    let start = Math.max(index - halfVisibleCount, 0)
    let end = start + totalVisibleCount

    if (end > images.length) {
      end = images.length
      start = Math.max(end - totalVisibleCount, 0)
    }

    return images.slice(start, end)
  }

  // Get the range of visible images based on the selected index
  const visibleImages = getVisibleImages(selectedImageIndex)

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

      {selectedImageIndex !== null && (
        <div className="fixed left-0 top-0 z-[9999999] h-full w-full bg-black/90 backdrop-blur-md">
          <div className="flex h-full w-full flex-col">
            {/* //////////   CloseModal BUTTON //////////////////// */}

            <div className="flex h-full w-full flex-col items-center justify-center gap-4 mobile:px-4">
              <div className="mb-3 flex w-full justify-end pr-10 pt-5 lg:pr-0">
                <button
                  type="button"
                  title="Close"
                  onClick={handleCloseModal}
                  className="flex items-center justify-center py-6 pr-6 text-white tablet:py-0 tablet:pt-4 mobile:py-3"
                >
                  <IoMdClose size={30} className="" />
                </button>
              </div>
              <img
                src={images[selectedImageIndex]}
                alt="selected"
                className="h-3/5 w-4/6 object-cover tablet:h-3/4 tablet:w-[25rem] mobile:w-full"
              />

              {/* //////////         Prev BUTTON //////////////////// */}

              <div className="flex flex-row items-center justify-center gap-2 overflow-x-auto">
                <Button
                  variant="custom"
                  size="icon"
                  onClick={handlePrevImage}
                  className="rounded-sm"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                {visibleImages.map((image) => {
                  const imageIndex = images.indexOf(image)
                  return (
                    <img
                      key={imageIndex}
                      src={image}
                      alt="gallery"
                      className={`${
                        imageIndex === selectedImageIndex
                          ? 'selected h-16 w-16 mobile:h-10 mobile:w-10'
                          : 'h-10 w-10 mobile:h-5 mobile:w-5'
                      } rounded-md border border-neutral-200`}
                      onClick={() => handleImageClick(imageIndex)}
                    />
                  )
                })}

                {/* //////////         Next  BUTTON //////////////////// */}
                <Button
                  variant="custom"
                  size="icon"
                  onClick={handleNextImage}
                  className="rounded-sm"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              {/* //////////      Count      //////////////////// */}
              <p className="col-span-4 mt-5 justify-self-center text-white tablet:mt-1">{`Photo ${
                selectedImageIndex + 1
              } of ${images.length}`}</p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default GridGallery
