import React, { useEffect, useState } from "react";

type SlidesProps = {
  images: string[];
};

const NavSlides: React.FC<SlidesProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="flex flex-row overflow-hidden after:clear-both after:block after:content-[''] w-[200px] h-[200px] ">
      {images.map((image, index) => (
        <div
          key={index}
          className={`flex flex-row ${
            index === currentSlide ? "bock" : "hidden"
          }`}
        >
          <div className="flex flex-row  justify-center  ">
            <div className=" flex-row relative  ">
              <img
                src={image}
                alt={`Image ${index} `}
                className="object-cover w-[200px] h-[200px] blur-[1px] rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavSlides;
