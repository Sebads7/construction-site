import ContactForm from "@/components/ContactForm";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="grid grid-cols-2  ">
      <div className="bg-black opacity-80 w-full h-[65px] flex fixed z-[8]"></div>

      <div className=" w-full  relative ">
        <div className="bg-black/30  h-full absolute w-full  "> </div>
        <img
          src="src/assets/fronthouse.jpeg"
          alt="background"
          className="w-full h-screen object-cover"
        />
      </div>

      <div className=" w-full">
        <div className=" w-full h-2/5 flex justify-center items-center   ">
          <div className=" bg-zinc-700/80 h-[5rem] w-[20rem] flex justify-center items-center   ">
            <h1 className="flex text-xl  text-center justify-center text-white font-semibold outline  outline-offset-8 outline-gray-300 w-[30rem]  ">
              Contact Us
            </h1>
          </div>
        </div>
        <div className="flex flex-row justify-evenly ">
          <div className="flex flex-row gap-2 justify-center items-center ">
            <FaPhoneAlt size={20} />
            <h3> 444-444-444</h3>
          </div>
          <div className="flex flex-row gap-2 justify-center items-center ">
            <MdEmail size={25} />
            <h3> britez@gmail.com</h3>
          </div>
        </div>

        <div className="flex justify-center w-full mt-10  ">
          <div className=" w-[90%] ">
            <ContactForm showTextInput={true} contactButton={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
