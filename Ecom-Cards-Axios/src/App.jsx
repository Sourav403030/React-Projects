import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import axios from 'axios';

const App = () => {

  const [data, setData] = useState([]);

  let productData = async()=>{
    let response = await axios.get("https://fakestoreapi.com/products");
    setData(response.data);
    console.log(data);
  }

  useEffect(()=>{
    productData();
  },[])


  return (
    <div>
      <Card/>
    </div>
  )
}

export default App