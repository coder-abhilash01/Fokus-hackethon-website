import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const sections = [
  {
    title: "THE SECRET SAUCE OF FOKUS",
    bg: "bg-[#FE5F55]",
    bottle: "bottlesAndBanner/StrawberryBottle.png",
    icons: [
      "https://fokus.shop/cdn/shop/files/icon3.png?v=1737367832",
      "https://fokus.shop/cdn/shop/files/increase_energy_icon_1.png?v=1738220359",
    ],
    features: [
      {
        heading: "VITAMIN D3",
        desc:
          "Tackling India’s vitamin D shortage, one bottle at a time. Because let’s face it, we all need a little more sunshine in our lives.",
      },
      {
        heading: "NO SUGAR",
        desc:
          "Healthy can taste amazing! Get all the taste without the added sugar, so you can sip guilt-free.",
      },
      {
        heading: "COCONUT WATER (22%)",
        desc: "Because who wouldn’t want a mini beach vacation with every sip?",
      },
    ],
  },
  {
    title: "COOL LOOK, COOLER CONSCIENCE",
    bg: "bg-[#F9CB28]",
    bottle: "/bottlesAndBanner/mangoBottle.png",
    icons: [
      "https://fokus.shop/cdn/shop/files/icon1.png?v=1737367832",
    ],
    content:
      "Our branding isn’t just easy on the eyes—it’s designed to make you feel great too. With vibrant colors, bold designs, and all the info you need, every bottle of Fokus stands out and tells a story. And about that plastic bottle? No worries—it’s 100% recyclable. So, you can sip guilt-free, knowing we’re doing our part to keep the planet as fresh as you feel!",
  },
  {
    title: "THE #GET FOKUS REVOLUTION",
    bg: "bg-[#00D26A]",
    bottle: "/bottlesAndBanner/kiwiBottle.png",
    icons: [
      "https://fokus.shop/cdn/shop/files/icon2.png?v=1737367832",
      "https://fokus.shop/cdn/shop/files/increase_energy_icon_1.png?v=1738220359",
    ],
    content:
      "With Abhishek and Nischay Malhan leading the charge, we’re not just creating a brand—we’re creating a movement. #GetFokus isn’t just a hashtag; it’s a tribe. So, join in, talk, share, form Fokus groups, and get ready to take over the world—one focused moment at a time.",
  },
];

const InfoBlocks = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="w-full">
      {sections.map((sec, i) => (
        <div
          key={i}
          data-aos="fade-up"
          className={`${sec.bg} text-black py-16 px-6 md:px-24 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden`}
        >

          <div className="w-full md:w-2/3 relative z-10">
            <div className="inline-block bg-white rounded-lg px-4 py-2 mb-6 font-bold text-sm shadow">
              {sec.title}
            </div>

            {sec.features ? (
              <ul className="space-y-5">
                {sec.features.map((f, idx) => (
                  <li key={idx}>
                    <p className="font-bold uppercase text-sm md:text-base">{f.heading}</p>
                    <p className="text-black/80 text-sm md:text-base mt-1">{f.desc}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-black/90 text-base md:text-lg leading-relaxed">
                {sec.content}
              </p>
            )}
          </div>

        
          <div className="w-full md:w-1/3 flex justify-center relative z-10">
            <div className="relative w-fit">
             
              <img
                src={sec.bottle}
                alt="Fokus Bottle"
                className="w-[160px] md:w-[240px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] animate-float"
              />

           
              {sec.icons?.map((icon, idx) => (
                <img
                  key={idx}
                  src={icon}
                  alt="icon"
                  className={`absolute w-[40px] md:w-[80px] ${
                    idx % 2 === 0 ? "top-[-20px] left-[-30px]" : "bottom-[-20px] right-[-30px]"
                  } animate-bounce`}
                  style={{ animationDelay: `${idx * 0.4}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default InfoBlocks;
