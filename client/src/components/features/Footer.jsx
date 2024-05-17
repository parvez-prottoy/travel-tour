import React from "react";
import logo from "../../assets/logo2.png";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="container px-6 py-12 mx-auto">
        <div className="md:flex md:-mx-3 md:items-center md:justify-between">
          <h1 className="text-xl font-semibold tracking-tight text-white md:mx-3 xl:text-2xl">
            Subscribe our newsletter to get update.
          </h1>

          <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
            <a
              href="#"
              className="inline-flex font-semibold items-center justify-center w-full px-4 py-2 text-sm text-white duration-300 bg-info rounded-lg gap-x-3 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
            >
              <span>Sign Up Now</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>

        <hr className="my-6 border-light md:my-10 " />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <p className="font-semibold text-white">Quick Link</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-light transition-colors duration-300 hover:text-info"
              >
                Home
              </a>
              <a
                href="#"
                className="text-light transition-colors duration-300 hover:text-info"
              >
                Who We Are
              </a>
              <a
                href="#"
                className="text-light transition-colors duration-300 hover:text-info"
              >
                Our Philosophy
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Industries</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-light transition-colors duration-300 hover:text-info"
              >
                Retail & E-Commerce
              </a>
              <a
                href="#"
                className="text-light transition-colors duration-300 hover:text-info"
              >
                Information Technology
              </a>
              <a
                href="#"
                className="text-light transition-colors duration-300 hover:text-info"
              >
                Finance & Insurance
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Services</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-light transition-colors duration-300 hover:text-info"
              >
                Translation
              </a>
              <a
                href="#"
                className="text-light transition-colors duration-300 hover:text-info"
              >
                Proofreading & Editing
              </a>
              <a
                href="#"
                className="text-light transition-colors duration-300 hover:text-info"
              >
                Content Creation
              </a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Contact Us</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-light transition-colors duration-300 hover:text-info"
              >
                +880 768 473 4978
              </a>
              <a
                href="#"
                className="text-light transition-colors duration-300 hover:text-info"
              >
                info@merakiui.com
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-light md:my-10 " />

        <div className="flex flex-col items-center justify-between sm:flex-row">
          <a href="#">
            <img className="w-auto h-7" src={logo} alt="Logo" />
          </a>

          <p className="mt-4 text-sm text-light sm:mt-0 ">
            © Copyright 2021. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
