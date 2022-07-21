import "./SkillBadge.css";

const SkillBadge = () => {
  return (
    <>
      <div className="badgeContainer">
        <div className="badgeBox">
          <div class="glow">
            <div class="mainCircle"></div>
          </div>
        </div>
        <div className="badgeTitle">
          <span className="badgeSpan">DevOps</span>
        </div>
      </div>
    </>
  );
};

export default SkillBadge;
