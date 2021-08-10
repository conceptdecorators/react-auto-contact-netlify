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
                E-Shop Program is delivering the complete dealership experience
                online, from vehicle inventory to finance. Home{" "}
              </p>
            </div>
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
            action="refer us"
            method="post"
            data-netlify="true"
            onSubmit="submit"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact us" />
            <h3 class="title">Contact us</h3>
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
