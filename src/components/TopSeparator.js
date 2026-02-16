export default function TopSeparator() {
  return (
    <div className="wave-separator">
      <svg
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#AA367C" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#4A2FBD" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          d="M0,120 L1440,120 L1440,70 Q1200,20 960,70 Q720,120 480,70 Q240,20 0,70 Z"
        />
      </svg>
    </div>
  );
}
