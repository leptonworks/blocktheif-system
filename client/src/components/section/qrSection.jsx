import { useState, useEffect } from "react";
import { QrCode, Shield, Check, Scan, ChevronRight, Lock, Sparkles, Database } from "lucide-react";
import { motion } from "framer-motion";

function QrSection() {
  const [isHovering, setIsHovering] = useState(false);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  const features = [
    {
      title: "Instant Verification",
      description: "Verify product authenticity in real-time with blockchain validation",
      icon: <Scan className="w-8 h-8 text-white" />
    },
    {
      title: "Tamper-Proof Records",
      description: "All verification records are secured and immutable on the blockchain",
      icon: <Lock className="w-8 h-8 text-white" />
    },
    {
      title: "Complete Product History",
      description: "Access detailed supply chain journey and ownership transfers",
      icon: <Database className="w-8 h-8 text-white" />
    }
  ];

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const ScanButton = () => (
    <motion.button
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center px-8 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Scan className="mr-2 w-5 h-5" />
      Scan Now
      <ChevronRight className={`ml-2 w-5 h-5 transition-transform duration-300 ${isHovering ? 'translate-x-1' : ''}`} />
    </motion.button>
  );

  // Floating blockchain nodes
  const FloatingNodes = () => {
    return (
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-violet-500/30 rounded-lg"
            initial={{ 
              x: Math.random() * 100 - 50 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0.3
            }}
            animate={{ 
              x: [
                Math.random() * 100 - 50 + "%", 
                Math.random() * 100 - 50 + "%", 
                Math.random() * 100 - 50 + "%"
              ],
              y: [
                Math.random() * 100 + "%", 
                Math.random() * 100 + "%", 
                Math.random() * 100 + "%"
              ],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-indigo-950 via-violet-950 to-indigo-950 relative overflow-hidden py-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        
        {/* Blockchain grid background */}
        <div className="absolute inset-0 hex-grid"></div>
        
        {/* Floating nodes */}
        <FloatingNodes />
      </div>

      <div className="container mx-auto px-6 xl:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* QR Code visual side */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end order-2 md:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Animated glowing background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 rounded-lg blur-xl animate-pulse"></div>
              
              {/* QR Code container */}
              <div className="bg-indigo-950/50 backdrop-blur-sm border border-violet-500/30 rounded-xl p-8 relative shadow-xl">
                <div className="relative">
                  {/* Main QR Code with blockchain-themed design */}
                  <motion.div 
                    initial={{ scale: 0.9 }}
                    animate={{ scale: [0.95, 1.02, 0.95] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-64 h-64 bg-gradient-to-br from-indigo-900 to-violet-950 flex items-center justify-center rounded-lg p-4 border border-violet-600/30"
                  >
                    {/* Custom QR Code with Blockchain styling */}
                    <div className="relative w-full h-full">
                      <QrCode className="w-full h-full text-violet-400" strokeWidth={1} />
                      
                      {/* BlockThief logo in the center */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-indigo-800 rounded-lg flex items-center justify-center">
                          <Shield className="w-6 h-6 text-violet-300" />
                        </div>
                      </div>
                      
                      {/* Animated scanning effect */}
                      <div className="absolute inset-0 overflow-hidden rounded-lg">
                        <motion.div 
                          initial={{ y: -100 }}
                          animate={{ y: 300 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-400 to-transparent"
                        ></motion.div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Connection lines between blockchain nodes */}
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="absolute"
                      style={{ 
                        top: `${15 + (i * 20)}%`, 
                        left: i % 2 === 0 ? '-40px' : 'calc(100% + 20px)',
                      }}
                    >
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0.5 }}
                        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                        className="relative"
                      >
                        <div className="w-5 h-5 bg-gradient-to-r from-violet-500 to-indigo-600 rounded-md flex items-center justify-center shadow-lg shadow-violet-500/30">
                          {i % 2 === 0 ? 
                            <Lock className="w-3 h-3 text-white" /> : 
                            <Database className="w-3 h-3 text-white" />
                          }
                        </div>
                        <div className={`absolute top-1/2 ${i % 2 === 0 ? 'right-0 w-40' : 'left-0 w-20'} h-0.5 bg-gradient-to-r ${i % 2 === 0 ? 'from-violet-500/50 to-transparent' : 'from-transparent to-violet-500/50'}`}></div>
                      </motion.div>
                    </div>
                  ))}
                </div>
                
                {/* Verification badge */}
                <motion.div 
                  initial={{ scale: 0.8 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full p-3 shadow-lg shadow-violet-500/30"
                >
                  <Shield className="w-6 h-6 text-white" />
                </motion.div>
                
                {/* Verified stamp */}
                <motion.div
                  initial={{ rotate: -15, scale: 0.8 }}
                  animate={{ rotate: -10, scale: [0.8, 0.85, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -left-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-3 shadow-lg transform rotate-12"
                >
                  <div className="relative">
                    <Check className="w-5 h-5 text-white" />
                    <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-300" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Content side */}
          <div className="w-full md:w-1/2 text-center md:text-left px-4 order-1 md:order-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg p-2 mr-3 shadow-lg shadow-violet-500/20">
                  <Scan className="w-5 h-5 text-white" />
                </div>
                <span className="text-violet-400 font-bold">Verification Tool</span>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-500 tracking-tight mb-6"
            >
              Scan &amp; Verify<br />Product Authenticity
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-100 text-lg mb-6 max-w-lg"
            >
              Verify your products in seconds with our blockchain-powered solution. 
              Get instant confirmation of authenticity with military-grade security.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-indigo-950/40 backdrop-blur-sm rounded-lg p-6 mb-8 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-500"
            >
              {/* Feature carousel */}
              <div className="relative h-32">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ 
                      opacity: currentFeatureIndex === index ? 1 : 0,
                      x: currentFeatureIndex === index ? 0 : 20
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-2 bg-gradient-to-r from-violet-600 to-indigo-700 rounded-lg shadow-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-violet-400 font-bold text-xl md:text-2xl mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Feature indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeatureIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentFeatureIndex === index 
                        ? 'bg-violet-500 w-6' 
                        : 'bg-violet-500/30'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4 mb-8"
            >
              {[
                "Instant verification of product authenticity",
                "Blockchain-secured tamper-proof results",
                "Access complete product history and details"
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 5, backgroundColor: "rgba(139, 92, 246, 0.1)" }}
                  className="flex items-center bg-indigo-900/30 p-3 rounded-lg border border-violet-500/10 hover:border-violet-500/30 transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full p-1 mr-3 flex items-center justify-center shadow-sm shadow-violet-500/20">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-100">{item}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center md:justify-start"
            >
              <ScanButton />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(500%); }
        }
        
        .animate-scan {
          animation: scan 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0% { opacity: 0.3; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1.2); }
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
    </section>
  );
}

export default QrSection;