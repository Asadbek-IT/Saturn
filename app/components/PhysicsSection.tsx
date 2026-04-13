'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Thermometer, Wind, Globe, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    icon: Globe,
    value: '120,536 km',
    label: 'Ekvatorial diametr',
    detail: 'Yerdan 9.5 baravar katta',
  },
  {
    icon: Thermometer,
    value: '−178 °C',
    label: "O'rtacha harorat",
    detail: 'Bulutlar qatlamida',
  },
  {
    icon: Wind,
    value: '1,800 km/s',
    label: 'Shamol tezligi',
    detail: 'Ekvatorial mintaqada',
  },
  {
    icon: Layers,
    value: '0.687 g/cm³',
    label: "Zichlik ko'rsatkichi",
    detail: "Suvdan ham yengil — suzadi!",
  },
];

const dataRows = [
  ["Massa", "5.683 × 10²⁶ kg", "Yerdan 95.2× og'ir"],
  ['Gravitatsiya', '10.44 m/s²', "Yer tortishuvining 1.07×"],
  ["Atmosfera", 'H₂ %96.3, He %3.25', 'Asosan vodorod va geliy'],
  ["O'q og'ishi", '26.73°', "Yil fasllari mavjud"],
  ["Aylanish davri", '10 s 33 d', 'Eng tez aylanuvchi gaz sayyora'],
  ['Quyoshdan masofa', '1.43 mlrd km', 'Ortacha 9.58 AU'],
];

export default function PhysicsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
          },
        }
      );

      const cards = cardsRef.current?.querySelectorAll('.stat-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      gsap.fromTo(
        tableRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: tableRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="xususiyatlar"
      ref={sectionRef}
      className="relative py-28 md:py-40 bg-black"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12">

        {/* Title block */}
        <div ref={titleRef} className="mb-20">
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-white/30 mb-4 block">
            01 / Fizik Xususiyatlar
          </span>
          <h2 className="font-heading font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-tighter text-white">
            Raqamlar <br />
            <span className="text-white/30">orqasida</span>
          </h2>
          <p className="mt-6 font-mono text-sm text-white/40 max-w-lg leading-relaxed">
            Saturn o'zining ulkan o'lchami, past zichligi va tez aylanishi bilan hech bir
            sayyoraga o'xshamaydigan noyob fizik xususiyatlarga ega.
          </p>
        </div>

        {/* Stat cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16"
        >
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="stat-card py-8 flex flex-col cursor-default"
              >
                <div className="mb-5">
                  <Icon size={18} strokeWidth={1.5} className="text-white/40" />
                </div>
                <div className="font-heading font-bold text-2xl text-white mb-1 tracking-tight">
                  {s.value}
                </div>
                <div className="font-mono text-[10px] tracking-widest uppercase text-white/45 mb-2">
                  {s.label}
                </div>
                <div className="font-mono text-[10px] text-white/25 leading-relaxed">
                  {s.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Data table */}
        <div ref={tableRef} className="overflow-hidden border-t border-white/10 mt-16 pt-8">
          <div className="border-b border-white/10 pb-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <span className="font-mono text-[10px] tracking-widest uppercase text-white/35">
              To'liq ma'lumotlar jadvali
            </span>
          </div>
          <div className="divide-y divide-white/5">
            {dataRows.map(([key, val, note]) => (
              <div
                key={key}
                className="grid grid-cols-3 py-6 hover:bg-white/[0.02] transition-colors group"
              >
                <span className="font-mono text-xs text-white/40 group-hover:text-white/55 transition-colors">
                  {key}
                </span>
                <span className="font-mono text-xs text-white font-bold">
                  {val}
                </span>
                <span className="font-mono text-[10px] text-white/25 self-center hidden sm:block">
                  {note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
