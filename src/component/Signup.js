import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  let token ;
  
  let navigate = useNavigate()

  //    = [
  //   {name: "hop" , email: "sak@1234.com", password: "Donut@123", token: "1234",confimrPassword:"Donut@123" },
  //   { name: "jerry",email: "sak@1235.com", password: "Donut@124", token: "1235",confimrPassword:"Donut@124" },
  //   { name: "tom",email: "sak@123 6.com", pasword: "Donut@125", token: "1245",confimrPassword:"Donut@125" },
  //   {name: "gloria" ,email: "sak@1237.com", password: "Donut@126", token: "2345",confimrPassword:"Donut@126" },
  // ]
  const handleClick = () => {
    setError("")
  }

  const handleSignup = (event) => {
    event.preventDefault();
    validate()
   let userInformation = {
    name, email, password 
   }

   localStorage.setItem("userInformation",JSON.stringify(userInformation))
   const user = JSON.parse(localStorage.getItem('userInformation'))
   
   if (!token){
      navigate('/')
   }else{
    navigate('/home')
   }
  }

  const validate = () => {

    if(!email){
      setError((error) => ({
            ...error,
            ["email"]: "please enter a valid email ",
          }));
    }
    else if (email && !/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(email)) {
      setError((errors) => ({
        ...errors,
        ["email"]: "please enter a valid email",
      }));
    }  if(!name){
      setError((error) => ({
            ...error,
            ["name"]: "please enter a valid email ",
            }));
    }else if (password === "") {
      setError((error) => ({
        ...error,
        ["password"]: "please enter a valid password ",
      }));
    } else if (
      password &&
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
        password
      )
    ) {
      setError((error) => ({
        ...error,
        ["password"]: "please enter a valid password ",
      }));
    }else if(!confirmPass){

      setError((error) => ({
        ...error,
        ["confirmPassword"]: "please enter a valid password ",
      }));

    }else if (confirmPass !== password){

      setError((error) => ({
        ...error,
        ["confirmPassword"]: "password does not match ",
      }));

    }else if(email && name && password && confirmPass){
      token = 1234
      localStorage.setItem('token', token)
    }
    
    
  };
  return (
    <form>
      <div className=" wrap d-flex align-content-center App">
        <div className="container-sm board pt-4 pb-4 justify-content-center bg-white">
          <div className="row justify-content-center ">
            <div className="col-12 d-flex justify-content-center mb-4 ">
              <div>Registeration</div>
            </div>
          </div>
          <div className="form-group row">
            <div className="row gx-0 mr-0 justify-content-center" id="ex1">
              <div className="col-6 d-flex justify-content-center col-sm-6 mt-2 ">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  onClick = {handleClick}

                />
              </div>
            </div>
            <div className="error" style={{ color: "red" }}>
                {error?.email ? error?.email : null}
              </div>
            <div className="row mr-0 mt-4 gx-0 justify-content-center ">
              <div className="col-6 d-flex justify-content-center col-sm-6 mb-2">
                <input
                  type="name"
                  className="form-control"
                  placeholder="Name"
                  name="Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  onClick = {handleClick}

                />
              </div>
            </div>
            <div className="error" style={{ color: "red" }}>
                {error?.name ? error?.name : null} </div>
            <div className="row mr-0 mt-4 gx-0 justify-content-center ">
              <div className="col-6 d-flex justify-content-center col-sm-6 mb-2">
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  name="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  onClick = {handleClick}

                />
              </div>
            </div>
            <div className="error" style={{ color: "red" }}>
                {error?.password ? error?.password : null} </div>
            <div className="row mr-0 mt-4 gx-0 justify-content-center ">
              <div className="col-6 d-flex justify-content-center col-sm-6 mb-2">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm-password"
                  name="confirmPassword"
                  value={confirmPass}
                  onChange={(e) => {
                    setConfirmPass(e.target.value);
                  }}
                  onClick = {handleClick}

                />
              </div>
            </div>
            <div className="error" style={{ color: "red" }}>
                {error?.confirmPassword ? error?.confirmPassword : null} </div>
            <div className="row mr-0 gx-0  mt-2 justify-content-center ">
              <div className="col-6 d-flex mb-2 justify-content-center col-sm-6">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg mt-2 "
                  onClick={handleSignup}
                  style={{ width: "100%" }}
                >
                  Sign up
                </button>
              </div>
              <div className="d-flex justify-content-center">
                <Link to="/">login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;
