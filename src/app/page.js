'use client';

import Hero from './home/hero/Hero';
import Projects from './home/projects/Projects';
import ScrollVelocity from './home/clients/ScrollVelocity';
import Testimonial from './home/testimonial/Testimonial';
import FeaturedBlog from './home/featuredBlog/FeaturedBlog';



export default function Home() {
  return (
    <div>
      <Hero />
      <ScrollVelocity />
      <Projects />
      <Testimonial />
      <FeaturedBlog />
    </div>
  );
}
