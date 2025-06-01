import { Carrousel } from '@/components/Carrousel'
import { Link } from 'react-router-dom'
import useScreenSizes from '@/components/hooks/useScreenSize'

import { slidesData } from '@/constants/index'

import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/EmblaCarousel'

const WhatWeDo = () => {
  // Hook to handle screen sizes
  const { isMobile } = useScreenSizes()

  if (isMobile === null) {
    return null
  }

  return (
    <div className="w-full">
      <div className="mt-20 flex w-full flex-col items-center justify-center px-4 mobile:mt-10 mobile:h-[15rem]">
        <h2 className="mb-4 max-w-4xl scroll-m-20 text-center text-5xl font-extrabold tracking-wider tablet:text-2xl">
          Atlanta’s Leading Home Renovation Services
        </h2>
        <p className="mt-6 w-[60rem] max-w-3xl text-center text-xl leading-7 lg:w-[50rem] tablet:mt-1 tablet:w-full tablet:text-lg mobile:text-base">
          With ABJ Painting & Remodeling, you get a professional team committed
          to excellence. We manage your entire project from beginning to
          end—ensuring clear communication, top-tier craftsmanship, and
          exceptional results.
        </p>
      </div>

      {/* SLIDES CONTAINER SECTION */}
      <div className="mx-auto flex w-full justify-center overflow-hidden tablet:mt-10 mobile:max-w-sm">
        {/* SLIDES */}
        <Carousel>
          <CarouselContent className="">
            {slidesData.map((slide, index) => (
              <CarouselItem key={index} className="">
                <div className="w-[22rem] rounded-lg border bg-white shadow-lg transition-all delay-200 ease-in-out tablet:w-[19rem]">
                  <div className="flex w-full">
                    <Carrousel
                      images={slide.images}
                      className="h-[15rem] w-full rounded-t-lg object-cover p-0 tablet:h-[13rem] mobile:h-[13rem] mobile:w-full"
                    />
                  </div>

                  <div className="grid h-[18rem] p-10 tablet:h-[16rem]">
                    <p className="text-center text-lg font-bold mobile:mt-3 mobile:text-base">
                      {slide.title}
                    </p>
                    <p className="text-center text-base tablet:text-base mobile:text-sm">
                      {slide.description}
                    </p>
                  </div>
                  <p className="mx-auto mb-3 max-w-[10rem] text-center">
                    Click below to learn more about our{' '}
                  </p>
                  <div className="mx-auto mb-10 flex h-full w-fit items-end tablet:h-2/4">
                    <button
                      type="button"
                      className="flex items-center justify-center rounded-md bg-yellow-400 px-9 py-3 text-xs font-medium uppercase transition duration-150 ease-in-out hover:bg-yellow-500 focus:bg-neutral-200"
                      title="Learn more about this service"
                      aria-label="Learn more about this service"
                    >
                      <Link
                        to={slide.link}
                        className="flex h-2/4 w-full max-w-[10rem] items-center justify-center mobile:h-1/4"
                        title={`See more about ${slide.title}`}
                        aria-label={`See more about ${slide.title}`}
                      >
                        {slide.title} services
                      </Link>{' '}
                    </button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center justify-center gap-4">
            <CarouselPrevious />
            <CarouselDots />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default WhatWeDo
