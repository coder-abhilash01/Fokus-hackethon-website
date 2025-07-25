import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const BottleSplitSection = () => {
  const bottlesRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return; // Skip animation on mobile

    ScrollTrigger.getAll().forEach(t => t.kill());
    gsap.killTweensOf(bottlesRef.current);

    bottlesRef.current.forEach(bottle => {
      gsap.set(bottle, { clearProps: "all" });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    tl.to(bottlesRef.current[0], {
      x: "-100vw",
      opacity: 0,
      ease: "power3.inOut",
    }, 0)
      .to(bottlesRef.current[1], {
        y: "-100vh",
        opacity: 0,
        ease: "power3.inOut",
      }, 0)
      .to(bottlesRef.current[2], {
        x: "100vw",
        opacity: 0,
        ease: "power3.inOut",
      }, 0);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      gsap.killTweensOf(bottlesRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[80vh] md:min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#FF4C61] via-[#F9CB28] to-[#00D26A] overflow-hidden"
    >
      {/* Bottles - hidden on mobile */}
      <div className="hidden md:flex relative z-50 justify-center items-end gap-6 mt-10 md:mt-20">
        {[
          "/bottlesAndBanner/StrawberryBottle.png",
          "/bottlesAndBanner/mangoBottle.png",
          "/bottlesAndBanner/kiwiBottle.png",
        ].map((src, i) => (
          <img
            key={i}
            ref={(el) => (bottlesRef.current[i] = el)}
            src={src}
            alt={`Bottle ${i + 1}`}
            className="w-[120px] md:w-[260px] drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)] pointer-events-none select-none"
          />
        ))}
      </div>

      {/* Desktop Posters (left & right) */}
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://fokus.shop/cdn/shop/files/mdl1.png?v=1737522791"
          className="absolute top-0 left-0 h-full w-auto opacity-80"
          alt="left"
        />
        <img
          src="https://fokus.shop/cdn/shop/files/mdl2.png?v=1737522792"
          className="absolute top-0 right-0 h-full w-auto opacity-80"
          alt="right"
        />
      </div>

    
      <div className="block md:hidden absolute inset-0 z-0 flex justify-center items-end pointer-events-none">
        <img
          src="https://fokus.shop/cdn/shop/files/Banner_3_mobile_s_1-removebg-preview_1.png?v=1738065810"
          className="w-[100%] opacity-90 "
          alt="Mobile Poster"
        />
      </div>

      <div className="absolute text-white text-center max-w-lg px-4 z-10 flex gap-8 flex-col items-center">
        <div className="w-full mt-10 text-center z-20 px-2">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
            Refresh Your Fokus
          </h1>
          <h2 className="text-white text-xl md:text-3xl italic mt-2 font-semibold drop-shadow-md">
            With Every Sip
          </h2>
        </div>

        <p className="text-base md:text-xl drop-shadow-md max-w-[500px]">
          Fokus isn’t just a drink—it’s a lifestyle. Discover what makes us different.
        </p>

        <Link className="relative inline-block px-8 py-3 font-semibold text-white bg-black rounded-xl overflow-hidden group transition-all duration-300 hover:text-black hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,76,97,0.4)] pointer-events-auto"
        to="/product">
          <span className="absolute inset-0 bg-gradient-to-r from-[#FF4C61] to-[#F9CB28] z-0 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
          <span className="relative z-10">Buy Now</span>
        </Link>
      </div>
    </section>
  );
};

export default BottleSplitSection;
