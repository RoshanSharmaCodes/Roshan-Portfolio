import "./PhotoCard.css";
const PhotoCard = ({counter}) => {
  return (
    <>
      <div className="mainWorkCard">
        <div className="workDesc">
          <div className="workTitle">HDFC Life Insurance</div>
          <div className="workDetails">This is very big project that i have put my efforts on</div>
        </div>
        <div className="workDemoImg">
            <img src={"./assets/DemoImg/"+counter+".png"}  className="demoImg" alt="DemoImg"/>
        </div>
      </div>
    </>
  );
};

export default PhotoCard;
