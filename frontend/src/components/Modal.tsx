import { IoMdClose } from 'react-icons/io'
import ContactForm from './ContactForm'
import { useEffect } from 'react'

const PopUp = ({ handleShowModal }: { handleShowModal: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])
  return (
    <div
      className="fixed top-0 z-[999999] flex h-full w-full items-center justify-center bg-black/55 backdrop-blur-md backdrop-brightness-75 backdrop-filter tablet:p-8 mobile:px-2"
      onClick={handleShowModal}
    >
      <div
        className="z-11 flex w-[50rem] flex-col bg-white lg:h-[38rem] tablet:w-full mobile:h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mr-4 mt-4 flex flex-row-reverse">
          <button title="button" type="button" onClick={handleShowModal}>
            <IoMdClose size={30} className="" />
          </button>
        </div>
        <h2 className="text-center text-3xl font-bold">Contact Us</h2>
        {/* <p >
          Let&apos;s bring your vision to life. Fill out the form below to
          schedule a free, no-obligation appointment with our remodeling
          experts.
        </p> */}
        <p className="mx-auto mt-4 max-w-lg text-center text-sm text-gray-600 mobile:max-w-xs">
          Let&apos;s bring your vision to life! Fill out the form below to
          schedule your <strong>free, no-obligation appointment</strong> with
          one of our remodeling specialists.
          <br />
          <br />
          Prefer to speak with someone right away? Call us at{' '}
          <a
            href="tel:6797795280"
            className="font-semibold text-primary underline"
          >
            (679) 779-5280
          </a>{' '}
          — we&apos;re happy to help!
        </p>
        <div className="mb-4 flex h-full items-center tablet:mt-6">
          <ContactForm showSelectOption={true} modalButton={true} />
        </div>
      </div>
    </div>
  )
}

export default PopUp
