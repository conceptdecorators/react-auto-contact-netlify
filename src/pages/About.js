import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
const About = () => {
  return (
    <>
      <Hero hero="aboutHero">
        <Banner title="about us">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <section className="filter-container">
        <div class="section-title">
          <h4> Like-new cars. And an approach unlike other dealers.</h4>
          <div></div>

          <p class="info-paragraph">
            Wiz Auto are proud to serve the tri-state area with great deals on
            cars, vans, SUV and shop our virtual showroom. Wiz Auto are
            committed to our customers delivering quality pre-owned vehicles
            while maintaining the highest standards of customer service.
          </p>

          <p class="info-paragraph">
            We sell recently purchased cars, inspected, maintained and keeping
            you safe while driving. Our vehicle fleet undergoes rigorous
            inspections and services for your peace of mind.
          </p>

          <p class="info-paragraph">
            Our experienced sales staff are eager for drivers to find their next
            car that fits your budget, and we’re excited to do the same for you.
            Most drivers have a busy life and are on the go constantly here at
            Wiz Auto we sell cars accessible to you in various makes and models
            Toyota, Ford, Chevy, Honda and much more. A reliable vehicle is
            paramount; it's our mission to ensure that you have access to a
            great selection to choose from.
          </p>

          <p class="info-paragraph">
            Getting what you are looking for can sometimes be challenging, we'll
            work with you to find your match whether it's a SUV for your family
            or a stylish sedan to get through your commute.
          </p>

          <p class="info-paragraph">
            Contact us to discuss your specific needs ,and we'll show you the
            best makes, models and suits your needs. From mileage to year, our
            representative will go over every factor to ensure you're making a
            well-informed decision. Thank you for the chance to be your used car
            dealership.
          </p>

          <a class="btn-primary info-btn" href="/cars">
            browse cars
          </a>
          <a class="btn-primary btn-secondary" href="/cars">
            schedule pickup
          </a>
        </div>

        <div className="widget">
          <h4 class="paragraph">
            Wiz Auto are proud to serve the tri-state area with great deals on
            cars, vans, SUV and shop our virtual showroom. Wiz Auto are
            committed to our customers delivering quality pre-owned vehicles
            while maintaining the highest standards of customer service.
          </h4>
          <h4 class="paragraph">
            We sell recently purchased cars, inspected, maintained and keeping
            you safe while driving. Our vehicle fleet undergoes rigorous
            inspections and services for your peace of mind.
          </h4>
          <h4 class="paragraph">
            Our experienced sales staff are eager for drivers to find their next
            car that fits your budget, and we’re excited to do the same for you.
            Most drivers have a busy life and are on the go constantly here at
            Wiz Auto we sell cars accessible to you in various makes and models
            Toyota, Ford, Chevy, Honda and much more. A reliable vehicle is
            paramount; it's our mission to ensure that you have access to a
            great selection to choose from.
          </h4>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
