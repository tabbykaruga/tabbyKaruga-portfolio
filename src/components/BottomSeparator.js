export default function BottomSeparator() {
  return (
    <div className="wave-separator-bottom">
      <svg
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="waveGradientBottom"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#AA367C" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#4A2FBD" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradientBottom)"
          d="M0,0 L1440,0 L1440,50 Q1200,100 960,50 Q720,0 480,50 Q240,100 0,50 Z"
        />
      </svg>
    </div>
  );
}
