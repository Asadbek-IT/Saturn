'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ringsData = [
  { name: 'D halqasi', width: '7,500 km', desc: "Sayyoraga eng yaqin va eng xira halqa." },
  { name: 'C halqasi', width: '17,500 km', desc: "Keng va shaffof, 'Krep halqasi' deb ham ataladi." },
  { name: 'B halqasi', width: '25,500 km', desc: "Eng yorqin, qalin va massiv halqa." },
  { name: 'Cassini tirqishi', width: '4,700 km', desc: "A va B halqalari orasidagi katta bo'shliq." },
  { name: 'A halqasi', width: '14,600 km', desc: "Tashqi yorqin halqa, Encke tirqishiga ega." },
  { name: 'F halqasi', width: '100 km', desc: "Juda ingichka va o'zgaruvchan tashqi halqa." },
];

export default function RingsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = elementsRef.current?.querySelectorAll('.ring-item');
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="halqalar"
      ref={sectionRef}
      className="relative py-28 md:py-40 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        {/* Left Side: Text and Data */}
        <div className="w-full md:w-1/2" ref={elementsRef}>
          <span className="ring-item block font-mono text-[10px] tracking-[0.35em] uppercase text-white/30 mb-4">
            02 / Mo'jizaviy Halqalar
          </span>
          <h2 className="ring-item font-heading font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] leading-tight text-white mb-6">
            Muz va <br />
            <span className="text-white/30">Changdan yasalgan</span>
          </h2>
          <p className="ring-item font-mono text-sm text-white/40 mb-12 leading-relaxed">
            Saturn halqalari asosan muz bo'laklari, tosh va changdan iborat. 
            Bu bo'laklarning o'lchami qum zarralaridan tortib to tog'largacha yetadi. 
            Ularning qalinligi o'rtacha bor-yo'g'i 10 metrni tashkil qiladi, 
            ammo kengligi yuz minglab kilometrga cho'zilgan.
          </p>

          <div className="space-y-4">
            {ringsData.map((ring, idx) => (
              <div 
                key={ring.name} 
                className="ring-item flex items-start gap-4 border-l border-white/10 pl-6 hover:border-white/40 transition-colors"
              >
                <div className="mt-1 font-mono text-xs text-white/60 w-8 shrink-0">
                  {String(idx + 1).padStart(2, '0')}.
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-white tracking-wide">
                    {ring.name}
                  </h4>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="font-mono text-[10px] text-white/40 uppercase tracking-wider">
                      kenglik: {ring.width}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-white/30 mt-2">
                    {ring.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Abstract Visual Representation */}
        <div className="w-full md:w-1/2 flex justify-center items-center h-[500px] relative">
          {/* Abstract rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] aspect-square rounded-full border border-white/5" style={{ animation: 'ringPulse 8s infinite alternate ease-in-out' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[320px] aspect-square rounded-full border border-white/10" style={{ animation: 'ringPulse 6s infinite alternate ease-in-out', animationDelay: '-2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[240px] aspect-square rounded-full border border-white/5 opacity-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[150px] aspect-square rounded-full shadow-[0_0_80px_rgba(255,255,255,0.05)] bg-gradient-to-tr from-black to-[#1a1a1a]" />
          
          <div className="absolute bottom-10 right-10 text-right">
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/20">
              Illyustratsiya
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
