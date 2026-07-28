import { useEffect, useState } from 'react';
import LiquidEther from './LiquidEther.jsx';

export default function LiquidEtherBG() {
  const [isMobile, setIsMobile] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
      <LiquidEther
        mouseForce={isMobile ? 10 : 20}
        cursorSize={isMobile ? 60 : 100}
        isViscous={false}
        viscous={30}
        iterationsViscous={isMobile ? 16 : 32}
        iterationsPoisson={isMobile ? 16 : 32}
        colors={['#ffffff', '#898989', '#ffffff']}
        autoDemo
        autoSpeed={isMobile ? 0.3 : 0.5}
        autoIntensity={isMobile ? 1.2 : 2.2}
        isBounce={false}
        resolution={isMobile ? 0.25 : 0.5}
      />
    </div>
  );
}