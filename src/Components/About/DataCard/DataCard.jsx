import "./DataCard.css";

const DataCard = ({title,count}) => {
  return (
    <>
      <div className="dataCard">
        <div className="dataHeading">{title}</div>
        <div className="dataCount">{count}+</div>
      </div>
    </>
  );
};
export default DataCard;
