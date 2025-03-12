import React from 'react'
import world from "../../public/worldImage.svg"

const TrustedBy = () => {
  return (
    <section className="my-32">
      <p className="mb-4 text-lg text-[#FFD43D] text-center">Global Scale</p>
      <h2 className="text-4xl pr-5 font-bold text-[#060C3C] sm:text-5xl text-center max-w-[500px] mx-auto mb-10">
        Trusted by company around the world
      </h2>
      <div>
        <img src={world} alt="world image" className="block mx-auto" />
      </div>

      <div className="my-10 flex max-md:flex-wrap justify-center md:gap-x-14 max-md:gap-y-10">
        <div className="max-md:w-[45%] flex flex-col items-start justify-start">
          <span className="text-4xl text-[#060C3C] font-semibold">350+</span>
          <span className="text-[#5D6180] max-w-[200px] text-left">
            Over 500k business powered with us
          </span>
        </div>
        <div className="max-md:w-[45%] flex flex-col items-start justify-start">
          <span className="text-4xl text-[#060C3C] font-semibold">750k</span>
          <span className="text-[#5D6180] max-w-[200px] text-left">
            Users used our platform in around the world
          </span>
        </div>
        <div className="max-md:w-[45%] flex flex-col items-start justify-start">
          <span className="text-4xl text-[#060C3C] font-semibold">4.8</span>
          <span className="text-[#5D6180] max-w-[200px] text-left">
            Rating on google play and app store
          </span>
        </div>
        <div className="max-md:w-[45%] flex flex-col items-start justify-start">
          <span className="text-4xl text-[#060C3C] font-semibold">24+</span>
          <span className="text-[#5D6180] max-w-[200px] text-left">
            More than 30 countries trust our platform
          </span>
        </div>
      </div>
    </section>
  );
}

export default TrustedBy