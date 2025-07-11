'use client';

import React, { useState } from 'react';
import { SplittingText } from '@/components/animate-ui/text/splitting';
import Button from '../../widgets/buttons/Button';
import Orb from '../../widgets/Orb/Orb';

import styles from './footer.module.scss';

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('thesonia07@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__content}>
          <div className={styles.footer__main}>
            <div className={styles.footer__heading}>
              <h2 className={styles.footer__title}>
                Why Settle for 👀 Ordinary? 
              </h2>
              <h3 className={styles.footer__subtitle}>
                Let's build something groundbreaking that users love! ❤️
              </h3>
            </div>

            {/* Call to Action */}
            <div className={styles.footer__cta}>
              <h4 className={styles.footer__work_together}>
                Let's <span className={styles.highlight}>Work Together!</span>
              </h4>
              <p className={styles.footer__email}>
                <span className="gradient-text-blue">Reach me at :</span> thesonia07@gmail.com
                <button className={styles.copy_button} title="Copy email" onClick={handleCopy}>
                  <span className={styles.copy_content}>
                    {copied ? 'Copied' : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    )}
                  </span>
                </button>
              </p>
              <div className={styles.header__cta}>
                <Button text="Get in Touch" href="mailto:thesonia07@gmail.com" isExternal />
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <div className={styles.footer__profile}>
            <div className={styles.profile_container}>
              <div className={styles.profile_text_circle}>
                {/*<svg width="400" height="400" viewBox="0 0 400 400" className={styles.curved_text_svg}>
                  <defs>
                    <path id="circlePath" d="M 200,200 m -160, 0 a 160,160 0 1,1 320,0 a 160,160 0 1,1 -320,0" />
                  </defs>
                  <text fill="#3ECCB0" fontSize="24" fontFamily="Brownist" textAnchor="middle">
                    <textPath href="#circlePath" startOffset="50%">
                      • Dog MOM • Coffee lover • Late Night Snacker • Cloud Watcher • Notebook Junkie • Cozy Hoodies Fan • Photographer • Cup Collector •
                    </textPath>
                  </text>
                </svg>*/}

                <div className={styles.profile_image}>
                  <img src="/assets/images/avatars/heart-with-bg.png" alt="Sonia Saini" />
                </div>

                <Orb hoverIntensity={0.5} rotateOnHover={true} hue={0} forceHoverState={false} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
          <div className={styles.footer__bottom}>
            <div className={styles.footer__copyright}>
              <p>© Copyright {new Date().getFullYear()}. Sonia Saini. All rights reserved.</p>
            </div>
            <div className={styles.footer__social}>
              <span className={styles.social_label}>Connect</span>
              <div className={styles.social_links}>
                <a href="https://www.linkedin.com/in/thesonia07/" className={styles.social_link}>
                  LinkedIn
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17l9.2-9.2M17 17V7H7" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </a>
                <a href="http://instagram.com/codewithsonia" className={styles.social_link}>
                  Instagram
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17l9.2-9.2M17 17V7H7" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </a>
                <a href="https://medium.com/@thesonia07" className={styles.social_link}>
                  Medium
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17l9.2-9.2M17 17V7H7" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </a>
                <a href="https://github.com/soniasaini0075/codesbysonia" className={styles.social_link}>
                  Github
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17l9.2-9.2M17 17V7H7" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

      </div>
    </footer>
  );
};

export default Footer;
