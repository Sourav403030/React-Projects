import React from 'react'

const Youmightlike = () => {

    let movies = [
        {
            name: "IT",
            image: "https://m.media-amazon.com/images/M/MV5BZGZmOTZjNzUtOTE4OS00OGM3LWJiNGEtZjk4Yzg2M2Q1YzYxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        },
        {
            name: "The Nun",
            image: "https://pauline.org/wp-content/uploads/2025/05/db50b9762568e6be595af4dd34c9c6c1.jpg",
        },
        {
            name: "Hereditary",
            image: "https://m.media-amazon.com/images/S/pv-target-images/2be98bed028f1d53e01a860b6bb91c362dc32611c45effbcf2aa2645d590b22a.jpg",
        },
        {
            name: "Weapons",
            image: "https://m.media-amazon.com/images/S/pv-target-images/172f8a6a64a8acd12e4d1e31610dc5d98a56b8dd6e3ca614d42643a3820cc337.jpg",
        },
        {
            name: "Terrifier 3",
            image: "https://dvvy6louqcr7j.cloudfront.net/vista/HO00015258/heroPoster/terrifier-3.png",
        },
        {
            name: "Sinister",
            image: "https://cdn-images.dzcdn.net/images/cover/9e6490702e528a59d806a675de535daf/0x1900-000000-80-0-0.jpg",
        },
        
    ]

  return (
    <>
    {movies.map((elem, index)=>{
        return(
            <div key={index} className='w-50 bg-[#262034] p-2 ml-5 mb-5 rounded-2xl'>
        <img className='rounded-xl h-70' src={elem.image} alt="" />
        <h1 className='text-lg text-white font-poppins text-center mt-3'>{elem.name}</h1>
    </div>
        )
    })}
    </>
  )
}

export default Youmightlike