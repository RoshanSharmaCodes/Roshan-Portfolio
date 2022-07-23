import "./SocialCard.css";
import SocialBadge from "../SocialBadge/SocialBadge";
import data from "../../../Data/SocialCard";
const SocialCard = () => {
  return (
    <>
      <div className="socialCard">
        {data.map((res) => {
          console.log(res)
          return (
            <SocialBadge name={res.title} color={res.color} image={res.image} />
          );
        })}
      </div>
    </>
  );
};

export default SocialCard;
