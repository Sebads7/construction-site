import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";

import { SiHomebridge } from "react-icons/si";

const Footer = () => {
  return (
    <footer
      className="
      mobile:flex 
      mobile:justify-center 
      mobile:items-center  
      bg-[#1a1920] 
      text-slate-200 
      text-sm
      z-[2]
    py-5
    
      "
    >
      <div className="flex tablet:flex-col flex-row  justify-between px-28 p-5   mobile:gap-10 mobile:z-[2] h-full w-full  mobile:justify-center mobile:items-center tablet:px-0 mobile:text-xs">
        {/* LOGO AND SOCIAL MEDIA */}
        <div className=" flex flow-row tablet:flex-col justify-center items-center  ">
          <a href="/" className="flex justify-center items-center p-2 ">
            <div className="flex text-white border-2 ">
              <div className=" flex items-center gap-2  text-center px-3 py-1">
                <SiHomebridge size={40} className=" fill-red-600" />
                <p className="">ABJ Painting & Remodeling</p>
              </div>
            </div>
          </a>

          <div className="flex flex-row justify-center items-center gap-4 ml-5 mobile:ml-0 tablet:my-5 mobile:my-0">
            <FaFacebook size={20} />
            <FaInstagram size={20} />

            <FaXTwitter size={20} />
          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="flex  justify-center items-center gap-5 ">
          <p className="flex font-bold  uppercase">Call us at </p>
          <div className="flex items-center gap-2">
            <IoPhonePortraitOutline size={20} />

            <p className=" font-bold ">679-779-5280</p>
          </div>
        </div>

        {/* LOCATION AND DEVELOPER INFO */}
        <div className="flex  mobile:flex-col flex-col justify-center items-center gap-1 mobile:w-full mobile:mb-5 mobile:gap-2 tablet:mt-5  mobile:mt-0">
          <p className="">Lawrenceville, Georgia USA</p>
          <p>&copy; 2024. All rights reserved.</p>
          <p>Designed and Developed by Sebastian Di Salvatore</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
