import "./PhotoCard.css";
const PhotoCard = ({counter,title,desc,image}) => {
  return (
    <>
      <div className="mainWorkCard">
        <div className="workDesc">
          <div className="workTitle">{title}</div>
          <div className="workDetails">{desc}</div>
        </div>
        <div className="workDemoImg">
            <img src={image}  className="demoImg" alt="DemoImg"/>
        </div>
      </div>
    </>
  );
};

export default PhotoCard;
