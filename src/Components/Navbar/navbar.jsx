import ContactModal from "../Contact Modal/contactModal";
import 'antd/dist/antd.min.css';
import "./navbar.css";
import { useState } from "react";


const Navbar = () => {
  const [visible,setVisible] = useState(false);
  const showModal = () =>{
      setVisible(true);
  }
  return (
    <>
      <div className="navContainer">
        <div className="navLeft headerText">
          My Portfolio
        </div>
        <div className="navMid"></div>
        <div className="navRight">
          <a href="#" className="btnMenu">
            Home
          </a>
          <a href="#" className="btnMenu">
            About
          </a>
          <a href="#" className="btnMenu">
            Work
          </a>
          <a href="#" className="btnMenu">
            Testimonials
          </a>
          <a href="#" className="btnMenu">
            Social
          </a>
          <button className="btnMenu" onClick={showModal}>Contact</button>
        </div>
        {/* <ContactModal visiblility={visible}/> */}
      </div>
    </>
  );
};

export default Navbar;
