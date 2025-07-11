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
    content: 'Continuous learning\nIterating and refining via user feedback',
    quote: '-Through Research',
  },
  {
    id: 2,
    title: 'Designs should look like',
    content: 'inviting\nunforgettable\nfunctional',
  },
  {
    id: 3,
    title: 'Favorite areas to work in…',
    content: 'Education, B2B, e-Commerce, Healthcare, Agritech, Travel',
  },
  {
    id: 4,
    title: 'I strive to live by the mantra',
    content: 'YES WE CAN\nNOW WE HAVE TO!',
  },
  {
    id: 5,
    title: '“Design is a process…”',
    content: 'based on empathy and testing',
    quote: '-Erika Hall',
  },
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
