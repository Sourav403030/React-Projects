import React from "react";

const Card = ({company, role, qualities, salaryPerHour, location, isSaved, logo}) => {
  return (
    <div className="bg-white rounded-3xl m-10 flex flex-col justify-between items-center p-4 w-80 shadow-lg shadow-gray-400">
      <div className="top flex justify-between items-center w-full px-2">
        <img
          className="w-8 h-8"
          src={logo}
          alt=""
        />
        {isSaved ? <button className="px-3 py-1 border border-gray-200 rounded-md text-xs text-gray-500">
          Save <i class="ri-bookmark-line"></i>
        </button> : <button className="px-3 py-1 border border-gray-200 rounded-md text-xs text-gray-500">
          Save <i class="ri-bookmark-fill"></i>
        </button>}
      </div>
      <div className="center mt-5 text-start w-full px-2">
        <h3 className="text-sm  font-semibold">{company}</h3>
        <h1 className="text-xl font-semibold">{role}</h1>
        <div className="features flex items-center gap-5">
            <h4 className="px-3 py-1 bg-gray-200 text-xs mt-2 rounded-md font-semibold">{qualities[0]}</h4>
            <h4 className="px-3 py-1 bg-gray-200 text-xs mt-2 rounded-md font-semibold">{qualities[1]}</h4>
        </div>
      </div>
      <hr className="w-full border-gray-200 my-4 mt-25" />
      <div className="bottom mt-4 flex justify-between items-center w-full px-2">
        <div className="bottom-left">
            <h1 className="font-semibold">${salaryPerHour}/hr</h1>
            <h3 className="text-xs font-light text-gray-400">{location}</h3>
        </div>
        <div className="bottom-right">
            <button className="px-4 py-2 text-xs bg-black text-white rounded-lg">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
