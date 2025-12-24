import React, { useState } from "react";

const Card = () => {
  const foodItems = [
    {
      id: 1,
      name: "Chicken Biryani",
      image:
        "https://png.pngtree.com/png-clipart/20230522/original/pngtree-chicken-biryani-front-view-png-image_9167532.png",
      weight: 500,
      price: 150,
      isSelected: false,
      count: 0,
      newPrice: 0,
    },
    {
      id: 2,
      name: "Paneer Butter Masala",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/056/102/177/small_2x/indian-paneer-butter-masala-isolated-on-transparent-background-free-png.png",
      weight: 400,
      price: 220,
      isSelected: false,
      count: 0,
      newPrice: 0,
    },
    {
      id: 3,
      name: "Veg Fried Rice",
      image:
        "https://thumbs.dreamstime.com/b/png-spicy-fried-rice-wooden-bowl-transparent-background-378547773.jpg",
      weight: 350,
      price: 250,
      isSelected: false,
      count: 0,
      newPrice: 0,
    },
    {
      id: 4,
      name: "Chicken Burger",
      image:
        "https://t4.ftcdn.net/jpg/06/30/91/67/360_F_630916772_AK3uAczXE6VflmRKAWzY0sC7f8enWw5l.jpg",
      weight: 250,
      price: 140,
      isSelected: false,
      count: 0,
      newPrice: 0,
    },
    {
      id: 5,
      name: "Margherita Pizza",
      image:
        "https://png.pngtree.com/png-vector/20241211/ourmid/pngtree-authentic-italian-pizza-with-cheese-and-fresh-vegetable-toppings-png-image_14714611.png",
      weight: 600,
      price: 130,
      isSelected: false,
      count: 0,
      newPrice: 0,
    },
    {
      id: 6,
      name: "Masala Dosa",
      image:
        "https://static.vecteezy.com/system/resources/previews/068/966/201/non_2x/masala-dosa-on-plate-with-chutneys-isolated-on-transparent-background-png.png",
      weight: 300,
      price: 80,
      isSelected: false,
      count: 0,
      newPrice: 0,
    },
    {
      id: 7,
      name: "Chicken Shawarma",
      image:
        "https://static.vecteezy.com/system/resources/previews/025/222/157/non_2x/shawarma-sandwich-isolated-on-transparent-background-png.png",
      weight: 110,
      price: 4.75,
      isSelected: false,
      count: 0,
      newPrice: 0,
    },
    {
      id: 8,
      name: "Veg Momos",
      image:
        "https://png.pngtree.com/png-clipart/20250206/original/pngtree-traditional-newari-momos-on-white-background-png-image_20372781.png",
      weight: 90,
      price: 3.49,
      isSelected: false,
      count: 0,
      newPrice: 0,
    },
  ];

  const [items, setItems] = useState(foodItems);

  function AddToCart(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isSelected: true, count: 1 } : item
      )
    );
  }

  function increaseCount(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, count: item.count + 1, newPrice: item.price * item.count} : item
      )
    );
  }

  function decreaseCount(id) {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, count: item.count > 1 ? item.count - 1 : 1, newPrice: (item.count * item.price) - item.price }
          : item
      )
    );
  }

  return items.map((elem) => {
    return (
      <div>
        <div
          key={elem.id}
          className="w-70 bg-white p-5 m-10 flex items-center rounded-3xl flex-col gap-2"
        >
          <img className="w-30 object-cover" src={elem.image} alt="" />
          <h1 className="text-2xl font-bold text-center">{elem.name}</h1>
          <h3 className="text-md text-gray-400">{elem.weight}g</h3>
          <h2 className="text-xl font-black text-[#FEC93F]">₹{elem.newPrice > 0? elem.newPrice: elem.price}</h2>
          {elem.isSelected ? (
            <div className="counter flex gap-5 items-center justify-center mt-5">
              <button
                onClick={() => increaseCount(elem.id)}
                className="px-3 py-1 bg-blue-400 text-white font-bold rounded-lg cursor-pointer"
              >
                +
              </button>
              <h1 className="text-xl font-medium">{elem.count}</h1>
              <button
                onClick={() => decreaseCount(elem.id)}
                className="px-3 py-1 bg-red-400 text-white font-bold rounded-lg cursor-pointer"
              >
                -
              </button>
            </div>
          ) : (
            <button
              onClick={() => AddToCart(elem.id)}
              className="px-3 py-1 bg-[#6B964B] text-white rounded-xl font-medium mt-5 cursor-pointer"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    );
  });
};

export default Card;
