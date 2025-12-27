import React, { useState } from "react";

const App = () => {
  let submitHandler = (e) => {
    e.preventDefault();
    
    // Create the new data array first
    const newData = [...dataArray, {name, number}];
    setDataArray(newData);
    console.log(newData); // Log the new array instead of the state
    
    // Clear the form fields after adding to array
    setName("");
    setNumber("");
  };

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [dataArray, setDataArray] = useState([]);

  return (
    <div>
      <div className="h-screen w-full bg-[#0F0F0F] text-white flex justify-center items-center gap-20 font-poppins">
        <div className="contact-form bg-linear-to-br from-[#1E1E1E] to [#111111] p-10 flex flex-col gap-5 rounded-xl">
          <h1 className="text-4xl font-medium">
            <span className="text-[#6972C8]">Contact</span> Form
          </h1>
          <form
            onSubmit={(e) => submitHandler(e)}
            className="flex flex-col gap-5"
          >
            <input
              className="bg-linear-to-br from-[#1E1E1E] to [#111111] p-3 focus:outline-none focus:border focus:border-[#6972C8] rounded-xl text-sm"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Name"
            />
            <input
              className="bg-linear-to-br from-[#1E1E1E] to [#111111] p-3 focus:outline-none rounded-xl text-sm focus:border focus:border-[#6972C8]"
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter your Number"
            />
            <button className="px-5 py-1 bg-[#4c58c0] w-fit rounded-lg m-auto font-medium">
              Submit
            </button>
          </form>
        </div>
        <div className="contact-card bg-linear-to-br from-[#1E1E1E] to [#111111] p-5 w-xl min-h-150 rounded-2xl">
          <h1 className="text-4xl font-medium text-[#6972C8]">Contact <span className="text-white">List</span></h1>
          <hr className="mt-7 mb-7 text-gray-800" />
          {dataArray.map((elem, idx)=>{
            return(
              <div key={idx} className="contact bg-linear-to-br from-[#1E1E1E] to [#111111] mt-2 p-4 rounded-xl flex items-center justify-between ">
            <div className="contact-left">
              <h1 className="text-xl">{elem.name}</h1>
              <p className="text-sm text-gray-500">{elem.number}</p>
            </div>
            <div className="contact-right">
              <h4>
                <i className="ri-phone-fill p-3 text-[#2c3cc7] bg-[#6f77c0] rounded-full"></i>
              </h4>
            </div>
          </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
