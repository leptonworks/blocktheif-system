// Footer Component
import React from "react";
import { motion } from "framer-motion";
import { 
  ChevronUp, 
  Mail, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Shield, 
  ExternalLink,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    { name: "ScanQR", route: "/ScanQR" },
    { name: "Manufacturer", route: "/Manufacturer" },
    // { name: "Reviews", route: "/Reviews" },
    { name: "About Us", route: "/AboutUs" }
  ];

  const resources = [
    { name: "Documentation", route: "/docs" },
    { name: "API Reference", route: "/api" },
    { name: "Case Studies", route: "/cases" },
    { name: "Developer Guide", route: "/guide" }
  ];

  const featureChildVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-indigo-950 to-violet-950 text-white pt-20 pb-8">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hexagon grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="hex-grid"></div>
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Logo and Description */}
          <motion.div 
            variants={featureChildVariants} 
            className="flex flex-col"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-violet-500 to-indigo-600 rounded-lg p-2 mr-3 shadow-lg shadow-violet-500/20">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">
                <span className="text-violet-400">BLOCK</span>
                <span className="text-indigo-300">THIEF</span>
              </h2>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Discover the unmatched potential of security and authenticity with
              our blockchain-based product verification system. Protecting over 5 million products worldwide.
            </p>
            <div className="flex space-x-4 mt-2">
              <motion.a 
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://twitter.com/BlockThief2022"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-indigo-900/60 hover:bg-violet-600 flex items-center justify-center transition-colors duration-300"
              >
                <Twitter size={18} className="text-white" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-10 h-10 rounded-full bg-indigo-900/60 hover:bg-violet-600 flex items-center justify-center transition-colors duration-300"
              >
                <Instagram size={18} className="text-white" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-10 h-10 rounded-full bg-indigo-900/60 hover:bg-violet-600 flex items-center justify-center transition-colors duration-300"
              >
                <Linkedin size={18} className="text-white" />
              </motion.a>
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div 
            variants={featureChildVariants} 
            transition={{ delay: 0.1 }}
            className="flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-6 text-indigo-300">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    to={link.route} 
                    className="text-gray-300 hover:text-violet-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mr-2.5"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Resources */}
          <motion.div 
            variants={featureChildVariants} 
            transition={{ delay: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-6 text-indigo-300">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    to={resource.route} 
                    className="text-gray-300 hover:text-violet-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mr-2.5"></span>
                    {resource.name}
                    <ExternalLink size={12} className="ml-1.5 opacity-70" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Contact & Back to top */}
          <motion.div 
            variants={featureChildVariants} 
            transition={{ delay: 0.3 }}
            className="flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-6 text-indigo-300">Contact</h3>
            
            <motion.a 
              whileHover={{ x: 5 }}
              href="mailto:leptonworks@gmail.com"
              className="flex items-center text-gray-300 hover:text-violet-400 transition-colors duration-300 mb-4"
            >
              <Mail size={18} className="mr-3 text-violet-400" />
              leptonworks@gmail.com
            </motion.a>
            
            <motion.a 
              whileHover={{ x: 5 }}
              href="https://twitter.com/BlockThief2022"
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center text-gray-300 hover:text-violet-400 transition-colors duration-300 mb-6"
            >
              <Twitter size={18} className="mr-3 text-violet-400" />
              @BlockThief2022
            </motion.a>
            
            <div className="flex items-center space-x-2 text-gray-300 mb-4">
              <Clock size={18} className="text-violet-400" />
              <span>Mon-Fri: 9AM - 6PM (EST)</span>
            </div>

            <div className="mt-auto pt-4 flex justify-between items-end">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} BlockThief. All rights reserved.
              </p>
              
              <motion.button 
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3)" }}
                whileTap={{ y: 0 }}
                onClick={goToTop}
                className="w-10 h-10 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
              >
                <ChevronUp size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom footer with additional links */}
        <div className="mt-16 pt-8 border-t border-indigo-800/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3 mb-4 md:mb-0">
              <a href="#" className="text-sm text-gray-400 hover:text-violet-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-violet-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-sm text-gray-400 hover:text-violet-400 transition-colors duration-300">Cookie Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-violet-400 transition-colors duration-300">Sitemap</a>
            </div>
            
            <div className="text-sm text-gray-500">
              Built with ❤️ for a secure future
            </div>
          </div>
        </div>
      </motion.div>

      {/* Custom styles */}
      <style jsx>{`
        .hex-grid {
          background-color: transparent;
          background-image: 
            linear-gradient(to right, rgba(139, 92, 246, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.05) 1px, transparent 1px);
          background-size: 30px 30px;
          mask-image: radial-gradient(circle, white 50%, transparent 80%);
        }
      `}</style>
    </footer>
  );
};

export default Footer;