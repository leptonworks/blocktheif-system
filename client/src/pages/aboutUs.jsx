import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { Users, Shield, Zap, Trophy, Briefcase } from "lucide-react";

function AboutUs() {
  // Updated team member info with proper descriptions
  const teamMembers = [
    {
      name: "Kavindu Pramod",
      title: "Team Leader",
      description:
        "Kavindu leads our team with expertise in blockchain technology and security protocols. He oversees the strategic direction of BlockThief's development.",
      imgUrl: "/images/Kavindu.jpeg",
      social: {
        instagram: "https://instagram.com/kavindu_pramod_55",
        linkedin: "https://www.linkedin.com/in/kavindupramod",
        github: "http://github.com/KavinduPramod",
      },
    },
    {
      name: "Thakshana Samarakone",
      title: "Blockchain Developer",
      description:
        "Thakshana specializes in smart contract development and blockchain architecture, ensuring our platform remains secure and scalable.",
      imgUrl: "/images/Thakshana.jpg",
      social: {
        instagram: "https://instagram.com/_thakshana_",
        linkedin: "https://www.linkedin.com/in/thakshana-samarakone-40086a214/",
        github: "https://github.com/thakshana02",
      },
    },
    {
      name: "Himasha Herath",
      title: "Frontend Developer",
      description:
        "Himasha crafts our intuitive user interfaces with a focus on accessibility and user experience, bringing BlockThief's complex technology to life.",
      imgUrl: "/images/Himasha.jpg",
      social: {
        instagram: "https://www.instagram.com/himasha_47__/",
        linkedin: "https://www.linkedin.com/in/himasha-herath-811218221/",
        github: "https://github.com/HimashaHerath",
      },
    },
    {
      name: "Hasini Kumarasinghe",
      title: "Backend Developer",
      description:
        "Hasini architects our robust backend systems, focusing on API development and database optimization for maximum performance and reliability.",
      imgUrl: "/images/Hasini.jpeg",
      social: {
        instagram: "https://www.instagram.com/_hasi_hlk/",
        linkedin: "https://www.linkedin.com/in/hasini-kumarasinghe-33a953232/",
        github: "https://github.com/hasini-kumarasinghe",
      },
    },
    {
      name: "Mindiya Maitipe",
      title: "Security Specialist",
      description:
        "Mindiya ensures our blockchain implementations meet the highest security standards, conducting audits and implementing cutting-edge security measures.",
      imgUrl: "/images/Mindiya.jpeg",
      social: {
        instagram: "https://instagram.com/mindiyamaitipe",
        linkedin: "https://www.linkedin.com/in/mindiya-maitipe-475581268",
        github: "https://github.com/mindiyamaitipe",
      },
    },
  ];

  // Company stats
  const stats = [
    { icon: <Trophy size={24} />, value: "5+", label: "Years Experience" },
    { icon: <Shield size={24} />, value: "500+", label: "Companies Protected" },
    { icon: <Zap size={24} />, value: "98%", label: "Counterfeit Reduction" },
    { icon: <Briefcase size={24} />, value: "30+", label: "Countries Served" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <div className="bg-gradient-to-br from-indigo-950 via-violet-950 to-indigo-950 min-h-screen py-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -left-40 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="hex-grid absolute inset-0 opacity-10 pointer-events-none"></div>

      {/* Main content container */}
      <div className="container mx-auto px-6 xl:px-8 relative z-10">
        {/* Header section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center justify-center mb-6">
            <div className="bg-violet-500/20 rounded-lg py-1 px-4 border border-violet-500/30">
              <span className="text-violet-400 text-sm font-medium">Our Team</span>
            </div>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">BlockThief</span> Team
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-300 text-lg">
            Our diverse team of blockchain experts, security specialists, and developers work together 
            to create cutting-edge solutions that protect your products and your brand.
          </motion.p>
        </motion.div>

        {/* Stats section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-indigo-900/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6 text-center"
            >
              <motion.div 
                variants={iconVariants}
                className="mx-auto w-12 h-12 bg-violet-500/20 rounded-full flex items-center justify-center mb-3 text-violet-400"
              >
                {stat.icon}
              </motion.div>
              <h3 className="text-white text-2xl md:text-3xl font-bold">{stat.value}</h3>
              <p className="text-gray-300 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team members grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-indigo-900/30 backdrop-blur-sm border border-violet-500/20 rounded-xl overflow-hidden"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-transparent to-transparent z-10"></div>
                <img 
                  src={member.imgUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-white text-xl font-bold">{member.name}</h3>
                  <p className="text-violet-300 text-sm">{member.title}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-6">{member.description}</p>
                
                <div className="flex space-x-4">
                  <motion.a 
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, color: "#ffffff" }}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <FaGithub size={20} />
                  </motion.a>
                  <motion.a 
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, color: "#0077b5" }}
                    className="text-gray-400 hover:text-[#0077b5] transition-colors duration-300"
                  >
                    <FaLinkedin size={20} />
                  </motion.a>
                  <motion.a 
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, color: "#E1306C" }}
                    className="text-gray-400 hover:text-[#E1306C] transition-colors duration-300"
                  >
                    <FaInstagram size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission statement */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-violet-500/10 to-indigo-500/10 backdrop-blur-sm border border-violet-500/20 rounded-xl p-8 md:p-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.div variants={itemVariants} className="inline-flex items-center justify-center mb-6">
              <div className="bg-violet-500/20 rounded-lg py-1 px-4 border border-violet-500/30 flex items-center">
                <Shield size={14} className="text-violet-400 mr-2" />
                <span className="text-violet-400 text-sm font-medium">Our Mission</span>
              </div>
            </motion.div>
            
            <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-white mb-6">
              Building a World Without Counterfeits
            </motion.h3>
            
            <motion.p variants={itemVariants} className="text-gray-300 text-lg mb-4">
              At BlockThief, we're committed to creating a marketplace where consumers can trust 
              the authenticity of every product, and brands can protect their reputation and revenue.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-gray-300 text-lg">
              Our blockchain technology provides an unbreakable chain of trust from manufacturer 
              to consumer, making product counterfeiting a thing of the past.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Custom hexagon grid background */}
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

export default AboutUs;