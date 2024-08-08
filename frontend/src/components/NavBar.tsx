import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ handleShowModal }: { handleShowModal: () => void }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        document.querySelector(".scroll")?.classList.add("bg-opacity-80");
      } else {
        document.querySelector(".scroll")?.classList.remove("bg-opacity-80");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Block scrolling on body when mobile menu is open
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; // Reset overflow when component unmounts or menu closes
    };
  }, [isMobileMenuOpen]);

  return (
    <div
      className={` flex fixed  justify-between items-center  w-full   h-auto bg-black p-5  scroll  mobile:text-xs  tablet:ml-0 tablet:mt-5 tablet:p-0 tablet:bg-transparent tablet:flex-row-reverse  z-10 
       
        
        `}
    >
      {/* Mobile Menu Button */}
      <div className="hidden tablet:flex  bg-red-500 h-full p-4 rounded-lg mr-2   ">
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Logo and Title */}
      <div className="tablet:hidden flex items-center">
        <a
          href="/"
          className="flex items-center text-white/80 border-[2px] border-white/80"
        >
          <div className="flex items-center gap-2 text-center px-3 py-1">
            <p className="tablet:text-sm mobile:text-xs">
              ABJ Painting & Remodeling
            </p>
          </div>
        </a>
      </div>

      {/* Menu for larger screens */}
      <div className="flex ">
        <NavigationMenu>
          <NavigationMenuList className="tablet:hidden flex space-x-4 tablet:space-x-2">
            {/* HOME */}
            <NavigationMenuItem className="px-4 lg:text-sm ">
              <NavigationMenuLink>
                <Link to="/" className="bg-transparent text-white">
                  HOME
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* WHAT WE DO */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white md:text-sm sm:text-xs">
                WHAT WE DO
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex justify-center items-center md:w-[200px] w-[300px] lg:grid-cols-[.75fr_1fr] bg-white">
                  <ul className="flex flex-col justify-center items-center w-full">
                    {/* Kitchen Remodeling */}
                    <li className="flex justify-center transition duration-100 ease-in-out hover:bg-slate-800 p-3 w-full hover:text-white">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex items-center justify-center"
                          to="/kitchen-remodeling"
                        >
                          <p className="leading-tight">Kitchen Remodeling</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li className="border-b border-gray-300 w-24 flex justify-center items-center"></li>

                    {/* Bathroom Remodeling */}
                    <li className="flex justify-center transition duration-100 ease-in-out hover:bg-slate-800 p-3 hover:text-white w-full">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex items-center justify-center"
                          to="/bath-remodeling"
                        >
                          <p className="leading-tight">Bathroom Remodeling</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li className="border-b border-gray-300 w-24 flex justify-center items-center"></li>

                    {/* Pressure Washing */}
                    <li className="flex justify-center transition duration-100 ease-in-out hover:bg-slate-800 p-3 hover:text-white w-full">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex items-center justify-center"
                          to="/pressure-washing"
                        >
                          <p className="leading-tight">Pressure Washing</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li className="border-b border-gray-300 w-24 flex justify-center items-center"></li>

                    {/* Painting */}
                    <li className="flex justify-center transition duration-100 ease-in-out hover:bg-slate-800 p-3 hover:text-white w-full">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex items-center justify-center"
                          to="/painting"
                        >
                          <p className="leading-tight">
                            Interior & Exterior Painting
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li className="border-b border-gray-300 w-24 flex justify-center items-center"></li>

                    {/* Carpentry */}
                    <li className="flex justify-center transition duration-100 ease-in-out hover:bg-slate-800 p-3 hover:text-white w-full">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex items-center justify-center"
                          to="/carpentry"
                        >
                          <p className="leading-tight">Custom Carpentry</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="px-4 text-sm">
              <NavigationMenuLink>
                <Link
                  to="/see-our-work"
                  className="bg-transparent text-white md:text-sm sm:text-xs"
                >
                  SEE OUR WORK
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* CONTACT */}
            <NavigationMenuItem className="px-4 text-sm">
              <NavigationMenuLink>
                <Link
                  to="/contact"
                  className="bg-transparent text-white md:text-sm sm:text-xs"
                >
                  CONTACT
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu */}
      <div
        className={`relative    bg-black    ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        {/* BACKGROUND IMAGE */}
        <div className="fixed w-full h-full top-0  bg-black/60 -z-1 ">
          <img
            src="/images/fronthouse.jpeg"
            alt="background"
            className=" w-full h-full  object-cover"
          />
        </div>

        <div className="fixed top-0 w-full bg-black/90 h-full   ">
          {/* Close Button */}
          <div className="flex flex-row-reverse p-4 mobile:w-full  ">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className=" flex  text-white text-4xl "
            >
              &times;
            </button>
          </div>

          <div className="flex tablet:flex-row mobile:flex-col w-full   ">
            {/* Menu Items */}
            <div className="flex flex-col-reverse justify-center  mobile:w-full tablet:w-2/4 mobile:px-5 tablet:ml-28 mobile:ml-0 gap-5   z-10 ">
              {/* Request Appointment Button */}
              <div className=" flex  w-full justify-center items-center ">
                <Button
                  className="bg-red-600 py-2 px-4 rounded-md hover:bg-red-500 text-white text-sm mobile:text-xs"
                  onClick={handleShowModal}
                >
                  <p className="flex lg:flex-row gap-1">
                    Request An<span> Appointment</span>
                  </p>
                </Button>
              </div>

              {/* Logo and Title */}
              <div className=" flex w-full justify-center items-center ">
                <a
                  href="/"
                  className="flex items-center text-white/80 border-[2px] border-white/80"
                >
                  <div className="flex items-center gap-2 text-center px-3 py-1">
                    <p className=" mobile:text-base">
                      ABJ Painting & Remodeling
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* MENU SECTION */}
            <div className="flex  mobile:justify-center mobile:pt-10 tablet:ml-4 mobile:ml-0 w-full  z-10">
              <div className="w-2   bg-white mr-2 "></div>
              <NavigationMenu className="flex   ">
                <NavigationMenuList className="flex flex-col  text-left gap-5  items-start     ">
                  {/* HOME */}
                  <NavigationMenuItem className=" pl-1">
                    <NavigationMenuLink>
                      <Link
                        to="/"
                        className="text-white font-medium text-sm  "
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        HOME
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* CONTACT */}
                  <NavigationMenuItem className="">
                    <NavigationMenuLink>
                      <Link
                        to="/contact"
                        className="text-white text-sm font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        CONTACT
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* SEE OUR WORK */}
                  <NavigationMenuItem>
                    <NavigationMenuLink>
                      <Link
                        to="/see-our-work"
                        className="text-white text-sm font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        SEE OUR WORK
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* WHAT WE DO */}
                  <NavigationMenuItem className="flex px-0">
                    <NavigationMenuTrigger className="  bg-red-600  px-2  text-white text-sm  ">
                      WHAT WE DO
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className=" flex  ">
                      <div className="flex justify-center  border-none bg-white     ">
                        <ul className="flex justify-center items-center flex-col  bg-white w-[12rem] mobile:text-[0.85rem] tablet:text-xs ">
                          {/* Kitchen Remodeling */}

                          <li className="flex justify-center  p-3 w-full ">
                            <NavigationMenuLink asChild>
                              <Link
                                to="/kitchen-remodeling"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                Kitchen Remodeling
                              </Link>
                            </NavigationMenuLink>
                          </li>

                          <li className="border-b border-gray-300 w-24 flex justify-center items-center"></li>

                          {/* Bathroom Remodeling */}
                          <li className="flex justify-center  p-3  w-full">
                            <NavigationMenuLink asChild>
                              <Link
                                to="/bath-remodeling"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                Bathroom Remodeling
                              </Link>
                            </NavigationMenuLink>
                          </li>

                          <li className="border-b border-gray-300 w-24 flex justify-center items-center"></li>

                          {/* Pressure Washing */}
                          <li className="flex justify-center  p-3  w-full">
                            <NavigationMenuLink asChild>
                              <Link
                                to="/pressure-washing"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                Pressure Washing
                              </Link>
                            </NavigationMenuLink>
                          </li>

                          <li className="border-b border-gray-300 w-24 flex justify-center items-center"></li>

                          {/* Painting */}
                          <li className="flex justify-center p-3  w-full">
                            <NavigationMenuLink asChild>
                              <Link
                                to="/painting"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                Interior & Exterior Painting
                              </Link>
                            </NavigationMenuLink>
                          </li>

                          <li className="border-b border-gray-300 w-24 flex justify-center items-center"></li>

                          {/* Carpentry */}
                          <li className="flex justify-center  p-3 w-full">
                            <NavigationMenuLink asChild>
                              <Link
                                onClick={() => setMobileMenuOpen(false)}
                                to="/carpentry"
                              >
                                Custom Carpentry
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  {/* END DIV */}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
      </div>

      {/* Request Appointment Button */}
      <div className="tablet:hidden flex ">
        <Button
          className="bg-red-600 py-2 px-4 rounded-md hover:bg-red-500 text-white text-sm mobile:text-xs  "
          onClick={handleShowModal}
        >
          <p className="flex lg:flex-row gap-1">
            Request An<span> Appointment</span>
          </p>
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
