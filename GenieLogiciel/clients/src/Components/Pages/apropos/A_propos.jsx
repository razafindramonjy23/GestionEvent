import React from "react";
import { Link } from "react-router-dom";
// import bob from '../../../assets/img/bob.jpg';
// import dog from '../../../assets/img/dog.jpg';
// import anime from '../../../assets/img/anime.png';


function A_propos() {

  return (
    <>
      
      <nav
        aria-label="breadcrumb"
        className="w-full p-4 mt-20 text-gray-800 bg-gray-100"
      >
        <ol className="flex items-center justify-start h-8 space-x-2">
          <li className="flex items-center">
            <Link
              rel="noopener noreferrer"
              to="#"
              title="Back to homepage"
              className="hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 pr-1 text-gray-600"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              fill="currentColor"
              className="w-2 h-2 mt-1 text-gray-400 transform rotate-90"
            >
              <path d="M32 30.031h-32l16-28.061z"></path>
            </svg>
            <Link
              rel="noopener noreferrer"
              to="/a_propos"
              className="flex items-center px-1 capitalize hover:underline"
            >
              Parent
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              fill="currentColor"
              className="w-2 h-2 mt-1 text-gray-400 transform rotate-90"
            >
              <path d="M32 30.031h-32l16-28.061z"></path>
            </svg>
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-1 capitalize cursor-default hover:no-underline"
            >
              Current
            </a>
          </li>
        </ol>
      </nav>

      <div className="relative pt-24 pb-24 bg-white dark:bg-gray-900">
        <div className="container grid items-center grid-cols-1 gap-10 mx-auto lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="mb-5 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              Kickstart Startup Website with TailGrids
            </h1>
            <p className="max-w-lg mx-auto mb-8 text-base text-gray-700 lg:mx-0 dark:text-gray-400">
              With TailGrids, business and students thrive together. Business
              can perfectly match their staffing to changing demand throughout
              the day.
            </p>
            <div className="flex justify-center space-x-4 lg:justify-start">
              <a
                href="#"
                className="px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Get Started
              </a>
              <a
                href="#"
                className="px-5 py-3 text-base font-medium text-gray-600 hover:text-blue-600 dark:text-white"
              >
                Download App
              </a>
            </div>
            <div className="pt-8">
              <h6 className="mb-6 text-sm font-normal text-gray-600 dark:text-gray-400">
                Some Of Our Clients
              </h6>
              <div className="flex justify-center space-x-4 lg:justify-start">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
                  alt="client1"
                  className="h-8"
                />
                <img
                  src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
                  alt="client2"
                  className="h-8"
                />
                <img
                  src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
                  alt="client3"
                  className="h-8"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
              alt="hero"
              className="max-w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="container py-16 mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-500">EXPLORER NOS OPPORTUNITÉS DE CARRIÈRE</h1>

        <div className="flex flex-wrap justify-center mt-10">
          <button className="px-4 py-10 mb-4 mr-4 font-bold text-white bg-yellow-400 rounded hover:bg-blue-500">
            Customer Relationship Management
          </button>
          <button className="px-4 py-2 mb-4 mr-4 font-bold text-white bg-green-500 rounded hover:bg-green-700">
            IT Solutions
          </button>
        </div>
      </div>
    </>
  );
}

export default A_propos;
