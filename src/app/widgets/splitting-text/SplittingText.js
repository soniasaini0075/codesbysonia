'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { SplittingText as RawSplittingText } from '@/components/animate-ui/text/splitting';

const SplittingText = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <div
      ref={ref}
      className="flex flex-col gap-2 justify-center text-center"
    >
      {isInView && (
        <>
          <RawSplittingText
            className="text-2xl"
            text="Introducing Splitting Text component"
          />
          <RawSplittingText
            className="text-base text-muted-foreground"
            text="Made with Motion. Highly customizable and easy to use."
            delay={2200}
            type="words"
          />
        </>
      )}
    </div>
  );
};

export default SplittingText;
