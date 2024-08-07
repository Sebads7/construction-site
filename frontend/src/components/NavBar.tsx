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

  return (
    <div
      className={` flex fixed  justify-between items-center  w-full   h-auto bg-black/90 p-5  scroll  mobile:text-xs  tablet:ml-0 tablet:mt-5 tablet:p-0 tablet:bg-transparent tablet:flex-row-reverse  z-10 `}
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
      <div className="flex">
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
            <NavigationMenuItem className="bg-transparent">
              <NavigationMenuTrigger className="bg-transparent text-white md:text-sm sm:text-xs">
                WHAT WE DO
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex justify-center items-center md:w-[200px] w-[300px] lg:grid-cols-[.75fr_1fr]">
                  <ul className="flex flex-col justify-center items-center w-full">
                    {/* Kitchen Remodeling */}
                    <li className="flex justify-center transition duration-100 ease-in-out hover:bg-slate-800 p-3 w-full hover:text-white">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex items-center justify-center"
                          to="/KitchenRemodeling"
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
                          to="/BathRemodeling"
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
                          to="/PressureWashing"
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
                          to="/Painting"
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
                          to="/Carpentry"
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
                  to="/SeeOurWork"
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
                  to="/Contact"
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
        className={`relative   w-full justify-center items-center  bg-black    ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        {/* BACKGROUND IMAGE */}
        <div className="fixed w-full h-full top-0  bg-black/90 -z-1 ">
          <img
            src="src/assets/fronthouse.jpeg"
            alt="background"
            className=" w-full h-full  object-cover"
          />
        </div>

        <div className="fixed top-0 w-full bg-black/90 h-full   ">
          <div className="flex mobile:flex-col tablet:flex-row-reverse  w-full px-5  my-10 tablet:my-5 z-10 ">
            <div className="flex flex-row-reverse mobile:pb-10 mobile:w-full  ">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className=" flex  text-white text-4xl "
              >
                &times;
              </button>
            </div>

            {/* Request Appointment Button */}
            <div className=" flex mobile:pb-10 w-full justify-center items-center ">
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
                  <p className="md:text-sm sm:text-xs">
                    ABJ Painting & Remodeling
                  </p>
                </div>
              </a>
            </div>
          </div>
          {/* MENU SECTION */}
          <div className="flex  justify-center w-full  z-10">
            <NavigationMenu className="flex  w-full  ">
              <NavigationMenuList className="flex mobile:flex-col tablet:flex-row justify-center items-center gap-5     ">
                {/* HOME */}
                <NavigationMenuItem>
                  <NavigationMenuLink>
                    <Link
                      to="/"
                      className="text-white font-medium text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      HOME
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* CONTACT */}
                <NavigationMenuItem>
                  <NavigationMenuLink>
                    <Link
                      to="/Contact"
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
                      to="/SeeOurWork"
                      className="text-white text-sm font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      SEE OUR WORK
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* WHAT WE DO */}
                <NavigationMenuItem className="flex">
                  <NavigationMenuTrigger className="bg-transparent   text-white text-sm  ">
                    WHAT WE DO
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className=" flex  ">
                    <div className="flex justify-center  border-none bg-white     ">
                      <ul className="flex justify-center items-center flex-col  bg-white w-[12rem] mobile:text-[0.85rem] tablet:text-xs ">
                        {/* Kitchen Remodeling */}

                        <li className="flex justify-center  p-3 w-full ">
                          <NavigationMenuLink asChild>
                            <Link
                              to="/KitchenRemodeling"
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
                              to="/BathRemodeling"
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
                              to="/PressureWashing"
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
                              to="/Painting"
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
                              to="/Carpentry"
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
