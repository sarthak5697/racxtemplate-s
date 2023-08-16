/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Fade from 'react-reveal/Fade';

import Button from 'elements/Button';

import BuildWebsite from 'assets/images/Startup.png';

export default function Hero() {
  return (
    <section className="hero flex flex-col items-center content-center">
      <Fade bottom>
        <div className="w-full content-center items-center lg:w-1/2 xl:pl-12 sm:pr-2 mt-8 text-center sm:text-left">
          <h1 className="text-3xl sm:text-6xl text-sub-heading-dark font-bold leading-tight mb-5">
            Grow Your Business
            <br />
            Using Smart Factory Management System
          </h1>

          <p className="font-light text-xl text-sub-heading-light leading-relaxed mb-16">
            We provide AI based solution using latest technologies
            to help you scale up your business.
          </p>

          <Button href="/discuss-project" type="link" className="mx-auto sm:mx-0 flex w-71 h-18 items-center self-center px-14 py-5 text-white text-xl bg-card-black rounded-lg shadow-2xl hover:bg-orange-color transition duration-200">
            Lets Discuss
            <svg className="ml-2 w-7 h-7 text-white animate-bounce-x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </Fade>

      <Fade bottom>
        <div className="flex pt-5 w-full justify-center items-center order-first md:w-full lg:order-last lg:w-1/2">
          <img className="" src={BuildWebsite} alt="Build Website" />
        </div>
      </Fade>
    </section>
  );
}
