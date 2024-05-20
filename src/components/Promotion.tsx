import ContactForm from "./ContactForm";

const Promotion = () => {
  return (
    <div className="flex justify-center w-full h-full p-[7rem] ">
      <div className=" bg-yellow-300/95 w-[35rem] h-[45rem] shadow-2xl px-2 ">
        <div className="felx flex-col w-full h-[10rem] flex justify-center items-center text-center mb-7">
          <h1 className="flex flex-col pt-10 scroll-m-20 text-1xl  font-semibold tracking-tight">
            UP TO
            <span className="scroll-m-20 border-b border-black pb-5 text-4xl font-semibold tracking-tight first:mt-0 ">
              20% OFF
            </span>
          </h1>
          <p className=" text-gray-700 mt-1">ON ALL PRODUCTS</p>
        </div>
        <ContactForm secondButton={true} checkBox={true} />
      </div>
    </div>
  );
};

export default Promotion;
