export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center">
            <div className="w-2 h-[1px] bg-white/50 rotate-[20deg]" />
          </div>
          <span className="font-heading font-bold tracking-[0.2em] text-[10px] uppercase text-white/50">
            Saturn
          </span>
        </div>

        {/* Legal/Links */}
        <div className="flex items-center gap-8 font-mono text-[9px] uppercase tracking-widest text-white/30">
          <a href="#" className="hover:text-white/60 transition-colors">Maxfiylik Siyosati</a>
          <a href="#" className="hover:text-white/60 transition-colors">Foydalanish shartlari</a>
          <span>© {new Date().getFullYear()} Koinot Kuzatuvchilari.</span>
        </div>

      </div>
    </footer>
  );
}
