import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
// import Mailer from "../components/mailer";
// import ContactForm from "../components/ContactForm";
import HostForm from "../components/HostForm";
// import { FaFacebook } from "react-icons/fa";
// import { FaTwitterSquare } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";

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
        {/* <Mailer /> */}
        <HostForm />

        {/* <ContactForm /> */}
      </div>

      <Footer />
    </>
  );
};

export default Contact;
