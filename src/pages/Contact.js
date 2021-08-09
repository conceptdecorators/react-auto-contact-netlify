import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Mailer from "../components/mailer";
import ContactForm from "../components/ContactForm";
import HostForm from "../components/HostForm";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Hero hero="contactHero">
        <Banner title="contact us">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <div className="filter-container">
        {/* <div class="section-title">
          <h4> Contact Wiz Auto</h4>
          <div></div>
        </div>
        <div class="container">
          <span class="big-circle"></span>
          <img src="img/shape.png" class="square" alt="" />
          <div class="form">
            <div class="contact-info">
              <h3 class="title">Let's get in touch</h3>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                dolorum adipisci recusandae praesentium dicta!
              </p>

              <div class="info">
                <div class="information">
                  <img src="img/location.png" class="icon" alt="" />
                  <p>92 Cherry Drive Uniondale, NY 11553</p>
                </div>
                <div class="information">
                  <img src="img/email.png" class="icon" alt="" />
                  <p>lorem@ipsum.com</p>
                </div>
                <div class="information">
                  <img src="img/phone.png" class="icon" alt="" />
                  <p>123-456-789</p>
                </div>
              </div>

              <div class="social-media">
                <p>Connect with us :</p>
                <div class="social-icons">
                  <Link to="#">
                    <FaFacebook />
                  </Link>
                  <Link to="#">
                    <FaTwitterSquare />
                  </Link>
                  <Link to="https://www.instagram.com/wizauto_/">
                    <FaInstagramSquare />
                  </Link>
                </div>
              </div>
            </div>

            <div class="contact-form">
              <span class="circle one"></span>
              <span class="circle two"></span>

              <form action="index.html" autocomplete="off">
                <h3 class="title">Contact us</h3>
                <div class="input-container">
                  <input type="text" name="name" class="input" />
                  <label for="">Name</label>
                  <span>Name</span>
                </div>
                <div class="input-container">
                  <input type="email" name="email" class="input" />
                  <label for="">Email</label>
                  <span>Email</span>
                </div>
                <div class="input-container">
                  <input type="tel" name="phone" class="input" />
                  <label for="">Phone</label>
                  <span>Phone</span>
                </div>
                <div class="input-container textarea">
                  <textarea name="message" class="input"></textarea>
                  <label for="">Message</label>
                  <span>Message</span>
                </div>
                <input type="submit" value="Send" class="btn" />
              </form>
            </div>
          </div>
        </div> */}

        {/* <Mailer /> */}
        <HostForm />

        {/* <ContactForm /> */}
      </div>

      <Footer />
    </>
  );
};

export default Contact;
