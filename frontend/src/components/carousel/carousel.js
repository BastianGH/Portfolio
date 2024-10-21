import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";

function CarouselComponent({ images }) {
  return (
    <Carousel fade interval={1500} data-bs-theme="dark" wrap>
      {images !== undefined &&
        images.map((image, index) => (
          <Carousel.Item>
            <img
              src={`../../assets/images/carousel/${image}.png`}
              alt={`Slide ${index}`}
            />
          </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default CarouselComponent;
