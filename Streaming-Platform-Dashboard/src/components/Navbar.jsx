import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='mt-5 ml-5 mr-10 flex items-center justify-between'>
      <input className='border-[#353245] bg-[#262034] p-3 w-xl rounded-xl placeholder:text-gray-400 placeholder:pl-2 focus:outline-none focus:border-[#353245] focus:border text-white focus:p-3'  type="text" placeholder='Search for Films' />
      <div className="right-nav flex gap-6 items-center">
        <h2><i class="ri-notification-3-line text-white text-xl"></i></h2>
        <img className='h-10 w-10 rounded-full' src="https://img.freepik.com/free-vector/smiling-young-man-hoodie_1308-176157.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
      </div>
    </div>
    </>
  )
}

export default Navbar