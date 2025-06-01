import useScreenSizes from '@/components/hooks/useScreenSize'
import GridGallery from '@/components/GridGallery'
import { work_data } from '@/constants/index'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Section {
  title: string
  description: string
  images?: string[]
  mobile_description?: string
}

interface SectionsData {
  [key: string]: Section
}

const SeeOurWork = () => {
  const [activeSection, setActiveSection] = useState<string>('bath')
  const [sections, setSections] = useState<SectionsData>({})

  useEffect(() => {
    setSections(work_data)
  }, [])

  const handleSectionChange = (section: string) => {
    setTimeout(() => {
      setActiveSection(section)
    }, 300)
  }

  const { isMobile, isLarge } = useScreenSizes()
  if (isLarge === null || isMobile === null) {
    return null
  }

  return (
    <section>
      <div className="fixed z-[5] flex h-[80px] w-full bg-black/80 tablet:hidden"></div>

      <div className="flex h-[30rem] w-full tablet:h-[20rem]">
        <div className="fixed -z-10 h-full w-full bg-black/30"> </div>
        <div className="fixed -z-20 h-full w-full">
          <img
            src="/images/fronthouse-lg.webp"
            alt="background"
            className="h-screen w-full object-cover"
          />
        </div>
        {/* PAGE NAME */}
        <div className="absolute left-0 flex h-[30rem] w-full flex-col items-center justify-center pt-10 tablet:mt-16 tablet:h-[10rem]">
          <div className="flex h-[300px] w-full items-center justify-center">
            <div className="flex h-[5.5rem] w-[22rem] items-center justify-center bg-neutral-300 shadow-md mobile:h-[5rem] mobile:w-[17rem]">
              <h1 className="flex w-[30rem] justify-center text-center text-xl font-semibold text-zinc-700 outline outline-offset-8 outline-zinc-400 mobile:text-lg">
                See Our Work
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex flex-col items-center justify-center lg:border-none lg:bg-neutral-300 lg:pt-10 tablet:max-w-2xl tablet:-translate-y-8 tablet:pt-3 mobile:text-xs">
        {/* MOBILE TEXT */}
        {sections[activeSection] && (
          <div className="hidden w-auto flex-col pb-1 lg:flex mobile:text-xs">
            <h2 className="mx-auto w-full max-w-2xl text-center font-extrabold tracking-wider lg:text-4xl tablet:p-5 tablet:text-xl tablet:tracking-normal mobile:text-xl">
              {sections[activeSection].title}
            </h2>
            <div className="ml-5 mt-8 flex max-w-3xl flex-row tablet:ml-0 tablet:mt-0 tablet:px-3 mobile:px-4">
              <p className="w-full text-xl leading-8 tablet:text-base mobile:text-sm">
                {sections[activeSection].mobile_description}
              </p>
            </div>
          </div>
        )}

        <div className="flex h-[5rem] w-full max-w-[90rem] items-center justify-center rounded-t-lg bg-neutral-300 px-5 pt-8 tablet:pt-1">
          <div className="flex gap-5 mobile:gap-2">
            {Object.keys(sections).map((section) => (
              <Button
                key={section}
                variant="custom"
                className={`rounded py-5 tablet:w-[6rem] mobile:w-[5rem] mobile:py-2 mobile:text-sm ${
                  activeSection === section
                    ? 'cursor-default border-zinc-700 bg-zinc-700 text-white hover:bg-zinc-700 hover:text-white'
                    : 'border border-zinc-700 text-zinc-700 hover:bg-zinc-200'
                }`}
                onClick={() => handleSectionChange(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-20 flex h-full w-full max-w-[90rem] items-center justify-center rounded-b-lg bg-neutral-300 px-10 lg:flex-col tablet:px-0">
          {sections[activeSection] && (
            <div className="mx-5 h-full tablet:mx-0 tablet:w-full">
              <div className="relative flex h-full flex-row justify-center gap-4 py-10 lg:flex-col lg:gap-0 tablet:px-3 mobile:py-0 mobile:pb-1">
                {/* LEFT CONTAINER  */}
                <motion.div
                  className="relative flex w-[50%] flex-col lg:hidden lg:w-full tablet:mb-10 mobile:text-xs"
                  initial={{
                    opacity: 0,
                    translateY: 100,
                  }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                >
                  <div className="sticky top-28 mr-5 bg-neutral-300 py-7 lg:mr-0">
                    <h3 className="mx-auto mb-4 px-4 text-4xl font-extrabold tracking-wider lg:px-0 lg:text-5xl tablet:px-5 tablet:pt-10 tablet:text-center tablet:text-xl mobile:text-center mobile:text-base">
                      {sections[activeSection].title}
                    </h3>
                    <div className="ml-3 mt-5 flex max-w-xl flex-row lg:ml-0 tablet:px-4">
                      <h2 className="w-[34vw] pr-3 text-xl leading-8 lg:w-full mobile:text-sm">
                        {sections[activeSection].description}
                      </h2>
                    </div>
                  </div>
                </motion.div>

                {/* RIGHT CONTAINER (IMAGES) */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                  className="rounded-lg border border-zinc-400 p-9 shadow-2xl tablet:mt-5 tablet:w-full tablet:px-8 tablet:py-10"
                >
                  <GridGallery
                    images={sections[activeSection].images || []}
                    imageLength={isMobile ? 3 : 7}
                    viewmoreBorder="border border-zinc-700 "
                    viewmoreButton="border border-zinc-700 text-zinc-700 hover:bg-zinc-200 "
                  />
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default SeeOurWork
