import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css"
const ComponentCarousel = () => (
  <section className="section-carousel">
  <Carousel
    showThumbs={false}
    showStatus={false} // Oculta o status (número do slide)
    showArrows={false} // Oculta os botões next e previous
    centerMode={true}
    dynamicHeight={false}
    centerSlidePercentage={100}
    infiniteLoop={true}
    autoPlay={true}
    interval={5000}
    >
    <div>
      <img src="https://i.ibb.co/vjsPxXB/1.png" alt="Banner 1" />
    </div>
    <div>
      <img src="https://i.ibb.co/frP0wLv/2.png" alt="Banner 2" />
    </div>
    <div>
      <img src="https://i.ibb.co/kG4rS7Q/3.png" alt="Banner 3" />
    </div>
    <div>
      <img src="https://i.ibb.co/zPbDb4W/4.png" alt="Banner 4" />
    </div>
  </Carousel>
    </section>
);

export default ComponentCarousel;
