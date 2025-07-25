import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ingredients = [
  "Vitamin D3",
  "Water",
  "Coconut Water (22%)",
  "Sucralose",
  "Taurine",
  "Ginseng Extract",
  "Ginkgo Biloba Extract",
  "Creatine",
  "Glutamine",
  "LCLT (L-Carnitine L-Tartrate)",
  "5-HTP",
  "Inositol",
];

const IngredientsSection = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.from(itemsRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-lime-200 w-full py-16 px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-10 relative"
    >
      <img
        src="/IngredieantsImg/trioBottle.webp"
        alt="Bottle group"
        className="w-full max-w-[300px] lg:max-w-[400px] drop-shadow-xl"
      />

      <div className="max-w-2xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
          Ingredients
        </h2>
        <p className="text-sm md:text-base text-gray-800 mb-6">
          Crafted with the Finest Natural Ingredients for Refreshing Taste
        </p>

        <ul className="space-y-3">
          {ingredients.map((ingredient, i) => (
            <li
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className="bg-white/60 backdrop-blur-md border border-black/10 px-4 py-3 rounded-xl text-black shadow-md flex justify-between items-center"
            >
              <span className="font-semibold">{ingredient}</span>
              <span className="text-xl font-bold text-black">+</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default IngredientsSection;
