'use client';

import PressureText from '../../widgets/PressureText/PressureText';
import DotGrid from '../../widgets/DotGrid/DotGrid';

import "./hero.scss";

export default function About() {
  return (
    <>
    <div style={{ width: '100%', height: '100vh' }}>
      <DotGrid
        dotSize={10}
        gap={15}
        baseColor="#5227FF"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      >
        <PressureText
          text="About Me"
          fontFamily="Compressa VF"
          fontUrl="https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#282936"
          strokeColor="#e9d2f4"
          minFontSize={18}
        />
      </DotGrid>
    </div>
    </>
  );
}