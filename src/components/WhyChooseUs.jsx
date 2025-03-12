import React from 'react'
import dataImage from "../../public/dataImage.svg";
import socialImage from "../../public/socialImage.svg";
import HeroImageBg from "../../public/heroImageBg.svg";
import miniChartIcon from "../../public/miniChartIcon.svg";
import rocket from "../../public/rocket.svg";
import lock from "../../public/lock.svg";
import grid from "../../public/grid.svg";
import cube from "../../public/cube.svg";
import reload from "../../public/reload.svg";
import pacman from "../../public/pacman.svg";
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  return (
    <section className="my-32">
      <div className="mb-14">
        <div className="mb-10">
          <h2 className="text-4xl pr-5 font-bold text-[#060C3C] text-center max-w-[600px] mx-auto lg:hidden">
            The reasons to prefer choosing our platform
          </h2>
          <p className="mt-4 text-lg text-[#5D6180] text-center w-[75%] max-w-[500px] mx-auto lg:hidden">
            Seamless integration of more than 20+ apps that can help analytics
            your product
          </p>
        </div>
        <div className="max-w-7xl max-lg:max-w-3xl mx-auto px-6 lg:px-8 flex flex-col max-md:justify-center lg:flex-row gap-20">
          {/* Left Side - Image */}
          <div className="lg:w-1/2 w-full relative">
            <img src={dataImage} alt="Hero Image" className="mx-auto" />
            <img
              src={HeroImageBg}
              alt="Hero Bg"
              className="block absolute top-0 left-1/2 -translate-x-1/2 -z-10"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl pr-5 font-bold text-[#060C3C] sm:text-5xl max-lg:hidden">
              The reasons to prefer choosing our platform
            </h2>
            <p className="mt-4 text-lg text-[#5D6180] w-[75%] max-lg:hidden">
              Seamless integration of more than 20+ apps that can help analytics
              your product
            </p>

            <div className="flex max-sm:flex-col max-lg:justify-center flex-wrap gap-y-5 mt-6">
              <div className="sm:w-[45%] max-sm:flex gap-x-4">
                <img src={miniChartIcon} alt="Chart icon" className="block" />
                <div className="flex flex-col items-start justify-start mt-2 max-md:mt-10">
                  <span className="text-2xl text-[#060C3C] font-semibold">
                    Real time data
                  </span>
                  <span className="text-[#5D6180] max-md:max-w-[250px] max-w-[200px] text-left">
                    Over 500 business powered with us
                  </span>
                </div>
              </div>

              <div className="sm:w-[45%] max-sm:flex gap-x-4">
                <img src={rocket} alt="Rocket icon" className="block" />
                <div className="flex flex-col items-start justify-start mt-2 max-md:mt-10">
                  <span className="text-2xl text-[#060C3C] font-semibold">
                    Fast and Easy to use
                  </span>
                  <span className="text-[#5D6180] max-md:max-w-[250px] max-w-[200px] text-left">
                    Easily to convert API with just a few clicks
                  </span>
                </div>
              </div>

              <div className="sm:w-[45%] max-sm:flex gap-x-4">
                <img src={lock} alt="Lock icon" className="block" />
                <div className="flex flex-col items-start justify-start mt-2 max-md:mt-10">
                  <span className="text-2xl text-[#060C3C] font-semibold">
                    Safely Security
                  </span>
                  <span className="text-[#5D6180] max-md:max-w-[250px] max-w-[200px] text-left">
                    All customer data is encrypted
                  </span>
                </div>
              </div>

              <div className="sm:w-[45%] max-sm:flex gap-x-4">
                <img src={grid} alt="Grid icon" className="block" />
                <div className="flex flex-col items-start justify-start mt-2 max-md:mt-10">
                  <span className="text-2xl text-[#060C3C] font-semibold">
                    Powerfull App
                  </span>
                  <span className="text-[#5D6180] max-md:max-w-[250px] max-w-[200px] text-left">
                    Provide simple and minimalist dashboard
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-14">
        <div className="mb-28">
          <h2 className="text-4xl pr-5 font-bold text-[#060C3C] text-center max-w-[600px] mx-auto lg:hidden">
            We provide features for your product
          </h2>
        </div>
        <div className="max-w-7xl max-lg:max-w-3xl mx-auto px-6 lg:px-8 flex flex-col-reverse max-md:justify-center lg:flex-row gap-20">
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl pr-5 font-bold text-[#060C3C] sm:text-5xl max-lg:hidden">
              We provide features for your product
            </h2>

            <div className="mt-6">
              <div className="flex gap-x-4 shadow-xl p-5 rounded mb-5">
                <img
                  src={cube}
                  alt="Cube icon"
                  className="block -mt-16"
                />
                <div className="flex flex-col items-start justify-start">
                  <span className="text-2xl max-md:text-xl text-[#060C3C] font-semibold">
                    Integrated with Social Media
                  </span>
                  <span className="text-[#5D6180] max-w-[350px] text-left">
                    Seamless integration of more than 20+ apps that can help
                    analytics
                  </span>
                  <Link to="/" className="underline text-[#6241D4] font-medium">
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-x-4 p-5">
                <img src={reload} alt="Reload icon" className="block" />
                <div className="flex flex-col items-start justify-start">
                  <span className="text-[#5D6180] font-semibold max-w-[350px] text-left">
                    Always in syncronized
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-x-4 p-5">
                <img src={pacman} alt="Pacman icon" className="block" />
                <div className="flex flex-col items-start justify-start">
                  <span className="text-[#5D6180] font-semibold max-w-[350px] text-left">
                    Powerful report
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="lg:w-1/2 w-full relative">
            <img src={socialImage} alt="Hero Image" className="mx-auto" />
            <img
              src={HeroImageBg}
              alt="Hero Bg"
              className="block absolute top-0 left-1/2 -translate-x-1/2 -z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs