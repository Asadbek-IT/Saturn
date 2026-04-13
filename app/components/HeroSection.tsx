'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLSpanElement>(null);
  const heading1Ref = useRef<HTMLHeadingElement>(null);
  const heading2Ref = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        tagRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          heading1Ref.current,
          { opacity: 0, y: 50, skewY: 2 },
          { opacity: 1, y: 0, skewY: 0, duration: 1.0 },
          '-=0.4'
        )
        .fromTo(
          heading2Ref.current,
          { opacity: 0, y: 50, skewY: 2 },
          { opacity: 1, y: 0, skewY: 0, duration: 1.0 },
          '-=0.7'
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          statsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.4'
        )
        .fromTo(
          scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          '-=0.2'
        );

      // Scroll indicator bounce
      gsap.to(scrollRef.current, {
        y: 8,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: 'sine.inOut',
        delay: 2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-right"
        aria-hidden="true"
      >
        <source src="/saturn.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #000 0%, transparent 100%)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl">
          {/* Tag */}
          <span
            ref={tagRef}
            className="inline-block font-mono text-[10px] tracking-[0.35em] uppercase text-white/40 mb-8"
          >
            ⬡ &nbsp; Quyosh tizimi &nbsp;·&nbsp; 06-Sayyora
          </span>

          {/* Heading */}
          <h1 className="font-heading overflow-hidden">
            <span
              ref={heading1Ref}
              className="block text-[clamp(3rem,9vw,7.5rem)] font-extrabold leading-none tracking-tighter text-white"
              style={{ opacity: 0 }}
            >
              SATURN
            </span>
            <span
              ref={heading2Ref}
              className="block text-[clamp(1rem,2.5vw,1.75rem)] font-semibold tracking-[0.12em] text-white/40 mt-2 uppercase"
              style={{ opacity: 0 }}
            >
              Halqalar Sayyorasi
            </span>
          </h1>

          {/* Description */}
          <p
            ref={descRef}
            className="mt-8 font-mono text-sm leading-relaxed text-white/55 max-w-md"
            style={{ opacity: 0 }}
          >
            Quyosh tizimidagi eng yirik ikkinchi sayyora. Uning muazzam halqalar tizimi
            va 146 dan ortiq tabiiy yo'ldoshi uni koinotning eng betakror mo'jizalaridan
            biriga aylantiradi.
          </p>

          {/* Quick stats */}
          <div
            ref={statsRef}
            className="mt-12 flex flex-wrap gap-8"
            style={{ opacity: 0 }}
          >
            {[
              { value: '1.43 M km', label: "O'rtacha diametr" },
              { value: '29.5 yil', label: 'Orbital davr' },
              { value: '146', label: "Yo'ldoshlar" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="font-heading font-bold text-xl text-white tracking-tight">
                  {s.value}
                </span>
                <span className="font-mono text-[10px] tracking-widest uppercase text-white/35">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25"
        style={{ opacity: 0 }}
        aria-hidden="true"
      >
        <span className="font-mono text-[9px] tracking-[0.4em] uppercase">Pastga aylantiring</span>
        <ChevronDown size={14} />
      </div>
    </section>
  );
}
