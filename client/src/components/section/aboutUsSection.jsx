import React from 'react';
import AboutUs from '../buttons/aboutUs';
import backgroundImage from '../../../images/145794.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import 'animate.css/animate.min.css';

function AboutUsSection() {
  return (
    <section className="min-h-screen grid md:grid-cols-2">
      <div className="relative flex flex-col items-center justify-center">
        <img src={backgroundImage} alt="" className="absolute w-full h-full object-cover" />
        <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
        <div className="relative z-10 animate__animated animate__fadeIn">
          <h1 className="text-3xl sm:text-5xl text-emerald-400 font-bold text-gradient py-1 ">
            About Us
          </h1>
          <AboutUs className="bg-gray-800 text-white mt-6 px-8 py-2 rounded-full hover:bg-gray-700"/>
        </div>
      </div>
      <div className="col-span-1 w-full h-full text-center bg-gray-800 md:py-32 flex items-center justify-center">
        <div className="flex w-full justify-center items-center animate__animated animate__fadeInRight">
          <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
            <div className="flex-1 flex-col md:mr-10">
              <h1 className="text-3xl sm:text-5xl text-cyan-300 font-bold text-gradient py-1 text-lime-400">
                Contact Us
              </h1>
              <div className="flex flex-col items-center justify-left flex-wrap">
                <a href="https://twitter.com/leptonworks" target="_blank" rel="noopener noreferrer" className="text-teal-400 text-lg mt-5 flex items-center">
                  <FontAwesomeIcon icon={faTwitter} className="h-8 mr-3" />
                  <span className="text-xl font-medium">Our Twitter</span>
                </a>
                <a href="mailto:leptonworks@gmail.com" className="text-teal-400 text-lg mt-3 flex items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="h-8 mr-3" />
                  <span className="text-xl font-medium">Our Email</span>
                </a>
                <a href="https://github.com/leptonworks" target="_blank" rel="noopener noreferrer" className="text-teal-400 text-lg mt-3 flex items-center">
                  <FontAwesomeIcon icon={faGithub} className="h-8 mr-3" />
                  <span className="text-xl font-medium">Our GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
