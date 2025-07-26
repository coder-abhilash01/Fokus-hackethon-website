import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
     
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-3701284-3119148.png"
        alt="404 Illustration"
        className="w-72 md:w-96 mb-8 animate-fade-in"
      />

      <h1 className="text-6xl md:text-8xl font-extrabold text-[#FF4C61] drop-shadow-lg">404</h1>

      <p className="mt-4 text-xl md:text-2xl font-semibold">Page Not Found</p>
      <p className="mt-2 text-gray-400 max-w-md">
        Looks like you’ve entered a void. The page you’re looking for doesn’t exist or was moved.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block bg-[#FF4C61] text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-[#e53e53] transition-all duration-300"
      >
        ⬅ Go Home
      </Link>
    </div>
  );
};

export default PageNotFound;
