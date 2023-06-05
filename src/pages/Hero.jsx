import React from "react";
import boyimage from "../assets/boyimage.png";
import { useInView } from "react-intersection-observer";


const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Percentage of the element visible to trigger the callback
  });

  return (
    <div>
      <div
        className={`my-section ${inView ? "animate-fadeIn" : ""}`}
        ref={ref}>
      <div className="relative grid grid-cols-3 bg-gradient-to-r from-blue-950 from-50% via-blue-800 via-100% to-white to-90% h-[80rem] w-[100%] pt-64">
        <div className="">
          <div className="px-40">
            <div className="font-bold text-2xl text-white font-mono">
              Designer & Developer
            </div>
            <div className="font-bold text-6xl text-white font-serif pt-12">
              Riya Singh
            </div>
            <h1 className="pt-8 font-bold text-2xl text-white font-mono">
              FAILURE IS THE CONDIMENT THAT GIVES
              <span className="text-yellow-600 font-bold"> Success</span>
            </h1>
            <button className="absolute rounded-full border-4 border-black px-8 py-4 bg-yellow-500 font-bold text-white mt-6">
              CONTACT ME
            </button>
          </div>
        </div>
        <img src={boyimage} className="h-[40rem] px-20" />
        <div className="">
          <h1 className="text-5xl font-extrabold font-serif text-white">
            KNOW ME MORE
          </h1>
          <h1 className="text-xl font-extrabold font-mono text-white pt-12">
            Hi, I'M RIYA SINGH
          </h1>
          <h1 className="text-xl font-extrabold font-mono text-white pt-3 w-1/2">
            I'M DESIGNER & DEVELOPER WITH A PASSION FOR WEB DESIGNING. I ENJOY
            DEVELOPING SIMPLE CLEAN AND SLICK WEBSITE THAT PROVIDE REAL VALUE TO
            THE END USER.
          </h1>
          <button className="border-4 py-5 px-8 mt-12 bg-blue-400 font-bold">
            ABOUT ME
          </button>
        </div>
        {/* Three Cards */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-16">
          <div className="flex justify-between w-2/3">
            {/* Card 1 */}
            <div className=" bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-2xl shadow-lg p-6">
              <h1 className="text-2xl font-bold mb-4">DESIGN PRINCIPLE</h1>
              <p className="mb-4">
                Need a project completed by an expert? Let's go Access a human
                resources consultant to answer question
              </p>
              <h1 className="text-lg font-bold">Read More</h1>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg shadow-lg p-6 ml-8">
              <h1 className="text-2xl font-bold mb-4">DEVELOPMENT</h1>
              <p className="mb-4">
                Need a project completed by an expert? Let's go Access a human
                resources consultant to answer question
              </p>
              <h1 className="text-lg font-bold">Read More</h1>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg shadow-lg p-6 ml-8">
              <h1 className="text-xl font-bold mb-4">UI/UX DESIGINING</h1>
              <p className="mb-4">
                Need a project completed by an expert? Let's go Access a human
                resources consultant to answer question
              </p>
              <h1 className="text-lg font-bold">Read More</h1>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
