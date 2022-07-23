import "./Testimonials.css";
import data from "../../Data/TestimonialCardData.jsx"
import TestimonialCard from "./TestimonialCard/TestimonialCard";
const Testimonials = () => {
  return (
    <>
      <div id="Testimonials" className="testimonialsContainer">
        <div className="titleDiv">
          <span>Testimonials</span>
        </div>
        <div className="mainContainer reveal">
          {
            data.map((res)=>{
              return <TestimonialCard name={res.name} title={res.title} image={res.image} review={res.review}/>
            })
          }
        </div>
      </div>
    </>
  );
};

export default Testimonials;
