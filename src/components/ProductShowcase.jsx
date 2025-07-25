import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const images = [
  {
    src: "https://fokus.shop/cdn/shop/files/Pack_of_3_copy_2.jpg?v=1738311491&width=1920",
    label: "Pack of 3",
  },
  {
    src: "https://fokus.shop/cdn/shop/files/Pack_of_3_imafe_1_3.jpg?v=1741682761&width=1920",
    label: "Mango Pineapple",
  },
  {
    src: "https://fokus.shop/cdn/shop/files/fks.jpg?v=1738311491&width=1920",
    label: "Kiwi Lemon",
  },
  {
    src: "https://fokus.shop/cdn/shop/files/Packof3imafe2_1.jpg?v=1741682761&width=1920",
    label: "Strawberry Watermelon",
  },
];

const ProductShowcase = () => {
  const cartIconRef = useRef(null);
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const mainImgRef = useRef(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      mainImgRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
    );
  }, [activeIndex]);

  const handleAddToCart = () => {
    addToCart(
      {
        id: images[activeIndex].src,
        name: images[activeIndex].label,
        price: 150,
        image: images[activeIndex].src,
      },
      quantity
    );

    toast.success("Item added to cart!", {
      position: "top-right",
      autoClose: 1200,
      theme: "colored",
    });

    gsap.fromTo(
      cartIconRef.current,
      { scale: 1 },
      {
        scale: 1.5,
        duration: 0.3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: 1,
      }
    );

    setTimeout(() => navigate("/cart"), 1500);
  };

  return (
    <div className="min-h-screen bg-[#e5f385] pt-[130px] px-4 md:px-10 py-10 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
       
        <div className="flex md:flex-col gap-3 flex-wrap justify-center md:justify-start">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              onClick={() => setActiveIndex(idx)}
              className={`w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover cursor-pointer transition-all duration-300 select-none ${
                activeIndex === idx
                  ? "ring-4 ring-black scale-105"
                  : "hover:scale-105"
              }`}
              alt={`Thumbnail ${idx}`}
            />
          ))}
        </div>

       
        <div className="flex-1">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-black">
            <img
              ref={mainImgRef}
              src={images[activeIndex].src}
              alt="Main"
              className="w-full h-auto object-cover transition-all"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-[40%] space-y-6">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-black select-none">
            Fokus Hydration Pack of 3
          </h1>
          <span className="bg-white px-3 py-1 text-sm rounded-full shadow inline-block select-none">
            3 Flavors, 1 Bottle Each
          </span>

         
          <div className="flex flex-wrap gap-3">
            {images.slice(1).map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveIndex(idx + 1)}
                className={`cursor-pointer border rounded-md p-1 transition select-none ${
                  activeIndex === idx + 1
                    ? "border-black shadow-md"
                    : "hover:shadow"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-24 h-16 object-contain max-w-full select-none"
                />
                <p className="text-xs text-center mt-1 select-none">{img.label}</p>
              </div>
            ))}
          </div>

      
          <p className="text-xl font-semibold text-black select-none">
            Rs. 450.00 <span className="text-sm">(Rs. 150x3)</span>
          </p>
          <p className="text-sm text-gray-700 select-none">
            Tax included. Shipping calculated at checkout.
          </p>

          
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <div className="flex items-center border border-black rounded select-none">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 text-xl font-bold hover:bg-black hover:text-white transition select-none"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 text-xl font-bold hover:bg-black hover:text-white transition select-none"
              >
                +
              </button>
            </div>

            <button
              className="bg-black text-white px-6 py-2 rounded shadow hover:scale-105 transition-all duration-300 relative overflow-hidden select-none"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

            <i
              ref={cartIconRef}
              className="ri-shopping-cart-2-line text-2xl text-black select-none"
            ></i>
          </div>

        
          <ul className="mt-4 space-y-2 bg-white rounded-lg shadow p-4 text-sm select-none">
            <li>✅ Free Shipping on all orders for 24 Hours</li>
            <li>🚚 Orders delivered in 10–15 working days</li>
            <li>💳 Prepaid orders only</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
