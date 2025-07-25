import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BenefitsSection = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imgRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(textRef.current, {
        opacity: 0,
        x: 100,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#e8fc9c] py-20 px-6 lg:px-28 overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
    
        <div
          ref={imgRef}
          className="relative w-full lg:w-1/2 flex justify-center"
        >
          <img
            src="/ProductShowcaseImg/benefits.webp"
            alt="Fokus Benefits"
            className="max-w-[500px] w-full rounded-3xl shadow-2xl"
          />
        </div>

        <div
          ref={textRef}
          className="w-full lg:w-1/2 text-left space-y-6"
        >
          <h2 className="text-4xl font-bold text-[#1b1b1b] leading-snug">
            Sip Your Way to Better Focus, Energy & Hydration 💥
          </h2>
          <p className="text-lg text-[#333]">
            Fokus is packed with science-backed ingredients to give you the hydration your body craves and the energy your mind deserves — without the sugar crash.
          </p>
          <ul className="text-md text-[#2d2d2d] space-y-2 pl-4 list-disc">
            <li>22% Real Coconut Water</li>
            <li>Vitamin D3 for Immunity & Brain</li>
            <li>Zero Added Sugar – Naturally Sweet</li>
            <li>Energy Boost with Ginseng & Creatine</li>
            <li>Smooth Digestion + Fatigue Fighter</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
