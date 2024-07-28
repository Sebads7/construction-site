import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";

import { SiHomebridge } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <footer className=" bg-[#1a1920] text-slate-200 text-sm py-1">
        <div className="flex flex-col md:flex-row  justify-between px-28 p-5">
          <div className=" flex flow-row justify-center items-center">
            <a href="/" className="flex items-center p-2 mr-5">
              <div className=" text-white border-2 ">
                <div className=" flex items-center gap-2  text-center px-3 py-1">
                  <SiHomebridge size={40} className=" fill-red-600" />
                  <p className="">ABJ Painting & Remodeling</p>
                </div>
              </div>
            </a>

            <div className="flex flex-row gap-4">
              <FaFacebook size={20} />
              <FaInstagram size={20} />

              <FaXTwitter size={20} />
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <p className=" font-bold  uppercase">Call us at </p>
            <div className="flex gap-2">
              <IoPhonePortraitOutline size={20} />

              <p className=" font-bold ">444-444-444</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <p className="pb-4">Lawrenceville, Georgia USA</p>
            <p>&copy; 2024 Britez Painting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
