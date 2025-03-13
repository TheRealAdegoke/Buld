import React from "react";
import HeroImage from "../../public/heroImage.svg"
import HeroImageBg from "../../public/heroImageBg.svg";

const Hero = () => {
  return (
    <>
      <section className="py-28 bg-cover mb-32">
        <div className="max-w-7xl max-lg:max-w-3xl mx-auto px-6 lg:px-8 flex flex-col max-md:justify-center lg:flex-row gap-20">
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl pr-5 font-bold text-[#060C3C] sm:text-5xl">
              We help any business to get analytics and sales marketing
            </h1>
            <p className="mt-4 text-lg text-[#060C3C]">
              The fastest and simple way to generate growing business solutions
              with our products
            </p>
            <div className="border-[1px] border-[rgba(0,0,0,0.2)] rounded-[6px] flex justify-between items-center px-2 py-1 my-5 max-w-[500px] mx-auto">
              <input
                type="text"
                placeholder="Your business email"
                className="h-[40px] block w-full px-2 outline-none"
              />
              <button
                to="/"
                className="px-10 py-3 bg-[#6241D4] text-white rounded-md w-[60%] max-sm:w-[75%]"
              >
                Get Started
              </button>
            </div>
            <p className="mt-4 text-[#5D6180]">
              *we will not disseminate your email and so you avoid spam
            </p>
            <div className="my-4 flex gap-4 max-lg:hidden">
              <div className="flex flex-col items-start justify-start">
                <span className="text-4xl text-[#060C3C] font-semibold">
                  350+
                </span>
                <span className="text-[#5D6180] max-w-[200px] text-left">
                  Over 500 business powered with us
                </span>
              </div>
              <div className="flex flex-col items-start justify-start">
                <span className="text-4xl text-[#060C3C] font-semibold">
                  4.8
                </span>
                <span className="text-[#5D6180] max-w-[150px] text-left">
                  Rating on google play and app store
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="lg:w-1/2 w-full relative">
            <img src={HeroImage} alt="Hero Image" className="mx-auto" />
            <img
              src={HeroImageBg}
              alt="Hero Bg"
              className="block absolute top-0 left-1/2 -translate-x-1/2 -z-10"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
