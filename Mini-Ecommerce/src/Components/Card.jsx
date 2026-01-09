import React, { useContext } from "react";
import { productDataContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const Card = () => {
    let navigate = useNavigate();
   let productData =  useContext(productDataContext);
   if(productData.length === 0){
    return <h1>Loading...</h1>
   }
  return (
    productData.map((product, idx) => {
      return (
        <div key={idx} className="product w-full sm:w-80 lg:w-72 xl:w-80 h-96 sm:h-[420px] bg-[#eee] p-4 sm:p-6 flex flex-col justify-between rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 mx-auto">
          <div className="image-container h-36 sm:h-44 lg:h-48 flex items-center justify-center">
            <img
              className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain rounded-xl"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="product-details flex flex-col gap-2 grow px-2">
            <h1 className="text-base sm:text-lg  font-bold line-clamp-2 overflow-hidden text-ellipsis leading-tight text-gray-800">
              {product.title}
            </h1>
            <h2 className="text-lg sm:text-xl font-semibold text-green-700">${product.price}</h2>
          </div>
          <button onClick={()=>{
            navigate(`/product/${product.id}`);
          }} className="px-4 py-2 sm:px-5 sm:py-2 bg-[#111] text-white rounded-xl active:scale-95 hover:bg-gray-800 cursor-pointer transition-all duration-200 text-sm sm:text-base">
            View Details
          </button>
        </div>
      )
    })
  );
};

export default Card;
