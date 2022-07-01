import "./Social.css";
import SocialCard from "./SocialCard/SocialCard";
const Social = () => {
  return (
    <>
    <div id="Social" className="socialContainer">
        <div className="titleDivSocial">
            <span>Get Me On Social Media</span>
        </div>
        <div className="mainSocial">
        <SocialCard/>
        </div>
    </div>
    </>
  );
};

export default Social;
