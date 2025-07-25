import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const features = [
  "/iconImg/increase_energy.webp",
  "/iconImg/madeInIndia.webp",
  "/iconImg/noSugar.webp",
  "/iconImg/fight_Off_fatigue.webp",
  "/iconImg/coconut.webp",
];

const MarqueeSection = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".marquee-item");
      const totalWidth = marqueeRef.current.scrollWidth / 2;

      gsap.to(items, {
        x: `-=${totalWidth}`,
        duration: 25,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % totalWidth),
        },
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full overflow-hidden bg-[#e8fc9c] py-10">
      <div
        ref={marqueeRef}
        className="flex gap-16 w-max"
        style={{ willChange: "transform" }}
      >
        {[...features, ...features].map((img, index) => (
          <div
            key={index}
            className="marquee-item flex items-center justify-center flex-shrink-0 w-[200px]"
          >
            <img
              src={img}
              alt={`icon-${index}`}
              className="w-28 h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSection;
