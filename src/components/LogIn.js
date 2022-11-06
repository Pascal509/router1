import React, { useState } from "react";
import { useAuth } from "./UseAuth";
import { useNavigate, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import Validate from "./Validation";
// import Form from "./Form";
import "../App.css"
import "./LogIn.css"

export const LogIn = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const navigate = useNavigate;
  const location = useLocation()

  const redirectPath = location.state?.path || '/Profile'

  const handleLogIn = () => {
    // e.preventDefault();
    // const { handleChange, user, handleLogIn, errors } = Form(Validate);
    auth.LogIn(user);
    auth.LogIn(email);
    auth.LogIn(password);
    navigate('/Profile', {replace: true});

    // setErrors(Validate(user));
  };

  return (
    <div>
      <form id="login-form" onSubmit={handleLogIn}>
        <div className="sign-up">
          <div className="main-container">
          {/* <p className="text">Create your account and get started with us today</p> */}
          <h2 id="welcome-text">
            WELCOME
          </h2>
          <div className="form-inputs">
            <label>
              <input
                id="username"
                name="text"
                placeholder="Enter your username"
                onChange={(e) => setUser(e.target.value)}
              />
              {/* {errors.username && <p>{errors.username}</p>} */}
            </label>
            <label>
              <input
                id="email"
                name="text"
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* {errors.email && <p>{errors.email}</p>} */}
            </label>
            <label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* {errors.password && <p>{errors.password}</p>} */}
            </label>
            <NavLink to="/Profile" type="submit" className='nav-input-btn'>
              <button type="Submit" className="form-input-btn">
                sign up
              </button>
            </NavLink>
            <hr className="horizontal-rule"/>
            <span className="form-input-login">
              Already have an account? <NavLink to="/">Click Here</NavLink>
            </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
