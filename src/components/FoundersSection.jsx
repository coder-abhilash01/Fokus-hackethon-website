import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import foundersData from "../data/foundersData";

const FoundersSection = () => {
  const refs = useRef([]);

  useEffect(() => {
    refs.current.forEach((el, i) => {
      gsap.fromTo(
        el.querySelector(".image"),
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%"
          }
        }
      );

      const text = el.querySelector(".text");
      const chars = text.innerText.split("");
      text.innerHTML = chars
        .map((c) => `<span class='char opacity-0'>${c}</span>`)
        .join("");

      gsap.to(el.querySelectorAll(".char"), {
        opacity: 1,
        duration: 0.02,
        stagger: 0.02,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top 85%"
        }
      });
    });
  }, []);

  return (
    <section className="relative bg-[#0B0B0B] py-28 px-6 md:px-20 text-white overflow-hidden">
     
      <h2 className="text-[100px] md:text-[160px] font-extrabold opacity-5 text-center absolute top-10 left-1/2 transform -translate-x-1/2 pointer-events-none select-none">
        FOUNDERS
      </h2>

     
      <div className="relative z-10 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="text-white">From content to cold drink —</span>
          <br />
          <span className="text-[#FF4C61]">meet the minds changing the sip game.</span>
        </h2>
      </div>

      {/* Founders Section */}
      <div className="space-y-32 max-w-6xl mx-auto relative z-10">
        {foundersData.map((f, i) => (
          <div
            key={i}
            ref={(el) => (refs.current[i] = el)}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
           
            <div className="relative">
              <img
                src={f.photo}
                alt={f.name}
                className="image w-64 h-64 md:w-72 md:h-72 object-cover rounded-[2rem] shadow-[0_20px_50px_rgba(255,76,97,0.25)] border-4 border-[#FF4C61]"
              />
              <div className="absolute -bottom-5 -right-5 bg-[#FF4C61] w-12 h-12 rounded-full blur-xl opacity-50"></div>
            </div>

            <div className="text max-w-xl text-xl leading-relaxed">
              <p className="mb-2 font-semibold text-[#FF4C61] text-2xl">{f.name}</p>
              <p className="mb-4 text-gray-400 text-sm uppercase tracking-widest">{f.role}</p>
              <p className="text-gray-200 text-base md:text-lg text-justify">
                {f.bio}
              </p>
            </div>
          </div>
        ))}
      </div>


      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#0b0b0b]/70 to-[#0b0b0b] pointer-events-none z-0"></div>
    </section>
  );
};

export default FoundersSection;
