'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import './hero.scss';

const cards = [
  {
    id: 1,
    title: 'I believe in...',
    content: 'Clean code\nIterating with real user feedback',
    quote: '-Built Through Testing',
  },
  {
    id: 2,
    title: 'Frontend should feel',
    content: 'intuitive\naccessible\nengaging',
  },
  {
    id: 3,
    title: 'I love building for...',
    content: 'Education, e-Commerce, SaaS, Healthtech, B2B Tools, Travel',
  },
  {
    id: 4,
    title: 'The mindset I code with',
    content: 'Progressive enhancement\nUser-first thinking!',
  },
  {
    id: 5,
    title: '“Frontend is a craft…”',
    content: 'shaped by empathy and micro-interactions',
    quote: '-Me, every day',
  }
];

const Hero = () => {
  return (
    <div className="showcase">
      <div className="container-wrapper">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={'auto'}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="showcase__carousel"
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <h4>{card.title}</h4>
              <p>{card.content}</p>
              {card.quote && <small>{card.quote}</small>}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="showcase__phone">
        <a href="https://linkedin.com/in/thesonia07" target="_blank" rel="noreferrer">
          <img src="/assets/images/mobile-body-img.png" alt="phone" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
