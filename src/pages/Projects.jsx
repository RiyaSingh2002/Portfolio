import React from 'react';
import logo from "../assets/logo.png"
import jobportal from "../assets/jobportal.png"

const Projects = () => {
  return (

    <section className="p-4 bg-gradient-to-r from-gray-300 via-gray-100 to-white">
        <h1 className="text-6xl font-extrabold text-center mb-8 mt-8">PROJECTS "</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <img alt="team" className="w-[80rem] h-[20rem] object-cover object-center mb-4" src={logo} />
          <h2 className="text-3xl font-bold mb-2">NOIDA SQUARE PROPERTY</h2>
          <p className="text-gray-600 mb-4 text-xl font-semibold">REAL ESTATE WEBSITE</p>
          <button type="button" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-12 py-4 mt-6 text-xl font-semibold">Click Me
</button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <img alt="team" className="w-[80rem] h-[20rem] object-cover object-center mb-4" src={jobportal} />
          <h2 className="text-3xl font-bold mb-2">NGO JOBS PORTAL</h2>
          <p className="text-gray-600 mb-4 text-xl font-semibold">JOBS PORTAL</p>
          <button type="button" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-12 py-4 mt-6 text-xl font-semibold">Click Me
</button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <img alt="team" className="w-[80rem] h-[20rem] object-cover object-center mb-4" src={logo} />
          <h2 className="text-3xl font-bold mb-2">NOIDA SQUARE PROPERTY</h2>
          <p className="text-gray-600 mb-4 text-xl font-semibold">REAL ESTATE WEBSITE</p>
          <button type="button" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-12 py-4 mt-6 text-xl font-semibold">Click Me
</button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <img alt="team" className="w-[80rem] h-[20rem] object-cover object-center mb-4" src={jobportal} />
          <h2 className="text-3xl font-bold mb-2">NGO JOBS</h2>
          <p className="text-gray-600 mb-4 text-xl font-semibold">JOBS PORTAL</p>
          <button type="button" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-12 py-4 mt-6 text-xl font-semibold">Click Me
</button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
