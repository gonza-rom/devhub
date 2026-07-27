import Hyperspeed from './Hyperspeed.jsx';
import { hyperspeedPresets } from './HyperSpeedPresets.js';

export default function HyperspeedBG() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
      <Hyperspeed effectOptions={hyperspeedPresets.two} />
    </div>
  );
}