import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function success() {
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
        <div>
          <p class="info-paragraph">Thank you for your submission.</p>
        </div>
      </div>

      <Footer />
    </>
  );
}
