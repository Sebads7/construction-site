import ContactForm from "@/components/ContactForm";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="relative h-full   grid grid-cols-2 mobile:flex mobile:flex-col  ">
      <div className="bg-black opacity-80 w-full h-[65px] flex fixed z-[8] mobile:hidden"></div>

      <div className=" w-full h-full  relative mobile:fixed  ">
        <div className="bg-black/30  h-full   absolute w-full  "> </div>
        <img
          src="/images/fronthouse.jpeg"
          alt="background"
          className="w-full h-screen mobile:h-full object-cover"
        />
      </div>

      <div className=" w-full h-full mobile:top-0 mobile:z-[2]  ">
        {/* CONTACT US TITLE */}
        <div className=" w-full h-1/5 flex justify-center items-center mobile:my-24 mt-24  ">
          <div className=" bg-zinc-700/75 h-[5rem] w-[20rem] flex justify-center items-center  mobile:w-[17rem] ">
            <h1 className="flex text-xl  text-center justify-center text-white font-semibold outline  outline-offset-8 outline-gray-300 w-[30rem]  mobile:text-base  ">
              Contact Us
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-center w-full    mobile:bg-white/85  ">
          {/* CONTACT INFO */}
          <div className="flex flex-col gap-5 justify-evenly py-10 mobile:bg-white/85 mobile:h-full mobile:text-sm ">
            <div className="flex flex-row gap-2 justify-center items-center ">
              <FaPhoneAlt size={20} />
              <h3> 679-779-5280</h3>
            </div>
            <div className="flex flex-row gap-2 justify-center items-center ">
              <MdEmail size={25} />
              <h3> esteban@abjremodeling.com</h3>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="flex h-full  pb-10  mobile:bg-white/85 ">
            <ContactForm showTextInput={true} contactButton={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
