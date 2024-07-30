import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { useEffect } from "react";

import { Link } from "react-router-dom";
import NavSlides from "./NavSlides";

const gallery = [
  "src/assets/carpentry/Carpentry.JPG",
  "src/assets/carpentry/Carpentry2.JPG",
  "src/assets/carpentry/Carpentry3.JPG",
];

const NavBar = ({ handleShowModal }: { handleShowModal: () => void }) => {
  // if window scroll is greater than 100 then add sticky the class to the navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // add  background  bg-black bg-opacity-100
        document.querySelector(".scroll")?.classList.add("bg-opacity-80");
      } else {
        document.querySelector(".scroll")?.classList.remove("bg-opacity-80");
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={` flex justify-between items-center pl-2 fixed w-full h-[65px]  bg-black bg-opacity-20 scroll 
      z-10  `}
    >
      <div>
        <a href="/" className="flex items-center p-2">
          <div className=" text-white/80 border-[2px] border-white/80 ">
            <div className=" flex items-center gap-2  text-center px-3 py-1">
              {/* <SiHomebridge size={40} className=" fill-red-600/60" /> */}
              <p className="">ABJ Painting & Remodeling</p>
            </div>
          </div>
        </a>
      </div>

      <div>
        <NavigationMenu>
          <NavigationMenuList>
            {/* HOME ------- ITEM */}
            <NavigationMenuItem className="px-4 text-sm  ">
              <NavigationMenuLink>
                <Link to="/" className="bg-transparent text-white ">
                  HOME
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* FIRST ITEM */}
            <NavigationMenuItem className="bg-transparent">
              <NavigationMenuTrigger className="bg-transparent text-white">
                WHAT WE DO
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex justify-center items-center  md:w-[200px] lg:w-[300px] lg:grid-cols-[.75fr_1fr] ">
                  <ul className="flex justify-center items-center flex-col w-full  ">
                    {/* Kitchen Remodeling */}
                    <li className="flex justify-center  transition duration-100 ease-in-out hover:bg-slate-800 p-3 w-full hover:text-white ">
                      <NavigationMenuLink asChild className=" ">
                        <Link
                          className="flex items-center justify-center"
                          to="/KitchenRemodeling"
                        >
                          <p className=" leading-tight ">Kitchen Remodeling</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li className="border-b border-gray-300 w-24 flex justify-center items-center"></li>

                    {/* BATHROOM REMODELING */}
                    <li className="flex justify-center  transition duration-100 ease-in-out hover:bg-slate-800 p-3 hover:text-white w-full ">
                      <NavigationMenuLink asChild className=" ">
                        <Link
                          className="flex items-center justify-center"
                          to="/BathRemodeling"
                        >
                          <p className=" leading-tight">Bathroom Remodeling</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li className="border-b border-gray-300 w-24 flex justify-center items-center"></li>

                    {/* PRESSURE WASHING */}
                    <li className="flex justify-center transition duration-100 ease-in-out hover:bg-slate-800 p-3 hover:text-white w-full  ">
                      <NavigationMenuLink asChild className=" ">
                        <Link
                          className="flex items-center justify-center"
                          to="/PressureWashing"
                        >
                          <p className=" leading-tight">Pressure Washing</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li className="border-b border-gray-300 w-24 flex justify-center items-center"></li>

                    {/* PAINTING ITEM */}
                    <li className="flex justify-center transition duration-100 ease-in-out hover:bg-slate-800 p-3 hover:text-white w-full  ">
                      <NavigationMenuLink asChild className=" ">
                        <Link
                          className="flex items-center justify-center"
                          to="/Painting"
                        >
                          <p className=" leading-tight">
                            Interior & Exterior Painting
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li className="border-b border-gray-300 w-24 flex justify-center items-center"></li>

                    {/* CARPENTRY ITEM */}
                    <li className="flex justify-center transition duration-100 ease-in-out hover:bg-slate-800 p-3   hover:text-white w-full ">
                      <NavigationMenuLink asChild className=" ">
                        <Link
                          className="flex items-center justify-center"
                          to="/Carpentry"
                        >
                          <p className=" leading-tight">Custom Carpentry</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="bg-transparent">
              <NavigationMenuTrigger className="bg-transparent text-white">
                SEE OUR WORK
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]  items-center justify-center">
                  <li className="row-span-3">
                    <NavigationMenuLink
                      asChild
                      className="transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 rounded-md bg-gradient-to-b"
                    >
                      <a
                        className="flex h-full w-full select-none flex-col   from-muted/50 to-muted py-6 no-underline outline-none focus:shadow-md   items-center justify-center  "
                        href="/SeeOurWork"
                      >
                        <div className="w-full py-5 ">
                          <div className="mb-4 mt-1 text-base font-semibold text-center">
                            Check our gallery
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground text-center ">
                            Our photo galleries feature the best photos from our
                            projects.
                          </p>
                        </div>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li className="flex h-full w-full select-none items-center justify-center">
                    <div className="flex items-center justify-center ">
                      <NavSlides images={gallery} />
                    </div>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* THIRD ITEM */}

            {/* <NavigationMenuItem className="px-4 text-sm">
              <NavigationMenuLink>
                <Link to="/Reviews" className="bg-transparent text-white">
                  REVIEWS
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem> */}

            <NavigationMenuItem className="px-4 text-sm">
              <NavigationMenuLink>
                <Link to="/Contact" className="bg-transparent text-white">
                  CONTACT
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div>
        <Button
          className="bg-red-600 py-8 h-[60px] rounded-none hover:bg-red-500 "
          onClick={handleShowModal}
        >
          Request An Appointment
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
