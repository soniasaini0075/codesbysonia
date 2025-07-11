'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '../../widgets/buttons/Button';

import styles from './header.module.scss';

const Header = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        {/* Logo */}
        <div className={styles.header__logo}>
          <Link href="/" className={styles.logo}>
          <div className={styles.logo__icon}>
            <span className={styles.logo__text}>{"</>"}</span>
          </div>
          <span className={styles.logo__name}>
            codeby <span className="gradient-text-blue">Sonia</span>
          </span>
        </Link>
      </div>

        {/* Navigation */}
      <nav className={styles.header__nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <Link
              href="/"
              className={`${styles.nav__link} ${isActive('/') ? styles['nav__link--active'] : ''}`}>Home</Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="/about" className={`${styles.nav__link} ${isActive('/about') ? styles['nav__link--active'] : ''}`}>About</Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="/projects" className={`${styles.nav__link} ${isActive('/projects') ? styles['nav__link--active'] : ''}`}>Projects</Link>
            </li>
            <li className={styles.nav__item}>
              <a href="#contact" className={styles.nav__link}>Let's talk</a>
            </li>
          </ul>
        </nav>


        {/* CTA Button */}
        <div className={styles.header__cta}>
          <a href="/assets/images/files/resume-Sonia-Developer-9891924288.pdf" target="_blank" rel="noopener noreferrer">
            <Button text="Get my Resume" />
          </a>
        </div>
      </div>
    </header>
    );
};

export default Header;
