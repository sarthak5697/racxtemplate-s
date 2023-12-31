/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

import Fade from 'react-reveal/Fade';

import NotFound from 'assets/images/NotFound.png';

import Button from 'elements/Button';

export default function PortfolioDetail({ data }) {
  if (data === null) {
    return (
      <section className="container mx-auto">
        <Fade bottom>
          <div className="flex flex-col w-full justify-center">
            <div className="flex w-full justify-center">
              <img
                src={NotFound}
                alt="Not Found"
                className="sm:w-3/4 xl:w-5/12 mt-5"
              />
            </div>
            <h1 className="text-theme-blue text-2xl text-center mt-5">
              Project Not Found
            </h1>
            <div className="flex justify-center">
              <Button
                href="/project"
                type="link"
                className="flex w-30 h-10 px-5 mt-5 bg-theme-blue text-white items-center rounded transform transition duration-500 hover:bg-gray-900"
              >
                Go Back
              </Button>
            </div>
          </div>
        </Fade>
      </section>
    );
  }

  return (
    <section className="container mx-auto">
      <Fade bottom>
        <Button
          type="link"
          href="/"
          className="flex w-40 h-8 text-lg items-center ml-6 sm:ml-20 mt-8 font-light text-gray-400 hover:underline"
        >
          <svg
            className="w-5 h-5 text-gray-400 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          See All Project
        </Button>
      </Fade>

      {data.map((item) => (
        <div className="flex flex-col mt-8 justify-center">
          <Fade bottom>
            <h1 className="text-5xl text-theme-blue text-center font-bold">
              {item.title}
            </h1>

            <p className="font-light text-xl text-gray-400 text-center mb-10">
              {item.type}
            </p>
          </Fade>

          <Fade bottom delay={300 * 1}>
            <div className="flex justify-center l:mb-6">
              <img
                src={`${item.imageUrl}`}
                alt="Project"
                className="flex w-10px h-1/2 w-1/2"
              />
            </div>
          </Fade>

          <Fade bottom delay={300 * 1}>
            <div className="flex flex-col mt-16 mb-12 mx-8 sm:mx-16 xl:mx-28 whitespace-normal">
              <h1 className="text-3xl text-theme-blue font-bold mb-3">
                Project Detail
              </h1>

              <p className="font-light text-lg text-sub-heading-light text-justify whitespace-normal">
                {item.projectDescription}
                <br />
                <span className="font-bold text-xl text-dark-grey">
                  Key Points and Achievements :
                </span>
                <br />
                <ul className="list-disc px-12 py-2">
                  <li>  End-to-End Production Planning </li>
                  <li> Interactive Dashboard and DIY Production Planner</li>
                  <li> Seamless Job Card and Workstation Allocation </li>
                  <li> Tally Integration </li>
                  <li>Multi-Company Management in a Single Unit</li>
                </ul>
                <br />
                <span className="font-bold text-xl text-dark-grey ">
                  Benefits and Outcomes :
                </span>
                <br />
                <span className="font-light text-dark-grey ">
                  1: Enhanced Operational Efficiency:
                </span>
                <br />
                The digitized processes led to a significant boost in
                operational efficiency, minimizing manual errors and reducing
                lead times.
                <br />
                <span className="font-light text-dark-grey ">
                  2: Improved Decision-Making
                </span>
                <br />
                Real-time data insights
                from integrated systems empowered Sampat Industries with the
                information needed for agile and informed decision-making.
                <br />
                <span className="font-light text-dark-grey ">
                  3: Customer Satisfaction
                </span>
                <br />
                The streamlined processes resulted in
                prompt delivery, consistent quality, and adherence to client
                specifications, strengthening customer relationships.
                <br />
                <span className="font-light text-dark-grey ">
                  4: Competitive Edge
                </span>
                <br />
                Implementing advanced tools, seamless
                integration, and multi-company management provided Sampat
                Industries with a competitive advantage in the market.
                <br />
                <span className="font-light text-dark-grey ">
                  5: Future Ready Infrastructure
                </span>
                <br />
                The digitized ecosystem sets the
                foundation for scalability, adaptability, and future growth,
                positioning Sampat Industries for continued success.
              </p>
            </div>

            {/* <div className="flex flex-col mx-8 sm:mx-16 xl:mx-28">
              <h1 className="text-3xl text-theme-blue font-bold mb-5">
                Project Highlights
              </h1>

              <div className="flex flex-row ml-1">
                {item.responsibility.map((responsibility) => (
                  <div className="mr-4 px-6 py-3 text-theme-purple border border-theme-purple rounded-full shadow-lg">
                    {responsibility}
                  </div>
                ))}
              </div>
            </div> */}

            {/* <p className="font-light italic text-gray-400 mt-16 mx-8 sm:mx-16 xl:mx-28">
              * This project is just example.
              {' '}
              <br />
              Original project :
              {' '}
              <Button
                type="link"
                href={item.credit}
                target="_blank"
                className="text-theme-purple"
                isExternal
              >
                {item.credit}
              </Button>
            </p> */}
          </Fade>
        </div>
      ))}
    </section>
  );
}
