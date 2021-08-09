import React, { Component } from "react";
import { ImWrench } from "react-icons/im";
import { HiClipboardCheck } from "react-icons/hi";
import { FaHandshake } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoCarSportOutline } from "react-icons/io5";
import { RiKakaoTalkFill } from "react-icons/ri";

// import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <ImWrench />,
        title: "SCREENED TECHNICIANS",
        info: "We only work with experienced  technicians delivering a complete, clear assessment of the vehicle.",
      },
      {
        icon: <HiClipboardCheck />,
        title: "COMPREHENSIVE INSPECTION",
        info: "Our cars are inspected for safety, mechanical and cosmetic issues. We only sell cars that have accident-free CARFAX vehicle history reports at the time of purchase and sale.",
      },
      {
        icon: <FaHandshake />,
        title: "TRUSTED PARTNER",
        info: "When buying your car you want to be confident in your purchase, our approach ensures you are equipped with knowledge to make  the most informed buying decision possible. ",
      },
      {
        icon: <FaRegMoneyBillAlt />,
        title: "APPRAISAL",
        info: "Our expert gives cash value for your trade-in or purchase based on history value such as vehicle condition, service records, title evaluation,past damage, and the numbers of previous owners.",
      },
      {
        icon: <IoCarSportOutline />,
        title: "Vehicle Delivery Service ",
        info: "We get your car delivered at your door or nearby convenient location.",
      },
      {
        icon: <RiKakaoTalkFill />,
        title: "Family and friends Referral program ",
        info: "Part of the way Wiz Auto stays ahead of the competition is through our Friends & Family Referral Program. If you've bought a car from us, we would love for you to help us spread the word about the professional and courteous way we do business. ",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        {/* <Title title="services" className="white-color" /> */}
        <h4 className="white-text head-service">services</h4>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
