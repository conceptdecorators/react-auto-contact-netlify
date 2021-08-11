import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
// import FeaturedRooms from "../components/FeaturedRooms";
import CarSlider from "../components/CarSlider";
import Footer from "../components/Footer";

import ImageOne from "./../images/happy-transparent-couple.png";
import ImageTwo from "./../images/happy-transparent-girl.png";

import ImageThree from "./../images/car-logo-tesla-small.png";
import ImageFour from "./../images/car-logo-jeep.png";
import ImageFive from "./../images/car-logo-land-rover.png";
import ImageSix from "./../images/car-logo-toyota.png";
import ImageSeven from "./../images/car-logo-benz.png";
import ImageEight from "./../images/car-logo-lexus.png";
import ImageNine from "./../images/car-logo-audi-1.png";
import ImageTen from "./../images/car-logo-bmw.png";
import ImageEleven from "./../images/car-logo-porsche.png";
import ImageTwelve from "./../images/car-logo-subaru.png";
import ImageThirteen from "./../images/car-logo-honda.png";
import ImageFourteen from "./../images/car-logo-volvo-text.png";
import ImageFiveteen from "./../images/car-logo-nissan.png";
import ImageSixteen from "./../images/car-logo-Hyundai.png";

const home = () => {
  return (
    <>
      <Hero>
        <Banner title="luxurious cars" subtitle="used cars starting at $2,000">
          <Link to="/rooms" className="btn-primary">
            our cars
          </Link>
        </Banner>
      </Hero>
      <div class="section-title" style={{ padding: "5rem 0" }}>
        <h4>shop popular brands</h4>
        <div></div>
      </div>
      <div class="slider">
        <div class="slider-track">
          <div class="slide">
            <img src={ImageThree} alt="" />
          </div>
          <div class="slide">
            <img src={ImageFour} alt="" />
          </div>
          <div class="slide">
            <img src={ImageFive} alt="" />
          </div>
          <div class="slide">
            <img src={ImageSix} alt="" />
          </div>
          <div class="slide">
            <img src={ImageSeven} alt="" />
          </div>
          <div class="slide">
            <img src={ImageEight} alt="" />
          </div>
          <div class="slide">
            <img src={ImageNine} alt="" />
          </div>
          <div class="slide">
            <img src={ImageTen} alt="" />
          </div>
          <div class="slide">
            <img src={ImageEleven} alt="" />
          </div>
          <div class="slide">
            <img src={ImageTwelve} alt="" />
          </div>
          <div class="slide">
            <img src={ImageThirteen} alt="" />
          </div>
          <div class="slide">
            <img src={ImageFourteen} alt="" />
          </div>
          <div class="slide">
            <img src={ImageFiveteen} alt="" />
          </div>
          <div class="slide">
            <img src={ImageSixteen} alt="" />
          </div>
        </div>
      </div>
      <Services />
      {/* <FeaturedRooms /> */}
      <div className="fleet">
        <div class="section-title" style={{ padding: "5rem 0" }}>
          <h4>Value for money vehicles</h4>
          <div></div>
          <p className="info-paragraph">
            Our cars are available on t0 you. All vehicles are recently
            purchased or well maintained to keep you safe while driving. You can
            be assured that the whole vehicle fleet undergoes frequent
            maintenance and services for your peace of mind.
          </p>
          <a class="btn-primary" href="/rooms">
            our inventory
          </a>
        </div>
      </div>
      <CarSlider />
      <div className="testimonal">
        <div class="section-title">
          <h4>What our clients are saying about us</h4>
          <div></div>
        </div>
        <div class="container">
          <div class="card">
            <div class="content">
              <h2>Nadir Osborne</h2>
              <p style={{ color: "#fff" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                consequatur.
              </p>
              <a href="#" class="btn">
                Read More
              </a>
            </div>
            <img src={ImageOne} alt="" />
          </div>
          <div class="card">
            <div class="content">
              <h2>Joyce Wrice</h2>
              <p style={{ color: "#fff" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                consequatur.
              </p>
              <a href="#" class="btn">
                Read More
              </a>
            </div>
            <img src={ImageTwo} alt="" />
          </div>
        </div>
      </div>
      <Footer />{" "}
    </>
  );
};

export default home;
