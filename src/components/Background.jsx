import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 overflow-hidden bg-slate-950">
      {/* Deep bluish gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_80%_-10%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(800px_500px_at_10%_120%,rgba(59,130,246,0.15),transparent_60%)]" />

      {/* Subtle grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06] text-slate-200 pointer-events-none"
        aria-hidden
      >
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating soft lights (white-ish blobs) */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-1/4 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
    </div>
  );
};

export default Background;
