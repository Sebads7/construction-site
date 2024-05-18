import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type GridGalleryProps = {
  images: string[];
};

const GridGallery: React.FC<GridGalleryProps> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [showAllImages, setShowAllImages] = useState<boolean>(false);

  const handleViewMore = () => {
    setShowAllImages(!showAllImages);
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
    setSelectedImageIndex(
      (prevIndex = 0) => ((prevIndex || 0) + 1) % images.length
    );
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div className="grid grid-cols-2 gap-8  ">
      {images
        .slice(0, showAllImages ? images.length : 7)
        .map((image, index) => (
          <div key={index} className={`relative   `}>
            <img
              src={image}
              alt="gallery"
              className={`h-[220px] w-full object-cover  transition duration-300 ease-in-out cursor-pointer border-solid border-1 border-white/55   `}
            />
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-lg cursor-pointer"
              onClick={() => handleImageClick(index)}
            >
              Click to view image
            </div>
          </div>
        ))}

      <div className="flex justify-center items-center w-full h-full border-2 border-white/55">
        <Button
          variant="custom"
          onClick={() => {
            handleViewMore();
          }}
        >
          {showAllImages ? "View less" : "View more"}
        </Button>
      </div>

      {selectedImageIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full  flex items-center justify-center backdrop-filter backdrop-brightness-75 backdrop-blur-md custom-z-20 ">
          <div className="flex justify-center flex-col  w-[70%] h-[95%] p-10 bg-black/90 custom-z-20">
            {/* //////////   CloseModal BUTTON //////////////////// */}
            <div className="flex flex-row-reverse ">
              <button
                type="button"
                onClick={handleCloseModal}
                className=" text-white "
              >
                <IoMdClose size={30} className="" />
              </button>
            </div>

            <div className="flex flex-col  items-center gap-4  ">
              <img
                src={images[selectedImageIndex]}
                alt="selected"
                className="  w-[900px] h-[600px]  object-cover"
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

              <p className="text-white justify-self-center  col-span-4 mt-5">{`Photo ${
                selectedImageIndex + 1
              } of ${images.length}`}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GridGallery;
