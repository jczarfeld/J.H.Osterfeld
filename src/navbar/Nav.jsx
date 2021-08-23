import React from "react";
// import {Link} from "react-router-dom"
import "./nav.scss";
import {HikingIcon, AppRegistrationIcon, ContactMail, AssignmentInd } from '@material-ui/icons';


function Nav(){
    return (
        <div className="nav">
            <div className="wrapper">
                
                <div className="left">
                    <a href="#about" className= "logo">J. H. Osterfeld</a>
                    <div className= "itemContainer">
                        <HikingIcon className="icon"/>
                        <span>+44 63464</span>
                    </div>
                    <div className= "itemContainer">
                        <AppRegistrationIcon className="icon" />
                        <span>Portfolio</span>
                    </div>
                    <div className= "itemContainer">
                        <ContactMail className="icon"/>
                        <span>jczarfeld@gmail.com</span>
                    </div>
                    <div className= "itemContainer">
                        <AssignmentInd className="icon"/>
                        <span>Resume</span>
                    </div>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>
                    <a href="#resume">Resume</a>
                </div>
              
                <div className="right">

                Hello
                </div>



            </div>
        
        
      
        </div>
    )
}

export default Nav;