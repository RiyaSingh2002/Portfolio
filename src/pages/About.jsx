import React from "react";
import Riya from "../assets/Riya.png";
import linkdin from "../assets/linkdin.png";
import whatsap from "../assets/whatsap.png";
import phone from "../assets/phone.png";
import email from "../assets/email.png";
import git from "../assets/git.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const SectionOne = () => {
  return (
    <section className="bg-gradient-to-r from-white to-purple-100 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl text-gray-900 text-center font-bold mb-16">
          KNOW MORE ABOUT ME
        </h2>
        <p className="text-lg px-4 md:px-12 py-12 text-center mb-8 text-black font-semibold font-mono">
          Hi, I'm a frontend developer passionate about creating beautiful and
          intuitive user interfaces. I have experience in HTML, CSS, JavaScript,
          and modern frameworks like React.js. With a strong attention to detail
          and a creative mindset, I strive to deliver high-quality websites and
          web applications that provide a great user experience.
        </p>
      </div>
    </section>
  );
};

const SectionTwo = () => {
  const phoneNumber = "7669011788";
  const emailAddress = "riyasingh.ca@gmail.com";
  return (
    <div className="bg-gray-200 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center md:justify-start space-x-4 cursor-pointer transition-transform duration-300 transform hover:-rotate-6">
          <img className="h-auto w-64 md:w-96 rounded-full" src={Riya} alt="Profile" />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center md:items-start space-y-4 cursor-pointer transition-transform duration-300 transform hover:-rotate-6">
          <div className="text-center md:text-left">
            <p className="font-bold text-4xl md:text-5xl px-4 md:px-8">RIYA SINGH</p>
            <p className="text-gray-500 font-bold text-xl md:text-2xl px-4 md:px-8 mt-2 md:mt-4">MERN STACK DEVELOPER</p>
            <div className="flex flex-wrap justify-center md:justify-start px-4 md:px-8 mt-4 md:mt-6 gap-4">
              <a href="https://www.linkedin.com/in/riya-singh-7490ab269/">
                <img
                  className="h-12 w-12 md:h-16 md:w-16 rounded-full"
                  src={linkdin}
                  alt="Profile"
                />
              </a>
              <a href="https://github.com/RiyaSingh2002">
                <img
                  className="h-12 w-12 md:h-16 md:w-16 rounded-full"
                  src={git}
                  alt="Profile"
                />
              </a>
              <a href={`tel:${phoneNumber}`} className="text-blue-500">
                <img
                  className="h-12 w-12 md:h-16 md:w-16 rounded-full"
                  src={phone}
                  alt="Profile"
                />
              </a>
              <a href="https://web.whatsapp.com/">
                <img
                  className="h-12 w-12 md:h-16 md:w-16 rounded-full"
                  src={whatsap}
                  alt="Profile"
                />
              </a>
              <a href={`mailto:${emailAddress}`}>
                <img
                  className="h-12 w-12 md:h-16 md:w-16 rounded-full"
                  src={email}
                  alt="Profile"
                />
              </a>
            </div>
            <button type="button" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-4 md:px-12 py-4 md:py-6 mt-8 md:mt-12 w-full md:w-[26rem] text-lg md:text-xl font-semibold">
              Use the icons above to <br />
              <span className="text-red-600 text-2xl md:text-3xl font-bold">"KNOW MORE"</span>
              .
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SectionOne />
        <SectionTwo />
      </div>
    </div>
  );
};

export default App;
