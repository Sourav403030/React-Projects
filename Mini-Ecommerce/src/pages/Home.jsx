import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen bg-[#999] flex-col gap-10">
      <h1 className="text-9xl font-bold text-gray-800 underline">
        Random Shop
      </h1>
      <button
        onClick={() => {
          navigate("/all-products");
        }}
        className="px-20 py-5 bg-[#111] text-white rounded-3xl text-2xl active:scale-95 cursor-pointer"
      >
        Explore
      </button>
    </div>
  );
};

export default Home;
