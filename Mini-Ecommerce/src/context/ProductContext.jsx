import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export let productDataContext = createContext();

const ProductContext = ({children}) => {

    const [productData, setProductData] = useState([]);

    let fetchProductData = async ()=>{
        let response = await axios.get("https://fakestoreapi.com/products");
        setProductData(response.data);
    }

    useEffect(()=>{
        fetchProductData();
    },[])

  return (
    <div>
        <productDataContext.Provider value={productData} >
            {children}
        </productDataContext.Provider>
    </div>
  )
}

export default ProductContext