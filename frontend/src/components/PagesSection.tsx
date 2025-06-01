'use client'
import { easeIn, motion } from 'framer-motion'
import { Carrousel } from './Carrousel'

import Review from '@/components/Review'
import GridGallery from '@/components/GridGallery'
import useInViewAnimation from './hooks/useInView'
import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from './ui/EmblaCarousel'
import GalleryModal from './GridGallery/GalleryModal'

type PagesSectionProps = {
  content: {
    pageName: string
    title: string
    description: string
    whyChooseUs: { text: string; span: string; icon: string }[]
    servicesInclude: string[]
    imageBackground: string
    ourServices: string
    WhyChooseUsTitle: string
    galleryTitle: string
    images: string[]
  }
}

const QualityData = [
  {
    text: 'Quality Craftsmanship',
    span: 'Experienced pros delivering top-notch results.',
    icon: '/images/quality2.png',
  },
  {
    text: 'Customer Satisfaction',
    span: 'Your needs come first — we ensure you’re happy with the outcome.',
    icon: '/images/customer-experience.png',
  },
  {
    text: 'Timely Completion',
    span: 'Projects done on time, without cutting corners.',
    icon: '/images/calendar.png',
  },
]

const PagesSection: React.FC<PagesSectionProps> = ({
  content,
}: PagesSectionProps) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  )

  const handleImageLoaded = () => {
    setImageLoaded(true)
  }

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index)
    console.log('click')
  }
  const { ref, mainControls } = useInViewAnimation()
  const { ref: containerRef2, mainControls: mainControls2 } =
    useInViewAnimation()

  return (
    <section className=" ">
      <div className="fixed left-0 top-0 -z-50 h-full w-full bg-black opacity-70"></div>
      <div className="fixed z-[9] flex h-[76px] w-full bg-black opacity-50 tablet:hidden"></div>
      <div className="relative h-[40rem] w-full tablet:h-[40rem]">
        {/* BACKGROUND IMAGE */}
        <div className="relative z-[-1] h-full bg-gray-900 opacity-70">
          <div className="fixed h-full w-full">
            <img
              src={content.imageBackground}
              alt="background"
              className="h-full w-full object-cover"
              onLoad={handleImageLoaded}
            />
          </div>
        </div>
        {imageLoaded && (
          <motion.div className="absolute left-0 top-0 flex h-full w-full flex-col items-center bg-neutral-200/90 py-10 tablet:h-[40rem] tablet:w-full tablet:pt-24">
            {/* PAGE NAME */}
            <div className="mt-20 tablet:mb-10 tablet:mt-10">
              <div className="flex h-[5.5rem] w-[22rem] items-center justify-center border border-zinc-700 shadow-md mobile:h-[5rem] mobile:w-[17rem]">
                <p className="w-[30rem] text-center text-xl font-semibold text-zinc-700 outline outline-offset-8 outline-zinc-400 mobile:text-lg">
                  {content.pageName}
                </p>
              </div>
            </div>
            {/* TITLE AND SUBTITLE */}
            <motion.div
              initial={{ opacity: 0, height: '0%', filter: 'blur(5px)' }}
              animate={{ opacity: 1, height: '55%', filter: 'blur(0px)' }}
              transition={{ duration: 0.9, ease: 'easeIn', delay: 0.5 }}
              className="flex h-full w-full max-w-5xl translate-y-8 flex-col items-center justify-center p-4 lg:translate-y-0 tablet:p-2 mobile:px-3"
            >
              <h1 className="mb-7 max-w-2xl text-center text-5xl font-extrabold tracking-wider text-zinc-700 xl:text-3xl lg:px-2 tablet:mb-4 mobile:max-w-xs mobile:text-2xl">
                {content.title}
              </h1>
              <h3 className="max-w-4xl pl-5 text-center text-2xl leading-7 text-zinc-700 lg:text-lg tablet:text-start mobile:text-base">
                {content.description}
              </h3>
            </motion.div>
          </motion.div>
        )}
      </div>

      {imageLoaded && (
        <div>
          {/* FIRST SECTION */}

          <motion.div
            className="container z-10 flex w-full flex-col bg-white py-20 pb-32 lg:space-y-5 lg:px-20 tablet:px-0"
            ref={ref}
          >
            {/* LEFT  TEXT */}
            <motion.div className="mx-auto">
              <div className="flex w-full flex-col items-center justify-center">
                <motion.div
                  className=""
                  animate={mainControls}
                  initial="hidden"
                  variants={{
                    hidden: { opacity: 0, scale: 0.7 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{
                    duration: 1,

                    ease: easeIn,
                  }}
                >
                  <h3 className="py-5 text-center text-4xl font-semibold tracking-tight xl:text-base tablet:py-0 mobile:text-xl">
                    {content.WhyChooseUsTitle}
                  </h3>
                  <p className="mx-auto max-w-3xl px-4 text-center text-xl font-medium tablet:mt-5 mobile:text-base">
                    We&apos;re committed to delivering exceptional results that
                    exceed your expectations, backed by years of experience and
                    a dedication to quality craftsmanship.
                  </p>

                  <ul className="mt-28 flex gap-6 pb-5 text-base tracking-tight xl:text-sm lg:grid lg:grid-cols-2 lg:grid-rows-2 mobile:hidden mobile:text-xs">
                    {content.whyChooseUs.map((item, index) => (
                      <li
                        key={index}
                        className="mx-auto flex max-w-xs flex-col items-center justify-center rounded-md border bg-white px-4 py-2 shadow-2xl transition-all duration-200 hover:bg-neutral-100 lg:mx-2"
                      >
                        <img
                          src={item.icon}
                          alt="check icon"
                          className="mr-2 inline-block h-10 w-10"
                        />{' '}
                        <span className="flex h-28 flex-col pt-2 text-center xl:h-32 lg:h-24">
                          <strong className="text-lg">{item.span}</strong>
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mx-auto mt-28 hidden max-w-sm gap-6 text-base tracking-tight xl:text-sm tablet:mt-10 mobile:flex mobile:text-xs">
                    <Carousel className="max-w-sm">
                      <CarouselContent>
                        {content.whyChooseUs.map((item, index) => (
                          <CarouselItem key={index} className="pb-16 pt-5">
                            <p className="flex max-w-xs flex-col items-center justify-center rounded-md border bg-white px-4 py-2 shadow-lg transition-all duration-200 hover:bg-neutral-100">
                              <img
                                src={item.icon}
                                alt="check icon"
                                className="mr-2 inline-block h-10 w-10"
                              />
                              <span className="flex h-28 flex-col pt-2 text-center">
                                <strong className="text-lg">{item.span}</strong>
                                {item.text}
                              </span>
                            </p>{' '}
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div className="-translate-y-14">
                        <CarouselDots />
                      </div>
                    </Carousel>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="mx-auto mt-28 flex w-full flex-row justify-center gap-20 lg:flex-col tablet:px-4"
              animate={mainControls}
              initial="hidden"
              variants={{
                hidden: { opacity: 0, scale: 0.7 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{
                duration: 1,

                ease: easeIn,
              }}
            >
              <div className="mx-auto h-[30rem] w-[30rem] max-w-lg overflow-x-auto rounded-md shadow-lg mobile:max-w-xs">
                <Carrousel
                  images={content.images}
                  className="h-[30rem] w-full rounded-md object-cover"
                />
              </div>

              <div className="w-full max-w-2xl">
                <p className="mb-5 max-w-lg text-2xl font-bold tablet:max-w-sm">
                  {content.ourServices}
                </p>
                <div className="grid grid-cols-2 grid-rows-3 gap-5 text-lg">
                  {content.servicesInclude.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-7 w-7 text-red-500 mobile:h-5 mobile:w-5" />
                      <p className="flex items-center gap-2 mobile:w-[9rem] mobile:text-sm">
                        {service}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-7 flex gap-20 tablet:flex-col tablet:gap-5">
                  {QualityData.map((Item, i) => (
                    <div
                      key={i}
                      className="mx-auto mt-8 flex max-w-xs flex-col items-center justify-center gap-1"
                    >
                      <img
                        src={Item.icon}
                        alt="check icon"
                        className="mr-2 inline-block h-14 w-14"
                      />
                      <p className="max-w-[10rem] text-center text-lg font-semibold">
                        {Item.text}
                      </p>
                      <p className="max-w-[13rem] text-center text-lg leading-7 text-zinc-700 lg:text-base mobile:text-sm">
                        {Item.span}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* DIVIDER */}

          <div className="flex h-[10rem] w-full bg-black/40 tablet:h-[10rem]"></div>

          {/* REVIEW,  CONTACT */}

          <div className="flex h-full w-full flex-col overflow-x-hidden bg-white py-20">
            <div className="w-full">
              <div className="mx-auto flex h-[25rem] w-full flex-col items-center justify-center px-4 lg:px-0 tablet:mb-10 tablet:h-full">
                <h2 className="mb-4 max-w-4xl scroll-m-20 text-center text-5xl font-extrabold tracking-wider lg:w-[90%] tablet:text-2xl mobile:text-xl">
                  The Top Trusted Remodeling Experts in Atlanta
                </h2>
                <h3 className="mt-4 w-[60rem] max-w-3xl text-center text-lg leading-7 lg:w-[90%] tablet:mt-0 mobile:text-sm">
                  We are committed to delivering the best home improvement
                  experience of your life. We handle the whole process from
                  start to finish, so you have one point of contact through your
                  entire project.
                </h3>
              </div>

              <Review />
            </div>
          </div>

          <div className="flex h-[10rem] w-full bg-black/40 tablet:h-[10rem]"></div>

          {/* GALLERY SECTION */}

          <motion.div
            ref={containerRef2}
            className="h-full w-full bg-white p-44 px-10 tablet:px-0 tablet:pb-0 tablet:pt-20"
          >
            <motion.div className="mx-auto h-full w-full max-w-7xl rounded bg-[#272829] bg-opacity-80 px-10 py-20 shadow-xl tablet:px-5">
              <h3 className="pb-20 text-center text-2xl font-semibold tracking-tight text-white mobile:text-sm">
                {content.galleryTitle}
              </h3>
              <motion.div
                animate={mainControls2}
                initial="hidden"
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0.5, 0.71, 0.9, 1.01],
                }}
              >
                <GridGallery
                  handleImageClick={handleImageClick}
                  images={content.images}
                  imageLength={3}
                  viewmoreBorder="border border-white"
                  viewmoreButton="border border-white"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {selectedImageIndex !== null && (
            <GalleryModal
              handleImageClick={handleImageClick}
              images={content.images || []}
              selectedImageIndex={selectedImageIndex}
              setSelectedImageIndex={setSelectedImageIndex}
            />
          )}

          <div className="flex h-[10rem] w-full bg-black/40 tablet:h-[10rem]"></div>
        </div>
      )}
    </section>
  )
}

export default PagesSection
