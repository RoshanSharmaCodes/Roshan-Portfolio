import "./SocialBadge.css";
const SocialBadge = ({name,color,image}) => {
  return (
    <>
       <div className={"mainCard "+color}>
          <div className="cardIcon">
            <img
              className="cardIconImg"
              src={image}
            />
          </div>
          <div className="cardTitle">{name}</div>
        </div>
    </>
  );
};

export default SocialBadge;
