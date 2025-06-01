import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

type CarrouselProps = {
  images: string[]
  className?: string
}

export const Carrousel: React.FC<CarrouselProps> = ({ images, className }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 9000, stopOnInteraction: false }),
  )
  return (
    <Carousel plugins={[plugin.current]}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <img
              src={image}
              alt={`Image ${index} `}
              className={` ${className} `}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
