'use client';

import React from 'react';
import Link from 'next/link';

const Button = ({ text = 'Learn More', href = '', isExternal = false }) => {
  const content = (
    <div className="button-wrapper">
      <div className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow" />
        </span>
        <span className="button-text">{text}</span>
      </div>
    </div>
  );

  if (href) {
    return isExternal ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className="button-link">
        {content}
      </a>
    ) : (
      <Link href={href} className="button-link">
        {content}
      </Link>
    );
  }

  // Default: button
  return (
    <div className="button-wrapper">
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow" />
        </span>
        <span className="button-text">{text}</span>
      </button>
    </div>
  );
};

export default Button;
