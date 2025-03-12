import React from 'react'
import compainesLogo from "../../public/companiesLogo.svg"
import compainesLogoMobile from "../../public/companiesLogoMobile.svg";

const SupportedBy = () => {
  return (
    <section className="mb-32">
      <img
        src={compainesLogo}
        alt="companies logo"
        className="mx-auto max-lg:hidden"
      />
      <img
        src={compainesLogoMobile}
        alt="companies logo"
        className="mx-auto lg:hidden"
      />
    </section>
  );
}

export default SupportedBy