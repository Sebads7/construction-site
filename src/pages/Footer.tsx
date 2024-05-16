import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { SiHomebridge } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <footer className=" bg-[#1a1920] text-slate-200 text-sm">
        <div className="flex flex-col md:flex-row  justify-between px-28 p-5">
          <div className=" flex flow-row justify-center items-center">
            <a href="/" className="flex items-center gap-2 pr-14 ">
              <SiHomebridge size={50} className=" fill-red-600" />
              <h3 className=" text-white"> Britez Remodeling</h3>
            </a>
            <div className="flex flex-row gap-10">
              <FaFacebook size={20} />
              <FaInstagram size={20} />

              <FaXTwitter size={20} />
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <p>Call us at </p>
            <div className="flex gap-2">
              <FaPhoneAlt size={20} />
              <p>444-444-444</p>
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
