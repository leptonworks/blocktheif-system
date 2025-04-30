import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Lock, 
  Globe, 
  Database, 
  BarChart3, 
  Search, 
  UserPlus,
  FileText,
  Share2,
  CheckCircle2
} from "lucide-react";

function Manufacturer() {
  // Initialize AOS-like scroll animations with Framer Motion
  const [viewportEntered, setViewportEntered] = useState(false);
  
  // Animations variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const fadeInStaggered = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay }
    }
  });
  
  // Testimonial rotation
  const testimonials = [
    {
      quote: "Since implementing BlockThief, our brand reputation has improved significantly. Customers appreciate the added security and transparency, and we've seen a 94% reduction in counterfeit products in the market.",
      author: "Emily Chen",
      title: "CEO of Luxe Timepieces"
    },
    {
      quote: "BlockThief has revolutionized our supply chain. We can now track every product from manufacturing to delivery, building unprecedented trust with our customers.",
      author: "Marcus Johnson",
      title: "CTO of EcoPharm Supplements"
    },
    {
      quote: "The ROI on BlockThief has been exceptional. Not only have we eliminated counterfeits, but our customer retention increased by 28% due to the added trust factor.",
      author: "Sophia Williams",
      title: "COO of StellarTech Electronics"
    }
  ];
  
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Benefits data
  const benefits = [
    {
      icon: <Lock className="text-2xl text-violet-400" />,
      title: "Enhanced Security",
      description: "Keep your product data safe with decentralized and tamper-proof blockchain storage."
    },
    {
      icon: <Globe className="text-2xl text-violet-400" />,
      title: "Greater Transparency",
      description: "Empower customers to verify product authenticity and track its journey from production to their hands."
    },
    {
      icon: <Database className="text-2xl text-violet-400" />,
      title: "Improved Traceability",
      description: "Easily monitor and manage your entire supply chain, identifying and mitigating potential risks."
    },
    {
      icon: <ShieldCheck className="text-2xl text-violet-400" />,
      title: "Reduced Counterfeits",
      description: "Deter counterfeiters by ensuring each product has a unique, verifiable identity on the blockchain."
    }
  ];
  
  // Steps data
  const steps = [
    {
      icon: <UserPlus />,
      title: "Register",
      description: "Sign up to our platform and create your manufacturer profile with secure blockchain credentials."
    },
    {
      icon: <FileText />,
      title: "Add Products",
      description: "Enter product details and generate a unique QR code for each item, secured by blockchain technology."
    },
    {
      icon: <BarChart3 />,
      title: "Manage Products",
      description: "Update, delete, and track product analytics easily through your comprehensive dashboard."
    },
    {
      icon: <Search />,
      title: "Authenticate",
      description: "Customers can scan the QR code to verify product authenticity and leave verified reviews."
    }
  ];

  return (
    <div className="nav-spacing bg-gradient-to-br from-indigo-950 via-violet-950 to-indigo-950 min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-40 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        {/* Hexagon grid background */}
        <div className="absolute inset-0 hex-grid opacity-5"></div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/90 to-indigo-950/60 z-10"></div>
        <div 
          className="px-4 py-20 mx-auto bg-cover bg-center sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28 relative z-20"
          style={{ backgroundImage: "url('/images/hghg.jpg')" }}
        >
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 relative z-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              <motion.h2
                variants={fadeIn}
                className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-300"
              >
                Secure and Authenticate Your Products with Blockchain Technology
              </motion.h2>
              
              <motion.h3 
                variants={fadeIn}
                className="text-base text-gray-100 font-medium mb-8 md:text-lg"
              >
                Join our innovative platform to protect your brand and build customer trust
              </motion.h3>
              
              {/* Testimonial Carousel */}
              <motion.div 
                variants={fadeIn}
                className="bg-indigo-900/40 backdrop-blur-sm p-6 rounded-xl border border-violet-500/20 mb-8"
              >
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-base text-gray-100 whitespace-normal italic font-medium md:text-lg"
                >
                  <div className="flex mb-4">
                    <div className="text-violet-400 text-4xl leading-none">"</div>
                  </div>
                  <p className="mb-4">{testimonials[currentTestimonial].quote}</p>
                  <div className="flex justify-end">
                    <div>
                      <p className="text-violet-400 font-bold text-right">
                        {testimonials[currentTestimonial].author}
                      </p>
                      <p className="text-sm text-gray-300 text-right">
                        {testimonials[currentTestimonial].title}
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Testimonial Indicators */}
                <div className="flex justify-center mt-4 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full ${
                        index === currentTestimonial ? 'bg-violet-400' : 'bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="text-center">
                <motion.a
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href="/"
                  className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-200 rounded-lg shadow-lg md:w-auto bg-gradient-to-r from-violet-600 to-indigo-600 hover:shadow-violet-500/20 focus:outline-none"
                >
                  Join Now
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-4 py-16 mx-auto bg-indigo-950/70 backdrop-blur-sm sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
        >
          <h3 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-100 sm:text-4xl md:mx-auto">
            Blockchain <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-300">Benefits</span>
          </h3>
        </motion.div>
        
        <div className="grid gap-6 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInStaggered(0.1 * index)}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.1)" }}
              className="p-5 duration-300 transform bg-indigo-900/30 border-l-4 border-violet-500 rounded-lg shadow-lg overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="h-full p-4 relative">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-indigo-950/50 text-violet-400">
                  {benefit.icon}
                </div>
                <h6 className="mb-2 font-semibold leading-5 text-white text-lg">
                  {benefit.title}
                </h6>
                <p className="text-sm text-gray-300">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* How It Works Section */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
          >
            <h3 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-100 sm:text-4xl md:mx-auto">
              How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-300">Works</span>
            </h3>
          </motion.div>
          
          <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
            {/* Connecting line */}
            <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
              <div className="w-px h-full bg-violet-500/20 lg:w-full lg:h-px" />
            </div>
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInStaggered(0.1 * index)}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.1)" }}
                className="p-5 duration-300 transform bg-indigo-900/30 border border-violet-500/30 rounded-lg shadow-lg hover:border-violet-500/80 relative"
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-sm z-10">
                    {index + 1}
                  </div>
                </div>
                
                <div className="pt-2">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-indigo-950/50 text-violet-400 mx-auto">
                    {step.icon}
                  </div>
                  <p className="text-lg font-bold leading-5 text-center text-white mb-3">{step.title}</p>
                  <p className="text-sm text-gray-300 text-center">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Action Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block p-8 bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-violet-500/20"
            >
              <h4 className="text-xl font-bold text-white mb-4">Ready to secure your products?</h4>
              <p className="text-gray-300 mb-6">Join hundreds of manufacturers who trust BlockThief for product authentication</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href="/register"
                  className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-200 rounded-lg shadow-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:shadow-violet-500/20 focus:outline-none"
                >
                  Get Started
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href="/demo"
                  className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-violet-400 transition duration-200 rounded-lg shadow-lg border-2 border-violet-500/50 hover:bg-violet-500/10 focus:outline-none"
                >
                  Request Demo
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Add custom styles */}
      <style jsx>{`
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
}

export default Manufacturer;