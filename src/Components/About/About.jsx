import "./About.css";
import data from "../../Data/AboutCardData";
import DataCard from "./DataCard/DataCard";

const About = () => {
  return (
    <>
      <div id="About" className="aboutContainer">
        <span className="headerText">About Me</span>
        <div className="aboutMain reveal">
          <div className="aboutCard">
            <div className="aboutImg">
              <div className="profileImg">
                <div className="profileCircle">
                  <img
                    src="./Assets/profilePic.jpg"
                    className="profilePic"
                    atl="profile pic"
                  />
                </div>
              </div>
              <div className="profileDesc">
                Masters In Computer Application
                <button className="prmButton">Download Resume</button>
              </div>
            </div>
            <div className="aboutStatus">
              {data.map((res) => {
                return <DataCard title={res.title} count={res.count} />;
              })}
            </div>
            <div className="aboutDetails">
              <div className="aboutTitle">
                <span className="ml">Summary</span>
              </div>
              <div className="aboutSummary">
                Hey! This is Roshan Sharma I am grateful that you visited my
                profile
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
