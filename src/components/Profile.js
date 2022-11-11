import React from "react";
import { useAuth } from "./UseAuth";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    auth.LogOut();
    navigate("/");
  };

  return (
    <>
      <div className="main-div">
        <h1>MY PROFILE PAGE</h1>
        <h2> WELCOME {auth.user} </h2>

        <hr />
          <div className="profile-page">

            <div className="my-img">
              <img src="https://t4.ftcdn.net/jpg/00/97/00/09/360_F_97000908_wwH2goIihwrMoeV9QF3BW6HtpsVFaNVM.jpg" />
            </div>
            <div className="my-container">
              <h6>About You</h6>
              <h6>Detials</h6>
              <h6>Know More</h6>
          </div>
        </div>
        {/* <div className="btn-div"> */}
        <button onClick={handleLogOut} className="log-out-btn">
          Log Out
        </button>
      {/* </div> */}
      </div>
      </>
  );
}

export default Profile;
