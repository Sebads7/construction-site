import WhatWeDo from './WhatWeDo'
import useScreenSizes from '@/components/hooks/useScreenSize'

import Review from '@/components/Review'
import Promotion from '@/components/Promotion'
import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'
import { Mail, MapPin, Phone } from 'lucide-react'

const Home = () => {
  const { isMobile, isLarge } = useScreenSizes()
  if (isLarge === null || isMobile === null) {
    return null
  }
  return (
    <section className="relative h-full w-full">
      <div className="fixed z-[9] flex h-[5rem] w-full bg-black opacity-50 tablet:hidden"></div>
      <div className="relative h-screen lg:h-full">
        <div className="2xl:3/4 absolute z-[-1] h-full w-full">
          <img
            src="/images/fronthouse-lg.webp"
            alt="background"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative flex h-full flex-row mobile:flex-col">
          <div className="flex w-full flex-row bg-black/50 lg:flex-col mobile:items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: isMobile ? 0 : -100,
                y: isLarge ? 0 : -100,
              }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.4, 0.3, 0.8, 1.01],
                delay: 0.2,
              }}
              className="z-2 flex h-auto w-full flex-col items-center justify-center bg-black/50 px-8 lg:pb-[5rem] tablet:bg-black/0 mobile:px-4"
            >
              <h1 className="mb-4 max-w-2xl pt-1 text-6xl font-extrabold tracking-wider text-white lg:pt-[10rem] lg:text-5xl tablet:pt-[6rem] mobile:text-4xl">
                Atlanta&apos;s Trusted Remodeling Experts
              </h1>
              <h2 className="mt-6 max-w-2xl text-2xl font-light text-white lg:w-full tablet:pb-1 tablet:text-base tablet:font-normal mobile:mt-0 mobile:text-lg">
                Transform your home with the expert team at ABJ Painting &
                Remodeling. From concept to completion, we handle every detail
                to deliver a smooth, stress-free renovation. Experience quality
                craftsmanship and peace of mind with a single point of contact
                throughout your entire project.
              </h2>
            </motion.div>

            {/* Fade In from right to center */}

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.1, 0.2, 0.6, 1.01],
                delay: 1.4,
              }}
              className="mx-auto mb-20 mt-5 flex h-full w-full max-w-3xl items-center justify-center lg:max-w-3xl lg:px-24 tablet:mt-0 mobile:max-w-sm mobile:px-2"
            >
              <Promotion />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="relative bg-white">
        <WhatWeDo />
      </div>

      {/* REVIEW  */}

      <div className="h-full overflow-x-hidden">
        <div className="flex h-[25rem] w-full flex-col items-center justify-center px-4 mobile:mt-5 mobile:h-[15rem]">
          <h2 className="mb-4 max-w-4xl scroll-m-20 text-center text-5xl font-extrabold tracking-wider lg:text-xl mobile:text-2xl">
            Why Homeowners Trust ABJ Remodeling
          </h2>
          <h3 className="mt-4 w-[60rem] max-w-3xl text-center text-xl leading-7 lg:mt-0 lg:w-[50rem] tablet:w-full tablet:text-lg mobile:w-full mobile:text-base">
            We pride ourselves on delivering outstanding results and seamless
            experiences. Hear from our happy clients who’ve transformed their
            homes with us.
          </h3>
        </div>
        <div className="-translate-y-10 tablet:translate-y-0">
          <Review />
        </div>
      </div>

      <div className="mx-auto mt-20 tablet:mt-10 mobile:max-w-xs">
        <div className="mx-auto max-w-2xl">
          <h3 className="mb-10 scroll-m-20 text-center text-5xl font-extrabold tracking-wider lg:text-xl mobile:text-2xl">
            {' '}
            Let’s Bring Your Vision to Life
          </h3>
          <p className="text-center text-xl tablet:text-base mobile:text-lg">
            Get in touch today for a free consultation and estimate. We&apos;ll
            help you turn your ideas into reality—on time and within budget.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-20 tablet:flex-col tablet:gap-10">
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-red-200 p-3">
                <Phone />
              </div>

              <div>
                <p className="text-lg font-semibold">Phone:</p>
                <p>679-779-5280</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-red-200 p-3">
                <Mail />
              </div>
              <div>
                <p className="text-lg font-semibold">Email:</p>
                <p>esteban@abjremodeling.com</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-red-200 p-3">
                <MapPin />
              </div>
              <div>
                <p className="text-lg font-semibold"> Serving Areas</p>
                <p> Atlanta, GA</p>
              </div>
            </div>
            <div className="mx-auto mt-10 flex max-w-lg items-center gap-2 rounded-md border border-red-200 bg-red-50 p-2 tablet:hidden">
              <div className="flex flex-col gap-2">
                <p className="font-semibold"> Work Hours:</p>
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-xl rounded-lg border p-5 py-8 shadow-lg mobile:p-0 mobile:py-5">
            <p className="mb-10 ml-10 text-xl font-semibold tablet:mb-5 tablet:text-base">
              Get Your Free Estimate
            </p>
            <ContactForm showTextInput={true} />
          </div>
        </div>
        <div className="mx-auto mt-10 hidden max-w-lg items-center gap-2 rounded-md border border-red-200 bg-red-50 p-2 tablet:flex">
          <div className="flex flex-col gap-2">
            <p className="font-semibold"> Work Hours:</p>
            <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>

      <div className="h-[10rem] w-full"></div>
    </section>
  )
}

export default Home
