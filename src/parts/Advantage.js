/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Fade from 'react-reveal/Fade';

export default function Advantage({ data }) {
  return (
    <div className="bg-white py-20 mb-24 sm:mb-18 xl:mb-16">
      <div className="container mx-auto">
        <Fade bottom>
          <h1 className="text-5xl text-theme-blue text-center font-bold">Why Choose Us</h1>

          <p className="font-light text-lg text-sub-heading-light text-center mb-12 sm:mb-5 xl:mb-0">
            Why you should choose us to digitise your factory operations ?

          </p>
        </Fade>

        <div className="flex flex-col sm:grid sm:grid-cols-2">

          <div className="flex-col">
            {
                        data[0].map((item, index) => (
                          <Fade bottom delay={500 * index}>
                            <div>
                              <div className="bg-card-black flex flex-row items-center p-3 my-6 mx-3 sm:my-7 sm:mx-3 xl:my-14 xl:mx-7 rounded-2xl shadow-xl border border-light-theme-purple transform transition duration-500 hover:scale-105">
                                <img src={item.imageUrl} alt="" className="w-1/4" />
                                <div className="flex-col pl-5">
                                  <h2 className="text-white text-2xl">{item.title}</h2>
                                  <p className="font-light text-gray-200 whitespace-normal">{item.description}</p>
                                </div>
                              </div>
                            </div>
                          </Fade>
                        ))
                    }
          </div>

          <div className="flex-col sm:mt-14">
            {
                        data[1].map((item, index) => (
                          <Fade bottom delay={500 * index}>
                            <div>
                              <div className="bg-card-black flex flex-row items-center p-3 my-6 mx-3 sm:my-7 sm:mx-3 xl:my-14 xl:mx-7 rounded-2xl shadow-xl border border-light-theme-purple transform transition duration-500 hover:scale-105">
                                <img src={item.imageUrl} alt="" className="w-1/4" />
                                <div className="flex-col pl-5">
                                  <h2 className="text-white text-2xl">{item.title}</h2>
                                  <p className="font-light text-gray-200 ">{item.description}</p>
                                </div>
                              </div>
                            </div>
                          </Fade>
                        ))
                    }
          </div>

        </div>
      </div>
    </div>
  );
}
