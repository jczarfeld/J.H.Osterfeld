import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function About() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer"],
    });
  }, []);

  return (
    <div className="about" id="about">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.jpg" alt="Me" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>John H. Osterfeld</h1>
          </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}