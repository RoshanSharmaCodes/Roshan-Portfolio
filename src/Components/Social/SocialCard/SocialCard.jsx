import "./SocialCard.css";
const SocialCard = () => {
  return (
    <>
      <div className="socialCard">
        <div className="mainCard github">
          <div className="cardIcon">
            <img
              className="cardIconImg"
              src="https://editor.analyticsvidhya.com/uploads/765900ba9-article-200807-github-gitguardbody-text.jpg"
            />
          </div>
          <div className="cardTitle">GitHub</div>
        </div>
        <div className="mainCard linkedin">
          <div className="cardIcon">
            <img
              className="cardIconImg"
              src="https://pbs.twimg.com/profile_images/1508518003184349187/1KQYoqPY_400x400.png"
            />
          </div>
          <div className="cardTitle">LinkedIn</div>
        </div>
        <div className="mainCard leetcode">
          <div className="cardIcon" style={{backgroundColor:"lightgray"}}>
            <img
              className="cardIconImg"
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
            />
          </div>
          <div className="cardTitle">LeetCode</div>
        </div>
        <div className="mainCard">
          <div className="cardIcon">
            <img
              className="cardIconImg"
              src="https://www.danoneinstitute.org/wp-content/uploads/2020/06/logo-rond-twitter.png"
            />
          </div>
          <div className="cardTitle">Twitter</div>
        </div>
      </div>
    </>
  );
};

export default SocialCard;
