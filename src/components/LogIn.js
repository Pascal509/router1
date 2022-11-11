import React, { useState } from "react";
import { useAuth} from "./UseAuth";
import { useNavigate, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import Form from "./Form";
import "../App.css";
import "./LogIn.css";

export const LogIn = () => {
  
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const redirectPath = location.state?.path || '/Profile'

  const handleLogIn = () => {

    auth.LogIn(user)
    auth.LogIn(password)
    navigate(redirectPath, {replace: true})

  };

  const handleSubmit = () => {
  };

  return (
    <div>
      <form id="login-form" onSubmit={handleSubmit}>
        <div className="sign-up">
          <div className="main-container">
            <h2 id="welcome-text">CREATE YOUR ACCOUNT</h2>
            <div className="form-inputs">
              <label>
                <input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  onChange={(e) => setUser(e.target.value)}
                />
              </label>
              <label>
                <input
                  id="password"
                  name="text"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <NavLink to="/Profile" type="submit" className="nav-input-btn">
                <button className="form-input-btn" onClick={handleLogIn}>
                  sign up
                </button>
              </NavLink>
              <hr className="horizontal-rule" />
              <span className="form-input-login">
                Already have an account?{" "}
                <NavLink to="/SignIn">Sign in </NavLink>
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
