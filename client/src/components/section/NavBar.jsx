import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../../images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const NavbarItem = ({ title, classProps }) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      <Link to={`/${title.toLowerCase()}`} className="text-white">
        {title}
      </Link>
    </li>
  );
};

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="bg-[#1E1E1E] w-full flex md:justify-center justify-between items-center p-4 fixed z-20">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Link to="/">
          <p className="font-bold text-white">BLOCK THIEF</p>
        </Link>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["ScanQR", "Manufacturer", "Reviews", "AboutUs"].map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}
        <Link to="/Login1" className="text-white">
          <li className="bg-[#5038DF] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
            Login
          </li>
        </Link>
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
            {["ScanQR", "Manufacturer", "Reviews", "AboutUs", "login"].map(
              (item, index) => (
                <NavBarItem
                  key={item + index}
                  title={item}
                  classprops="my-2 text-lg"
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
