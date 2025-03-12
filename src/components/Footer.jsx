import React from "react";
import footerTopImage from "../../public/footerTopImage.svg";
import footerTopImageMobile from "../../public/footerTopImageMobile.svg";
import footerBottomImage from "../../public/footerBottomImage.svg";
import Logo from "../../public/logo.svg";
import { Link } from "react-router-dom";
import linkedIn from "../../public/linkedIn.svg";
import instagram from "../../public/instagram.svg";
import twitter from "../../public/twitter.svg";
import envelope from "../../public/envelope.svg";
import slackIcon from "../../public/slackIcon.svg";

const Footer = () => {
  return (
    <footer className="bg-[#060C3C] py-24 relative">
      <div className="lg:w-[95%] max-w-6xl max-lg:max-w-3xl mx-auto px-6 lg:px-8 flex flex-col max-md:justify-center lg:flex-row gap-20">
        {/* Left Side - Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left relative z-10">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-[#B4B6C4]">
            The fastest and simple way to generate growing business solutions
            with our products
          </p>
          <div className="bg-white border-[1px] border-[rgba(0,0,0,0.2)] rounded-[6px] flex justify-between items-center px-2 py-1 my-5 max-w-[500px] mx-auto">
            <input
              type="text"
              placeholder="Your business email"
              className="h-[40px] block w-full px-2 outline-none"
            />
            <button
              to="/"
              className="px-10 py-3 bg-[#6241D4] text-white rounded-md w-[60%]"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 w-full relative -z-0">
          <img
            src={footerTopImage}
            alt="Footer Image"
            className="mx-auto absolute -top-24 max-md:hidden"
          />
          <img
            src={footerTopImageMobile}
            alt="Footer Image"
            className="mx-auto absolute -top-96 md:hidden -right-6"
          />
        </div>
      </div>

      <div className="w-[80%] max-w-6xl mx-auto mt-10 border-[rgba(255,255,255,0.3)] border-t-[1px] border-b-[1px] py-14 flex justify-between max-md:flex-col max-md:items-center">
        <div className="md:pl-10">
          <Link to="/" className="">
            <img src={Logo} alt="Company's logo" className="max-md:mx-auto" />
          </Link>
          <p className="text-[#B4B6C4] mt-5 max-w-[300px] max-md:text-center">
            The fastest and simple way to generate growing business solutions
            with our products
          </p>
          <div className="mt-5 flex items-center max-md:justify-center gap-x-2">
            <img src={envelope} alt="Envelope Icon" />
            <p className="text-[#B4B6C4]">hello@dhuhacreative.com</p>
          </div>
          <div className="mt-5 flex items-center max-md:justify-center gap-x-2">
            <img src={slackIcon} alt="Slack Icon" />
            <p className="text-[#B4B6C4]">Join our slack community</p>
          </div>
        </div>
        <div className="md:w-[60%] flex justify-evenly max-md:flex-wrap max-md:mt-8 max-md:gap-x-20 max-md:justify-start max-md:mx-auto max-md:w-[90%]">
          <div>
            <h2 className="text-white font-bold mb-4">Product</h2>
            <ul className="flex flex-col gap-y-3">
              <li className="text-[#B4B6C4]">Landing Pages</li>
              <li className="text-[#B4B6C4]">Pricing</li>
              <li className="text-[#B4B6C4]">Benefits</li>
              <li className="text-[#B4B6C4]">Features</li>
            </ul>
          </div>
          <div>
            <h2 className="text-white font-bold mb-4">Company</h2>
            <ul className="flex flex-col gap-y-3">
              <li className="text-[#B4B6C4]">About</li>
              <li className="text-[#B4B6C4]">Privacy Policy</li>
              <li className="text-[#B4B6C4]">Terms & Conditions</li>
              <li className="text-[#B4B6C4]">Partners</li>
              <li className="text-[#B4B6C4]">Contact</li>
            </ul>
          </div>
          <div>
            <h2 className="text-white font-bold mb-4">Resources</h2>
            <ul className="flex flex-col gap-y-3">
              <li className="text-[#B4B6C4]">Guides and resources</li>
              <li className="text-[#B4B6C4]">Blog</li>
              <li className="text-[#B4B6C4]">Tools</li>
              <li className="text-[#B4B6C4]">Support</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-[80%] max-w-6xl mx-auto mt-10 flex justify-between max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-y-4">
        <p className="text-[#B4B6C4]">© 2020 Growthly. All Right Reserved</p>
        <div className="flex gap-x-4">
          <Link to="/">
            <img src={instagram} alt="Instagram Icon" />
          </Link>
          <Link to="/">
            <img src={twitter} alt="Twitter Icon" />
          </Link>
          <Link to="/">
            <img src={linkedIn} alt="LinkedIn Icon" />
          </Link>
        </div>

        <img src={footerBottomImage} alt="Footer Image" className="absolute bottom-32 left-0  max-md:hidden"/>
      </div>
    </footer>
  );
};

export default Footer;
