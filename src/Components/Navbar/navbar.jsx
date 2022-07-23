import ContactModal from "../Contact Modal/contactModal";
import "antd/dist/antd.min.css";
import "./navbar.css";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(1);
  const [active, setActive] = useState("");
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

  useEffect(()=>{
    document.addEventListener("scroll",()=>{
      const scrollY = window.scrollY;
      if(scrollY>=0&&scrollY<370){
        setActive("Home")
      }else if(scrollY>=370&&scrollY<1145){
        setActive("Skills")
      }else if(scrollY>=1145&&scrollY<1832){
        setActive("Work")
      }else if(scrollY>=1832&&scrollY<2520){
        setActive("About")
      }else if(scrollY>=2520&&scrollY<3260){
        setActive("Testimonials")
      }else if(scrollY>=3260){
        setActive("Social")
      }
    })
  },[])

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
          <a href="#" className={active=="Home"?"active btnMenu":"btnMenu"}>
            Home
          </a>
          <a href="#Skills" className={active=="Skills"?"active btnMenu":"btnMenu"}>
            Skills
          </a>
          <a href="#Work" className={active=="Work"?"active btnMenu":"btnMenu"}>
            Work
          </a>
          <a href="#About" className={active=="About"?"active btnMenu":"btnMenu"}>
            About
          </a>
          <a href="#Testimonials" className={active=="Testimonials"?"active btnMenu":"btnMenu"}>
            Testimonials
          </a>
          <a href="#Social" className={active=="Social"?"active btnMenu":"btnMenu"}>
            Social
          </a>
          {/* <button className={active=="Contact"?"active btnMenu":"btnMenu"}>Contact</button> */}
        </div>
        {/* <ContactModal visiblility={visible}/> */}
      </div>
    </>
  );
};

export default Navbar;
