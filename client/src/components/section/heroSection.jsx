import { useState, useEffect, useRef } from "react";
import { ShieldCheck, ChevronDown, ChevronUp, Lock, Database, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Input component with new theming
const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-lg p-3 outline-none bg-indigo-950/30 text-white border border-violet-500/30 text-sm focus:border-violet-400 transition-all duration-300"
  />
);

// Enhanced Typing Animation Component
const TypeAnimation = ({ texts, typingSpeed = 100, deletingSpeed = 50, delayBetween = 2000 }) => {
  const [displayText, setDisplayText] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  
  const timeoutRef = useRef(null);

  // Effect for typing animation
  useEffect(() => {
    const animateTyping = () => {
      // Current text being worked on
      const fullText = texts[activeIndex];
      
      if (isTyping) {
        // Typing mode
        if (charIndex < fullText.length) {
          // Add next character
          setDisplayText(fullText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
          timeoutRef.current = setTimeout(animateTyping, typingSpeed);
        } else {
          // Finished typing, pause before erasing
          timeoutRef.current = setTimeout(() => {
            setIsTyping(false);
          }, delayBetween);
        }
      } else {
        // Erasing mode
        if (charIndex > 0) {
          // Remove last character
          setDisplayText(fullText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
          timeoutRef.current = setTimeout(animateTyping, deletingSpeed);
        } else {
          // Finished erasing, move to next text
          setIsTyping(true);
          setActiveIndex((activeIndex + 1) % texts.length);
        }
      }
    };

    timeoutRef.current = setTimeout(animateTyping, typingSpeed);
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeIndex, charIndex, isTyping, texts, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <div className="h-24 flex items-center">
      <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-500 tracking-tight leading-tight">
        {displayText}
        <span className="inline-block w-1 h-12 ml-1 bg-violet-400 animate-pulse"></span>
      </h1>
    </div>
  );
};

// Animated background dots
const AnimatedDots = () => {
  const dots = Array(80).fill().map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 1,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 80 + 20,
    delay: Math.random() * -40,
    opacity: Math.random() * 0.5 + 0.1
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full bg-violet-500/20"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            left: dot.left,
            top: dot.top,
            opacity: dot.opacity,
            animation: `floatY ${dot.duration}s ease-in-out ${dot.delay}s infinite alternate`
          }}
        />
      ))}
    </div>
  );
};

// Custom hexagon grid
const HexagonGrid = () => {
  return (
    <div className="absolute inset-0 opacity-10">
      <div className="hex-grid"></div>
    </div>
  );
};

