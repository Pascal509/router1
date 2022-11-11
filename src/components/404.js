import React from "react";
import { NavLink } from "react-router-dom"
import "./404.css"


const NotFound = () => {
    return (
        <div className="not-found">
            <h1> oooopps...</h1>
            <h2>Page Not Found</h2>

            <p>Go Back To <NavLink to="/">Home</NavLink> Page</p>
        </div>
    )
}

export default NotFound;