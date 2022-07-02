import "./About.css";
import { Carousel } from "antd";
import DataCard from "./DataCard/DataCard";

const About = () => {
  return (
    <>
      <div id="About" className="aboutContainer">
        <span className="headerText">About Me</span>
        <div className="aboutCard">
          <div className="aboutImg">
            <div className="profileImg">
              <div className="profileCircle">
                <img src="./Assets/profilePic.jpg" className="profilePic" atl="profile pic" />
              </div>
            </div>
            <div className="profileDesc">
              Masters In Computer Application
              <button className="prmButton">Download Resume</button>
            </div>
          </div>
          <div className="aboutStatus">
            <DataCard />
            <DataCard />
            <DataCard />
          </div>
          <div className="aboutDetails">
            <div className="aboutTitle">
              <span className="ml">Summary</span>
            </div>
            <div className="aboutSummary">
              Hey! This is Roshan Sharma I am grateful that you visited my profile 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
