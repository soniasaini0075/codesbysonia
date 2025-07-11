'use client';

import Hero from './hero/Hero';
import AboutIntro from './intro/aboutIntro';
import Gallery from './gallery/Gallery';

export default function About() {
  return (
    <div>
      <Hero />
      <AboutIntro />
      <Gallery />
    </div>
  );
}
