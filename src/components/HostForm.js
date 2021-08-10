import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
// import { GrContactInfo } from "react-icons/gr";

const HostForm = () => {
  return (
    <>
      <div class="section-title">
        <h4> Contact Wiz Auto</h4>
        <div></div>
        <p class="info-paragraph">
          Send us a quick note using the form below. We will get back to you
          very shortly. Remember, your comments and feedbacks are very important
          to best serve you and we appreciate them.If you would like to contact
          us by phone, please call us at (267) 676-5005 during our business
          hours.
        </p>
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
                <img src={FaTwitterSquare} class="icon" alt="" />
                <p>92 Cherry Drive Philadelphia, PA 19122</p>
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
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaTwitterSquare />
                </a>
                <a href="https://www.instagram.com/wizauto_/">
                  <FaInstagramSquare />
                </a>
              </div>
            </div>
          </div>

          <div class="contact-form" id="program">
            <span class="circle one"></span>
            <span class="circle two"></span>

            <form
              action="contact us"
              method="post"
              data-netlify="true"
              onSubmit="submit"
              data-netlify-honeypot="bot-field"
              netlify
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
                <input type="tel" name="phone" class="input" id="phone" />
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
      </div>
    </>
  );
};

export default HostForm;
