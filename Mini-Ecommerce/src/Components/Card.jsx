import React, { useContext } from "react";
import { productDataContext } from "../context/ProductContext";

const Card = () => {
   let productData =  useContext(productDataContext);
   if(productData.length === 0){
    return <h1>Loading...</h1>
   }
  return (
    productData.map((product, idx) => {
      return (
        <div key={idx} className="product w-70 h-96 bg-[#bbb] p-6 flex flex-col justify-between rounded-2xl">
          <div className="image-container h-48 flex items-center justify-center">
            <img
              className="w-32 h-32 object-contain rounded-xl"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="product-details flex flex-col gap-2 grow">
            <h1 className="text-lg font-bold line-clamp-2 overflow-hidden text-ellipsis leading-tight">
              {product.title}
            </h1>
            <h2 className="text-xl font-semibold text-green-700">${product.price}</h2>
          </div>
          <button className="px-5 py-2 bg-[#111] text-white rounded-xl active:scale-95 cursor-pointer transition-transform">
            View Details
          </button>
        </div>
      )
    })
  );
};

export default Card;
