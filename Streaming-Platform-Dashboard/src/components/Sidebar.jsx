import React from "react";

const SideBar = () => {
  return (
    <>
      <div className="m-5 bg-[#262034] w-fit p-5 flex flex-col rounded-xl border border-[#353245] h-[calc(100vh-2.5rem)]">
        <div className="heading flex items-center justify-between gap-15">
          <div className="left-heading flex gap-1 items-center">
            <h2>
              <i className="ri-tv-fill text-4xl text-[#B695EC]"></i>
            </h2>
            <h1 className="text-2xl font-poppins text-white justify-center">
              Drameeo
            </h1>
          </div>
          <h2 className="text-2xl text-gray-400">
            <i class="ri-menu-fold-line"></i>
          </h2>
        </div>
        <div className="options flex flex-col mt-5 gap-5">
          <div className="option1 flex gap-3 items-center ">
            <h2>
              <i className="ri-home-4-line text-lg text-gray-300"></i>
            </h2>
            <h1 className="text-sm text-gray-300 font-poppins">Home</h1>
          </div>
          <div className="option2 flex gap-3 items-center">
            <h2><i class="ri-compass-discover-line text-lg text-gray-300"></i></h2>
            <h1 className="text-sm text-gray-300 font-poppins">Explore</h1>
          </div>
          <div className="option3 flex gap-3 items-center">
            <h2><i class="ri-stack-line text-lg text-gray-300"></i></h2>
            <h1 className="text-sm text-gray-300 font-poppins">Genres</h1>
          </div>
          <div className="option4 flex gap-3 items-center">
            <h2><i class="ri-bookmark-line text-lg text-gray-300"></i></h2>
            <h1 className="text-sm text-gray-300 font-poppins">Favourites</h1>
          </div>
        </div>
        <hr className="mt-10 text-[#353245]" />
        <div className="options flex flex-col mt-5 gap-5">
          <div className="option1 flex gap-3 items-center ">
            <h2>
              <i className="ri-play-line text-lg text-gray-300"></i>
            </h2>
            <h1 className="text-sm text-gray-300 font-poppins">Continue Watching</h1>
          </div>
          <div className="option2 flex gap-3 items-center">
            <h2><i class="ri-time-line text-lg text-gray-300"></i></h2>
            <h1 className="text-sm text-gray-300 font-poppins">Recently Added</h1>
          </div>
          <div className="option3 flex gap-3 items-center">
            <h2><i class="ri-folder-2-line text-lg text-gray-300"></i></h2>
            <h1 className="text-sm text-gray-300 font-poppins">My Collections</h1>
          </div>
          <div className="option4 flex gap-3 items-center">
            <h2><i class="ri-download-2-line text-lg text-gray-300"></i></h2>
            <h1 className="text-sm text-gray-300 font-poppins">Downloads</h1>
          </div>
        </div>
        <hr className="mt-10 text-[#353245]" />
        <div className="system flex flex-col mt-5 justify-between h-full gap-5">
        <div className="option1 flex gap-3 items-center">
            <h2><i class="ri-settings-2-line text-xl text-gray-100"></i></h2>
            <h1 className="text-base text-gray-100 font-poppins">Settings</h1>
        </div>
        <div className="option2 flex gap-3 items-center">
            <h2><i class="ri-logout-box-r-line text-xl text-gray-100"></i></h2>
            <h1 className="text-base text-gray-100 font-poppins">Logout</h1>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default SideBar;
