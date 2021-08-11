import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import ImageOne from "./../images/car-smile-turn.jpg";
import Footer from "../components/Footer";
const CarDeliveryService = () => {
  return (
    <>
      <Hero hero="deliveryHero">
        <Banner title="CAR DELIVERY">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <section className="filter-container">
        <div class="section-title">
          <h4> Car Transport Delivery Service </h4>
          <div></div>
        </div>

        <div class="flexcolwrap">
          <div class="refer3col">
            <img
              src={ImageOne}
              alt=""
              style={{
                width: "100%",
                padding: "15px",
              }}
            />
          </div>
          <div class="refer3col">
            <h4>Car Transport Delivery Service </h4>
            <p class="small-p">
              As a car dealer we offer auto transport services to provide
              outstanding customer service and commitment to our clients. Wiz
              Auto goes far and beyond to make sure you're satisfied with our
              dealership car transport service. Yes, this service is offered
              nationwide.
            </p>
            <p class="small-p">
              Whether you're buying a car from us or moving you will need a
              reliable way to get your vehicle to its destination on time and in
              good condition when shipping from location to location. We take
              the headache of making all the arrangements for auto transport
              direct to the dealership and to your door .
            </p>
            <p class="small-p">
              Our auto advisors know the details and will educate you on the
              process of shipping your vehicle making you feel comfortable.
              Keeping you informed before and during the shipping experience
              ensures we are doing everything we can to get your car transported
              to you quickly and safely.
            </p>
          </div>
        </div>

        <div className="component__base text-image__base">
          <div className="component__body text-image__body">
            <div className="text-image__content">
              <div className="text-image__image-wrapper">
                <figure>
                  <picture>
                    <img src={ImageOne} alt="" />
                  </picture>
                </figure>
              </div>

              <div className="text-image__text">
                <h2>How we conduct our business </h2>
                <br />
                <p>
                  The&nbsp;Shell General Business Principles are central to how
                  we conduct our business and living by them is crucial to our
                  continued success. We are judged by how we act and how we live
                  up to our core values of honesty, integrity and respect for
                  people. Our Business Principles are based on these. They
                  promote trust, openness, teamwork and professionalism, as well
                  as pride in what we do and how we conduct business.
                </p>
              </div>
            </div>
          </div>
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

export default CarDeliveryService;
