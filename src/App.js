import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Outlet, Route, Routes, useNavigate} from "react-router-dom";
import Log from "./component/Log";
import Navbar from "./component/Navbar";
import Signup from "./component/Signup";
import Home from "./component/Home";

function App() {

  console.log("Form")
  
  const navigate = useNavigate()
  const [tokken, setTokken] = useState(localStorage.getItem("token"))

  useEffect ( () => {
    const token = localStorage.getItem("token")
    let currentUrl = window.location.pathname
    setTokken(token)
   
    if (!token && currentUrl === '/home') {
      // Find the path of the current window, if it is = home, navigate it to login
      navigate('/')
    } else if (token && currentUrl === '/') { 
      navigate('/home')
    }
  }, )
  // Todo - 1. add token in a state, 2. if no token is found, for now redirect to Login Page using navigation

  return (
    <React.Fragment>
      <Navbar />
        <Routes>
          {!tokken ? (
            <>
              <Route path={"/login"} element={<Log />}></Route>
              <Route path={"/signup"} element={<Signup />}></Route>
              <Route path={"*"} element={<Navigate replace to='/login'/>}/>
            </>
          ) : (
            <Route path={"/home"} element={<Home />}></Route>
          )}
        </Routes>
      <Outlet />
    </React.Fragment>
  );
}

export default App;
