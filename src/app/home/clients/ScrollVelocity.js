'use client';

import { useRef, useLayoutEffect, useState } from 'react';
import { SplittingText } from '@/components/animate-ui/text/splitting';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';
import './clients.scss'; // CSS file

function useElementWidth(ref) {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    if (!ref.current) return;
    const updateWidth = () => setWidth(ref.current.offsetWidth);
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [ref]);
  return width;
}

const VelocityImageScroller = ({
  images,
  velocity = 100,
  scrollContainerRef,
  className = '',
  damping = 50,
  stiffness = 400,
  numCopies = 3,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName = 'parallax',
  scrollerClassName = 'scroller',
  parallaxStyle,
  scrollerStyle,
}) => {
  const baseX = useMotionValue(0);
  const scrollOptions = scrollContainerRef ? { container: scrollContainerRef } : {};
  const { scrollY } = useScroll(scrollOptions);
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping, stiffness });

  const velocityFactor = useTransform(
    smoothVelocity,
    velocityMapping.input,
    velocityMapping.output,
    { clamp: false }
    );

  const copyRef = useRef(null);
  const copyWidth = useElementWidth(copyRef);
  const directionFactor = useRef(1);

  const wrap = (min, max, v) => (((v - min) % (max - min) + (max - min)) % (max - min)) + min;
  const x = useTransform(baseX, (v) => (copyWidth === 0 ? '0px' : `${wrap(-copyWidth, 0, v)}px`));

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * velocity * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const imageGroups = [];
  for (let i = 0; i < numCopies; i++) {
    imageGroups.push(
      <div className="image-group" key={i} ref={i === 0 ? copyRef : null}>
        {images.slice(0, 5).map((src, idx) => (
          <img src={src} key={idx} className={`scroll-logo ${className}`} alt={`logo-${idx}`} />
          ))}
      </div>
      );
  }

  return (
    <div className={parallaxClassName} style={parallaxStyle}>
      <motion.div className={scrollerClassName} style={{ x, ...scrollerStyle }}>
        {imageGroups}
      </motion.div>
    </div>
    );
};

const ScrollVelocity = ({ scrollContainerRef }) => {
  const logos = [
    '/assets/images/clients/1.png',
    '/assets/images/clients/2.png',
    '/assets/images/clients/3.png',
    '/assets/images/clients/4.png',
    '/assets/images/clients/5.png',
    '/assets/images/clients/6.png',
    '/assets/images/clients/7.png',
    '/assets/images/clients/8.png',
    '/assets/images/clients/9.png',
    '/assets/images/clients/10.png',
    '/assets/images/clients/11.png',
  ];

  return (
    <section className="client-scroll-wrapper">
      <div className="container">
        <div className="title__">
          <div className="label-arrow">
            <img src="/assets/images/icons/arrow-down.svg" alt="Arrow" />
          </div>
          <SplittingText className="brownist-text" text="Clients" />
          <h2 className="main-title">
            <span className="product-text" style={{ display: 'block' }}>Notable Brands</span>
            <span className="designer-text" style={{ display: 'block' }}>I’ve Worked With</span>
          </h2>
        </div>
      </div>
      {/* Top row */}
      <VelocityImageScroller
        images={logos.slice(0, 5)}
        velocity={100}
        scrollContainerRef={scrollContainerRef}
        className="custom-scroll"
        numCopies={3}
      />
      {/* Bottom row */}
      <VelocityImageScroller
        images={logos.slice(3, 8)}
        velocity={-80}
        scrollContainerRef={scrollContainerRef}
        className="custom-scroll"
        numCopies={3}
      />
    </section>
    );
};

export default ScrollVelocity;
