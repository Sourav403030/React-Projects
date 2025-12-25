import React from 'react'

const Movieoftheday = () => {
  return (
    <>
    <div className='m-5 mr-10 bg-[url("https://m.media-amazon.com/images/S/pv-target-images/33d554c8ea607e6dd5f01767fd0d7053954de54efa315100c2ed16650253f019.jpg")] bg-cover bg-center rounded-3xl h-100 p-5'>
    <div className="top  w-fit px-3 py-1 rounded-xl border border-gray-600 backdrop-blur-lg bg-orange-900">
        <h1 className='text-white font-poppins'>🔥 Now Trending</h1>
    </div>
    <div className="center text-white mt-15 w-lg">
        <div className="tags flex gap-2">
            <h3 className='px-3 py-1 text-sm rounded-xl border border-gray-800 backdrop-blur-lg font-poppins'>Horror</h3>
            <h3 className='px-3 py-1 text-sm rounded-xl border border-gray-800 backdrop-blur-lg font-poppins'>Supernatural</h3>
        </div>
        <h1 className='mt-5 text-4xl font-poppins font-semibold text-gray-100'>Uncovers how fear began in <span className='text-red-600'>Derry</span> long before <span className='text-red-600'>IT</span>.</h1>
    </div>
    <div className="bottom text-white mt-10 flex gap-5">
        <button className='px-5 py-2 text-base bg-[#B695EC] text-black font-poppins rounded-xl font-medium border-none'><i className="ri-play-line text-black text-xl font-medium"></i>Watch Now</button>
        <button className='px-3 py-1 backdrop-blur-sm border border-gray-600 rounded-xl'><i class="ri-download-2-line text-lg"></i></button>
        <button className='px-3 py-1 backdrop-blur-sm border border-gray-600 rounded-xl'><i class="ri-more-2-fill text-lg"></i></button>
    </div>
    </div>
    </>
  )
}

export default Movieoftheday