import React from "react"
import "../navbar/nav.scss";
import VisibilityIcon from '@material-ui/icons/Visibility';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

export default function Nav({menuOpen, setMenuOpen}) {
    return (
        <div className={"nav" + (menuOpen && "active")}>
          <div className="wrapper">
          <div className="left">
                    <a href="#about" className= "logo">J. H. Osterfeld</a>
                    <div className= "itemContainer">
                        <VisibilityIcon className="icon"/>
                        <span>+44 63464</span>
                    </div>
                    <div className= "itemContainer">
                        <PhotoLibraryIcon className="icon" />
                        <span>Portfolio</span>
                    </div>
                    <div className= "itemContainer">
                        <MailOutlineIcon className="icon"/>
                        <span>jczarfeld@gmail.com</span>
                    </div>
                    <div className= "itemContainer">
                        <AssignmentIndIcon className="icon"/>
                        <span>Resume</span>
                    </div>
                   
                </div>
              
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>

                </div>



            </div>
        
        
      
        </div>
    )
}