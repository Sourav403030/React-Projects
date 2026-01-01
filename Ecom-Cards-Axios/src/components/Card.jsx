import React from "react";

const Card = (props) => {
  return (
    <div className="">
      <div className="card bg-white h-120 w-77 p-8 rounded-3xl flex flex-col gap-5 justify-around items-center">
        <img
          className="w-40 h-40 rounded-xl bg-center bg-cover"
          src={props.img}
          alt=""
        />
        <div className="infos flex flex-col gap-1">
          <h1 className="text-xl text-gray-600 font-semibold">{props.title}</h1>
          <div className="ratings flex gap-5">
            <h3 className="px-2 py-1 bg-gray-200 rounded-xl text-sm font-medium">
              <i className="ri-star-fill text-yellow-500"></i> {props.rating}
            </h3>
            <h3 className="px-2 py-1 bg-gray-200 rounded-xl text-sm font-medium">
              <i class="ri-stack-fill text-blue-400"></i> {props.count}
            </h3>
          </div>
        </div>
        <div className="bottom flex justify-between items-center mt-4 w-full gap-4">
          <div className="price">
            <h3 className="text-sm text-gray-500">Price</h3>
            <h1 className="text-xl font-semibold">${props.price}</h1>
          </div>
          <div className="button bg-[#2C2C2C] text-white px-3 py-3 rounded-3xl w-full text-center cursor-pointer">
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
