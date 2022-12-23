import React, { useEffect } from "react";
import { BsStack } from "react-icons/bs";
import HeroBox from "../HeroBox/HeroBox";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Hero.css";

export default function Hero() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="hero" className="section" data-aos="fade-up">
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">وبسایت شرکتی خود را راه اندازی کنید!</h1>
          <p className="hero__subtitle">تیم ما آرزوهای شما را برآورده می کند</p>
          <a href="" className="btn hero__cta">
            شروع کنید
          </a>
          <div className="hero-boxes__container">
            <HeroBox
              title="دیتابیس ایمن"
              desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است."
            >
              <BsStack className="hero-box__icon" />
            </HeroBox>
            <HeroBox
              title="دیتابیس ایمن"
              desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است."
            />
            <HeroBox
              title="دیتابیس ایمن"
              desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است."
            />
            <HeroBox
              title="دیتابیس ایمن"
              desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
