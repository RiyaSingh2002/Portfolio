import React from 'react';
import gif from "../assets/gif.gif"

const ContactForm = () => {
  // Your contact form implementation here
  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-4 mb-44">
      <div className="mb-4">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mt-6">CONTACT US </h1>
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          placeholder="Enter your message"
          rows="4"
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
      <button type="button" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-12 py-4 mt-6 text-xl font-semibold">SUBMIT
</button>
      </div>
    </form>
  );
};

const TwoColumnLayout = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <img src={gif} alt="GIF" className="w-full" />
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default TwoColumnLayout;
