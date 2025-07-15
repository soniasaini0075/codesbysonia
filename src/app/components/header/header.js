'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '../../widgets/buttons/Button';

import styles from './header.module.scss';

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* Desktop Nav */}
        <nav className={styles.header__nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <Link
                href="/"
                className={`${styles.nav__link} ${isActive('/') ? styles['nav__link--active'] : ''}`}>Home</Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="/projects" className={`${styles.nav__link} ${isActive('/projects') ? styles['nav__link--active'] : ''}`}>Projects</Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="/about" className={`${styles.nav__link} ${isActive('/about') ? styles['nav__link--active'] : ''}`}>About</Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="/contact" className={`${styles.nav__link} ${isActive('/contact') ? styles['nav__link--active'] : ''}`}>Let's talk</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? styles.active : ''}></span>
          <span className={menuOpen ? styles.active : ''}></span>
          <span className={menuOpen ? styles.active : ''}></span>
        </button>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className={styles.mobileMenu}>
            <ul>
              <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
              <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
              <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Let's talk</Link></li>
              <li><a href="/assets/images/files/resume-Sonia-Developer-9891924288.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Get my Resume</a></li>
            </ul>
          </div>
        )}

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
