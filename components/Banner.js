import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
      >
        <div>
          <img
            src="https://links.papareact.com/gi1"
            alt="carousel 1"
            loading="lazy"
          />
        </div>
        <div>
          <img
            src="https://links.papareact.com/6ff"
            alt="carousel 2"
            loading="lazy"
          />
        </div>
        <div>
          <img
            src="https://links.papareact.com/7ma"
            alt="carousel 3"
            loading="lazy"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
