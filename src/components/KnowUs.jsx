import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const KnowUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

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
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0F0F0F] text-white py-24 px-6 md:px-16 overflow-hidden select-none"
    >
      {/* Mobile Background Image Positioned at Bottom */}
      <div className="md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[500px] z-0 opacity-80">
        <img
          src="https://fokus.shop/cdn/shop/files/Banner_3_mobile_s_1-removebg-preview_1.png?v=1738065810"
          alt="Mobile KnowUs Background"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF4C61] opacity-20 rounded-full blur-3xl z-0" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl gap-10 mx-auto">
        {/* Desktop images */}
        <div className="hidden md:flex w-1/2 relative">
          <img
            src="https://fokus.shop/cdn/shop/files/mdl1.png?v=1737522791"
            alt="Men Left"
            className="absolute left-40 top-4 w-[300px] lg:w-[450px] opacity-70 z-0 select-none"
          />
          <img
            src="https://fokus.shop/cdn/shop/files/mdl2.png?v=1737522792"
            alt="Men Right"
            className="absolute left-0 top-4 w-[300px] lg:w-[450px] opacity-70 z-0 select-none"
          />
        </div>

        {/* Text content */}
        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="headline text-4xl md:text-5xl font-bold leading-tight text-center md:text-left">
            <span className="text-[#FF4C61]">KNOW </span>
            <span className="text-white">FOKUS</span>,
            <span className="text-[#FFD700]"> KNOW US</span>
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-[#F1F1F1] font-medium">
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
      </div>
    </section>
  );
};

export default KnowUs;
