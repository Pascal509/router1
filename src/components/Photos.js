import React from "react";
import PhotoItems from "./PhotoItems";
import "./Photos.css";

function Photos() {
  return (
    <div className="cards">
      <h1>Check Out these EPIC Destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
              <PhotoItems
                src="images/eberhard-grossgasteiger-LmqySFs3TQQ-unsplash.jpg"
                text="Access More"
                label="adventure"
                path="/about"
              />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Photos;
