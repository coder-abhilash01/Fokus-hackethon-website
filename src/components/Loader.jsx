
import { useEffect } from "react";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  useEffect(() => {
    const letters = document.querySelectorAll(".letter");

    gsap.to(letters, {
      opacity: 1,
      rotateX: 0,
      scale: 1,
      filter: "blur(0px)",
      stagger: 0.1,
      duration: 0.6,
      ease: "back.out(1.7)",
      onComplete: () => {
        gsap.to("#brandName", {
          scale: 1.05,
          duration: 0.4,
          repeat: 1,
          yoyo: true,
          ease: "power1.inOut",
        });

        gsap.to("#brandName", {
          scale: 25,
          rotate: 15,
          duration: 1.4,
          delay: 0.6,
          ease: "expo.inOut",
        });

        gsap.to("#loader", {
          backgroundColor: "#222",
          duration: 0.6,
          delay: 1,
          yoyo: true,
          repeat: 1,
          ease: "power1.inOut",
        });

        gsap.to("#loader", {
          opacity: 0,
          duration: 1,
          delay: 2,
          onComplete: () => {
            onComplete();
          },
        });
      },
    });
  }, [onComplete]);

  const brand = "FOKUS";

  return (
    <div
      id="loader"
      className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
    >
      <div
        id="brandName"
        className="flex gap-1"
      >
        {[...brand].map((char, index) => (
          <span
            key={index}
            className="letter text-white text-4xl font-extrabold inline-block opacity-0 transform scale-[0.8] rotate-x-90 blur-sm"
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loader;
