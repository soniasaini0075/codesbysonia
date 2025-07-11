'use client';

import ShinyText from '../../widgets/ShinyText/ShinyText';
import LetterGlitch from '../../widgets/LetterGlitch/LetterGlitch';

import './hero.scss';

export default function Project() {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
      }}>
        <ShinyText text="Projects" disabled={false} speed={3} className='shiny-custom-class' />
      </div>
    </div>
  );
}