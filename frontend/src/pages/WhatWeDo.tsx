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
                  <div className="mx-auto mb-10 flex h-full w-fit items-end tablet:h-2/4">
                    <button
                      type="button"
                      className="shadow-light-3 hover:shadow-light-2 focus:shadow-light-2 active:shadow-light-2 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong flex items-center justify-center bg-yellow-400 px-9 py-3 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-yellow-500 focus:bg-neutral-200 focus:outline-none focus:ring-0 active:bg-neutral-200 motion-reduce:transition-none dark:shadow-black/30"
                      title="Learn more about this service"
                      aria-label="Learn more about this service"
                    >
                      <Link
                        to={slide.link}
                        className="flex h-2/4 w-full items-center justify-center mobile:h-1/4"
                        title="Learn more about this service"
                        aria-label="Learn more about this service"
                      >
                        LEARN MORE
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
