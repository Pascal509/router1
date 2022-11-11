import React from "react";
import "../App.css";
import Section from "./Section";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <Section />
      <div className="Services">
        <h1 className="title-name">Services we offer</h1>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <div className="row">
          <div className="course-col">
            <h3>FREE</h3>
            <p>
              orem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type
            </p>
          </div>
          <div className="course-col">
            <h3>INTERMEDIATE</h3>
            <p>
              orem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type
            </p>
          </div>
          <div className="course-col">
            <h3>MEGA PACK</h3>
            <p>
              orem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of ty
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <NavLink to="/About">
          <h4 className="about">About</h4>
          <p>
            since the 1500s, when an unknown printer took a galley of ty
            <br/>
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
        </NavLink>
        <div className="icons">
        <i class="fa-brands fa-square-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-whatsapp"></i>
        </div>
      </div>
    </>
  );
}

export default Home;
