import ContactForm from "@/components/ContactForm";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="grid grid-cols-2 ">
      <div className="bg-black opacity-80 w-full h-[65px] flex fixed"></div>

      <div className="w-full bg-gray-900 ">
        <div className="bg-black/30  h-full absolute w-[50.4%]   "> </div>
        <img
          src="src/assets/fronthouse.jpeg"
          alt="background"
          className="w-full h-screen object-cover"
        />
      </div>

      <div className="w-full flex flex-col ">
        <div className="w-full h-[150px]"></div>
        <div className="w-full  mb-[100px] flex items-center justify-center ">
          <div className=" bg-red-500/95 h-[4.5rem] w-[18rem] flex justify-center items-center  ">
            <h1 className="flex text-lg  text-center justify-center text-white font-semibold outline  outline-offset-8 outline-gray-300 w-[25rem]  ">
              See our Work
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

        <div className="flex w-full mt-10 justify-center items-center">
          <ContactForm showComponent={true} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
