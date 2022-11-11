import React, { useState } from "react";
import { useAuth} from "./UseAuth";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import Form from "./Form";
import "../App.css"


export const SignIn = () => {

  
  const  [user, setUser] = useState('')
  const auth = useAuth()
  const navigate = useNavigate()

  const handleSignIn = () => {

    auth.SignIn(user)
    navigate("/Profile")
  };
  
  
  
  return (
    <div>
      <form id="login-form">
        <div className="sign-up">
          <div className="main-container">
          <h2 id="welcome-text">
            ENTER YOUR USERNAME
          </h2>
          <div className="form-inputs">
            <label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                onChange={(e) => setUser(e.target.value)}
              />
            </label>
            <NavLink to="/Profile" type="submit" className='nav-input-btn'>
              <button className="form-input-btn" onClick={handleSignIn}>
                sign in
              </button>
            </NavLink>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
