import ContactForm from "./ContactForm";

const Promotion = () => {
  return (
    <div className="flex justify-center w-3/4 tablet:w-full h-3/4 tablet:h-[36rem] lg:h-[43rem]   ">
      <div
        className="bg-yellow-300/95 mobile:bg-yellow-300 
      flex 
      flex-col 
      items-center 
      justify-center 
      w-full 
       h-full 
       shadow-2xl 
       px-0 
       py-24
       tablet:py-12
     
       "
      >
        <div className=" flex-col w-full  flex justify-center items-center text-center mb-7">
          <h1 className="flex flex-col  scroll-m-20 text-1xl mobile:text-2xl tablet:text-1xl  font-semibold tracking-tight">
            UP TO
            <span className="scroll-m-20 border-b border-black pb-5 text-4xl mobile:text-sm font-semibold tracking-tight first:mt-0 ">
              20% OFF
            </span>
          </h1>
          <p className=" text-gray-700 mt-1 mb-12 mobile:mb-2">
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
  );
};

export default Promotion;
