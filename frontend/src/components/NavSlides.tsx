import React, { useEffect, useState } from 'react'

type SlidesProps = {
  images: string[]
}

const NavSlides: React.FC<SlidesProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])
  return (
    <div className="flex h-[200px] w-[200px] flex-row overflow-hidden after:clear-both after:block after:content-['']">
      {images.map((image, index) => (
        <div
          key={index}
          className={`flex flex-row ${
            index === currentSlide ? 'bock' : 'hidden'
          }`}
        >
          <div className="flex flex-row justify-center">
            <div className="relative flex-row">
              <img
                src={image}
                alt={`Image ${index} `}
                className="h-[200px] w-[200px] rounded-lg object-cover shadow-lg blur-[1px]"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NavSlides
