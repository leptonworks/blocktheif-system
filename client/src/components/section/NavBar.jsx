import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, LogIn, Home, QrCode, Factory, Users } from "lucide-react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

// NavBarItem component with animations and icons
const NavBarItem = ({ title, icon, classprops, onClick, isActive }) => (
  <motion.li
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`cursor-pointer mx-4 ${classprops}`}
    onClick={onClick}
  >
    <Link 
      to={title === "Home" ? "/" : `/${title.toLowerCase().replace(/\s+/g, '')}`}
      className={`text-base font-medium transition-all duration-300 flex items-center ${
        isActive 
          ? "text-violet-400 border-b-2 border-violet-400 pb-1" 
          : "text-gray-200 hover:text-violet-300"
      }`}
    >
      {icon && <span className="mr-1.5">{icon}</span>}
      {title}
    </Link>
  </motion.li>
);

const NavBar = () => {
  const location = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Determine active menu item based on current path
  const getActiveItem = () => {
    const path = location.pathname;
    if (path === "/") return "Home";
    if (path === "/scanqr") return "ScanQR";
    if (path === "/manufacturer") return "Manufacturer";
    if (path === "/aboutus") return "AboutUs";
    return "";
  };
  
  const [activeItem, setActiveItem] = useState(getActiveItem);
  
  // Update active item when location changes
  useEffect(() => {
    setActiveItem(getActiveItem());
  }, [location]);
  
  // Add scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Handle window resize to close mobile menu on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setToggleMenu(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Menu items with icons
  const menuItems = [
    { title: "Home", icon: <Home size={16} /> },
    { title: "ScanQR", icon: <QrCode size={16} /> },
    { title: "Manufacturer", icon: <Factory size={16} /> },
    { title: "AboutUs", icon: <Users size={16} /> }
  ];
  
  // Set body overflow when mobile menu is open
  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggleMenu]);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-indigo-950/80 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 xl:px-8">
        <div className="h-20 flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
          >
            <Link to="/" className="flex items-center" onClick={() => setActiveItem("Home")}>
              <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg p-2 mr-3 shadow-md shadow-violet-500/20">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div className="text-white font-bold text-xl">
                BLOCK<span className="text-violet-400">THIEF</span>
              </div>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center">
            {menuItems.map((item, index) => (
              <NavBarItem 
                key={item.title + index} 
                title={item.title}
                icon={item.icon}
                isActive={activeItem === item.title}
                onClick={() => setActiveItem(item.title)}
              />
            ))}
          </ul>
          
          {/* Login Button */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex"
          >
            <Link to="/login">
              <button className="px-6 py-2 bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:shadow-violet-500/30 transition-all duration-300 flex items-center">
                <LogIn size={18} className="mr-1.5" />
                Login
              </button>
            </Link>
          </motion.div>
          
          {/* Mobile Navigation Icon */}
          <div className="md:hidden flex">
            {toggleMenu ? (
              <motion.div
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
              >
                <AiOutlineClose 
                  className="w-6 h-6 text-white cursor-pointer" 
                  onClick={() => setToggleMenu(false)} 
                />
              </motion.div>
            ) : (
              <motion.div
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <HiMenuAlt4 
                  className="w-6 h-6 text-white cursor-pointer" 
                  onClick={() => setToggleMenu(true)} 
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {toggleMenu && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setToggleMenu(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="absolute right-0 top-0 h-screen w-4/5 max-w-sm bg-indigo-950 p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end mb-8">
                <motion.div
                  whileTap={{ scale: 0.9 }}
                >
                  <AiOutlineClose 
                    className="w-6 h-6 text-white cursor-pointer" 
                    onClick={() => setToggleMenu(false)} 
                  />
                </motion.div>
              </div>
              
              <div className="flex justify-center mb-10">
                <Link to="/" className="flex items-center" onClick={() => {
                  setActiveItem("Home");
                  setToggleMenu(false);
                }}>
                  <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg p-2 mr-3">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-white font-bold text-xl">
                    BLOCK<span className="text-violet-400">THIEF</span>
                  </div>
                </Link>
              </div>
              
              <ul className="flex flex-col space-y-6 items-center">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.title + index}
                    whileHover={{ x: 5 }}
                    className="w-full text-center"
                  >
                    <Link 
                      to={item.title === "Home" ? "/" : `/${item.title.toLowerCase().replace(/\s+/g, '')}`}
                      className={`text-lg font-medium block py-2 px-4 rounded-lg transition-all duration-300 flex items-center ${
                        activeItem === item.title 
                          ? "text-white bg-violet-800/30 border-l-4 border-violet-400" 
                          : "text-gray-300 hover:bg-violet-900/20"
                      }`}
                      onClick={() => {
                        setActiveItem(item.title);
                        setToggleMenu(false);
                      }}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.title}
                    </Link>
                  </motion.li>
                ))}
                
                <div className="w-full pt-4 mt-4 border-t border-violet-800/30">
                  <Link 
                    to="/login"
                    onClick={() => setToggleMenu(false)}
                  >
                    <button className="w-full py-3 bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 flex items-center justify-center">
                      <LogIn size={18} className="mr-2" />
                      Login
                    </button>
                  </Link>
                </div>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Gradient bottom line */}
      <div className={`h-0.5 w-full bg-gradient-to-r from-violet-500 via-indigo-500 to-purple-500 transform transition-opacity duration-300 ${
        scrolled ? "opacity-100" : "opacity-0"
      }`} />
    </motion.nav>
  );
};

export default NavBar;