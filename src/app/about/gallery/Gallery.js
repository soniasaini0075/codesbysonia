'use client';

import React from 'react';
import { SplittingText } from '@/components/animate-ui/text/splitting';

import './gallery.scss';

const images = [
  {
    src: '/assets/images/gallery/bts-2.jpg',
    alt: 'Team',
    shape: 'rounded',
    gridClass: 'div1',
  },
  {
    src: '/assets/images/gallery/bts-1.jpg',
    alt: 'Sticky Notes',
    shape: 'rounded',
    gridClass: 'div2',
  },
  {
    src: '/assets/images/gallery/bts-3.jpg',
    alt: 'Team on Couch',
    shape: 'rounded',
    gridClass: 'div3',
  },
  {
    src: '/assets/images/gallery/bts-4.jpg',
    alt: 'Wall',
    shape: 'circle',
    gridClass: 'div4',
  },
  {
    src: '/assets/images/gallery/bts-5.jpg',
    alt: 'Workshop',
    shape: 'circle',
    gridClass: 'div5',
  },
  {
    src: '/assets/images/gallery/bts-6.jpg',
    alt: 'Presentation',
    shape: 'rounded',
    gridClass: 'div6',
  },
  {
    src: '/assets/images/gallery/bts-7.jpg',
    alt: 'Colleagues on Couch',
    shape: 'rounded',
    gridClass: 'div7',
  },
  {
    src: '/assets/images/gallery/bts-8.jpg',
    alt: 'Team Outdoors',
    shape: 'rounded',
    gridClass: 'div8',
  },
];

const Gallery = () => {
  return (
    <div className="snapshots">
      <div className="container">
        <div className="heading-wrapper">
          <img src="/assets/images/icons/doodle-arrow.svg" alt="arrow" className="arrow" />
          <h3>
            <SplittingText className="brownist-text" text="Snapshots" />
            <span className="product-text">Moments Behind the Magic</span>
          </h3>
        </div>
      </div>
      <div className="parent">
        {images.map((item, index) => (
          <div key={index} className={`snapshots__photo  ${item.gridClass}`}>
            <img src={item.src} alt={item.alt} />
          </div>
          ))}
      </div>
    </div>
    );
};

export default Gallery;
