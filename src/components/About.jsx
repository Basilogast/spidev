import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row, Col } from "react-bootstrap";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../about.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slide_image_1 from "../assets/img/aboutImg/1.jpg";
import slide_image_2 from "../assets/img/aboutImg/2.jpg";
import slide_image_3 from "../assets/img/aboutImg/3.jpg";
import slide_image_4 from "../assets/img/aboutImg/4.jpg";
import slide_image_5 from "../assets/img/aboutImg/5.jpg";
import slide_image_6 from "../assets/img/aboutImg/6.jpg";
import slide_image_7 from "../assets/img/aboutImg/7.jpg";

import avatar from "../assets/img/aboutImg/avatar.png";
import arrowright from "../assets/img/arrowright.png";
import arrowleft from "../assets/img/arrowleft.png";

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={5} xl={3}>
            <img src={avatar} />
          </Col>
          <Col xs={12} md={7} xl={9} className="d-flex flex-column">
            <h2>HEY THERE!</h2>
            <div className="textBox flex-grow-1">
              <p>
                My name is Hung, and I’m a freelance web designer and developer.
                I can create your DREAM website and host it for{" "}
                <span>FREE</span>.
              </p>
              <p>
                So you can get your Website running <span>FOREVER</span> with
                just <span>One-Time Payment</span>. No monthly hosting fee in
                the future.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="swipeContainer">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_4} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_5} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_6} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_7} alt="slide_image" />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <img src={arrowleft} />
            </div>
            <div className="swiper-button-next slider-arrow">
              <img src={arrowright} />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};
