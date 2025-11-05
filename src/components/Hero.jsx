import React from 'react';
import Spline from '@splinetool/react-spline';
import AccentCurve from './AccentCurve';

const DecorativeFrame = () => (
  <div className="pointer-events-none absolute inset-0 -z-[0]">
    {/* Corner segments around the heading area (not connected) */}
    <div className="absolute top-0 left-0 h-8 w-8 border-t border-l border-white/20" />
    <div className="absolute top-0 right-0 h-8 w-8 border-t border-r border-white/20" />
    <div className="absolute bottom-0 left-0 h-8 w-8 border-b border-l border-white/20" />
    <div className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-white/20" />
  </div>
);

const Hero = () => {
  return (
    <section className="relative pt-28 sm:pt-32 pb-24 sm:pb-32">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* gradient overlay to blend into dark theme */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="relative mx-auto max-w-3xl text-center">
          <DecorativeFrame />
          <div className="absolute -left-24 -bottom-10 hidden sm:block">
            <AccentCurve />
          </div>

          <h1 className="font-bricolage text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight text-white drop-shadow-[0_8px_40px_rgba(2,6,23,0.8)]">
            Fortunate<span className="text-sky-400">.GG</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300/90">
            Modern rewards and rakeback platform. Minimal. Glass. Fintech vibes.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-slate-200 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-sm">Live preview of the finance-grade 3D card scene</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
