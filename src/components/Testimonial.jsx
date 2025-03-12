import React from 'react'
import netflix from "../../public/netflix.svg"
import netflixCEO from "../../public/ceoNetflix.svg";
import microsoft from "../../public/microsoft.svg";
import microsoftCEO from "../../public/ceoMicrosoft.svg";
import shopify from "../../public/shopify.svg";
import shopifyCEO from "../../public/ceoShopify.svg";

const Testimonial = () => {
  return (
    <section className="my-32">
      <h2 className="text-4xl pr-5 font-bold text-[#060C3C] sm:text-5xl text-center max-w-[600px] mx-auto mb-10">
        See what our customers have to say about us
      </h2>

      <div className="flex justify-center max-md:flex-col gap-5">
        <div className="md:w-[30%] w-[90%] max-md:mx-auto max-w-[500px] bg-[#F4F1FF] px-5 py-14">
          <img src={netflix} alt="Netflix image" className="block mb-5" />
          <p className="text-[#5D6180] mb-5">
            “I’ve used Growthly at many companies before—it’s the go-to solution
            when you need user and product analytics.”
          </p>
          <div className="flex gap-x-3">
            <img
              src={netflixCEO}
              alt="Netflix ceo image"
              className="block rounded-full"
            />
            <div>
              <h3 className="text-lg text-[#060C3C] font-semibold">
                Try Washington
              </h3>
              <p className="text-sm text-[#6241D4]">CEO of Netflix</p>
            </div>
          </div>
        </div>

        <div className="md:w-[30%] w-[90%] max-md:mx-auto max-w-[500px] bg-[#F4F1FF] px-5 py-14">
          <img src={microsoft} alt="Microsoft image" className="block mb-5" />
          <p className="text-[#5D6180] mb-5">
            “I’ve used Growthly at many companies before—it’s the go-to solution
            when you need user and product analytics.”
          </p>
          <div className="flex gap-x-3">
            <img
              src={microsoftCEO}
              alt="Microsoft ceo image"
              className="block rounded-full"
            />
            <div>
              <h3 className="text-lg text-[#060C3C] font-semibold">
                Cyhntya Rebecca
              </h3>
              <p className="text-sm text-[#6241D4]">CEO of Microsoft</p>
            </div>
          </div>
        </div>

        <div className="md:w-[30%] w-[90%] max-md:mx-auto max-w-[500px] bg-[#F4F1FF] px-5 py-14">
          <img src={shopify} alt="Shopify image" className="block mb-5" />
          <p className="text-[#5D6180] mb-5">
            “I’ve used Growthly at many companies before—it’s the go-to solution
            when you need user and product analytics.”
          </p>
          <div className="flex gap-x-3">
            <img
              src={shopifyCEO}
              alt="Shopify ceo image"
              className="block rounded-full"
            />
            <div>
              <h3 className="text-lg text-[#060C3C] font-semibold">
                Derry Alasca
              </h3>
              <p className="text-sm text-[#6241D4]">Manager of Shopify</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial