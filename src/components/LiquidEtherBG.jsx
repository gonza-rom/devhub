import LiquidEther from './LiquidEther.jsx';

export default function LiquidEtherBG() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
      <LiquidEther
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        colors={['#ffffff', '#898989', '#ffffff']}
        autoDemo
        autoSpeed={0.5}
        autoIntensity={2.2}
        isBounce={false}
        resolution={0.5}
      />
    </div>
  );
}