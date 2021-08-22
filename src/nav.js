import React from "react";
import {Link} from "react-router-dom"

function Nav(){
    return (
        <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/about">About Me</Link></li>
            <li><Link to = "/portfolio">Portfolio</Link></li>
            <li><Link to = "/contact">Contact Me</Link></li>
            <li><Link to = "/resume">Resume</Link></li>
        </ul>
    )
}

export default Nav;