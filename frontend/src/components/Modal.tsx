import { IoMdClose } from "react-icons/io";
import ContactForm from "./ContactForm";

const PopUp = ({ handleShowModal }: { handleShowModal: () => void }) => {
  return (
    <div
      className=" flex fixed justify-center  items-center w-full h-full top-0  bg-black/55 backdrop-filter backdrop-brightness-75 backdrop-blur-md z-10"
      onClick={handleShowModal}
    >
      <div
        className="flex flex-col bg-white w-[750px] h-[500px] z-11 "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-row-reverse mt-4 mr-4 ">
          <button type="button" onClick={handleShowModal}>
            <IoMdClose size={30} className="" />
          </button>
        </div>
        <h1 className="text-3xl font-bold text-center  ">Contact Us</h1>
        <div className=" flex items-center h-full mb-4">
          <ContactForm modalButton={true} showSelectOption={true} />
        </div>
      </div>
    </div>
  );
};

export default PopUp;
