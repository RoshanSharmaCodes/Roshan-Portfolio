import ContactModal from "../Contact Modal/contactModal";
import "antd/dist/antd.min.css";
import "./navbar.css";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(1);
  const hamMenu = () => {
    setVisible(!visible);
  };

  window.addEventListener("resize", function (event) {
    var newWidth = window.innerWidth;
    if(newWidth<=1000){
      setVisible(0)
    }else{
      setVisible(1)
    }
  });

  return (
    <>
      <div className="navContainer">
        <div className="navLeft headerText">
          <span className="headingText">My Portfolio</span>
          <img
            src="./Assets/menu.svg"
            alt="menu"
            onClick={hamMenu}
            className="hamMenu"
          />
        </div>
        <div className="navMid"></div>
        <div
          className="navRight"
          style={{ visibility: visible ? "visible" : "hidden" }}
        >
          <a href="#" className="btnMenu">
            Home
          </a>
          <a href="#About" className="btnMenu">
            About
          </a>
          <a href="#Work" className="btnMenu">
            Work
          </a>
          <a href="#Testimonials" className="btnMenu">
            Testimonials
          </a>
          <a href="#Social" className="btnMenu">
            Social
          </a>
          <button className="btnMenu">Contact</button>
        </div>
        {/* <ContactModal visiblility={visible}/> */}
      </div>
    </>
  );
};

export default Navbar;
