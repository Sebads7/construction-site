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
          aria-label="Open Menu"
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
          title="ABJ Painting & Remodeling"
          aria-label="ABJ Painting & Remodeling"
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
                <a
                  href="/"
                  className="bg-transparent text-white"
                  title="Home"
                  aria-label="Home"
                >
                  HOME
                </a>
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
                        <a
                          className="flex items-center justify-center"
                          href="/kitchen-remodeling"
                          title="Kitchen Remodeling"
                          aria-label="Kitchen Remodeling"
                        >
                          <p className="leading-tight">Kitchen Remodeling</p>
                        </a>
                      </NavigationMenuLink>
                    </li>

                    <li className="flex w-24 items-center justify-center border-b border-gray-300"></li>

                    {/* Bathroom Remodeling */}
                    <li className="flex w-full justify-center p-3 transition duration-100 ease-in-out hover:bg-slate-800 hover:text-white">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex items-center justify-center"
                          href="/bath-remodeling"
                          title="Bathroom Remodeling"
                          aria-label="Bathroom Remodeling"
                        >
                          <p className="leading-tight">Bathroom Remodeling</p>
                        </a>
                      </NavigationMenuLink>
                    </li>

                    <li className="flex w-24 items-center justify-center border-b border-gray-300"></li>

                    {/* Pressure Washing */}
                    <li className="flex w-full justify-center p-3 transition duration-100 ease-in-out hover:bg-slate-800 hover:text-white">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex items-center justify-center"
                          href="/pressure-washing"
                          title="Pressure Washing"
                          aria-label="Pressure Washing"
                        >
                          <p className="leading-tight">Pressure Washing</p>
                        </a>
                      </NavigationMenuLink>
                    </li>

                    <li className="flex w-24 items-center justify-center border-b border-gray-300"></li>

                    {/* Painting */}
                    <li className="flex w-full justify-center p-3 transition duration-100 ease-in-out hover:bg-slate-800 hover:text-white">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex items-center justify-center"
                          href="/painting"
                          title="Interior & Exterior Painting"
                          aria-label="Interior & Exterior Painting"
                        >
                          <p className="leading-tight">
                            Interior & Exterior Painting
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>

                    <li className="flex w-24 items-center justify-center border-b border-gray-300"></li>

                    {/* Carpentry */}
                    <li className="flex w-full justify-center p-3 transition duration-100 ease-in-out hover:bg-slate-800 hover:text-white">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex items-center justify-center"
                          href="/carpentry"
                          title="Custom Carpentry"
                          aria-label="Custom Carpentry"
                        >
                          <p className="leading-tight">Custom Carpentry</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="px-4 text-sm">
              <NavigationMenuLink>
                <a
                  href="/see-our-work"
                  className="md:text-sm sm:text-xs bg-transparent text-white"
                  title="See Our Work"
                  aria-label="See Our Work"
                >
                  SEE OUR WORK
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* CONTACT */}
            <NavigationMenuItem className="px-4 text-sm">
              <NavigationMenuLink>
                <a
                  href="/contact"
                  className="md:text-sm sm:text-xs bg-transparent text-white"
                  title="Contact"
                  aria-label="Contact"
                >
                  CONTACT
                </a>
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
                        <a
                          href="/"
                          className="text-base font-medium text-white"
                          onClick={() => setMobileMenuOpen(false)}
                          title="Home"
                          aria-label="Home"
                        >
                          HOME
                        </a>
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
                                <a
                                  href="/kitchen-remodeling"
                                  onClick={() => setMobileMenuOpen(false)}
                                  title="Kitchen Remodeling"
                                  aria-label="Kitchen Remodeling"
                                >
                                  Kitchen Remodeling
                                </a>
                              </NavigationMenuLink>
                            </li>

                            <li className="flex w-24 items-center justify-center border-b border-gray-300"></li>

                            {/* Bathroom Remodeling */}
                            <li className="flex w-full justify-center p-3">
                              <NavigationMenuLink asChild>
                                <a
                                  href="/bath-remodeling"
                                  onClick={() => setMobileMenuOpen(false)}
                                  title="Bathroom Remodeling"
                                  aria-label="Bathroom Remodeling"
                                >
                                  Bathroom Remodeling
                                </a>
                              </NavigationMenuLink>
                            </li>

                            <li className="flex w-24 items-center justify-center border-b border-gray-300"></li>

                            {/* Pressure Washing */}
                            <li className="flex w-full justify-center p-3">
                              <NavigationMenuLink asChild>
                                <a
                                  href="/pressure-washing"
                                  onClick={() => setMobileMenuOpen(false)}
                                  title="Pressure Washing"
                                  aria-label="Pressure Washing"
                                >
                                  Pressure Washing
                                </a>
                              </NavigationMenuLink>
                            </li>

                            <li className="flex w-24 items-center justify-center border-b border-gray-300"></li>

                            {/* Painting */}
                            <li className="flex w-full justify-center p-3">
                              <NavigationMenuLink asChild>
                                <a
                                  href="/painting"
                                  onClick={() => setMobileMenuOpen(false)}
                                  title="Interior & Exterior Painting"
                                  aria-label="Interior & Exterior Painting"
                                >
                                  Interior & Exterior Painting
                                </a>
                              </NavigationMenuLink>
                            </li>

                            <li className="flex w-24 items-center justify-center border-b border-gray-300"></li>

                            {/* Carpentry */}
                            <li className="flex w-full justify-center p-3">
                              <NavigationMenuLink asChild>
                                <a
                                  onClick={() => setMobileMenuOpen(false)}
                                  href="/carpentry"
                                  title="Custom Carpentry"
                                  aria-label="Custom Carpentry"
                                >
                                  Custom Carpentry
                                </a>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* SEE OUR WORK */}
                    <NavigationMenuItem>
                      <NavigationMenuLink>
                        <a
                          href="/see-our-work"
                          className="text-base font-medium text-white"
                          onClick={() => setMobileMenuOpen(false)}
                          title="See Our Work"
                          aria-label="See Our Work"
                        >
                          SEE OUR WORK
                        </a>
                      </NavigationMenuLink>
                    </NavigationMenuItem>

                    {/* CONTACT */}
                    <NavigationMenuItem className="">
                      <NavigationMenuLink>
                        <a
                          href="/contact"
                          className="text-base font-medium text-white"
                          onClick={() => setMobileMenuOpen(false)}
                          title="Contact"
                          aria-label="Contact"
                        >
                          CONTACT
                        </a>
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
                  <a
                    href="tel:6797795280"
                    className="font-semibold underline"
                    title="Call ABJ Painting & Remodeling"
                    aria-label="Call ABJ Painting & Remodeling"
                  >
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
