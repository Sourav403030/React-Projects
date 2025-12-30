import React, { useState } from "react";
import Form from "./components/Form";
import Card from "./components/Card";

const App = () => {

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  // Fix localStorage implementation
  const getLocalData = () => {
    const data = localStorage.getItem("userData");
    return data ? JSON.parse(data) : [];
  };

  const [allUserData, setAllUserData] = useState(getLocalData());

  let submitHandler = (e)=>{
    e.preventDefault();

    const copyAllUserData = [...allUserData];
    copyAllUserData.push({name: name, role: role, description: description, imgUrl: imgUrl});
    setAllUserData(copyAllUserData);

    localStorage.setItem('userData', JSON.stringify(copyAllUserData));

     setName('');
    setRole('');
    setDescription('');
    setImgUrl('');
  }


  return (
    <div className="flex h-screen gap-20">
      <div className="w-[50%] h-screen flex items-center justify-center">
        <Form
        name = {name}
        setName = {setName}
        role = {role}
        setRole = {setRole}
        description = {description}
        setDescription = {setDescription}
        imgUrl = {imgUrl}
        setImgUrl = {setImgUrl}
        submitHandler = {submitHandler}
        
         />
      </div>
      <div className="w-[50%]">
        <Card
        allUserData = {allUserData}
        />
      </div>
    </div>
  );
};

export default App;
