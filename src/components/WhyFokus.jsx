import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyFokus = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".compare-col", {
        opacity: 0,
        y: 100,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const data = [
    {
      title: "Caffeine Content",
      fokus: "None",
      energy: "High (typically 80 mg to 300 mg per can)",
      sports: "Low to moderate (electrolyte focus)",
    },
    {
      title: "Added Sugars",
      fokus: "None",
      energy: "Yes (high fructose corn syrup, glucose)",
      sports: "Yes (glucose, fructose)",
    },
    {
      title: "Health Benefits",
      fokus:
        "Vitamin D3 for bone health, LCLT for recovery, Ginkgo Biloba for brain health, Glutamine for muscle recovery, 5-HTP for mood support",
      energy: "Quick energy boost, some amino acids",
      sports: "Electrolyte balance, minimal nutritional benefits",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="w-full px-6 py-24 bg-[#0a0a0a] text-white"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        WHY <span className="text-[#FF4C61]">FOKUS</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-sm md:text-base">
        {/* Column Headers */}
        <div></div>
        <div className="compare-col font-semibold text-lg text-[#FF4C61]">
          FOKUS
        </div>
        <div className="compare-col font-semibold text-lg">Generic Energy Drink</div>
        <div className="compare-col font-semibold text-lg">Generic Sports Drink</div>

        {/* Comparison Rows */}
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <div className="compare-col font-medium text-gray-300">
              {item.title}
            </div>
            <div className="compare-col bg-[#FF4C61]/20 p-4 rounded-lg">
              {item.fokus}
            </div>
            <div className="compare-col bg-white/10 p-4 rounded-lg">
              {item.energy}
            </div>
            <div className="compare-col bg-white/10 p-4 rounded-lg">
              {item.sports}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default WhyFokus;
