/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import Fade from 'react-reveal/Fade';
import styles, { layout } from '../json/styles';
import features from '../json/indexes';

const FeatureCard = ({
 icon, title, content, index,
}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? 'mb-6' : 'mb-0'
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue feature-card`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain " />
    </div>
    <div className="flex-1 flex flex-col ml-3 ">
      <h4 className="font-poppins font-semibold text-dark-grey text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-light-grey text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

export default function Service() {
  return (
    <div className="bg-white h-800px">
      <div className="container mx-auto pt-20 pb-28">
        <Fade bottom>
          <h1 className="text-5xl text-theme-blue text-center font-bold">
            Our Service
          </h1>

          <p className="font-light text-lg text-gray-400 text-center mb-12 ">
            Choose us to digitise your factory operations
          </p>
        </Fade>

        {/* container 1 */}

        <div className="flex flex-col flex-wrap p-4 gap-1">
          <div className="flex flex-row p-10 my-10 items-center content-between justify-evenly">
            <div className={`${layout.sectionImg} flex-col text-black`}>
              {features.map((feature, index) => (

                <FeatureCard key={feature.id} {...feature} index={index} />
              ))}
            </div>
            <Fade bottom>
              <div className="bg-container-purple rounded-3xl">
                <img src="../assets/images/Design.png" alt="web" className="" width="380px" />
              </div>
            </Fade>
          </div>
          {/* container 2 */}
          <div className="flex flex-row-reverse flex-auto  p-10 my-10 items-center content-between justify-around">
            <div className={`${layout.sectionImg} flex-col text-black`}>
              {features.map((feature, index) => (

                <FeatureCard key={feature.id} {...feature} index={index} />
              ))}
            </div>
            <Fade>
              <div className="bg-container-purple rounded-3xl">
                <img src="../assets/images/Mobile.png" alt="web" className="" width="380px" />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
