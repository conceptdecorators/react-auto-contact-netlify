import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import logo from "../images/wiz-auto-logo-white-small.png";
import Footer from "../components/Footer";

const RefferalProgram = () => {
  return (
    <>
      <Hero hero="referralHero">
        <Banner title="Referral us">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>

      <div className="filter-container">
        <div class="section-title">
          <h4> Friends & Family by Wiz Auto</h4>
          <div></div>
        </div>
      </div>
      <div className="hero-wrapper">
        <div className="image-feature">
          <div className="responsive-inner">
            <div className="banner-2">
              <img src={logo} alt="" />
              <div />
              <p>
                {" "}
                Take Advantage of our referral program and Earn extra money{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="filter-container">
        <div class="section-title">
          <h4> Take Advantage of our referral program and Earn extra money</h4>
          <div></div>
          <p class="info-paragraph">
            Tell your family, friends and coworkers about your great experience
            at Wiz Auto. Let them know about the opportunity to find reasonable
            inspected car selections. When you refer someone to Wiz Auto you
            will earn extra money for every referral.
          </p>
        </div>

        <div className="flexcolwrap">
          <div className="flex3col">
            <h4>How it works</h4>
            <p class="small-p">
              It's simple and there's no limit, fill out the form with the
              necessary information and just complete the form below.
            </p>
          </div>
          <div className="flex3col">
            <h4>Make a Referral Eligibility</h4>
            <p class="small-p">
              Fill out the form below to register and contact Wiz Auto and
              inform them of the customer you'll be referring to the dealership.
              Referral check will be mailed on file within 30 days of your
              referral purchase.
            </p>
          </div>
          <div className="flex3col">
            <h4>Referral Program Details</h4>
            <p class="small-p" style={{ margin: "5px" }}>
              Please follow these details that you need to understand for your
              referral to be valid:
            </p>
            <li>
              Fill Out the required form before the purchase is made visit
              wizauto.com sales to buy a car.
            </li>
            <li>They must be interest party to purchase car.</li>
            <li>Ad vitae vel nihil quibusdam quidem.</li>
            <li>You will get a single payment per referral made.</li>
            <li>
              Wiz Auto will not honor forms that have not been properly
              submitted as required after the purchase of the car.
            </li>
          </div>
        </div>
      </div>

      {/* form */}
      <div className="filter-container">
        <div class="section-title">
          <h4>Make an Inquiry</h4>
          <div></div>
        </div>
        <div class="contact-form hero-wrapper width-adjust">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form
            action="refer-us"
            method="post"
            data-netlify="true"
            onSubmit="submit"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="refer-us" />
            <h3 class="title">Contact us</h3>
            <div class="input-container">
              <input type="text" name="first-name" class="input" id="name" />

              <label htmlFor="first-name">Referral Name</label>
              <span>Referral Name</span>
            </div>

            <div class="input-container">
              <input type="email" name="email" class="input" id="email" />
              <label htmlFor="email">Referral Email</label>
              <span>Referral Email</span>
            </div>

            <div class="input-container">
              <input
                type="tel"
                name="entry.43082825"
                class="input"
                id="phone"
              />
              <label for="">Referral Phone</label>
              <span>Referral Phone</span>
            </div>

            <div class="input-container">
              <input type="text" name="first-name" class="input" id="name" />

              <label htmlFor="first-name">Name</label>
              <span>Name</span>
            </div>
            <div class="input-container">
              <input type="email" name="email" class="input" id="email" />
              <label htmlFor="email">Email</label>
              <span>Email</span>
            </div>
            <div class="input-container">
              <input
                type="tel"
                name="entry.43082825"
                class="input"
                id="phone"
              />
              <label for="">Phone</label>
              <span>Phone</span>
            </div>

            <div class="input-container textarea">
              <textarea name="message" class="input" id="message"></textarea>
              <label htmlFor="message">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" class="btn" />
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RefferalProgram;
