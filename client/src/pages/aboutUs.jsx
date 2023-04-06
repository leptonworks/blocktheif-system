import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function AboutUs() {
  const teamMembers = [
    {
      name: "Kavindu ",
      title: "Team Leader",
      description:
        "Jane is a technology enthusiast with a strong background in software development.",
      imgUrl: "/images/Kavindu.jpeg",
      social: {
        instagram:
          "https://instagram.com/kavindu_pramod_55?igshid=ZDdkNTZiNTM=",
        linkedin: "https://www.linkedin.com/in/kavindupramod",
        github: "http://github.com/KavinduPramod/KavinduPramod.git",
      },
    },
    {
      name: " Thakshana Samarakone",
      title: "Developer",
      description:
        "Jane is a technology enthusiast with a strong background in software development.",
      imgUrl: "/images/Thakshana.jpg",
      social: {
        instagram: "https://instagram.com/_thakshana_?igshid=ZDdkNTZiNTM=",
        linkedin: "https://www.linkedin.com/in/thakshana-samarakone-40086a214/",
        github: "https://github.com/thakshana02",
      },
    },
    {
      name: "Himasha Herath",
      title: "Developer",
      description:
        "Jane is a technology enthusiast with a strong background in software development.",
      imgUrl: "/images/Himasha.jpg",
      social: {
        instagram: "https://www.instagram.com/himasha_47__/",
        linkedin: "https://www.linkedin.com/in/himasha-herath-811218221/",
        github: "https://github.com/HimashaHerath",
      },
    },
    {
      name: "Hasini Smith",
      title: "Developer",
      description:
        "Jane is a technology enthusiast with a strong background in software development.",
      imgUrl: "/images/Hasini.jpeg",
      social: {
        instagram: "https://www.instagram.com/_hasi_hlk/",
        linkedin: "https://www.linkedin.com/in/hasini-kumarasinghe-33a953232/",
        github: "https://github.com/hasini-kumarasinghe",
      },
    },
    {
      name: " Mindiya",
      title: "Developer",
      description:
        "Jane is a technology enthusiast with a strong background in software development.",
      imgUrl: "/images/Mindiya.jpeg",
      social: {
        instagram: "https://instagram.com/mindiyamaitipe?igshid=YmMyMTA2M2Y=",
        linkedin: "https://www.linkedin.com/in/mindiya-maitipe-475581268",
        github: "https://github.com/janesmith",
      },
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5 } },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-48">
      <div className="flex flex-col">
        <div className="container max-w-7xl px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h1 className="text-gray-900 text-4xl font-bold mb-8">
                Meet the Team
              </h1>
              <p className="text-gray-700 text-lg font-light">
                With over 100 years of combined experience, we've got a
                well-seasoned team at the helm.
              </p>
            </div>
          </div>
          <motion.div
            className="flex flex-wrap"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {teamMembers.map((member, index) => (
              <div
                className={`${
                  teamMembers.length === 5 && index === 4
                    ? "w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4 mx-auto"
                    : "w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4"
                }`}
                key={index}
              >
                <motion.div className="flex flex-col" variants={itemVariants}>
                  <a href="#" className="mx-auto">
                    <img
                      className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 w-64 h-64 object-cover"
                      src={member.imgUrl}
                      alt={member.name}
                    />
                  </a>
                  <div className="text-center mt-6">
                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                      {member.name}
                    </h1>
                    <div className="text-gray-700 font-light mb-2">
                      {member.title}
                    </div>
                    <motion.div
                      className="flex justify-center space-x-4"
                      variants={iconVariants}
                    >
                      <a
                        href={member.social.instagram}
                        className="text-gray-900 hover:text-gray-500"
                      >
                        <FaInstagram size={24} />
                      </a>
                      <a
                        href={member.social.linkedin}
                        className="text-gray-900 hover:text-gray-500"
                      >
                        <FaLinkedin size={24} />
                      </a>
                      <a
                        href={member.social.github}
                        className="text-gray-900 hover:text-gray-500"
                      >
                        <FaGithub size={24} />
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
