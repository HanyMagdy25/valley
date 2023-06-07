import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import {cards} from "../utils/data";


// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const CardSwiper = ({ card }) => {
  return (
    <div className="card">
      <img src={card.imageUrl} alt={card.title} />
      <h3>{card.title}</h3>
      <p>{card.description}</p>
    </div>
  );
};

const Slider = () => {
  return (
    <Swiper navigation pagination={{ clickable: true }}>
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <CardSwiper card={card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
