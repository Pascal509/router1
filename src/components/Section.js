import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./Section.css";
import { useAuth } from "./UseAuth";
import { NavLink } from "react-router-dom";


function Section() {
  const auth = useAuth();

  return (
    <div className="hero-container">
      {/* <img src="./images/img-.jpg" /> */}
      <h1>YOUR WINDOW TO THE WORLD</h1>
      <p> Join Us Now!!!</p>

      <div className="hero-btns">
        {!auth.user && (
          <NavLink to="/LogIn">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              GET STARTED
            </Button>
          </NavLink>
        )}

        {!auth.user && (
          <NavLink to="/about">
            <Button
              className="btns"
              buttonStyle="btn--primary"
              buttonSize="btn--large"
            >
              GET TO KNOW US MORE
            </Button>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Section;
