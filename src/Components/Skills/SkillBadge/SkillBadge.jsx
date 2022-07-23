import "./SkillBadge.css";

const SkillBadge = ({title,image}) => {
  return (
    <>
      <div className="badgeContainer">
        <div className="badgeBox">
          <div class="glow">
            <div class="mainCircle">
              <img src={image} alt={title} className="badgeImg" />
            </div>
          </div>
        </div>
        <div className="badgeTitle">
          <span className="badgeSpan">{title}</span>
        </div>
      </div>
    </>
  );
};

export default SkillBadge;
