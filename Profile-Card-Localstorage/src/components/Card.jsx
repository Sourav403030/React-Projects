import React from 'react'

const Card = ({allUserData}) => {
  return (
    <>
    {allUserData.map((user, index)=>{
      return (
        <div id={index} className='flex flex-wrap'>
      <div className='w-full max-w-xs mx-auto h-80 sm:h-96 lg:h-112 m-3 sm:m-5 rounded-2xl relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
      <img className='w-full h-full object-cover object-center rounded-2xl' src={user.imgUrl} alt="" />
      <div className="card-details absolute bottom-0 p-4 sm:p-6 w-full bg-white/10 backdrop-blur-sm rounded-b-2xl">
        <h1 className='text-black font-semibold text-xl sm:text-2xl lg:text-3xl drop-shadow-lg'>{user.name}</h1>
        <h3 className='text-gray-800 text-sm sm:text-base font-bold drop-shadow-md'>{user.role}</h3>
        <p className='text-gray-800 text-xs sm:text-sm mt-1 drop-shadow-sm leading-relaxed'>{user.description}</p>
      </div>
    </div>
    </div>
      )
    })}
    </>
  )
}


export default Card