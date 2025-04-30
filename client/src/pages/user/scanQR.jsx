import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { QrCode, Scan, Shield, CheckCircle, XCircle } from "lucide-react";

// Animated QR Code SVG Component
const AnimatedQRCode = () => {
  const [scanning, setScanning] = useState(false);
  const [verified, setVerified] = useState(false);
  
  // Toggle scanning animation for demo purposes
  useEffect(() => {
    if (scanning) {
      const timer = setTimeout(() => {
        setScanning(false);
        setVerified(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [scanning]);

  // Reset verification status after showing result
  useEffect(() => {
    if (verified) {
      const timer = setTimeout(() => {
        setVerified(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [verified]);

  // Handle demo scan start
  const handleScanStart = () => {
    if (!scanning && !verified) {
      setScanning(true);
    }
  };

  // QR Code frame animation variants
  const frameVariants = {
    idle: { 
      stroke: "#8b5cf6",
      strokeWidth: 2,
      pathLength: 1
    },
    scanning: {
      stroke: "#8b5cf6",
      strokeWidth: 3,
      pathLength: [1, 0, 1],
      transition: {
        pathLength: { 
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }
      }
    },
    verified: {
      stroke: "#10b981",
      strokeWidth: 3,
      pathLength: 1
    }
  };
  
  // Scanner line animation variants
  const scannerVariants = {
    idle: { 
      y: 0,
      opacity: 0 
    },
    scanning: {
      y: [0, 180, 0],
      opacity: 1,
      transition: {
        y: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <motion.div 
      className="relative bg-indigo-950 p-8 rounded-3xl shadow-2xl border border-violet-500/30 flex items-center justify-center"
      initial={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      onClick={handleScanStart}
    >
      <svg 
        width="220" 
        height="220" 
        viewBox="0 0 220 220" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
      >
        {/* QR Code Pattern */}
        <g>
          {/* Position Detection Patterns (corners) */}
          {/* Top Left */}
          <rect x="20" y="20" width="40" height="40" fill="#8b5cf6" />
          <rect x="25" y="25" width="30" height="30" fill="#1e1b4b" />
          <rect x="30" y="30" width="20" height="20" fill="#8b5cf6" />
          
          {/* Top Right */}
          <rect x="160" y="20" width="40" height="40" fill="#8b5cf6" />
          <rect x="165" y="25" width="30" height="30" fill="#1e1b4b" />
          <rect x="170" y="30" width="20" height="20" fill="#8b5cf6" />
          
          {/* Bottom Left */}
          <rect x="20" y="160" width="40" height="40" fill="#8b5cf6" />
          <rect x="25" y="165" width="30" height="30" fill="#1e1b4b" />
          <rect x="30" y="170" width="20" height="20" fill="#8b5cf6" />
          
          {/* Alignment Pattern (not in real corner) */}
          <rect x="140" y="140" width="25" height="25" fill="#8b5cf6" />
          <rect x="145" y="145" width="15" height="15" fill="#1e1b4b" />
          <rect x="150" y="150" width="5" height="5" fill="#8b5cf6" />
          
          {/* QR Code Data Pattern - Stylized for visual appeal */}
          {[
            [70, 20, 10, 10], [90, 20, 10, 10], [110, 20, 10, 10], [130, 20, 10, 10],
            [70, 40, 10, 10], [90, 40, 10, 10], [110, 40, 10, 10], [130, 40, 10, 10],
            [20, 70, 10, 10], [40, 70, 10, 10], [80, 70, 10, 10], [100, 70, 10, 10], [160, 70, 10, 10], [180, 70, 10, 10],
            [20, 90, 10, 10], [60, 90, 10, 10], [120, 90, 10, 10], [140, 90, 10, 10], [170, 90, 10, 10],
            [40, 110, 10, 10], [60, 110, 10, 10], [100, 110, 10, 10], [150, 110, 10, 10], [180, 110, 10, 10],
            [20, 130, 10, 10], [50, 130, 10, 10], [80, 130, 10, 10], [110, 130, 10, 10], [160, 130, 10, 10],
            [70, 160, 10, 10], [90, 160, 10, 10], [110, 160, 10, 10], [130, 160, 10, 10],
            [70, 180, 10, 10], [90, 180, 10, 10], [110, 180, 10, 10], [150, 180, 10, 10],
          ].map(([x, y, w, h], index) => (
            <rect key={index} x={x} y={y} width={w} height={h} fill="#8b5cf6" />
          ))}

          {/* Timing Patterns (lines of alternating squares) */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
            <rect key={`th-${i}`} x={20 + i*10} y={70} width={6} height={6} fill={i % 2 === 0 ? "#8b5cf6" : "#1e1b4b"} />
          ))}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
            <rect key={`tv-${i}`} x={70} y={20 + i*10} width={6} height={6} fill={i % 2 === 0 ? "#8b5cf6" : "#1e1b4b"} />
          ))}
        </g>
        
        {/* Scanner Line */}
        <motion.line 
          x1="20" 
          y1="110" 
          x2="200" 
          y2="110" 
          stroke="#a78bfa" 
          strokeWidth="3" 
          strokeLinecap="round"
          initial="idle"
          animate={scanning ? "scanning" : "idle"}
          variants={scannerVariants}
          style={{ filter: "drop-shadow(0 0 8px rgba(167, 139, 250, 0.8))" }}
        />
        
        {/* Scan Frame */}
        <motion.rect 
          x="10" 
          y="10" 
          width="200" 
          height="200" 
          rx="12" 
          fill="none" 
          initial="idle"
          animate={scanning ? "scanning" : verified ? "verified" : "idle"}
          variants={frameVariants}
          style={{ filter: "drop-shadow(0 0 8px rgba(139, 92, 246, 0.5))" }}
        />
        
        {/* QR Code Corners - Decorative */}
        <path d="M10 40 L10 22 Q10 10 22 10 L40 10" stroke="#a78bfa" strokeWidth="4" fill="none" />
        <path d="M180 10 L198 10 Q210 10 210 22 L210 40" stroke="#a78bfa" strokeWidth="4" fill="none" />
        <path d="M210 180 L210 198 Q210 210 198 210 L180 210" stroke="#a78bfa" strokeWidth="4" fill="none" />
        <path d="M40 210 L22 210 Q10 210 10 198 L10 180" stroke="#a78bfa" strokeWidth="4" fill="none" />
      </svg>

      {/* Verification Result Indicator */}
      <motion.div 
        className={`absolute inset-0 flex items-center justify-center ${verified ? "visible" : "invisible"}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={verified ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-indigo-950/80 backdrop-blur-sm w-full h-full rounded-3xl flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={verified ? { scale: 1 } : { scale: 0 }}
            transition={{ type: "spring", damping: 10, stiffness: 100 }}
          >
            <CheckCircle className="w-20 h-20 text-green-500" strokeWidth={1.5} />
          </motion.div>
          <p className="text-white text-xl font-bold mt-4">Product Verified</p>
          <p className="text-violet-300 text-sm mt-1">Original BlockThief Protected Item</p>
        </div>
      </motion.div>

      {/* Scan CTA Hint - Only shown when not scanning/verified */}
      <motion.div 
        className="absolute bottom-6 flex items-center text-violet-300 text-sm"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: scanning || verified ? 0 : [0.7, 1, 0.7], y: scanning || verified ? 10 : 0 }}
        transition={{ opacity: { repeat: Infinity, duration: 1.5 }, y: { duration: 0.3 } }}
      >
        <Scan className="w-4 h-4 mr-2" /> Tap to scan
      </motion.div>
    </motion.div>
  );
};

function ScanQR() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-violet-950 to-indigo-950 flex items-center justify-center p-6">
      <motion.div 
        className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* QR SVG Animation */}
        <motion.div 
          className="flex justify-center"
          variants={itemVariants}
        >
          <AnimatedQRCode />
        </motion.div>

        {/* Text Content */}
        <div className="text-white space-y-6">
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl font-bold flex items-center">
              <QrCode className="text-violet-400 mr-3" size={50} />
              Scan Your QR
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <Shield className="w-6 h-6 text-violet-400" />
              </div>
              <p className="text-gray-200 text-lg leading-relaxed">
                Authenticate your product effortlessly! Scan the QR code to verify whether it's genuine or counterfeit. 
                Enjoy peace of mind with our easy and secure system.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <Scan className="w-6 h-6 text-violet-400" />
              </div>
              <p className="text-gray-300 text-md leading-relaxed">
                Simply point your camera at the QR code and let our system validate it for you. Say goodbye to counterfeits and shop confidently with our quick and trusted verification service.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <motion.a
                href="/registration1"
                className="inline-flex items-center justify-center gap-2 font-semibold tracking-wide text-white bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 rounded-full shadow-lg"
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.3)" }}
                whileTap={{ y: 0 }}
              >
                Join Now
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.293 5.293a1 1 0 011.414 0L18 9.586a1 1 0 010 1.414l-4.293 4.293a1 1 0 01-1.414-1.414L15.586 11H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 010-1.414z" />
                </svg>
              </motion.a>
              
              <motion.a
                href="#how-it-works" 
                className="inline-flex items-center justify-center gap-2 font-semibold tracking-wide text-violet-400 bg-transparent border-2 border-violet-500/50 px-6 py-3 rounded-full"
                whileHover={{ y: -5, backgroundColor: "rgba(139, 92, 246, 0.1)" }}
                whileTap={{ y: 0 }}
              >
                How It Works
              </motion.a>
            </div>
          </motion.div>
          
          {/* Features */}
          <motion.div variants={itemVariants} className="pt-6">
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Instant Verification", desc: "Results in seconds" },
                { title: "Blockchain Secured", desc: "Tamper-proof data" },
                { title: "No App Required", desc: "Works with any camera" },
                { title: "100% Reliable", desc: "Accurate results always" }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">{feature.title}</p>
                    <p className="text-violet-200/70 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing orbs */}
        <div className="absolute -top-32 -left-40 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}

export default ScanQR;