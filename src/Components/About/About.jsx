import "./About.css";
import { Carousel } from "antd";

const About = () => {
  const contentStyle = {

  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <>
      <div className="aboutContainer">
          <span className="headerText">About Me</span>
        <Carousel autoplay={true} className="aboutCarousal" afterChange={onChange}>
          <div className="contentStyle">
            
          </div>
          <div className="contentStyle">
            
          </div>
          <div className="contentStyle">
            
          </div>
          <div className="contentStyle">
            
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default About;
