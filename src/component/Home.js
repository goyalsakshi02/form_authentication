import React, { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";

const Home = () => {
  const [token, setToken] = useState()
  const[user, setUser] = useState
  useEffect(() => {
    setToken(localStorage.getItem('token'))
    setToken(localStorage.getItem(JSON.parse('token')))
  }, [localStorage.getItem('token')])

  console.log("i am in home page")
  const navigate = useNavigate()
  
  const handleLogout = (value) => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInformation")
      setToken(null)
    if(token === null){
      navigate('/')
    }else{
      navigate('/home')
    }
  };
  return (
    <div>
      <h1>Home</h1>
      <div>
        <button type="delete" onClick={(value) => handleLogout(value)} className="btn btn-primary">
          logout
        </button>
      </div>
    </div>
  );
};

export default Home;
