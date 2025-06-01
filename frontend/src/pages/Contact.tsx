import ContactForm from '@/components/ContactForm'
import { Mail, MapPin, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <div className="relative flex h-full xl:flex-col">
      <div className="fixed z-[8] flex h-[5rem] w-full bg-black opacity-80 tablet:hidden"></div>

      <div className="w-[70dvw] 2xl:w-[30dvw] xl:h-[15rem] xl:w-full tablet:pt-0">
        <img
          src="/images/fronthouse-md.webp"
          alt="background"
          className="h-screen w-full object-cover tablet:h-full"
        />
      </div>

      <div className="z-10 mx-auto h-full w-full tablet:top-0">
        {/* CONTACT US TITLE */}
        <div className="mt-24 flex w-full translate-y-10 items-center justify-center tablet:mt-10 tablet:translate-y-0">
          <div className="flex h-[5rem] w-[20rem] items-center justify-center border border-zinc-700 bg-gray-900 shadow-lg mobile:w-[17rem]">
            <h1 className="flex w-[30rem] justify-center text-center text-xl font-semibold text-white outline outline-offset-8 outline-zinc-300 mobile:text-base">
              Contact Us
            </h1>
          </div>
        </div>

        <div className="mx-auto mt-20 bg-white px-5 tablet:mt-10">
          {/* CONTACT INFO */}
          <div className="flex w-full items-center justify-center gap-20 py-10 tablet:h-full tablet:flex-col tablet:gap-10 tablet:bg-white/85 mobile:text-sm">
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-zinc-700">
                <div className="rounded-full bg-red-300 p-3">
                  <Phone />
                </div>

                <div>
                  <p className="text-lg font-semibold">Phone:</p>
                  <p>679-779-5280</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-zinc-700">
                <div className="rounded-full bg-red-300 p-3">
                  <Mail />
                </div>
                <div>
                  <p className="text-lg font-semibold">Email:</p>
                  <p>esteban@abjremodeling.com</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-zinc-700">
                <div className="rounded-full bg-red-300 p-3">
                  <MapPin />
                </div>
                <div>
                  <p className="text-lg font-semibold"> Serving Areas</p>
                  <p> Atlanta, GA</p>
                </div>
              </div>
              <div className="mx-auto flex max-w-lg items-center gap-2 rounded-md border border-red-200 bg-red-50 p-2 tablet:mb-10 tablet:hidden">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold"> Work Hours:</p>
                  <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            {/* CONTACT FORM */}
            <div className="flex h-full max-w-md flex-col rounded-lg border p-2 py-5 shadow-lg tablet:w-full tablet:bg-white/85 mobile:p-0 mobile:py-5">
              <p className="mb-10 ml-10 text-xl font-semibold tablet:mb-5 tablet:text-base">
                Get Your Free Estimate
              </p>
              <ContactForm showTextInput={true} />
            </div>
          </div>
          <div className="mx-auto hidden max-w-lg items-center gap-2 rounded-md border border-red-200 bg-red-50 p-2 tablet:mb-10 tablet:flex">
            <div className="flex flex-col gap-2">
              <p className="font-semibold"> Work Hours:</p>
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
