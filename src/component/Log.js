import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Log.css";
import { Link, Outlet } from "react-router-dom";

const Log = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const data = [
    { email: "sak@1234.com", password: "Donut@123", token: "1234" },
    { email: "sak@1235.com", password: "Donut@124", token: "1235" },
    { email: "sak@1236.com", pasword: "Donut@125", token: "1245" },
    { email: "sak@1237.com", password: "Donut@126", token: "2345" },
  ];

  const navigate = useNavigate();

  const handleClick = () => {
    // setEmail(e.target.value);
    setError("");
  };

  // const handleInput = (e) => {
  //   setPassword(e.target.value);
  //   setError("");
  // };

  const handleLogin = (event) => {
    event.preventDefault();
    validate(email, password);
  };

  const validate = (email, password) => {
    console.log("props", email);
    console.log("props", password);

    if (email === "" && password === "") {
      setError((errors) => ({
        ...errors,
        ["emailPassword"]: "please enter a valid email and password",
      }));
    } else if (email === "") {
      setError((errors) => ({
        ...errors,
        ["email"]: "please enter a valid email ",
      }));
    } else if (email && !/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(email)) {
      setError((errors) => ({
        ...errors,
        ["email"]: "please enter a valid email",
      }));
    } else if (password === "") {
      setError((errors) => ({
        ...errors,
        ["password"]: "please enter a valid password ",
      }));
    } else if (
      password &&
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
        password
      )
    ) {
      setError((errors) => ({
        ...errors,
        ["password"]: "please enter a valid password ",
      }));
    }
    else {
      data.map((i) => {
        if (i.email === email && i.password === password) {
          localStorage.setItem("token", i.token);
          navigate("/home");
          alert("login successfully");
        }
        else{
          setError((errors)=>({...errors,["emailPassword"]: "user does not match please Signup",  }))
        }
      });
    }
  };

  return (
    <form>
      <div className=" wrap d-flex align-content-center App">
        <div className="container-sm board pt-4 pb-4 justify-content-center bg-white">
          <div className="row justify-content-center ">
            <div className="col-12 d-flex justify-content-center mb-4 ">
              <div>ACCOUNT LOGIN</div>
            </div>
          </div>
          <div className="form-group row">
            <div className="row gx-0 mr-0 justify-content-center" id="ex1">
              <div className="col-6 d-flex justify-content-center col-sm-6 mt-2 ">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="username"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  onClick = {handleClick}
                />
              </div>
            </div>
            <div className="error" style={{ color: "red" }}>
              {error?.email ? error.email : null}
            </div>
            <div className="row mr-0 mt-4 gx-0 justify-content-center ">
              <div className="col-6 d-flex justify-content-center col-sm-6 mb-2">
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  value={password}
                  onChange={(e) => {
                   setPassword(e.target.value);
                  }}

                  onClick = {handleClick}
                />
              </div>
            </div>
            <div className="error" style={{ color: "red" }}>
              {error?.password ? error.password : null}
            </div>
            <div className="row mr-0 gx-0  mt-2 justify-content-center ">
              <div className="col-6 d-flex mb-2 justify-content-center col-sm-6">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg mt-2 "
                  style={{ width: "100%" }}
                  onClick={(e) => handleLogin(e)}
                >
                  Sign In
                </button>
              </div>
              <div className=" d-flex justify-content-center">
                <Link to="/signup">Not registered? please Sign Up</Link>
              </div>
            </div>
            <div className="error" style={{ color: "red" }}>
              {error?.emailPassword ? error.emailPassword : null}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Log;
