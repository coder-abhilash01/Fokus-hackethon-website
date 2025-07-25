import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextReveal = () => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  const content = [
    { type: "text-video", text: "KNOW", video: "/videos/revealVideos1.mp4" },
    { type: "video-text", text: "FOKUS", video: "/videos/revealVideos2.mp4" },
    { type: "text-video", text: "KNOW", video: "/videos/revealVideos3.mp4" },
    { type: "video-text", text: "US", video: "/videos/revealVideos4.mp4" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
        const textEl = item.querySelector(".reveal-text");
        const videoEl = item.querySelector(".reveal-video");

        // Animate Text
        gsap.from(textEl, {
          x: index % 2 === 0 ? -200 : 200,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "top 50%",
            scrub: true,
          },
        });

        // Animate Video
        gsap.from(videoEl, {
          x: index % 2 === 0 ? 200 : -200,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "top 50%",
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen bg-black flex flex-col items-center justify-center gap-[10vh] py-[10vh]"
    >
      {content.map((item, index) => (
        <div
          key={index}
          ref={(el) => (itemsRef.current[index] = el)}
          className={`w-full flex items-center justify-center gap-12 px-8 ${
            item.type === "text-video" ? "flex-row" : "flex-row-reverse"
          }`}
        >
          {/* Text */}
          <h1
            className="reveal-text text-[12vw] text-white whitespace-nowrap leading-[1]"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontWeight: 400,
              fontStyle: "normal",
            }}
          >
            {item.text}
          </h1>

          {/* Video */}
          <div className="reveal-video w-[30vw] aspect-4/3 overflow-hidden rounded-2xl shadow-lg">
            <video
              src={item.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TextReveal;
