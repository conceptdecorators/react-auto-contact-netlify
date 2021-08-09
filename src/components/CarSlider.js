import React from "react";
import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ImageOne from "./../images/car-slider/Foreign-car.png";
import ImageTwo from "./../images/car-slider/2-2-car-transparent.png";
import ImageThree from "./../images/car-slider/Land-Rover-Range.png";
import ImageFour from "./../images/car-slider/Subaru-XV-side.png";
import ImageFive from "./../images/car-slider/Mitsubishi-ASX-Wagon-blue.png";
import ImageSix from "./../images/car-slider/hatchback-car-white.png";
import ImageSeven from "./../images/car-slider/honda-pickup-truck.png";

const options = {
  items: 4,
};
class CarSlider extends React.Component {
  render() {
    return (
      <OwlCarousel className="owl-theme" loop margin={10} nav>
        <div class="item">
          <img src={ImageOne} alt="img1" />
          <div className="cars-title">
            <h3>Sports Cars</h3>
          </div>
        </div>
        <div class="item">
          <img alt="img1" src={ImageTwo} />
          <div className="cars-title">
            <h3>Crossover</h3>
          </div>
        </div>
        <div class="item">
          <img alt="img1" src={ImageThree} />
          <div className="cars-title">
            <h3>Hybrid</h3>
          </div>
        </div>
        <div class="item">
          <img alt="img1" src={ImageFour} />
          <div className="cars-title">
            <h3>Wagon</h3>
          </div>
        </div>
        <div class="item">
          <img alt="img1" src={ImageFive} />
          <div className="cars-title">
            <h3>Suv</h3>
          </div>
        </div>
        <div class="item">
          <img alt="img1" src={ImageSix} />
          <div className="cars-title">
            <h3>Hatchback</h3>
          </div>
        </div>
        <div class="item">
          <img alt="img1" src={ImageSeven} />
          <div className="cars-title">
            <h3>Pickup truck</h3>
          </div>
        </div>
      </OwlCarousel>
    );
  }
}

export default CarSlider;
