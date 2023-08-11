/* eslint-disable react/jsx-indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Fade from 'react-reveal/Fade';

export default function Timeline() {
  return (
    <div className="w-full flex justify-center items-center ">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-9 ">
        
        {/* Stack 1 */}
        <div className="col-span-12 w-full h-full sm:col-span-4 p-5 sm:p-0 text-center">
          <Fade bottom>
            <div className="w-full h-full bg-card-black rounded-2xl p-4 pb-10 pr-10 md:pl-4">
              <h1 className="text-orange-text text-2xl font-light-bold py-2">
                Worried the software cant manage the ever evolving needs in your
                factory ?
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs">
                Elevate your manufacturing journey with adaptable processes.
                Tailor every aspect of the factory operations effortlessly.
                Embrace the deep understanding of your operations and shape the
                software accordingly.
              </p>
            </div>
          </Fade>
        </div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center hidden sm:flex">
          <div className="h-full w-1 bg-orange-color"></div> 
          <div className="absolute w-6 h-6 rounded-full bg-card-black z-10 text-white text-center">
            1
          </div>
        </div>

        <div className="col-span-4 w-full h-full"></div>

        {/* Stack 2 */}
        <div className="col-span-4 w-full h-full"></div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center hidden sm:flex">
          <div className="h-full w-1 bg-orange-color"></div>
          <div className="absolute w-6 h-6 rounded-full bg-card-black z-10 text-white text-center">
            2
          </div>
        </div>

        <div className="col-span-12 w-full h-full sm:col-span-4 p-5 sm:p-0 text-center">
          <Fade bottom>
            <div className="w-full h-full bg-card-black rounded-2xl p-4 pb-10 pr-10 md:pl-4">
              <h1 className="text-orange-text text-2xl font-light-bold py-2">
                Cant track progress in your factory ?
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs">
                A central hub offering real-time visualizations and instant
                notifications. Stay informed about production progress and seize
                opportunities to optimize operations, all from a single, dynamic
                dashboard.
              </p>
            </div>
          </Fade>
        </div>
        {/* Stack 3 */}
        <div className="col-span-12 w-full h-full sm:col-span-4 p-5 sm:p-0 text-center">
          <Fade>
            <div className="w-full h-full bg-card-black rounded-2xl p-4 pb-10 pr-10 md:pl-4">
              <h1 className="text-orange-text text-2xl font-light-bold py-2">
                Afraid of complex softwares?
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs">
                With us you can easily integrate existing factory softwares like
                tally with our simple to use and best in class software
                feautures from us / manage every aspect from single dashboard
                without juggling between multiple softwares
              </p>
            </div>
          </Fade>
        </div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center hidden sm:flex">
          <div className="h-full w-1 bg-orange-color"></div>
          <div className="absolute w-6 h-6 rounded-full bg-card-black z-10 text-white text-center">
            3
          </div>
        </div>

        <div className="col-span-4 w-full h-full"></div>
      </div>
    </div>
  );
}
