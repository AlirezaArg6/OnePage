import React from "react";

import "./Profiiles.css";

export default function Profiiles() {
  return (
    <>
      <section className="section" id="profiles">
        <div className="container">
          <div className="content">
            <h1 className="section__title">اعضای تیم ما</h1>
            <p className="section__subtitle">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          </div>
          <div className="profile__boxes">
            <div className="profile-box">
              <div className="profile__image">
                <img src={require("../../images/team-2.jpg")} alt="" />
              </div>
              <div className="profile__details">
                <h3 className="profile__name">کیمیا رستگار</h3>
                <h4 className="profile__job">مدیر تولید</h4>
              </div>
            </div>
            <div className="profile-box">
              <div className="profile__image">
                <img src={require("../../images/team-2.jpg")} alt="" />
              </div>
              <div className="profile__details">
                <h3 className="profile__name">کیمیا رستگار</h3>
                <h4 className="profile__job">مدیر تولید</h4>
              </div>
            </div>
            <div className="profile-box">
              <div className="profile__image">
                <img src={require("../../images/team-2.jpg")} alt="" />
              </div>
              <div className="profile__details">
                <h3 className="profile__name">کیمیا رستگار</h3>
                <h4 className="profile__job">مدیر تولید</h4>
              </div>
            </div>
            <div className="profile-box">
              <div className="profile__image">
                <img src={require("../../images/team-2.jpg")} alt="" />
              </div>
              <div className="profile__details">
                <h3 className="profile__name">کیمیا رستگار</h3>
                <h4 className="profile__job">مدیر تولید</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
