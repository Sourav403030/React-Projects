import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let productData = async () => {
      let response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
      console.log(response.data);
    };
    productData();
  }, []);

  return (
    <div className="flex flex-wrap m-10 gap-3">
      {data.map((item, idx) => {
        return (
          <div key={idx}>
            {" "}
            <Card
              title={item.title}
              price={item.price}
              img={item.image}
              rating={item.rating.rate}
              count={item.rating.count}
            />{" "}
          </div>
        );
      })}
    </div>
  );
};

export default App;
