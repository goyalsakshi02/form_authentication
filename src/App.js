import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Outlet, Route, Routes, useNavigate} from "react-router-dom";
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
  }, [localStorage.getItem("token")])
  // Todo - 1. add token in a state, 2. if no token is found, for now redirect to Login Page using navigation

  return (
    <React.Fragment>
      <Navbar />
        <Routes>
          {!tokken ? (
            <>
              <Route path={process.env.PUBLIC_URL + "/"} element={<Log />}></Route>
              <Route path={process.env.PUBLIC_URL + "/signup"} element={<Signup />}></Route>
            </>
          ) : (
            <Route path={process.env.PUBLIC_URL + "/home"} element={<Home />}></Route>
          )}
        </Routes>
      <Outlet />
    </React.Fragment>
  );
}

export default App;
