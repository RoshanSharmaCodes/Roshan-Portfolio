import "./Social.css";
import SocialCard from "./SocialCard/SocialCard";
import data from  "../../Data/SocialCard.jsx"
const Social = () => {
  return (
    <>
    <div id="Social" className="socialContainer">
        <div className="titleDivSocial">
            <span>Get Me On Social Media</span>
        </div>
        <div className="mainSocial reveal">
        <SocialCard/>
        </div>
    </div>
    </>
  );
};

export default Social;
