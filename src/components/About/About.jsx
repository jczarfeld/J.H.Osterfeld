import "./about.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";



export default function About() {
  const textRef = useRef();

useEffect(() => {
  init(textRef.current, {
      showCursor:true,
      backDelay:1500,
      backSpeed:60,
      strings: ["Front End","Back End","Full Stack"],

  })
}, []);

return (
  <div className="about" id ="about">
      <div className="left">
          <div className="imgContainer">
          <img src= "https://i.ibb.co/hDGZ5Fh/design-9d1b048f-db1b-4e45-a2d1-743507f63bbf.png" alt="design-9d1b048f-db1b-4e45-a2d1-743507f63bbf"  />
          </div>
      </div>
      <div className="right">
          <div className="wrapper">
              
              <h1>John H. Osterfeld</h1>
              <h3> <span ref={textRef}></span>Web Developer</h3>
              <div className="brand">
              <p> My training and ceritifcation covers <strong>HTML</strong> , <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>Node.js</strong> and <strong>React</strong>. <br /> My additional strengths include mathematics and crative writing.</p>
              </div>
          </div>
          <a href="#portfolio">
              {/* <img src={down} alt="" /> */}
          </a>
      </div>
  </div>
)
}