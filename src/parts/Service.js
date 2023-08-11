/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import Fade from 'react-reveal/Fade';
import Timeline from './Timeline';

// import styles from '../json/styles';
// import features from '../json/indexes';

// const FeatureCard = ({
//  icon, title, content, index,
// }) => (
//   <div className={`flex flex-row p-6 rounded-[20px] ${
//       index !== features.length - 1 ? 'mb-6' : 'mb-0'
//     } feature-card`}
//   >
//     <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue feature-card`}>
//       <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
//     </div>
//     <div className="flex-1 flex flex-col ml-3 ">
//       <p className="font-semibold text-dark-grey text-xl">
//         {title}
//       </p>
//       <p className="font-normal text-light-grey text-10px leading-[24px]">
//         {content}
//       </p>
//     </div>
//   </div>
// );

export default function Service() {
  return (
    <div className="bg-white" id="product-section">
      <div className="container mx-auto pt-20 pb-28 ">
        <Fade bottom>
          <h1 className="text-5xl text-theme-blue text-center font-bold">
            Our Product
          </h1>

          <p className="font-light text-lg text-sub-heading-light text-center mb-12 ">
            Choose us to digitise your factory operations
          </p>
        </Fade>
        <Timeline />
        {/*
        <div className="flex flex-row md:flex md:flex-col p-4 gap-1 ">

          <div className="basis-1/3 w-200px bg-red-500">
            <Fade bottom>
              <div className="flex-col basis-1/2 text-black ">
                {features.map((feature, index) => (

                  <FeatureCard key={feature.id} {...feature} index={index} />
              ))}
              </div>
            </Fade>
          </div>

          <div className="basis-2/3 bg-blue-300 w-500px h-500px">
            <Fade bottom>
              <div className="rounded-3xl w-400">
                <img src="../assets/images/Design.png" alt="web" />
              </div>
            </Fade>
          </div>

        </div> */}

      </div>
    </div>
  );
}
