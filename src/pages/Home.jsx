import React from "react";
import BottleSplitSection from "../components/BottleSplitSection";
import TextReveal from "../components/TextReveal";
import Marquee from "../components/Marquee";
import WhyFokus from "../components/WhyFokus";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-black">
      <BottleSplitSection />
      <Marquee/>
      <TextReveal/>
      <Testimonials/>
      <WhyFokus/>
      <Footer/>
    </div>
  );
};

export default Home;
