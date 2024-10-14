import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";

function UncontrolledExample({ images }) {
  return (
    <Carousel fade>
      {images !== undefined &&
        images.map((image, index) => (
          <Carousel.Item>
            <img
              src={`../../assets/images/carousel/${image}.png`}
              alt={`image ${index}`}
            />
          </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default UncontrolledExample;
