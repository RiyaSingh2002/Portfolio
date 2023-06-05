import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white">
      <div className="container mx-8 py-4 px-6">
        <nav className="flex flex-wrap justify-center">
          <a href="#" className="mx-3 my-1 hover:text-gray-300">Link 1</a>
          <a href="#" className="mx-3 my-1 hover:text-gray-300">Link 2</a>
          <a href="#" className="mx-3 my-1 hover:text-gray-300">Link 3</a>
          <a href="#" className="mx-3 my-1 hover:text-gray-300">Link 4</a>
          <a href="#" className="mx-3 my-1 hover:text-gray-300">Link 5</a>
          <a href="#" className="mx-3 my-1 hover:text-gray-300">Link 6</a>
          <a href="#" className="mx-3 my-1 hover:text-gray-300">Link 7</a>

        </nav>
      </div>
    </footer>
  );
}

export default Footer;
