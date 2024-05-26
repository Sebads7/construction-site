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
  className?: string;
};

export const Carrousel: React.FC<CarrouselProps> = ({ images, className }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 9000, stopOnInteraction: false })
  );
  return (
    <Carousel plugins={[plugin.current]} className={className}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Card className={className}>
              <div className={className}>
                <CardContent className={className}>
                  <img
                    src={image}
                    alt={`Image ${index} `}
                    className="w-full h-full  object-cover"
                  />
                </CardContent>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
