import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://fokus.shop/cdn/shop/files/Fokus_Kiwi_banner_copy.jpg?v=1737721048')",
      }}
    >
      <div className="bg-black/40 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-8 md:p-12 w-full max-w-md animate-fade-in">
        <h2 className="text-white text-3xl font-bold mb-6 text-center drop-shadow-md">
          Welcome Back
        </h2>

        <form className="space-y-5">
          <div>
            <label className="text-white font-medium text-sm">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
          </div>

          <div>
            <label className="text-white font-medium text-sm">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-pink-500 text-black font-semibold shadow-lg hover:shadow-yellow-300/40 transition-all duration-300 hover:-translate-y-[2px]"
          >
            Login
          </button>
        </form>

        <p className="text-white/80 text-center text-sm mt-6">
          Don’t have an account?{" "}
          <Link to={"/register"}>
            Sign Up
            </Link>
          
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
