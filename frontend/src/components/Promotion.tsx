import ContactForm from './ContactForm'

const Promotion = () => {
  return (
    <div className="flex max-w-md justify-center tablet:w-full">
      <div className="flex h-full w-full flex-col items-center justify-center bg-yellow-300/95 px-0 py-16 shadow-2xl tablet:py-12 mobile:bg-yellow-300">
        <div className="mb-7 flex w-full flex-col items-center justify-center text-center">
          <h1 className="flex scroll-m-20 flex-col text-3xl font-semibold tracking-tight tablet:text-xl">
            UP TO
            <span className="border-b border-black pb-3 text-4xl font-semibold tracking-tight first:mt-0 tablet:pb-2 tablet:text-3xl">
              20% OFF
            </span>
          </h1>
          <p className="mb-12 mt-2 text-gray-700 tablet:mb-2">
            ON ALL PRODUCTS
          </p>
        </div>
        <ContactForm
          secondButton={true}
          checkBox={true}
          showSelectOption={true}
        />
      </div>
    </div>
  )
}

export default Promotion
