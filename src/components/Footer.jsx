import React from "react";
import {
  RiInstagramLine,
  RiYoutubeLine,
  RiMailLine,
  RiTwitterXLine,
} from "@remixicon/react";

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
        
        <div>
          <h1 className="text-3xl font-bold tracking-tight">FOKUS</h1>
          <p className="mt-4 text-sm text-gray-400">
            &copy; 2025, Fokus Beverages Private Limited.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#FF4C61]">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Shop</a></li>
            <li><a href="#">Orders</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Shipping Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#FF4C61]">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Know Fokus</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Customer Service</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#FF4C61]">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>

          <div className="mt-6 flex items-center gap-4 text-xl text-white">
            <a href="#" className="hover:text-[#FF4C61] transition">
              <RiTwitterXLine size={20} />
            </a>
            <a href="#" className="hover:text-[#FF4C61] transition">
              <RiInstagramLine size={20} />
            </a>
            <a href="#" className="hover:text-[#FF4C61] transition">
              <RiYoutubeLine size={20} />
            </a>
            <a href="#" className="hover:text-[#FF4C61] transition">
              <RiMailLine size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-500">
        Made with <span className="text-[#FF4C61]">&#10084;</span> by the Fokus team.
      </div>
    </footer>
  );
};

export default Footer;
