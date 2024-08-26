import { IoMdClose } from "react-icons/io";
import ContactForm from "./ContactForm";
import { useEffect } from "react";

const PopUp = ({ handleShowModal }: { handleShowModal: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div
      className=" flex fixed justify-center  items-center w-full h-full top-0  bg-black/55 backdrop-filter backdrop-brightness-75 backdrop-blur-md z-10 tablet:p-8 tablet:px-2"
      onClick={handleShowModal}
    >
      <div
        className="flex flex-col bg-white w-[50rem] h-[33rem] tablet:w-full tablet:h-full z-11 "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-row-reverse mt-4 mr-4 ">
          <button type="button" onClick={handleShowModal}>
            <IoMdClose size={30} className="" />
          </button>
        </div>
        <h1 className="text-3xl font-bold text-center  ">Contact Us</h1>
        <div className=" flex items-center h-full mb-4">
          <ContactForm showSelectOption={true} modalButton={true} />
        </div>
      </div>
    </div>
  );
};

export default PopUp;
