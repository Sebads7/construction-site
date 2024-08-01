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
import NavSlides from "./NavSlides";

const gallery = [
  "src/assets/carpentry/Carpentry.JPG",
  "src/assets/carpentry/Carpentry2.JPG",
  "src/assets/carpentry/Carpentry3.JPG",
];

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
      className={`flex mobile:flex-col  justify-between items-center pl-2 fixed w-full mobile:w-14  h-auto bg-black/90 mobile:bg-black  p-5 mobile:p-0 scroll z-10 mobile:text-xs  mobile:ml-2 mobile:mt-2`}
    >
      {/* Mobile Menu Button */}
      <div className="hidden mobile:flex mobile:justify-center mobile:items-center  w-full h-full p-2">
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
      <div className="mobile:hidden flex items-center">
        <a
          href="/"
          className="flex items-center text-white/80 border-[2px] border-white/80"
        >
          <div className="flex items-center gap-2 text-center px-3 py-1">
            <p className="md:text-sm sm:text-xs">ABJ Painting & Remodeling</p>
          </div>
        </a>
      </div>

      {/* Menu for larger screens */}
      <div className="flex">
        <NavigationMenu>
          <NavigationMenuList className="mobile:hidden flex space-x-4">
            {/* HOME */}
            <NavigationMenuItem className="px-4 lg:text-sm md:text-xs">
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

            {/* SEE OUR WORK */}
            <NavigationMenuItem className="bg-transparent">
              <NavigationMenuTrigger className="bg-transparent text-white md:text-sm sm:text-xs">
                SEE OUR WORK
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid p-6 md:w-[400px] w-[500px] grid-cols-[.75fr_1fr] items-center justify-center">
                  <li className="row-span-3">
                    <NavigationMenuLink
                      asChild
                      className="transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 rounded-md bg-gradient-to-b"
                    >
                      <a
                        className="flex h-full w-full select-none flex-col from-muted/50 to-muted py-6 no-underline outline-none focus:shadow-md items-center justify-center"
                        href="/SeeOurWork"
                      >
                        <div className="w-full py-5">
                          <div className="mb-4 mt-1 text-base font-semibold text-center">
                            Check our gallery
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground text-center">
                            Our photo galleries feature the best photos from our
                            projects.
                          </p>
                        </div>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li className="flex h-full w-full select-none items-center justify-center">
                    <div className="flex items-center justify-center">
                      <NavSlides images={gallery} />
                    </div>
                  </li>
                </ul>
              </NavigationMenuContent>
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
        className={`fixed inset-0 bg-black bg-opacity-80 z-20  ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center justify-center min-h-full py-8">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            &times;
          </button>
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col space-y-4">
              {/* HOME */}
              <NavigationMenuItem>
                <NavigationMenuLink>
                  <Link
                    to="/"
                    className="text-white text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    HOME
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* WHAT WE DO */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white text-lg font-medium">
                  WHAT WE DO
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col space-y-4 px-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/KitchenRemodeling"
                          className="text-white"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Kitchen Remodeling
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/BathRemodeling"
                          className="text-white"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Bathroom Remodeling
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/PressureWashing"
                          className="text-white"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Pressure Washing
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/Painting"
                          className="text-white"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Interior & Exterior Painting
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/Carpentry"
                          className="text-white"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Custom Carpentry
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* SEE OUR WORK */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white text-lg font-medium">
                  SEE OUR WORK
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col space-y-4 px-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/SeeOurWork"
                          className="text-white"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Check our gallery
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li className="flex justify-center">
                      <NavSlides images={gallery} />
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* CONTACT */}
              <NavigationMenuItem>
                <NavigationMenuLink>
                  <Link
                    to="/Contact"
                    className="text-white text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    CONTACT
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Request Appointment Button */}
      <div className="mobile:hidden flex">
        <Button
          className="bg-red-600 py-2 px-4 rounded-md hover:bg-red-500 text-white text-sm mobile:text-xs"
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
