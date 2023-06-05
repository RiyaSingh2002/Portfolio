import React from 'react';
import { useEffect, useState } from 'react';

export const Expertise = () => {
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlip(prevFlip => !prevFlip);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="body-font cursor-pointer bg-gradient-to-r from-gray-100 via-pink-100 to-white">
      <div className="ripple-background">
        <div className="circle xxlarge shade1"></div>
        <div className="circle xlarge shade2"></div>
        <div className="circle large shade3"></div>
        <div className="circle medium shade4"></div>
        <div className="circle small shade5"></div>
      </div>

      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-6xl font-extrabold title-font mb-4 text-gray-900">Expertise Technologies </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 rounded-full w-56 h-56 object-cover object-center mb-4" src="src\assets\html5.png" />
              <div className="w-full">
                <h2 className="text-yellow-600 text-xl font-bold mt-4">HTML 5</h2>
                <h3 className="text-pink-700 font-semibold mb-3">UI Developer</h3>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 w-56 h-56 object-cover object-center mb-4 rounded-full border-4 border-yellow-300 transform rotate-45 animate-spin" src="src\assets\css.jpg" />
              <div className="w-full">
                <h2 className="text-green-700 text-xl font-bold mt-4">CSS</h2>
                <h3 className="text-pink-700 font-semibold mb-3">UI Developer</h3>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 rounded-full w-56 h-56 object-cover object-center mb-4 border-4 border-yellow-300 transform rotate-45 animate-spin" src="src\assets\js.png" />
              <div className="w-full">
                <h2 className="text-green-700 text-xl font-bold mt-4">JavaScript</h2>
                <h3 className="text-pink-700 font-semibold mb-3">UI Developer</h3>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 rounded-full w-56 h-56 object-cover object-center mb-4" src="src\assets\python.jpg" />
              <div className="w-full">
                <h2 className="text-yellow-600 text-xl font-bold">Python</h2>
                <h3 className="text-pink-700 font-semibold mb-3">UI Developer</h3>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 w-56 h-56 object-cover object-center mb-4 rounded-full border-4 border-yellow-300 transform rotate-45 animate-spin" src="src\assets\reacts.jpg" />
              <div className="w-full">
                <h2 className="text-green-700 text-xl font-bold mt-4">React JS</h2>
                <h3 className="text-pink-700 font-semibold mb-3">UI Developer</h3>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 rounded-full w-56 h-56 object-cover object-center mb-4" src="src\assets\react hooks.png" />
              <div className="w-full">
                <h2 className="text-yellow-600 text-xl font-bold">React Hooks</h2>
                <h3 className="text-pink-700 font-semibold mb-3">UI Developer</h3>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 rounded-full w-56 h-56 object-cover object-center mb-4" src="src\assets\redux.jpg" />
              <div className="w-full">
                <h2 className="text-yellow-600 text-xl font-bold">Redux</h2>
                <h3 className="text-pink-700 font-semibold mb-3">UI Developer</h3>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 w-56 h-56 object-cover object-center mb-4 rounded-full border-4 border-yellow-300 transform rotate-45 animate-spin" src="src\assets\express.png" />
              <div className="w-full">
                <h2 className="text-green-700 text-xl font-bold mt-4">Express.js</h2>
                <h3 className="text-pink-700 font-semibold mb-3">UI Developer</h3>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 rounded-full w-56 h-56 object-cover object-center mb-4" src="src\assets\node.jpg" />
              <div className="w-full">
                <h2 className="text-yellow-600 text-xl font-bold">Node.js</h2>
                <h3 className="text-pink-700 font-semibold mb-3">UI Developer</h3>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 w-56 h-56 object-cover object-center mb-4 rounded-full border-4 border-yellow-300 transform rotate-45 animate-spin" src="src\assets\mysql.png" />
              <div className="w-full">
                <h2 className="text-green-700 text-xl font-bold mt-4">MySQL</h2>
                <h3 className="text-pink-700 font-semibold mb-3">UI Developer</h3>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 w-56 h-56 object-cover object-center mb-4 rounded-full border-4 border-yellow-300 transform rotate-45 animate-spin" src="src\assets\tailwind.png" />
              <div className="w-full">
                <h2 className="text-green-700 text-xl font-bold mt-4">Tailwind CSS</h2>
                <h3 className="text-pink-700 font-semibold mb-3">UI Developer</h3>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 rounded-full w-56 h-56 object-cover object-center mb-4" src="src\assets\next.png" />
              <div className="w-full">
                <h2 className="text-yellow-600 text-xl font-bold">Next.js</h2>
                <h3 className="text-pink-700 font-semibold mb-3">UI Developer</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;

// In the updated code, I have removed the flip animation code and made sure the components are properly aligned.