// Main component
const Welcome = () => {
  const [showToTopButton, setShowToTopButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const headlines = [
    "Secure Your Products With BlockThief",
    "Eliminate Counterfeit Products",
    "Build Consumer Trust With Blockchain"
  ];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollY / maxScroll) * 100;
    setScrollProgress(progress);

    if (scrollY > 100) {
      setShowToTopButton(true);
    } else {
      setShowToTopButton(false);
    }
  };

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReadMore = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Stats for companies that trust BlockThief
  const stats = [
    { label: 'Products Protected', value: '5.2M+' },
    { label: 'Companies Trust Us', value: '500+' },
    { label: 'Counterfeit Reduction', value: '98%' }
  ];

  return (
    <div className="nav-spacing bg-gradient-to-br from-indigo-950 via-violet-950 to-indigo-950 min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <AnimatedDots />
      <HexagonGrid />
      
      {/* Glowing orbs */}
      <div className="absolute -top-32 -left-40 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

      <section className="h-screen grid md:grid-cols-2 container mx-auto px-6 xl:px-8 relative z-10">
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-violet-500 to-indigo-600 rounded-lg p-2 mr-3 shadow-lg shadow-violet-500/20">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <span className="text-violet-400 font-bold text-lg">BlockThief Technology</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <TypeAnimation 
                texts={headlines} 
                typingSpeed={80} 
                deletingSpeed={40} 
                delayBetween={2000} 
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto md:mx-0 md:w-11/12 mt-6"
            >
              <h2 className="py-4 md:py-6 text-gray-100 text-lg lg:text-2xl text-center md:text-left leading-relaxed">
                Eliminate counterfeit products with our advanced
                <span className="text-violet-400 font-semibold"> blockchain-based </span>
                authentication system. Our tamper-proof solution ensures
                <span className="text-violet-400 font-semibold"> 98% </span>
                product authenticity verification.
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
                <motion.button 
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.2)" }}
                  whileTap={{ y: 0 }}
                  onClick={handleReadMore}
                  className="px-8 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-violet-500/20 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ChevronDown className="ml-2 w-5 h-5" />
                </motion.button>
                
                <motion.button 
                  whileHover={{ y: -5, backgroundColor: "rgba(139, 92, 246, 0.1)" }}
                  whileTap={{ y: 0 }}
                  className="px-8 py-3 bg-transparent border-2 border-violet-500/50 text-violet-400 font-bold rounded-lg hover:bg-violet-500/10 transition-all duration-300"
                >
                  Request Demo
                </motion.button>
              </div>
              
              {/* Stats Section */}
              <div className="mt-12 grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-violet-400 font-bold text-2xl md:text-3xl">{stat.value}</div>
                    <div className="text-gray-300 text-sm mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-4/5 aspect-square flex items-center justify-center"
          >
            {/* Glowing outer ring */}
            <div className="absolute w-full h-full rounded-full border-4 border-violet-400/20 animate-pulse"></div>
            
            {/* Inner ring with blockchain pattern */}
            <div className="absolute w-4/5 h-4/5 rounded-full border-8 border-dashed border-indigo-500/40 animate-spin-slow"></div>
            
            {/* Hexagonal shield center */}
            <div className="absolute w-3/5 h-3/5 bg-gradient-to-br from-violet-600/90 to-indigo-700/90 transform rotate-45 rounded-xl shadow-2xl flex items-center justify-center">
              <div className="transform -rotate-45">
                <ShieldCheck className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
            </div>
            
            {/* Blockchain nodes */}
            <div className="absolute w-full h-full">
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                  className="absolute"
                  style={{ 
                    top: `${50 + 40 * Math.sin(angle * Math.PI / 180)}%`,
                    left: `${50 + 40 * Math.cos(angle * Math.PI / 180)}%`,
                    transform: "translate(-50%, -50%)"
                  }}
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-purple-500/30 flex items-center justify-center">
                    {i % 3 === 0 ? <Lock className="w-4 h-4 text-white" /> : 
                     i % 3 === 1 ? <Database className="w-4 h-4 text-white" /> : 
                     <Globe className="w-4 h-4 text-white" />}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Connection lines */}
            <div className="absolute w-full h-full">
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                  className="absolute top-1/2 left-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-violet-400/40 to-transparent"
                  style={{ transform: `rotate(${angle}deg) translateX(0)` }}
                ></motion.div>
              ))}
            </div>
            
            {/* Orbiting dots */}
            <div className="absolute w-full h-full animate-spin-slow">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-violet-400 rounded-full shadow-lg shadow-violet-400/50"></div>
            </div>
            <div className="absolute w-full h-full animate-spin-slow-reverse">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-400 rounded-full shadow-lg shadow-indigo-400/50"></div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 container mx-auto px-6 xl:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            Why Choose BlockThief
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-3xl mx-auto"
          >
            Our advanced blockchain technology provides tamper-proof authentication for your products, eliminating counterfeits and building consumer trust.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <ShieldCheck className="w-12 h-12 text-violet-400" />,
              title: "Tamper-Proof Security",
              description: "Our blockchain technology ensures that product authenticity data cannot be altered or forged."
            },
            {
              icon: <Database className="w-12 h-12 text-violet-400" />,
              title: "Supply Chain Visibility",
              description: "Track your products throughout the entire supply chain with immutable blockchain records."
            },
            {
              icon: <Globe className="w-12 h-12 text-violet-400" />,
              title: "Easy Verification",
              description: "Consumers can verify product authenticity with a simple scan using their smartphone."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.1)" }}
              className="bg-indigo-950/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-violet-500/20 hover:border-violet-400/50 transition-all duration-300"
            >
              <div className="bg-indigo-900/50 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Scroll progress bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-indigo-950 bg-opacity-50 z-50">
        <div
          className="bg-gradient-to-r from-violet-500 to-indigo-500 h-1"
          style={{ width: `${scrollProgress}%`, transition: "width 0.3s" }}
        ></div>
      </div>
      
      {/* Back to top button */}
      <AnimatePresence>
        {showToTopButton && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-10 right-10 z-50"
          >
            <motion.button
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.3)" }}
              whileTap={{ y: 0 }}
              onClick={goToTop}
              title="Go to top"
              className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full w-12 h-12 flex items-center justify-center border-none text-white shadow-lg shadow-violet-500/20 focus:outline-none transition-all duration-300"
            >
              <ChevronUp className="w-6 h-6" />
            </motion.button>
            
            <div className="mt-3 bg-indigo-900 h-1 w-12 relative rounded-full">
              <div
                className="bg-gradient-to-r from-violet-400 to-indigo-500 h-1 rounded-full absolute left-0 top-0"
                style={{ width: `${scrollProgress}%`, transition: "width 0.3s" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-slow-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes floatY {
          from { transform: translateY(0); }
          to { transform: translateY(20px); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }
        
        .hex-grid {
          background-color: transparent;
          background-image: 
            linear-gradient(to right, rgba(139, 92, 246, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.05) 1px, transparent 1px);
          background-size: 30px 30px;
          mask-image: radial-gradient(circle, white 60%, transparent 90%);
        }
      `}</style>
    </div>
  );
};

export default Welcome;