'use client';

import * as React from 'react';
import { motion, useInView } from 'framer-motion'; // make sure this is from "framer-motion"

const defaultItemVariant = {
  hidden: { x: 150, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export const SplittingText = React.forwardRef(
  (
    {
      text,
      type = 'chars',
      motionVariants = {},
      inView = true,
      inViewMargin = '0px',
      inViewOnce = true,
      delay = 0,
      ...props
    },
    ref
  ) => {
    const items = React.useMemo(() => {
      if (Array.isArray(text)) {
        return text.flatMap((line, i) => [
          <React.Fragment key={`line-${i}`}>{line}</React.Fragment>,
          i < text.length - 1 ? <br key={`br-${i}`} /> : null,
        ]);
      }

      if (type === 'words') {
        const tokens = text.match(/\S+\s*/g) || [];
        return tokens.map((token, i) => (
          <React.Fragment key={i}>{token}</React.Fragment>
        ));
      }

      return text.split('').map((char, i) => (
        <React.Fragment key={i}>{char}</React.Fragment>
      ));
    }, [text, type]);

    const localRef = React.useRef(null);
    const combinedRef = ref || localRef;

    const isVisible = useInView(combinedRef, {
      once: inViewOnce,
      margin: inViewMargin,
    });

    const containerVariants = {
      hidden: {},
      visible: {
        transition: {
          delayChildren: delay / 1000,
          staggerChildren:
            motionVariants.stagger ??
            (type === 'chars' ? 0.05 : type === 'words' ? 0.2 : 0.3),
        },
      },
    };

    const itemVariants = {
      hidden: {
        ...defaultItemVariant.hidden,
        ...(motionVariants.initial || {}),
      },
      visible: {
        ...defaultItemVariant.visible,
        ...(motionVariants.animate || {}),
        transition: {
          ...(defaultItemVariant.visible.transition || {}),
          ...(motionVariants.transition || {}),
        },
      },
    };

    return (
      <motion.span
        ref={combinedRef}
        initial="hidden"
        animate={inView ? (isVisible ? 'visible' : 'hidden') : 'visible'}
        variants={containerVariants}
        {...props}
      >
        {items.map((item, index) =>
          item ? (
            <motion.span
              key={index}
              variants={itemVariants}
              style={{
                display: 'inline-block',
                whiteSpace:
                  type === 'chars'
                    ? 'pre'
                    : Array.isArray(text)
                    ? 'normal'
                    : 'normal',
              }}
            >
              {item}
            </motion.span>
          ) : null
        )}
      </motion.span>
    );
  }
);

SplittingText.displayName = 'SplittingText';
