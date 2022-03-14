import React from "react";
import style from "./Landing.module.css";

function Landing() {
  return (
    <div className={style.section}>
      <nav className={style.navbar}>
        <ul className={style.navItems}>
          <li>Projects</li>
          <li>Tech</li>
          <li>Contact</li>
        </ul>
      </nav>
      <img src={(require = "../../img/landingBlob.png")} alt="" />
      <h1 className={style.landingText}>
        Full-Stack
        <br />
        software
        <br />
        design and
        <br />
        development
      </h1>
    </div>
  );
}

export default Landing;
