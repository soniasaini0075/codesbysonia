'use client';

import React from 'react';
import { SplittingText } from '@/components/animate-ui/text/splitting';

import './about-intro.scss';

const skills = [
  {
    icon: '/assets/images/icons/continuous-learner.png',
    title: 'Continuous Learner',
    description:
    'I’m constantly upskilling — exploring the latest UI frameworks, performance techniques, and accessibility best practices to craft better web experiences.',
  },
  {
    icon: '/assets/images/icons/agile-thinker.png',
    title: 'Agile Problem Solver',
    description:
    'I thrive in fast-paced Agile teams, quickly iterating on feedback and translating UI/UX ideas into scalable, responsive, and production-ready components.',
  },
  {
    icon: '/assets/images/icons/strategic-designer.png',
    title: 'User-Focused Front-End Engineer',
    description:
    'I bring both technical depth and UX sensitivity — building interfaces that not only work flawlessly, but feel intuitive and engaging across all devices.',
  }
];

const AboutIntro = () => {
  return (
    <section className="about-intro">
      <div className="intro-text container">
        <div className="social">
          <h2>
            Every Interaction Engineered for <span className="blue italic">Clarity</span>,<br />
            Every Journey Built for <span className="blue italic">Users</span>,<br />
            Users <span className="blue italic">Always come first</span> for me!
          </h2>
          <span>Follow me on:</span>
          <a href="https://www.linkedin.com/in/thesonia07/" target="_blank" rel="noreferrer">Linkedin ↗</a>
          <a href="http://instagram.com/codewithsonia" target="_blank" rel="noreferrer">Instagram ↗</a>
        </div>
        <div className="bio">
          <p>
            I approach frontend development like crafting the perfect recipe—blending creativity, clean code, and a dash of intuition to build digital experiences that not only look great but feel seamless to use. When I’m not coding, you’ll find me exploring UI inspirations, refining my personal projects, or recharging through long drives, nature walks, or capturing visuals through my camera lens. These moments fuel my creativity and keep me inspired.
          </p>
          <p>
            For me, frontend isn’t just about how things look—it’s about how they feel to the user. Whether it’s a subtle micro-interaction or a fully responsive layout, I believe every detail should create a sense of clarity, comfort, and connection.
          </p>
        </div>
      </div>

      <div className="skills-section container">
        <h3>
          <img src="/assets/images/icons/doodle-image.svg" alt="arrow" className="arrow" />
          <SplittingText className="brownist-text" text="WHAT I AM GOOD AT!" />
        </h3>
        <div className="skills card">
          {skills.map((skill, idx) => (
            <div className="skill" key={idx}>
              <img src={skill.icon} alt={skill.title} />
              <h4>{skill.title}</h4>
              <p>{skill.description}</p>
            </div>
            ))}
        </div>
      </div>
    </section>
    );
};

export default AboutIntro;
