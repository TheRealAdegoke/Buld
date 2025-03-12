import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SupportedBy from "./components/SupportedBy";
import OurProcess from "./components/OurProcess";
import WhyChooseUs from "./components/WhyChooseUs";
import TrustedBy from "./components/TrustedBy";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero/>
        <SupportedBy/>
        <OurProcess/>
        <WhyChooseUs/>
        <TrustedBy/>
        <Testimonial/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
