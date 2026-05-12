/* Wave direction: 'down' = wave at bottom, 'up' = wave at top */
export default function WaveDivider({
  topColor = '#170c0cff',
  bottomColor = '#f9fafb',
  direction = 'down',
  height = 60,
}) {
  const points = direction === 'down'
    ? `0,0 0,${height * 0.6} 120,${height} 240,${height * 0.4} 360,${height} 480,${height * 0.5} 600,${height} 720,${height * 0.3} 840,${height} 960,${height * 0.6} 1080,${height * 0.2} 1200,${height} 1440,${height * 0.5} 1440,0`
    : `0,${height} 0,${height * 0.4} 120,0 240,${height * 0.6} 360,0 480,${height * 0.5} 600,0 720,${height * 0.7} 840,0 960,${height * 0.4} 1080,${height * 0.8} 1200,0 1440,${height * 0.5} 1440,${height}`;

  return (
    <div
      className="w-full overflow-hidden leading-none"
      style={{ background: topColor, marginBottom: -2 }}
    >
      <svg
        viewBox={`0 0 1440 ${height}`}
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height }}
        aria-hidden="true"
      >
        <polygon points={points} fill={bottomColor} />
      </svg>
    </div>
  );
}
