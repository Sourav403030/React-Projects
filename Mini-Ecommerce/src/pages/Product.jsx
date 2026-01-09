import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { productDataContext } from '../context/ProductContext';

const Product = () => {
    let productData = useContext(productDataContext);
    let {productId} = useParams();

    let selectedProduct = '';

    if(productData.length > 0){
        selectedProduct = productData.find((product)=> product.id === parseInt(productId));
    }

    if(productData.length === 0){
        return <h1>Loading...</h1>
    }

    let toast = ()=>{
        alert(`Your product ${selectedProduct.title} has been purchased successfully!`);
    }

    console.log(productId);
  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-gray-50'>
        <div className="product-details-container max-w-6xl w-full">
            <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg'>
                <div className="image-container shrink-0 w-full lg:w-1/2">
                    <img className='w-full max-w-md mx-auto lg:max-w-full h-64 sm:h-80 lg:h-96 rounded-2xl object-contain bg-gray-100 p-4' src={selectedProduct.image} alt={selectedProduct.title} />
                </div>
                <div className="product-details flex flex-col gap-4 lg:gap-6 w-full lg:w-1/2">
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111] leading-tight'>{selectedProduct.title}</h1>
                    <h3 className='text-sm sm:text-base font-light text-gray-600 leading-relaxed'>{selectedProduct.description}</h3>
                    <div className="ratings-count flex flex-wrap gap-3 sm:gap-4">
                        <h4 className='px-3 py-2 bg-[#eae7e7] rounded-xl text-xs sm:text-sm font-semibold text-center flex items-center gap-1'>
                            <span><i className="ri-star-fill text-yellow-500"></i></span> 
                            {selectedProduct.rating.rate}
                        </h4>
                        <h4 className='px-3 py-2 bg-[#eae7e7] rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1'>
                            <span><i className="ri-stack-fill text-blue-500"></i></span> 
                            {selectedProduct.rating.count} in Stock
                        </h4>
                    </div>
                    <h1 className='text-2xl sm:text-3xl font-bold text-green-600 mt-2'>${selectedProduct.price}</h1>
                    <button onClick={toast} className='px-6 py-3 sm:px-8 sm:py-4 bg-black text-white rounded-xl font-semibold text-base sm:text-lg active:scale-95 hover:bg-gray-800 cursor-pointer transition-all duration-200 mt-4'>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product