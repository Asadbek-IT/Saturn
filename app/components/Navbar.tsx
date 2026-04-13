'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Bosh Sahifa' },
  { href: '#xususiyatlar', label: 'Xususiyatlar' },
  { href: '#halqalar', label: 'Halqalar' },
  { href: '#missiyalar', label: 'Missiyalar' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      ref={navRef}
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-[25px] bg-black/75 border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto w-full px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="#hero" className="flex items-center gap-3 group">
          <div className="w-6 h-6 rounded-full border border-white/30 relative overflow-hidden flex items-center justify-center group-hover:border-white/60 transition-colors duration-300">
            <div className="w-4 h-[1.5px] bg-white/50 absolute rotate-[20deg] group-hover:bg-white/80 transition-colors duration-300" />
          </div>
          <span className="font-heading font-bold tracking-[0.2em] text-xs uppercase text-white/80 group-hover:text-white transition-colors duration-300">
            Saturn
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link font-mono text-xs tracking-widest uppercase text-white/50 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA / index indicator */}
        <div className="hidden md:flex items-center gap-2">
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/25 uppercase">
            06 / Sayyora
          </span>
        </div>

        {/* Mobile menu button */}
        <button
          id="mobile-menu-btn"
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/60 hover:text-white transition-colors"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden backdrop-blur-[25px] bg-black/75 border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-mono text-xs tracking-widest uppercase text-white/50 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
