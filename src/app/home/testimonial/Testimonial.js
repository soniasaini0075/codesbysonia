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
    content: "I had the pleasure of working closely with Sonia on the implementation team, where she consistently demonstrated strong web development skills and a solid understanding of both front-end and back-end work. She handled a wide range of web tasks — from building and refining user interfaces to troubleshooting complex issues — always with a clear, methodical approach. One quality I really appreciated was her accountability: if something wasn’t quite right, she would quickly investigate, correct the issue, and ensure it didn’t happen again. That level of responsibility made her a reliable and valued teammate. Her technical ability, combined with her collaborative mindset, made a real difference on the team. I’m confident she’ll be a great asset wherever she goes next."
  },
  {
    id: 2,
    name: "Vivek Chatterjee",
    role: "Application Manager",
    content: "Sonia was a key member of my team at Trueblue and it was a pleasure to work with someone so reliable and driven. She consistently delivered high-quality work, showed initiative, and also received multiple client appreciations during her tenure. Whether handling day-to-day responsibilities or stepping up during critical situations, Sonia brought focus and calm. I strongly recommend them for any role that values accountability, collaboration, and results."
  },
  {
    id: 3,
    name: "Gaurav Hasija",
    role: "Founder @ dau Agency",
    content: "She worked as a Frontend web developer in dau. Agency, this is where I got the opportunity to work with her, sometimes we worked together on a few projects, she is good when it comes to UI designing and always stands by her team. She used to wear a smiling face, no matter the condition, and that kept her colleagues warm while they worked together in their department."
  },
  {
    id: 4,
    name: "Aman Sharma ",
    role: "Co-Founder @ Crescent Group",
    content: "Her work speaks for itself. She is very dedicated and hardworking. I have done a lot of projects with her and all have been amazing. She has a stronghold on web development."
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
        modules={[Navigation, Pagination, Autoplay]}
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
                <div>
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
