import React,{useState,useEffect} from 'react'
import { Link, Navigate, Outlet} from 'react-router-dom'
// import Log from './Log';
// import Signup from './Signup';
// import Home from './Home';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [tokken, setTokken] = useState()
  const navigate = useNavigate()

  useEffect (() => {
    const localStorageToken = localStorage.getItem("token");
    setTokken(localStorageToken)
    
    console.log('In nav', localStorage.getItem("token"))
  }, [localStorage.getItem("token")])

  return (
  <>
  <nav>
  {tokken ?
       
     <div>
      <Link to="/home">home</Link>
     </div>
     :
      <></>
  }
   </nav>
   <Outlet />
   </>
  )
}

export default Navbar