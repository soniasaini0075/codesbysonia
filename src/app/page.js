'use client';

import Hero from './home/hero/Hero';
import Projects from './home/projects/Projects';
import ScrollVelocity from './home/clients/ScrollVelocity';



export default function Home() {
  return (
    <div>
      <Hero />
      <ScrollVelocity />
      <Projects />
    </div>
  );
}
