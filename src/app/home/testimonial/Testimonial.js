'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { SplittingText } from '@/components/animate-ui/text/splitting';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './testimonial.scss';

const testimonials = [
  {
    id: 1,
    name: "Natalia Babina",
    role: "Client Services Analyst",
    content: "Working with Sonia was a pleasure. She consistently showed strong web development skills and approached challenges with clarity and responsibility. Her calm nature and commitment made her a dependable teammate throughout the project."
  },
  {
    id: 2,
    name: "Vivek Chatterjee",
    role: "Application Manager",
    content: "Sonia was a reliable member of my team at Trueblue. She delivered consistently, took ownership of her work, and handled every task with care and focus. Her dedication and problem-solving stood out during crucial moments."
  },
  {
    id: 3,
    name: "Gaurav Hasija",
    role: "Founder @ dau Agency",
    content: "At dau. Agency, Sonia proved to be a great frontend developer. She brought thoughtful design and attention to detail in every UI. Her positive attitude and collaborative nature made her a valuable part of the team."
  },
  {
    id: 4,
    name: "Aman Sharma",
    role: "Co-Founder @ Crescent Group",
    content: "Sonia’s dedication and work ethic have always impressed me. She’s highly dependable, technically strong, and always delivers on time. I've enjoyed working with her across multiple successful projects."
  }
];

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial__header">
        <div className="container">
          <div className="title__">
            <h2 className="main-title">
              <small>
                <SplittingText className="brownist-text" text="# Praise in Code & Clarity" />
              </small>
              Straight From the Source
            </h2>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="testimonial__carousel"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="testimonial__card">
              <div className="testimonial__card-header">
                <img
                  src={`/assets/images/testimonial/${t.id}.jpeg`}
                  alt={t.name}
                  className="testimonial__avatar"
                />
                <div style={{ textAlign: 'left' }}>
                  <h3>{t.name}</h3>
                  <p>{t.role}</p>
                </div>
              </div>
              <p className="testimonial__card-content">{t.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
