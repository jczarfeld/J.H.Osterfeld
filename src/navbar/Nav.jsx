import React from "react";

import "./nav.scss";

function Nav(){
    return (
        <ul className="nav">
            <li>< to = "/">Home</li>
            <li>< to = "/about">About Me</li>
            <li>< to = "/portfolio">Portfolio</li>
            <li>< to = "/contact">Contact Me</li>
            <li>< to = "/resume">Resume</li>
        </ul>
    )
}

export default Nav;