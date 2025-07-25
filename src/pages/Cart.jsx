import React, { useContext, useEffect, useRef } from "react";
import { CartContext } from "../context/CartContext";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const { cart, removeFromCart, total } = useContext(CartContext);
  const containerRef = useRef(null);
  const navigate = useNavigate();


  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8fc9c] to-[#f5fefb] pt-[100px] px-6 md:px-20 pb-20">
      <div ref={containerRef} className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-black mb-10 text-center">
          Your <span className="text-[#FF4C61]">Cart</span>
        </h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            Your cart is empty. Let's go shopping 🛒
          </p>
        ) : (
          <div className="space-y-8">
            {cart.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-center justify-between backdrop-blur-lg bg-white/80 rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-6 w-full md:w-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-xl object-cover border border-gray-300"
                  />
                  <div className="flex flex-col text-left">
                    <h3 className="text-xl font-semibold text-black">{item.name}</h3>
                    <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
                    <p className="text-black font-semibold">
                      ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-4 md:mt-0 px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full font-medium transition-all"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-4">
              <p className="text-2xl font-bold text-black">
                Total: ₹{total}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => navigate("/")}
                  className="px-6 py-3 bg-white border border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300"
                >
                  Continue Shopping
                </button>

                <button className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
