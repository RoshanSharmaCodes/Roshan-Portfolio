import "./TestimonialCard.css";
const TestimonialCard = ({name,title,review,image}) => {
  return (
    <>
      <figure class="snip1390">
        <img
          src={image}
          alt={name}
          class="profile"
        />
        <figcaption>
          <h2>{name}</h2>
          <h4>{title}</h4>
          <blockquote>
            {review}
          </blockquote>
        </figcaption>
      </figure>
    </>
  );
};
export default TestimonialCard;
