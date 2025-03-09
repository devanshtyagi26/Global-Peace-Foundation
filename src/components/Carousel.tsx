import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import one from "../assets/Carousel/one.jpg";
import two from "../assets/Carousel/two.jpg";
import three from "../assets/Carousel/three.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

export const Carousel = () => {
  return (
    <CCarousel controls indicators className="pt-[40px]">
      <CCarouselItem>
        <CImage className="d-block w-100" src={one} alt="slide 1" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={three} alt="slide 3" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src={two} alt="slide 2" />
      </CCarouselItem>
    </CCarousel>
  );
};
