import React from "react";
import processImage1 from "../../public/processImage1.svg"
import processImage2 from "../../public/processImage2.svg";
import processImage3 from "../../public/processImage3.svg";
import processLineIcon1 from "../../public/processLineIcon1.svg";
import processLineIcon2 from "../../public/processLineIcon2.svg";
import processLineIconMobile1 from "../../public/processLineIconMobile1.svg";
import processLineIconMobile2 from "../../public/processLineIconMobile2.svg";

const OurProcess = () => {
  return (
    <section className="my-32">
      <h2 className="text-[#060C3C] text-4xl max-md:text-3xl text-center mb-5 w-[95%] md:max-w-[400px] mx-auto font-semibold">
        How our platform process easy to use?
      </h2>

      <div className="my-4 flex items-center justify-center max-md:flex-col max-md:gap-y-8 md:px-3">
        <div className="flex flex-col items-center justify-center">
          <img src={processImage1} alt="Process Image" className="block mr-4" />
          <div className="-mt-6">
            <h2 className="text-[#060C3C] text-2xl max-w-[250px] mx-auto text-center font-medium">
              Login or sign up to be able use our platform
            </h2>
            <p className="text-[#5D6180] text-lg max-w-[250px] mx-auto text-center mt-3">
              You must log in first to be able to use our platform to get your
              product analytics
            </p>
          </div>
        </div>
        <div className="max-md:-mt-20 hidden md:block">
          <img src={processLineIcon1} alt="Line Image" />
        </div>
        <div className="hidden max-md:block">
          <img src={processLineIconMobile1} alt="Line Image" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={processImage2} alt="Process Image" className="block mr-4" />
          <div className="-mt-6">
            <h2 className="text-[#060C3C] text-2xl max-w-[250px] mx-auto text-center font-medium">
              Connect your website with just a few click
            </h2>
            <p className="text-[#5D6180] text-lg max-w-[250px] mx-auto text-center mt-3">
              Select the application you wanted to be able to connect with just
              a few clicks
            </p>
          </div>
        </div>
        <div className="max-md:-mt-20 hidden md:block">
          <img src={processLineIcon2} alt="Line Image" />
        </div>
        <div className="hidden max-md:block">
          <img src={processLineIconMobile2} alt="Line Image" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={processImage3} alt="Process Image" className="block mr-4" />
          <div className="-mt-6">
            <h2 className="text-[#060C3C] text-2xl max-w-[250px] mx-auto text-center font-medium">
              Take some sales data that you want
            </h2>
            <p className="text-[#5D6180] text-lg max-w-[250px] mx-auto text-center mt-3">
              You already have sales data of your product with some variants you
              want
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
