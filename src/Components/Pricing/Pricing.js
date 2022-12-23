import React from "react";

import "./Pricing.css";

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="content">
          <h1 className="section__title">تعرفه خدمات ما</h1>
          <p className="section__subtitle">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </div>
        <div className="plan-boxes">
          <div className="plan-box">
            <h3 className="plan__name">کسب و کار</h3>
            <h4 className="plan__price">
              <sup>ماهانه</sup>29000<span> / تومان</span>
            </h4>
            <ul className="plan__sevices__list">
              <li className="plan__services__list-item">مشاوره رایگان</li>
              <li className="plan__services__list-item">هاست و دامین ریگان</li>
              <li className="plan__services__list-item">
                20 مگابایت فضای ذخیره سازی
              </li>
              <li className="plan__services__list-item plan__services__list-item--disabled">
                ساب دامین اختصاصی
              </li>
              <li className="plan__services__list-item plan__services__list-item--disabled">
                دامین .com
              </li>
            </ul>
            <a href="#" className="btn plan__cta">
              فعال سازی
            </a>
          </div>
          <div className="plan-box">
            <h3 className="plan__name">کسب و کار</h3>
            <h4 className="plan__price">
              <sup>ماهانه</sup>29000<span> / تومان</span>
            </h4>
            <ul className="plan__sevices__list">
              <li className="plan__services__list-item">مشاوره رایگان</li>
              <li className="plan__services__list-item">هاست و دامین ریگان</li>
              <li className="plan__services__list-item">
                20 مگابایت فضای ذخیره سازی
              </li>
              <li className="plan__services__list-item">ساب دامین اختصاصی</li>
              <li className="plan__services__list-item">دامین .com</li>
            </ul>
            <a href="#" className="btn plan__cta">
              فعال سازی
            </a>
          </div>
          <div className="plan-box">
            <h3 className="plan__name">کسب و کار</h3>
            <h4 className="plan__price">
              <sup>ماهانه</sup>29000<span> / تومان</span>
            </h4>
            <ul className="plan__sevices__list">
              <li className="plan__services__list-item">مشاوره رایگان</li>
              <li className="plan__services__list-item">هاست و دامین ریگان</li>
              <li className="plan__services__list-item">
                20 مگابایت فضای ذخیره سازی
              </li>
              <li className="plan__services__list-item">ساب دامین اختصاصی</li>
              <li className="plan__services__list-item">دامین .com</li>
            </ul>
            <a href="#" className="btn plan__cta">
              فعال سازی
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
