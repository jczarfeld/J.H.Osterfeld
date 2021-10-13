import React from "react"
import "../navbar/nav.scss";
import VisibilityIcon from '@material-ui/icons/Visibility';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

export default function Nav({ menuOpen, setMenuOpen }) {
    return (
      <div className={"nav " + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <a href="#about" className="logo">
              J. H. Osterfeld</a>
              <div className= "itemContainer">
                        <VisibilityIcon className="icon"/>
                        <a href="#about">About Me</a>
                        {/* <span>About Me</span> */}
                    </div>
                    <div className= "itemContainer">
                        <PhotoLibraryIcon className="icon" />
                        <a href="#portfolio">Works</a>
                    </div>
                    <div className= "itemContainer">
                        <MailOutlineIcon className="icon"/>
                        <a href="#contact">Contact Me</a>
                    </div>
                    <div className= "itemContainer">
                        <AssignmentIndIcon className="icon"/>
                        <a href="https://www.linkedin.com/in/john-osterfeld/" class="active">LinkedIn</a>
                    </div>
                    
          </div>
         
        </div>
      </div>
    );
  }
