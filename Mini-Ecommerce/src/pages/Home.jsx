import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  return (
    <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 py-8 bg-linear-to-br from-gray-50 to-blue-50">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 lg:gap-10 text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 leading-tight">
            Your <span className="text-blue-500">One-Stop<br className="hidden sm:block" /> Shop</span> for Everything<br className="hidden sm:block" /> You Need!
          </h1>
          <button
            onClick={() => {
              navigate("/all-products");
            }}
            className="px-8 py-3 sm:px-12 sm:py-4 lg:px-20 lg:py-4 bg-[#111] w-fit mx-auto lg:mx-0 text-white rounded-2xl sm:rounded-3xl text-base sm:text-lg lg:text-xl active:scale-95 hover:bg-gray-800 cursor-pointer transition-all duration-200 shadow-lg"
          >
            Explore Products
          </button>
        </div>
        <div className="order-1 lg:order-2 w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg">
          <img 
            className="w-full h-auto object-contain drop-shadow-lg" 
            src="/landing-page-image.png" 
            alt="Shopping illustration" 
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
