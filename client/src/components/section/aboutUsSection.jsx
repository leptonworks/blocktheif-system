// import React from 'react';
// import { motion } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope, faShield, faUsers, faLightbulb } from '@fortawesome/free-solid-svg-icons';

// // Assume backgroundImage is imported from your assets
// // import backgroundImage from '../../../images/145794.jpg';

// // Team data - you can replace with actual team information
// const teamMembers = [
//   {
//     name: "Alex Chen",
//     role: "Founder & CEO",
//     bio: "Blockchain expert with 10+ years in security systems",
//     image: "/api/placeholder/200/200" // Using placeholder for demo
//   },
//   {
//     name: "Sarah Johnson",
//     role: "CTO",
//     bio: "Former security architect at major tech companies",
//     image: "/api/placeholder/200/200" // Using placeholder for demo
//   },
//   {
//     name: "Michael Rodriguez",
//     role: "Head of Product",
//     bio: "Specializes in anti-counterfeiting technologies",
//     image: "/api/placeholder/200/200" // Using placeholder for demo
//   }
// ];

// // Company values
// const values = [
//   {
//     icon: faShield,
//     title: "Integrity",
//     description: "We maintain the highest standards of honesty and ethical conduct in all our operations."
//   },
//   {
//     icon: faUsers,
//     title: "Collaboration",
//     description: "We believe in the power of teamwork and partnerships to drive innovation."
//   },
//   {
//     icon: faLightbulb,
//     title: "Innovation",
//     description: "We continuously evolve our technology to stay ahead of counterfeiting threats."
//   }
// ];

// // Contact information component
// const ContactInfo = ({ icon, text, href, delay }) => (
//   <motion.a 
//     initial={{ opacity: 0, x: -20 }}
//     whileInView={{ opacity: 1, x: 0 }}
//     transition={{ duration: 0.5, delay }}
//     whileHover={{ x: 5 }}
//     href={href} 
//     target="_blank" 
//     rel="noopener noreferrer" 
//     className="text-violet-300 text-lg my-3 flex items-center group"
//   >
//     <div className="h-12 w-12 rounded-lg bg-violet-900/50 flex items-center justify-center mr-4 
//          group-hover:bg-violet-700 transition-all duration-300">
//       <FontAwesomeIcon icon={icon} className="h-6 text-violet-300" />
//     </div>
//     <span className="text-xl font-medium group-hover:text-white transition-colors duration-300">{text}</span>
//   </motion.a>
// );

// // AboutUs Button Component (replaces your imported component)
// const AboutUsButton = ({ className }) => (
//   <motion.button 
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//     className={`bg-violet-700 text-white mt-6 px-8 py-3 rounded-lg hover:bg-violet-600 
//                 shadow-lg shadow-violet-700/30 transition-all duration-300 ${className}`}
//   >
//     Learn Our Story
//   </motion.button>
// );

// function AboutUsSection() {
//   return (
//     <div className="bg-gradient-to-b from-indigo-950 via-violet-950 to-indigo-950">
//       {/* Hero Section */}
//       <section className="relative min-h-screen overflow-hidden">
//         {/* Background with overlay */}
//         <div className="absolute inset-0 z-0">
//           {/* Replace with your background image */}
//           <img 
//             src="/api/placeholder/1920/1080" 
//             alt="Background" 
//             className="w-full h-full object-cover opacity-20" 
//           />
//           {/* Gradient overlay */}
//           <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/80 via-violet-950/80 to-indigo-950/90"></div>
          
//           {/* Animated dots background */}
//           <div className="absolute inset-0">
//             {[...Array(30)].map((_, i) => (
//               <div 
//                 key={i}
//                 className="absolute bg-violet-500 rounded-full opacity-20"
//                 style={{
//                   width: `${Math.random() * 6 + 2}px`,
//                   height: `${Math.random() * 6 + 2}px`,
//                   top: `${Math.random() * 100}%`,
//                   left: `${Math.random() * 100}%`,
//                   animation: `float ${Math.random() * 10 + 10}s linear infinite alternate`
//                 }}
//               ></div>
//             ))}
//           </div>
//         </div>

//         {/* Main Content - 2 column layout */}
//         <div className="container mx-auto relative z-10 h-screen flex flex-col">
//           <div className="flex flex-col md:flex-row h-full items-center">
//             {/* Left Column - About Us */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center p-8"
//             >
//               <div className="max-w-xl">
//                 <div className="flex items-center mb-6">
//                   <div className="h-1 w-12 bg-violet-500 rounded-full mr-4"></div>
//                   <h3 className="text-violet-400 uppercase tracking-wider font-bold">Our Story</h3>
//                 </div>
                
//                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
//                   Securing the Future of Product Authentication
//                 </h1>
                
