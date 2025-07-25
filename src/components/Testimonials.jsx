import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    name: "Ashish Chanchlani",
    img: "/testimonialsImg/ashish.webp",
    text: "Fokus—naam hi nahi, ek vibe hai! The branding, the taste, the whole energy of it is so addictive that it’s effortlessly becoming my daily companion.",
  },
  {
    name: 'Tanmay "Scout"',
    img: "/testimonialsImg/scout.webp",
    text: "Being among the first to try Fokus, I knew from the first sip—this wasn’t just a drink; it was an experience! Now, I proudly say I’m its biggest fan.",
  },
  {
    name: "Purav Jha",
    img: "/testimonialsImg/purav.webp",
    text: "Is 400ml ki bottle mein itni cheezein hai! Gym se lekar shoot tak, har jagah Fokus mera saath dega to keep me going all day long.",
  },
    {
    name: "Aditya Rikhari",
    img: "/testimonialsImg/aditya.jpg",
    text: "Just like my songs, log Fokus ke fan hone wale hain! I absolutely love the strawberry watermelon flavour—it’s the perfect blend of taste!",
  },

];
testimonials
const Testimonials = () => {
  return (
    <section className="w-full py-20 bg-[#f9f9e6]">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        WHAT YOUR <span className="text-[#FF4C61]">FAVOURITES</span> SAY
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay]}
        className="max-w-6xl mx-auto px-4"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col">
              <img
                src={t.img}
                alt={t.name}
                className="w-full h-[380px] object-cover"
              />
              <div className="p-4 text-center flex flex-col justify-between h-full">
                <h3 className="text-lg font-bold text-[#111] mb-2">{t.name}</h3>
                <p className="text-gray-700 text-sm">{t.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
