import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Menu, X } from "lucide-react"; 

const Nav = () => {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    isActive ? "text-red-500" : "hover:text-red-500 transition";

  return (
    <nav className="w-full fixed z-20 bg-white text-lg shadow-lg text-black backdrop-blur-md">
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
       
        <img
          src="https://fokus.shop/cdn/shop/files/RGB_Digital_Use__Fokus_Logo_Black.png?v=1718300315&width=280"
          alt="logo"
          className="w-28 md:w-36"
        />


        <div className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className={linkStyle}>Home</NavLink>
          <NavLink to="/knowus" className={linkStyle}>KnowUs</NavLink>
          <NavLink to="/product" className={linkStyle}>Product</NavLink>
        </div>

        
        <div className="flex items-center gap-4">
          <NavLink to="/cart" className={({ isActive }) =>
            `${isActive ? "text-red-500" : ""} relative`
          }>
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </NavLink>
          <NavLink to="/login" className={linkStyle}>Login</NavLink>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-white shadow-md">
          <NavLink to="/" className={linkStyle} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/knowus" className={linkStyle} onClick={() => setMenuOpen(false)}>KnowUs</NavLink>
          <NavLink to="/product" className={linkStyle} onClick={() => setMenuOpen(false)}>Product</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Nav;
