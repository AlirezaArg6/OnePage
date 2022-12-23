import React from "react";
import { GoLocation } from "react-icons/go";

import "./ContactUs.css";

export default function ContactUs() {
  return (
    <>
      <section className="section" id="contact">
        <div className="container">
          <div className="content">
            <h1 className="section__title contact__title">تماس با ما</h1>
            <p className="section__subtitle">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون.
            </p>
          </div>
          <div className="contact-form__wrapper ">
            <div
              className="google-map"
              style={{
                width: "100%",
              }}
            >
              <img src={require("../../images/map.png")} alt="" />
            </div>
            <div className="contact__infos">
              <div className="contact-infos__box">
                <div className="contact-infos__box__right">
                  <div className="infos-icon__container">
                    <GoLocation className="infos-icon" />
                  </div>
                </div>
                <div className="contact-infos__box__left">
                  <span className="infos__box__title">آدرس:</span>
                  <p className="infos__box__desc">
                    شیراز ، بلوار چمران ، هتل چمران
                  </p>
                </div>
              </div>
              <div className="contact-infos__box">
                <div className="contact-infos__box__right">
                  <div className="infos-icon__container">
                    <GoLocation className="infos-icon" />
                  </div>
                </div>
                <div className="contact-infos__box__left">
                  <span className="infos__box__title">آدرس:</span>
                  <p className="infos__box__desc">
                    شیراز ، بلوار چمران ، هتل چمران
                  </p>
                </div>
              </div>
              <div className="contact-infos__box">
                <div className="contact-infos__box__right">
                  <div className="infos-icon__container">
                    <GoLocation className="infos-icon" />
                  </div>
                </div>
                <div className="contact-infos__box__left">
                  <span className="infos__box__title">آدرس:</span>
                  <p className="infos__box__desc">
                    شیراز ، بلوار چمران ، هتل چمران
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form action="">
                <div className="form-inputs__wrapper">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="نام شما"
                  />
                  <input
                    type="text"
                    className="form-input"
                    placeholder="ایمیل شما"
                  />
                </div>
                <input type="text" className="form-input" placeholder="موضوع" />
                <textarea
                  name=""
                  id=""
                  rows="5"
                  placeholder="متن شما"
                ></textarea>
                <a href="" className="btn form-cta">
                  ارسال پیام
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
