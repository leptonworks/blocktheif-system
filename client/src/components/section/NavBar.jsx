import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import { Disclosure, Menu, Transition } from '@headlessui/react';
import Model from './Model';




import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import logo from "../../../images/logo.png";
import BlockthiefLogo from "../../../images/BlockthiefLogo.png";
import blLogo from "../../../images/blLogo.png";
import { useState } from "react";

const navigation = [
  { name: 'heroSection', href: '/', current: true },
  { name: 'qrSection', href: 'qrSection', current: false },
  { name: 'reviewSection', href: 'reviewSection', current: false },
  { name: 'manuSection', href: 'manuSection', current: false },
  { name: 'aboutUsSection', href: 'aboutUsSection', current: false },

];





const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (

    <Disclosure as="nav" className="fixed z-50 w-full bg-black">

{({ open }) => (

  <>
     <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                <div className="flex items-center flex-shrink-0">
                  {/*
                  <Image
                    className="block w-auto h-8 lg:hidden"
                    src="/assets/logo.png"
                    width={10}
                    height={10}
                    alt="Your Company"
                  />
                  <Image
                    className="hidden w-auto h-8 lg:block"
                    src="/assets/logo.png"
                    width={10}
                    height={10}
                    alt="Your Company"
                  />
                  */}
                  <p className="font-bold text-white">BLOCK THIEF</p>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden mr-5 sm:ml-6 sm:block font-family: Montserrat">
                  <div className="flex space-x-4">
                  

                  </div>
      <ul className="font-size: 0.1rem; text-white md:flex hidden list-none flex-row justify-between items-center flex-initial ">
        {["ScanQR", "Manufacturer", "Reviews", "AboutUs"].map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}
        <li className="bg-[#5038DF] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] font-family: Montserrat">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["ScanQR", "Manufacturer", "Reviews", "AboutUs"].map(
              (item, index) => (
                <NavbarItem
                  key={item + index}
                  title={item}
                  classProps="my-2 text-1g "
                />
              )
            )}
          </ul>
        )}
      </div>
            </div>  
                   </div> 





              </div>


            </div>
         


</>
)}
    </Disclosure>

  );
};

export default NavBar;