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
import { SiHomebridge } from "react-icons/si";
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
      className={` flex justify-between items-center pl-4 fixed h-[65px]  bg-black bg-opacity-20 scroll z-10 w-full `}
    >
      <div>
        <a href="/" className="flex items-center gap-2">
          <SiHomebridge size={50} className=" fill-red-600" />
          <h3 className=" text-white"> Britez Remodeling</h3>
        </a>
      </div>
      <div className="">
        <NavigationMenu>
          <NavigationMenuList>
            {/* HOME ------- ITEM */}
            <NavigationMenuItem className="px-4 text-sm">
              <NavigationMenuLink>
                <Link to="/" className="bg-transparent text-white">
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
                <div className="  gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <ul className="flex flex-row gap-3">
                    <li className="flex">
                      {/* CARPENTRY ITEM */}
                      <NavigationMenuLink
                        asChild
                        className="transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30"
                      >
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md
                            
                        
                            "
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Carpentry
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components that you can copy
                            and paste into your apps. Accessible. Customizable.
                            Open Source.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    {/* PAINTING ITEM */}
                    <li className="flex">
                      <NavigationMenuLink
                        asChild
                        className="transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30"
                      >
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Painting
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components that you can copy
                            and paste into your apps. Accessible. Customizable.
                            Open Source.
                          </p>
                        </a>
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
                    <div className="flex items-center justify-center">
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