//                 <p className="text-gray-300 text-lg mb-8 leading-relaxed">
//                   At BlockThief, we're on a mission to eliminate counterfeit products through cutting-edge blockchain technology. Founded in 2023, our team of security experts and blockchain specialists developed a revolutionary system to verify product authenticity with unparalleled accuracy.
//                 </p>
                
//                 <p className="text-gray-300 text-lg mb-8 leading-relaxed">
//                   Our patented blockchain-based solution has already helped over 500 companies protect their products and build stronger trust with their customers.
//                 </p>
                
//                 <AboutUsButton />
//               </div>
//             </motion.div>
            
//             {/* Right Column - Our Values */}
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="w-full md:w-1/2 flex justify-center items-center p-8"
//             >
//               <div className="bg-indigo-950/50 backdrop-blur-md border border-violet-500/20 rounded-2xl p-8 shadow-xl w-full max-w-md">
//                 <h2 className="text-3xl font-bold mb-6 text-white">Our Values</h2>
                
//                 <div className="space-y-6">
//                   {values.map((value, index) => (
//                     <motion.div 
//                       key={index}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                       className="flex items-start"
//                     >
//                       <div className="h-12 w-12 rounded-lg bg-violet-900/50 flex items-center justify-center mr-4">
//                         <FontAwesomeIcon icon={value.icon} className="h-6 text-violet-300" />
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-bold text-violet-300 mb-2">{value.title}</h3>
//                         <p className="text-gray-300">{value.description}</p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-24 container mx-auto px-8">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
//             Meet Our Team
//           </h2>
//           <p className="text-gray-300 text-lg max-w-2xl mx-auto">
//             Our team of experts is dedicated to developing cutting-edge authentication solutions using blockchain technology.
//           </p>
//         </motion.div>
        
//         <div className="grid md:grid-cols-3 gap-8">
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -10 }}
//               className="bg-indigo-950/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-violet-500/20"
//             >
//               <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
//               <div className="p-6">
//                 <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
//                 <p className="text-violet-400 font-medium mb-4">{member.role}</p>
//                 <p className="text-gray-300">{member.bio}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-24 bg-indigo-900/30">
//         <div className="container mx-auto px-8">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <div className="flex items-center mb-6">
//                 <div className="h-1 w-12 bg-violet-500 rounded-full mr-4"></div>
//                 <h3 className="text-violet-400 uppercase tracking-wider font-bold">Get In Touch</h3>
//               </div>
              
//               <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
//                 Connect With Our Team
//               </h2>
              
//               <p className="text-gray-300 text-lg mb-12 leading-relaxed max-w-lg">
//                 Have questions about our blockchain authentication solutions? Ready to secure your products against counterfeiting? Our team is here to help you.
//               </p>
              
//               <div className="space-y-2">
//                 <ContactInfo 
//                   icon={faTwitter} 
//                   text="Follow us on Twitter" 
//                   href="https://twitter.com/leptonworks" 
//                   delay={0.2}
//                 />
//                 <ContactInfo 
//                   icon={faEnvelope} 
//                   text="Email us directly" 
//                   href="mailto:leptonworks@gmail.com" 
//                   delay={0.3}
//                 />
//                 <ContactInfo 
//                   icon={faGithub} 
//                   text="Check our GitHub" 
//                   href="https://github.com/leptonworks" 
//                   delay={0.4}
//                 />
//                 <ContactInfo 
//                   icon={faLinkedin} 
//                   text="Connect on LinkedIn" 
//                   href="#" 
//                   delay={0.5}
//                 />
//               </div>
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               viewport={{ once: true }}
//               className="bg-indigo-950/50 backdrop-blur-md rounded-2xl p-8 border border-violet-500/20 shadow-xl"
//             >
//               <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
              
//               <form className="space-y-4">
//                 <div>
//                   <input 
//                     type="text" 
//                     placeholder="Your Name" 
//                     className="w-full rounded-lg p-3 outline-none bg-indigo-950/70 text-white border border-violet-500/30 focus:border-violet-400 transition-all duration-300"
//                   />
//                 </div>
//                 <div>
//                   <input 
//                     type="email" 
//                     placeholder="Your Email" 
//                     className="w-full rounded-lg p-3 outline-none bg-indigo-950/70 text-white border border-violet-500/30 focus:border-violet-400 transition-all duration-300"
//                   />
//                 </div>
//                 <div>
//                   <textarea 
//                     rows="4" 
//                     placeholder="Your Message" 
//                     className="w-full rounded-lg p-3 outline-none bg-indigo-950/70 text-white border border-violet-500/30 focus:border-violet-400 transition-all duration-300"
//                   ></textarea>
//                 </div>
//                 <motion.button 
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-violet-500/20 transition-all duration-300"
//                 >
//                   Send Message
//                 </motion.button>
//               </form>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Animation Styles */}
//       <style jsx>{`
//         @keyframes float {
//           0% { transform: translateY(0); }
//           50% { transform: translateY(15px); }
//           100% { transform: translateY(0); }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default AboutUsSection;