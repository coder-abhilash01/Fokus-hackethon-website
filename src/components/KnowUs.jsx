import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const KnowUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    const timeout = setTimeout(() => {
      // Headline animation
      gsap.fromTo(
        el.querySelector(".headline"),
        {
          clipPath: "inset(0 100% 0 0)",
          opacity: 0,
        },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );

      // Paragraph animation
      gsap.fromTo(
        el.querySelectorAll(".para"),
        {
          opacity: 0,
          y: 40,
          scale: 0.95,
          rotateX: 10,
          transformOrigin: "top center",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        }
      );
    }, 50); // delay for layout stability

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0F0F0F] text-white py-24 px-6 md:px-16 overflow-hidden select-none"
    >
      <div className="absolute inset-0 z-0 flex items-end justify-center">
        <img
          src="https://fokus.shop/cdn/shop/files/Banner_3_mobile_s_1-removebg-preview_1.png?v=1738065810"
          alt="FOKUS Banner"
          className="w-full max-w-lg opacity-70 object-contain pointer-events-none"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center md:text-left">
        <h2 className="headline text-4xl md:text-5xl font-bold leading-tight text-center">
          <span className="text-[#FF4C61]">KNOW </span>
          <span className="text-white">FOKUS</span>,
          <span className="text-[#FFD700]"> KNOW US</span>
        </h2>

        <div className="mt-10 space-y-6 text-lg md:text-xl text-[#F1F1F1] font-medium">
          <p className="para">
            <span className="text-[#FFD700] text-3xl">“</span>
            <strong>We’re more than just a brand</strong> — we’re a vibrant
            community driven by passion, purpose, and a vision for a better lifestyle.
          </p>

          <p className="para">
            Born from creators like <strong>Abhishek & Nischay Malhan</strong> and built
            by digital disruptors <strong>Mayank Mishra, Ankit & Aman Madaan</strong>,
            FOKUS isn’t just a drink — it’s momentum in a bottle.
          </p>

          <p className="para">
            <strong>Our mission:</strong> deliver clean, functional hydration to fuel
            every hustle. Whether you’re grinding, building, or just chilling —
            <strong> #GetFokus</strong>
            <span className="text-[#FFD700] text-3xl">”</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default KnowUs;
