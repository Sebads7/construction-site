import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type CarrouselProps = {
  images: string[];
  imageSize: string;
};

export const Carrousel: React.FC<CarrouselProps> = ({ images, imageSize }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 7000, stopOnInteraction: false })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="flex items-center  h-[300px] w-[300px] "
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Card className="flex  justify-center ">
              <CardContent className="  p-0 ">
                <img
                  src={image}
                  alt={`Image ${index} `}
                  className="object-cover"
                  style={{ width: imageSize, height: imageSize }}
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
