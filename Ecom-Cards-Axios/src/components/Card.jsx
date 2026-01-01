import React from 'react'

const Card = () => {
  return (
    <div className='m-10 flex flex-wrap gap-3'>
        <div className="card bg-white w-77 p-8 rounded-3xl flex flex-col gap-5 justify-center items-center">
            <img className='w-60 rounded-xl' src="https://images.unsplash.com/photo-1766654271534-575410ad1468?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="infos flex flex-col gap-1">
                <h1 className='text-2xl text-gray-600 font-semibold'>Dunk High Sneakers</h1>
                <div className="ratings flex gap-5">
                    <h3 className='px-2 py-1 bg-gray-200 rounded-xl text-sm font-medium'><i className="ri-star-fill text-yellow-500"></i> 3.9</h3>
                    <h3 className='px-2 py-1 bg-gray-200 rounded-xl text-sm font-medium'><i class="ri-stack-fill text-blue-400"></i> - 120</h3>
                </div>
            </div>
            <div className="bottom flex justify-between items-center mt-4 w-full gap-4">
                <div className="price">
                    <h3 className='text-sm text-gray-500'>Price</h3>
                    <h1 className='text-xl font-semibold'>$120.00</h1>
                </div>
                <div className="button bg-[#2C2C2C] text-white px-3 py-3 rounded-3xl w-full text-center">Buy Now</div>
            </div>
        </div>
    </div>
  )
}

export default Card