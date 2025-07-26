import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import foundersData from "../data/foundersData";

gsap.registerPlugin(ScrollTrigger);

const FoundersSection = () => {
  const refs = useRef([]);

  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (!el) return;

      const direction = i % 2 === 0 ? -100 : 100;

      gsap.fromTo(
        el,
        { opacity: 0, x: direction },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative bg-[#0B0B0B] text-white py-28 px-6 md:px-20 overflow-hidden">
      {/* Background Heading */}
      <h2 className="text-[100px] md:text-[160px] font-extrabold opacity-5 text-center absolute top-10 left-1/2 transform -translate-x-1/2 pointer-events-none select-none">
        FOUNDERS
      </h2>

      {/* Intro Text */}
      <div className="relative z-10 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="text-white">From content to cold drink —</span>
          <br />
          <span className="text-[#FF4C61]">meet the minds changing the sip game.</span>
        </h2>
      </div>

      {/* Founder Cards */}
      <div className="space-y-32 max-w-6xl mx-auto relative z-10">
        {foundersData.map((f, i) => (
          <div
            key={i}
            ref={(el) => (refs.current[i] = el)}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-[2rem] overflow-hidden border-4 border-[#FF4C61] shadow-lg">
              <img
                src={f.photo}
                alt={f.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="max-w-xl text-left">
              <h3 className="text-[#FF4C61] text-2xl font-semibold mb-2">{f.name}</h3>
              <p className="text-gray-400 uppercase text-sm tracking-widest mb-3">{f.role}</p>
              
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#0b0b0b]/70 to-[#0b0b0b] pointer-events-none z-0"></div>
    </section>
  );
};

export default FoundersSection;
