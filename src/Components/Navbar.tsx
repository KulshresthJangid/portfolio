import React, { useState } from "react";
import "../public/css/navbar.css";

const Navbar = () => {
  const [isToggleActive, setToggleActive] = useState(true);
  const [isNavbarActive, setNavbarActive] = useState(true);

  const handleToggleClick = () => {
    setToggleActive(!isToggleActive);
    setNavbarActive(!isNavbarActive);
  };

  return (
    <>
      <header style={{ zIndex: 2 }}>
        <a className="logo" href="#">
          Logo
        </a>
        <div
          id="toggle"
          onClick={handleToggleClick}
          className={isToggleActive && isNavbarActive ? "active" : ""}
        ></div>
        <div
          id="navbar"
          className={isToggleActive && isNavbarActive ? "active" : ""}
        >
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#expertise">Expertise</a>
            </li>
            <li>
              <a href="#">Experience</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a
                className=""
                target="_blank"
                href="https://drive.google.com/file/d/1IWd6uUh6GPDCGLRZr4M7X3rSsswkwtiB/view?usp=sharing"
              >Resume
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
