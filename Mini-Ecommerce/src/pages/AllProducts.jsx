import React from "react";
import Card from "../Components/Card";

const AllProducts = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
        <Card/>
      </div>
    </div>
  );
};

export default AllProducts;
