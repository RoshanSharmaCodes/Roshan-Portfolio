import TestimonialCard from "./TestimonialCard/TestimonialCard";
import "./Testimonials.css";
const Testimonials = () => {
  return (
    <>
      <div className="testimonialsContainer">
        <div className="titleDiv">
          <span>Testimonials</span>
        </div>
        <div className="mainContainer">
          <TestimonialCard />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
