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

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import NavSlides from "./NavSlides";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const gallery = [
  "src/assets/carpentry/Carpentry.JPG",
  "src/assets/carpentry/Carpentry2.JPG",
  "src/assets/carpentry/Carpentry3.JPG",
];

const NavBar = ({ handleShowModal }: { handleShowModal: () => void }) => {
  const [show, setShow] = useState(false);

  const handleRightClick = () => {
    setShow((prevShow) => !prevShow);
  };

  const handleLeftClick = () => {
    setShow((prevShow) => !prevShow);
  };

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
      className={` flex justify-between items-center pl-2 fixed h-[65px]  bg-black bg-opacity-20 scroll 
      z-10  w-full `}
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
                <div className=" gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] h-[270px]">
                  <ul className="flex flex-row gap-3">
                    <div className="flex justify-center items-center">
                      <FaAngleLeft
                        size={30}
                        className="flex justify-center items-center cursor-pointer 
                        transition-all duration-350 transform  hover:opacity-50
                         hover:shadow-md hover:scale-110 dark:hover:shadow-black/30 dark:hover:scale-110  
                        "
                        onClick={() => {
                          handleLeftClick();
                        }}
                      />
                    </div>

                    {show ? (
                      <>
                        {/* Kitchent Remodeling */}
                        <li className="">
                          <NavigationMenuLink
                            asChild
                            className="transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30"
                          >
                            <Link
                              className="flex h-[200px] w-[180px] select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              to="/kitchenremodeling"
                            >
                              <div className="flex justify-center items-center px-4 py-8">
                                <div className="flex  flex-col   ">
                                  <p className=" text-lg font-medium leading-tight mb-2 ">
                                    Kitchen Remodeling
                                  </p>
                                  <p className="text-sm leading-tight text-muted-foreground">
                                    Custom kitchen design
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>

                        {/* PAINTING ITEM */}
                        <li className="flex">
                          <NavigationMenuLink
                            asChild
                            className="transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30"
                          >
                            <Link
                              className="flex h-[200px] w-[180px] select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              to="/painting"
                            >
                              <div className="flex justify-center items-center px-4 py-8">
                                <div className="flex  flex-col   ">
                                  <p className=" text-lg font-medium leading-tight mb-2 ">
                                    Painting
                                  </p>
                                  <p className="text-sm leading-tight text-muted-foreground">
                                    Drywall repair and painting
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </>
                    ) : (
                      <>
                        {/* Bathroom Remodeling */}
                        <li className="">
                          <NavigationMenuLink
                            asChild
                            className="transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30"
                          >
                            <Link
                              className="flex justify-center items-center h-[200px] w-[180px] select-none rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              to="/bathremodeling"
                            >
                              <div className="flex justify-center items-center px-4 py-8">
                                <div className="flex  flex-col   ">
                                  <p className=" text-lg font-medium leading-tight mb-2 ">
                                    Bathroom Remodeling
                                  </p>
                                  <p className="text-sm leading-tight text-muted-foreground">
                                    Beautifully designed
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>

                        {/* CARPENTRY ITEM */}
                        <li className="flex">
                          <NavigationMenuLink
                            asChild
                            className="transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30"
                          >
                            <Link
                              className="flex justify-center items-center h-[200px] w-[180px] select-none rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              to="/carpentry"
                            >
                              <div className="flex justify-center items-center px-4 py-8">
                                <div className="flex  flex-col   ">
                                  <p className=" text-lg font-medium ">
                                    Carpentry
                                  </p>
                                  <p className="text-sm leading-tight text-muted-foreground">
                                    custom carpentry services
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </>
                    )}

                    <div className="flex justify-center items-center">
                      <FaAngleRight
                        size={30}
                        className="flex justify-center items-center cursor-pointer 
                        transition-all duration-350 transform  hover:opacity-50
                        hover:shadow-md hover:scale-110 dark:hover:shadow-black/30 dark:hover:scale-110
                        "
                        onClick={() => {
                          handleRightClick();
                        }}
                      />
                    </div>
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
                        className="flex h-full w-full select-none flex-col   from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md   items-center justify-center  "
                        href="/SeeOurWork"
                      >
                        <div className="mb-4 mt-1 text-lg font-medium">
                          Check our gallery
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Our photo galleries feature the best photos from our
                          projects.
                        </p>
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

            <NavigationMenuItem className="px-4 text-sm">
              <NavigationMenuLink>
                <Link to="/Reviews" className="bg-transparent text-white">
                  REVIEWS
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

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
