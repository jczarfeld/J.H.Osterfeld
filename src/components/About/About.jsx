import "./about.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
// var myPic_ = require("../assets/me.jpg");
import "../assets/me.jpg"

export default function About() {
  const textRef = useRef();

//   useEffect(() => {
//     init(textRef.current, {
//       showCursor: true,
//       backDelay: 1500,
//       backSpeed:60,
//       strings: ["Group One", "Group Two"],
//     });
//   }, []);

//   return (
//     <div className="about" id="about">
//       <div className="left">
//         <div className="imgContainer">
//           <img src="assets/me.jpg" alt="Me" />
//         </div>
//       </div>
//       <div className="right">
//         <div className="wrapper">
//           <h1>John H. Osterfeld</h1>
//           </div>
//         <a href="#portfolio">
//           <img src="assets/me.png" alt="" />
//         </a>
//       </div>
//     </div>
//   );
// }

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
          <img src="../assets/me.jpg" alt="" />
          </div>
      </div>
      <div className="right">
          <div className="wrapper">
              <h2>Hi There, I'm</h2>
              <h1>John H. Osterfeld</h1>
              <h3> <span ref={textRef}></span>Web Developer</h3>
              <div className="brand">
              <p> My training and ceritifcation includes <strong>HTML</strong> , <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>Node.js</strong> and <strong>React</strong>. My additional proclivities include mathematics and crative writing.</p>
              </div>
          </div>
          <a href="#portfolio">
              {/* <img src={down} alt="" /> */}
          </a>
      </div>
  </div>
)
}