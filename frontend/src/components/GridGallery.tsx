import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type GridGalleryProps = {
  images: string[];
  imageLength: number;
  className?: string;
};

const GridGallery: React.FC<GridGalleryProps> = ({
  images,
  imageLength,
  className,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [showAllImages, setShowAllImages] = useState(false);

  const gridConatinerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const gridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    console.log("click");
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex !== null
        ? prevIndex === 0
          ? images.length - 1
          : prevIndex - 1
        : 0
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex !== null ? (prevIndex + 1) % images.length : 0
    );
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [selectedImageIndex]);

  return (
    <motion.div
      className={`grid grid-cols-2 gap-8 tablet:grid-cols-1 tablet:gap-5 ${className}   `}
      variants={gridConatinerVariants}
      initial="hidden"
      animate="show"
    >
      <AnimatePresence>
        {images
          .slice(0, showAllImages ? images.length : imageLength)
          .map((image, index) => (
            <div key={index} className={`relative`}>
              <motion.div variants={gridSquareVariants}>
                <img
                  src={image}
                  alt="gallery"
                  className={`h-[220px] w-full object-cover  cursor-pointer border-solid border-1 border-white/55    `}
                />
              </motion.div>

              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100   bg-black bg-opacity-50 text-white text-lg cursor-pointer transition-all duration-3000 "
                onClick={() => handleImageClick(index)}
              >
                Click to view image
              </motion.div>
            </div>
          ))}
      </AnimatePresence>
      <motion.div
        className="flex justify-center items-center w-full h-full border-2 border-white/55 tablet:py-14 "
        whileTap={{ scale: 0.95 }}
        variants={gridSquareVariants}
        transition={{ duration: 1, ease: "easeIn", delay: 2 }}
      >
        <Button
          variant="custom"
          onClick={() => {
            setShowAllImages(!showAllImages);
          }}
        >
          {showAllImages ? "View less" : "View more"}
        </Button>
      </motion.div>

      {selectedImageIndex !== null && (
        <div className="fixed top-0 left-0  w-full h-full z-20 bg-black ">
          <div className="flex flex-col w-full h-full bg-black  ">
            {/* //////////   CloseModal BUTTON //////////////////// */}
            <div className="flex flex-row-reverse  bg-black  ">
              <button
                type="button"
                onClick={handleCloseModal}
                className="flex justify-center items-center text-white pr-6 py-6 mobile:py-3 tablet:py-0 tablet:pt-4  "
              >
                <IoMdClose size={30} className="" />
              </button>
            </div>

            <div className="flex flex-col  items-center gap-4 w-full h-full  bg-black mobile:px-5  ">
              <img
                src={images[selectedImageIndex]}
                alt="selected"
                className="  w-5/6   mobile:w-full tablet:w-[25rem] h-[45rem] mobile:h-[25rem] tablet:h-[11rem]  object-cover "
              />

              {/* //////////         Prev BUTTON //////////////////// */}

              <div className="flex justify-center items-center gap-2 flex-row overflow-x-auto">
                <Button variant="custom" size="icon" onClick={handlePrevImage}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                {images &&
                  images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt="gallery"
                      className={
                        index === selectedImageIndex &&
                        index < selectedImageIndex + 5
                          ? " h-16 w-16 selected"
                          : "h-10 w-10"
                      }
                      onClick={() => handleImageClick(index)}
                    />
                  ))}

                {/* //////////         Next  BUTTON //////////////////// */}
                <Button variant="custom" size="icon" onClick={handleNextImage}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <p className="text-white justify-self-center  col-span-4 mt-5 tablet:mt-1">{`Photo ${
                selectedImageIndex + 1
              } of ${images.length}`}</p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default GridGallery;
