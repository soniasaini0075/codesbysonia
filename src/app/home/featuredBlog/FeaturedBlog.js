'use client';

import React from 'react';
import { SplittingText } from '@/components/animate-ui/text/splitting';
import Button from '../../widgets/buttons/Button';

import './featured-blog.scss';

const FeaturedBlog = () => {
  const projects = [
    {
      id: 1,
      title: "Elevating the SEO Game",
      description: "Switching from React to Next.js can greatly boost your website’s SEO",
      tag: "SEO",
      image: "/assets/images/blog/live1.png",
      url: "https://medium.com/@thesonia07/elevating-your-seo-game-transitioning-from-react-to-next-js-6dd8d71f1f47"
    },
    {
      id: 2,
      title: "Uncommon HTML Elements",
      description: "Check out these HTML tags that can really make your life easier.",
      tag: "Web Tips",
      image: "/assets/images/blog/live2.jpg",
      url: "https://medium.com/@thesonia07/exploring-more-uncommon-html-elements-4cce48085a6e"
    },
    {
      id: 3,
      title: "Latest AI Tools & Platforms",
      description: "🚀 The Latest AI Tools & Platforms You Should Know in 2025",
      tag: "AI · Productivity",
      image: "/assets/images/blog/live3.jpg",
      url: "https://medium.com/@thesonia07/the-latest-ai-tools-platforms-you-should-know-in-2025-628e23c5112c"
    }
  ];

  return (
    <section className="featured-blogs-wrap">
      <div className="container">
        <div className="container-wrapper">
          <div className="heading-wrapper">
            <div className="title__">
              <div className="label-arrow">
                <img src="/assets/images/icons/principles-doodle.svg" alt="Arrow" />
              </div>
              <h2 className="main-title">
                <small><SplittingText className="brownist-text" text="#Pixels and Logic" /></small>
                <span className="product-text" style={{ display: 'block' }}>Ideas into Interfaces</span>
              </h2>
            </div>
            <a className="readmore-bbtn" href="https://medium.com/@thesonia07" target="_blank">
              <p>Read More</p>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
                <path strokeLinecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
            <div className="featured-blogs-grid">
              {projects.map((project) => (
                <a  key={project.id}
                  href={project.url} 
                  className="single-blog-link" 
                  data-reveal="true" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="blog_">
                    <figure>
                      <img src={project.image} alt={project.title} />
                      <figcaption className="text-center">
                        <span className="tags_ small-upper gilroy-regular">
                          {project.tag}
                        </span>
                      </figcaption>
                    </figure>
                    <div className="content text-center">
                      <h3>{project.title}</h3>
                      <ul className="tags-list">
                        <li>{project.description}</li>
                      </ul>
                    </div>
                  </div>
                </a>
                ))}            
            </div>
          </div>
        </div>
      </section>
      );
};

export default FeaturedBlog;