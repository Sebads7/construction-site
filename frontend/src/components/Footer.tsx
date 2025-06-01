'use client'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

import { SiHomebridge } from 'react-icons/si'

const NavigationMenuLinks = [
  {
    to: '/',
    label: 'Home',
  },
  {
    label: 'What We Do',
    submenu: [
      {
        to: '/kitchen-remodeling',
        label: 'Kitchen Remodeling',
      },
      {
        to: '/bath-remodeling',
        label: 'Bathroom Remodeling',
      },
      {
        to: '/pressure-washing',
        label: 'Pressure Washing',
      },
      {
        to: '/painting',
        label: 'Interior & Exterior Painting',
      },
      {
        to: '/carpentry',
        label: 'Custom Carpentry',
      },
    ],
  },
  {
    to: '/see-our-work',
    label: 'See Our Work',
  },
  {
    to: '/contact',
    label: 'Contact',
  },
]

const Footer = () => {
  const [showSubMenu, setShowSubMenu] = useState(false)

  const handleShowSubmenu = () => {
    setShowSubMenu(!showSubMenu)
  }
  return (
    <footer className="z-[2] flex flex-col bg-[#1a1920] py-10 text-sm text-slate-200 lg:px-10">
      <div className="flex h-full w-full flex-row justify-between p-5 px-28 py-5 2xl:flex-col 2xl:px-10 tablet:px-0 mobile:gap-10 mobile:text-xs">
        {/* LOGO AND SOCIAL MEDIA */}
        <div className="flow-row flex items-center justify-center px-4 tablet:flex-col">
          <a href="/" className="flex items-center justify-center p-2">
            <div className="flex border-2 text-white">
              <div className="flex items-center gap-2 px-3 py-1 text-center">
                <SiHomebridge size={40} className="fill-red-600" />
                <p className="">ABJ Painting & Remodeling</p>
              </div>
            </div>
          </a>

          <div className="ml-5 flex flex-row items-center justify-center gap-4 tablet:my-5 mobile:my-0 mobile:ml-0">
            <FaFacebook size={20} />
            <FaInstagram size={20} />
            <FaXTwitter size={20} />
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-4xl justify-between 2xl:mt-5 2xl:max-w-3xl lg:max-w-md tablet:flex-col">
          <div className="flex flex-row gap-5 lg:flex-col">
            {/* Quick Links  */}
            <div className="w-[10rem] flex-col gap-2">
              <p className="text-base font-semibold">Quick Links</p>
              <div className="flex flex-col space-y-1 text-xs">
                <ul className="space-y-1">
                  {NavigationMenuLinks.map((link, index) =>
                    link.submenu ? (
                      <li key={index} className={`cursor-pointer`}>
                        <button
                          className="font-semibold hover:text-red-600"
                          onClick={handleShowSubmenu}
                        >
                          {link.label}{' '}
                          <ChevronDown
                            className={`inline h-3 w-3 transition-all duration-300 ${showSubMenu ? 'rotate-180' : ''}`}
                          />
                        </button>
                        {showSubMenu && (
                          <ul className="ml-2">
                            {link.submenu.map((sublink, subIndex) => (
                              <li key={subIndex} className="hover:text-red-600">
                                <a
                                  href={sublink.to}
                                  className="hover:underline"
                                >
                                  {sublink.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ) : (
                      <li key={index}>
                        <a
                          href={link.to}
                          className="hover:text-red-600 hover:underline"
                        >
                          {link.label}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>

            {/* CONTACT INFO */}
            <div className="flex flex-col gap-2">
              <p className="text-base font-semibold">Business Information </p>
              <div className="space-y-1 text-xs">
                <p>
                  <strong>Call:</strong> (679) 779-5280
                </p>
                <p>
                  <strong>Email:</strong> esteban@abjremodeling.com{' '}
                </p>
                <p>
                  <strong>Located: </strong> Lawrenceville, Georgia USA
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-20 xl:gap-10 lg:flex-col">
            <div>
              <p className="text-base font-semibold">Business Hours: </p>
              <div className="text-xs">
                <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            {/* Serving Areas */}
            <div className="max-w-[18rem]">
              <p className="text-base font-semibold">Serving Areas</p>
              <div className="grid grid-cols-2 xl:grid-cols-1 xl:gap-2">
                <ul className="text-xs">
                  <li>Atlanta</li>
                  <li>Marietta</li>
                  <li>Duluth</li>
                  <li>Johns Creek</li>
                </ul>
                <ul className="text-xs">
                  <li>Lawrenceville</li>
                  <li>Alpharetta</li>
                  <li>Buford, GA</li>
                  <li>And surrounding areas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-3 tablet:max-w-xs" />
      {/* LOCATION AND DEVELOPER INFO */}
      <div className="mt-5 flex flex-col items-center justify-center gap-1 tablet:items-start">
        <p className="flex gap-1 tablet:flex-col">
          Designed and Developed by{' '}
          <a
            href="https://atlantawebs.com"
            className="pr-1 font-medium underline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Atlanta Webs"
          >
            Atlanta Webs.
          </a>
          <p>All rights reserved &copy;{new Date().getFullYear()}</p>
        </p>
      </div>
    </footer>
  )
}

export default Footer
