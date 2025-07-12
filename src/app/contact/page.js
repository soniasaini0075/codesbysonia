'use client';

import React, { useState } from 'react';
import { Instagram, BookOpenCheck, Linkedin, Globe } from 'lucide-react';

import './contact.scss';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('thesonia07@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSocialClick = (platform) => {
    // Add your social media URLs here
    const urls = {
      instagram: 'https://instagram.com/codewithsonia',
      medium: 'https://medium.com/@thesonia07',
      linkedin: 'https://www.linkedin.com/in/thesonia07/'
    };
    window.open(urls[platform], '_blank');
  };
  return (
    <div className="contact-container">
      <div className="work-together">
        <div className="container">
          <div className="profile-section">
            <div className="profile-image">
              <img src="/assets/images/hero-sonia.png" alt="Sonia Saini" />
            </div>
          </div>

          <div className="content-section">
            <h1 className="main-title">
              Let's <span className="highlight">Work Together!</span>
            </h1>

            <div className="social-links">
              <button 
                className="social-btn"
                onClick={() => handleSocialClick('instagram')}
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </button>
              <button 
                className="social-btn"
                onClick={() => handleSocialClick('medium')}
                aria-label="Medium"
              >
                <BookOpenCheck size={24} />
              </button>
              <button 
                className="social-btn"
                onClick={() => handleSocialClick('linkedin')}
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </button>
            </div>

            <div className="contact-section">
              <button className="copy_button email-btn" title="Copy email" onClick={handleCopy}>
                <span className="copy_content email-text">
                  thesonia07@gmail.com
                  {copied ? ' ✅' : (
                    <svg className="copy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    )}
                </span>
              </button>
            </div>
          </div>
        </div>      
      </div>
    </div>
    );
}
