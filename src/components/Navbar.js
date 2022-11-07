import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./UseAuth";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {


  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const auth = useAuth();

  return (
    <>
      <nav className="navbar">
        <nav className="main-nav">
          <NavLink to="/" className="navbar-logo">
            User_Auth <i class="fa-sharp fa-solid fa-users" />
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Users"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                USERS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Profile"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                PROFILE
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Profile"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                SIGN IN
              </NavLink>
              {/* {!auth.user && (
                <NavLink
                  to="/"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  SIGN IN
                </NavLink>
              )} */}
            </li>
          </ul>
          {/* {button && <Button buttonStyle="btn--outline">SIGN IN</Button>} */}
        </nav>
      </nav>
    </>
  );
}

export default Navbar;
