import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import ImageOne from "./../images/car-smile-turn.jpg";
import ImageTwo from "./../images/car-audi.png";
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

        <div class="flexcolwrap grey-back">
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

        <div class="flexcolwrap tabs-vertical">
          <div className="img-container img-container-block img-car feature-box__image-container">
            <img
              src={ImageTwo}
              alt=""
              class="img-inner img-block img-contain"
            />
          </div>
          <div className="middle component__base text-image__base"></div>
          <div class="col tab">
            <h4>What Is the Cost? </h4>
            <p class="small-p">
              As with any shipment, you know there are variables that go into
              shipping your car based on where it is shipped from and how far
              you're going .
            </p>
            <p class="small-p">
              We will do an estimate of your destination and determine the best
              your budget.Transportation costs average around $50 for every 100
              mile's but multiple variables influence the final cost once .
            </p>
          </div>

          <div class="col tab">
            <h4>How Far Do You Ship Cars?</h4>
            <p class="small-p">
              We ship locally and nationwide. Transportation costs on average
              for moving a car is $0.60 per mile for trips of 1,000 miles or
              more.
            </p>
          </div>

          <div class="col tab">
            <h4>What Options Available ? </h4>
            <p class="small-p">
              We work with you to give you options that are accessible to your
              needs. Assessing your needs help us to give you the best option
              that fits your budget .
            </p>
            <p class="small-p">
              We will do an estimate of your destination and determine the best
              your budget.Transportation costs average around $50 for every 100
              mile's but multiple variables influence the final cost once .
            </p>
          </div>
        </div>

        <div className="component__base text-image__base"></div>
      </section>

      <Footer />
    </>
  );
};

export default CarDeliveryService;
