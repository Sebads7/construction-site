import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ handleShowModal }: { handleShowModal: () => void }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        document.querySelector('.scroll')?.classList.add('bg-opacity-80')
      } else {
        document.querySelector('.scroll')?.classList.remove('bg-opacity-80')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Block scrolling on body when mobile menu is open
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto' // Reset overflow when component unmounts or menu closes
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={`scroll fixed z-50 flex h-auto w-full items-center justify-between bg-black p-5 tablet:ml-0 tablet:mt-5 tablet:flex-row-reverse tablet:bg-transparent tablet:p-0 mobile:text-xs`}
    >
      {/* Mobile Menu Button */}
      <div className="mobile-shadow mr-5 hidden h-full rounded-xl tablet:flex">
        <Button
          type="button"
          title="Open Menu"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-shadow rounded-xl bg-black py-6 text-white focus:outline-none"
        >
          <svg
            className="h-6 w-6"
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
        </Button>
      </div>

      {/* Logo and Title */}
      <div className="flex items-center lg:hidden">
        <a
          href="/"
          className="flex items-center border-[2px] border-white/80 text-white/80"
        >
          <div className="flex items-center gap-2 px-3 py-1 text-center">
            <p className="tablet:text-sm mobile:text-xs">
              ABJ Painting & Remodeling
            </p>
          </div>
        </a>
      </div>

      {/* Menu for larger screens */}
      <div className="mx-auto flex">
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4 tablet:hidden tablet:space-x-2">
            {/* HOME */}
            <NavigationMenuItem className="px-4 lg:text-sm">
              <NavigationMenuLink>
                <Link to="/" className="bg-transparent text-white">
                  HOME
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* WHAT WE DO */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="md:text-sm sm:text-xs bg-transparent text-white">
                WHAT WE DO
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="md:w-[200px] flex w-[300px] items-center justify-center bg-white lg:grid-cols-[.75fr_1fr]">
                  <ul className="flex w-full flex-col items-center justify-center">
                    {/* Kitchen Remodeling */}
                    <li className="flex w-full justify-center p-3 transition duration-100 ease-in-out hover:bg-slate-800 hover:text-white">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex items-center justify-center"
                          to="/kitchen-remodeling"
                        >
                          <p className="leading-tight">Kitchen Remodeling</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li className="flex w-24 items-center justify-center border-b border-gray-300"></li>

                    {/* Bathroom Remodeling */}
                    <li className="flex w-full justify-center p-3 transition duration-100 ease-in-out hover:bg-slate-800 hover:text-white">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex items-center justify-center"
                          to="/bath-remodeling"
                        >
                          <p className="leading-tight">Bathroom Remodeling</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li className="flex w-24 items-center justify-center border-b border-gray-300"></li>

                    {/* Pressure Washing */}
                    <li className="flex w-full justify-center p-3 transition duration-100 ease-in-out hover:bg-slate-800 hover:text-white">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex items-center justify-center"
                          to="/pressure-washing"
                        >
                          <p className="leading-tight">Pressure Washing</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>

                    <li className="flex w-24 items-center justify-center border-b border-gray-300"></li>

                    {/* Painting */}
                    <li className="flex w-full justify-center p-3 transition duration-100 ease-in-out hover:bg-slate-800 hover:text-white">
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

                    <li className="flex w-24 items-center justify-center border-b border-gray-300"></li>

                    {/* Carpentry */}
                    <li className="flex w-full justify-center p-3 transition duration-100 ease-in-out hover:bg-slate-800 hover:text-white">
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
                  className="md:text-sm sm:text-xs bg-transparent text-white"
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
                  className="md:text-sm sm:text-xs bg-transparent text-white"
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
        className={`relative bg-black ${isMobileMenuOpen ? 'block' : 'hidden'}`}
      >
        {/* BACKGROUND IMAGE */}
        <div className="-z-1 fixed top-0 h-full w-full bg-black/60">
          <img
            src="/images/fronthouse-md.webp"
            alt="background"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="fixed top-0 flex h-full w-full flex-col bg-black/90">
          {/* Close Button */}
          <div className="flex flex-row-reverse p-4 mobile:w-full">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="flex text-4xl text-white"
            >
              &times;
            </button>
          </div>

          <div className="flex w-full flex-col items-center justify-center">
            <div className="flex w-full flex-col">
              {/* Menu Items */}
              <div className="z-10 flex w-full flex-col-reverse justify-center gap-5 px-5">
                {/* Logo and Title */}
                <div className="flex w-full items-center justify-center">
                  <a
                    href="/"
                    className="flex items-center border-[2px] border-white/80 text-white/80"
                  >
                    <div className="flex items-center gap-2 px-3 py-3 text-center">
                      <p className="mobile:text-lg">
                        ABJ Painting & Remodeling
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* MENU SECTION */}
              <nav className="z-10 flex w-full justify-center pt-10">
                <NavigationMenu className="flex">
                  <NavigationMenuList className="flex w-[20rem] flex-col gap-5">
                    {/* HOME */}
                    <NavigationMenuItem className="pl-1">
                      <NavigationMenuLink>
                        <Link
                          to="/"
                          className="text-base font-medium text-white"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          HOME
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>

                    {/* WHAT WE DO */}
                    <NavigationMenuItem className="flex px-0">
                      <NavigationMenuTrigger className="bg-transparent px-2 text-base text-white">
                        WHAT WE DO
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="flex">
                        <div className="flex justify-center border-none bg-white">
                          <ul className="flex w-[15rem] flex-col items-center justify-center bg-white text-sm">
                            {/* Kitchen Remodeling */}

                            <li className="flex w-full justify-center p-3">
                              <NavigationMenuLink asChild>
                                <Link
                                  to="/kitchen-remodeling"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  Kitchen Remodeling
                                </Link>
                              </NavigationMenuLink>
                            </li>

                            <li className="flex w-24 items-center justify-center border-b border-gray-300"></li>

                            {/* Bathroom Remodeling */}
                            <li className="flex w-full justify-center p-3">
                              <NavigationMenuLink asChild>
                                <Link
                                  to="/bath-remodeling"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  Bathroom Remodeling
                                </Link>
                              </NavigationMenuLink>
                            </li>

                            <li className="flex w-24 items-center justify-center border-b border-gray-300"></li>

                            {/* Pressure Washing */}
                            <li className="flex w-full justify-center p-3">
                              <NavigationMenuLink asChild>
                                <Link
                                  to="/pressure-washing"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  Pressure Washing
                                </Link>
                              </NavigationMenuLink>
                            </li>

                            <li className="flex w-24 items-center justify-center border-b border-gray-300"></li>

                            {/* Painting */}
                            <li className="flex w-full justify-center p-3">
                              <NavigationMenuLink asChild>
                                <Link
                                  to="/painting"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  Interior & Exterior Painting
                                </Link>
                              </NavigationMenuLink>
                            </li>

                            <li className="flex w-24 items-center justify-center border-b border-gray-300"></li>

                            {/* Carpentry */}
                            <li className="flex w-full justify-center p-3">
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

                    {/* SEE OUR WORK */}
                    <NavigationMenuItem>
                      <NavigationMenuLink>
                        <Link
                          to="/see-our-work"
                          className="text-base font-medium text-white"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          SEE OUR WORK
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>

                    {/* CONTACT */}
                    <NavigationMenuItem className="">
                      <NavigationMenuLink>
                        <Link
                          to="/contact"
                          className="text-base font-medium text-white"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          CONTACT
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    {/* END DIV */}
                  </NavigationMenuList>
                </NavigationMenu>
              </nav>

              {/* Request Appointment Button */}
              <div className="mt-10 flex w-full items-center justify-center">
                <Button
                  className="rounded-md bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-500 mobile:text-xs"
                  onClick={handleShowModal}
                >
                  <p className="flex gap-1 lg:flex-row">
                    Request An<span> Appointment</span>
                  </p>
                </Button>
              </div>

              <div className="mx-auto mt-10 flex flex-col items-center justify-center gap-2 text-sm text-white">
                <p className="max-w-xs text-center">
                  Do you need to speak with someone right away? we&apos;re happy
                  to help!
                </p>
                <div className="flex items-center gap-2">
                  {' '}
                  <p>Call us</p>
                  <a href="tel:6797795280" className="font-semibold underline">
                    (679) 779-5280
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Request Appointment Button */}
      <div className="flex tablet:hidden">
        <Button
          className="rounded-md bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-500 mobile:text-xs"
          onClick={handleShowModal}
        >
          <p className="flex gap-1 lg:flex-row">
            Request An<span> Appointment</span>
          </p>
        </Button>
      </div>
    </header>
  )
}

export default NavBar
