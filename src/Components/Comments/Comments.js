import React, { useEffect } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "./Comments.css";

import "swiper/css";
import "swiper/css/pagination";
import Aos from "aos";

export default function Comments() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <section className="section" id="comments" data-aos="fade-up">
      <div className="container">
        {" "}
        <div className="comments__content">
          <h1 className="section__title ">نظرات مشتریان ما</h1>
          <p className="section__subtitle ">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
          <Swiper
            freeMode={true}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="comments__box">
                <p>
                  <RiDoubleQuotesL className="comments__icon" />
                  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                  است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                  هدف بهبود ابزارهای کاربردی می باشد.{" "}
                  <RiDoubleQuotesR className="comments__icon" />
                </p>
                <img src={require("../../images/testimonials-4.jpg")} alt="" />
                <h3>رضا صالحی</h3>
                <h4>تولید محتوا</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="comments__box">
                <p>
                  <RiDoubleQuotesL className="comments__icon" />
                  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                  است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                  هدف بهبود ابزارهای کاربردی می باشد.{" "}
                  <RiDoubleQuotesR className="comments__icon" />
                </p>
                <img src={require("../../images/testimonials-4.jpg")} alt="" />
                <h3>رضا صالحی</h3>
                <h4>تولید محتوا</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="comments__box">
                <p>
                  <RiDoubleQuotesL className="comments__icon" />
                  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                  است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                  هدف بهبود ابزارهای کاربردی می باشد.{" "}
                  <RiDoubleQuotesR className="comments__icon" />
                </p>
                <img src={require("../../images/testimonials-4.jpg")} alt="" />
                <h3>رضا صالحی</h3>
                <h4>تولید محتوا</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="comments__box">
                <p>
                  <RiDoubleQuotesL className="comments__icon" />
                  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                  است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                  هدف بهبود ابزارهای کاربردی می باشد.{" "}
                  <RiDoubleQuotesR className="comments__icon" />
                </p>
                <img src={require("../../images/testimonials-4.jpg")} alt="" />
                <h3>رضا صالحی</h3>
                <h4>تولید محتوا</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="comments__box">
                <p>
                  <RiDoubleQuotesL className="comments__icon" />
                  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                  است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                  هدف بهبود ابزارهای کاربردی می باشد.{" "}
                  <RiDoubleQuotesR className="comments__icon" />
                </p>
                <img src={require("../../images/testimonials-4.jpg")} alt="" />
                <h3>رضا صالحی</h3>
                <h4>تولید محتوا</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="comments__box">
                <p>
                  <RiDoubleQuotesL className="comments__icon" />
                  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                  است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                  هدف بهبود ابزارهای کاربردی می باشد.{" "}
                  <RiDoubleQuotesR className="comments__icon" />
                </p>
                <img src={require("../../images/testimonials-4.jpg")} alt="" />
                <h3>رضا صالحی</h3>
                <h4>تولید محتوا</h4>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
