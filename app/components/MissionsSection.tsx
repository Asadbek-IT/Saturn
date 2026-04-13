'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MissionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.mission-text',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      );
      
      gsap.fromTo(
        '.mission-image-placeholder',
        { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
        {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="missiyalar"
      ref={sectionRef}
      className="relative py-28 md:py-40 bg-[#050505] overflow-hidden"
    >
      <div 
        ref={containerRef}
        className="max-w-7xl mx-auto w-full px-6 md:px-12"
      >
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="mission-text block font-mono text-[10px] tracking-[0.35em] uppercase text-white/30 mb-4">
            03 / Kosmik Tadqiqotlar
          </span>
          <h2 className="mission-text font-heading font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] leading-tight text-white mb-6">
            Cassini-Huygens <br />
            <span className="text-white/30">Missiyasi</span>
          </h2>
          <p className="mission-text font-mono text-sm text-white/40 leading-relaxed">
            Saturnni o'rganish bo'yicha eng yirik va uzoq davom etgan loyiha. 
            Ushbu missiya insoniyatga Saturn tizimi haqida bebaho bilimlarni berdi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="mission-text py-8 flex flex-col justify-between h-full group transition-colors">
            <div>
              <span className="font-mono text-2xl font-bold tracking-tighter text-white/80">1997</span>
              <div className="w-8 h-[1px] bg-white/20 mt-3 mb-6" />
              <h3 className="font-heading font-bold text-xl text-white mb-3">Uchirilishi</h3>
              <p className="font-mono text-xs text-white/40 leading-relaxed">
                Cassini orbital aparati va Huygens zondi Yerdan uchirildi. 
                Loyihada NASA, ESA va ASI ishtirok etishdi.
              </p>
            </div>
          </div>

          <div className="mission-text py-8 flex flex-col justify-between h-full group transition-colors relative lg:-translate-y-4">
            <div>
              <span className="font-mono text-2xl font-bold tracking-tighter text-white/80">2004</span>
              <div className="w-8 h-[1px] bg-white/20 mt-3 mb-6" />
              <h3 className="font-heading font-bold text-xl text-white mb-3">Orbitaga kirish</h3>
              <p className="font-mono text-xs text-white/40 leading-relaxed">
                Etti yillik parvozdan so'ng, aparat Saturn orbitasiga yetib keldi. 
                2005-yilda Huygens zondi Titan sirtiga qo'ndi.
              </p>
            </div>
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="mission-text py-8 flex flex-col justify-between h-full group transition-colors">
            <div>
              <span className="font-mono text-2xl font-bold tracking-tighter text-white/80">2017</span>
              <div className="w-8 h-[1px] bg-white/20 mt-3 mb-6" />
              <h3 className="font-heading font-bold text-xl text-white mb-3">Buyuk Final</h3>
              <p className="font-mono text-xs text-white/40 leading-relaxed">
                Yoqilg'i tugashi bilan kema aniq maqsadli ravishda Saturn atmosferasiga yo'naltirildi 
                va sayyora bag'rida yonib ketdi.
              </p>
            </div>
          </div>
        </div>
        
        {/* Abstract "Cassini" path graphic */}
        <div className="mission-image-placeholder mt-24 h-48 w-full border-t border-b border-white/10 relative flex items-center overflow-hidden">
             {/* Decorative lines representing orbit paths */}
             <div className="absolute left-0 w-full h-[1px] bg-white/[0.02] top-[20%]" />
             <div className="absolute left-0 w-full h-[1px] bg-white/[0.02] top-[50%]" />
             <div className="absolute left-0 w-full h-[1px] bg-white/[0.02] top-[80%]" />
             <div className="absolute w-[600px] h-[600px] rounded-full border border-white/10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" />
             
             <div className="mx-auto text-center z-10 py-6 px-12 bg-black">
               <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/50 mb-2">Buyuk Final (Grand Finale)</p>
               <p className="font-heading text-xl text-white font-semibold">22 ta sho'ng'ish va abadiyat</p>
             </div>
        </div>
      </div>
    </section>
  );
}
