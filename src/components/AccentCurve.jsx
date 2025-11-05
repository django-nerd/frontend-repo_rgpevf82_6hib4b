import React from 'react';

// A minimal "_|" aim-like accent rendered as an outlined SVG near the heading
const AccentCurve = ({ className = '' }) => {
  return (
    <svg
      className={"text-sky-300/70 " + className}
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M10 110 L10 60 M10 110 L60 110" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* subtle glow */}
      <path d="M10 110 L10 60 M10 110 L60 110" stroke="currentColor" strokeOpacity="0.3" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
};

export default AccentCurve;
