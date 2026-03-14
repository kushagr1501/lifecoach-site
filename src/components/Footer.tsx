export default function Footer() {
  return (
    <footer className="py-12 md:py-16 bg-[#FAF9F6] border-t border-black/5 relative overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[20px] font-black tracking-tighter">tomas.</span>
              <span className="w-2 h-2 rounded-full bg-[#FF5C00]" />
            </div>
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-black/30 italic serif">Behavioral Architecture</span>
          </div>

          <div className="flex items-center gap-8 md:gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-black/40">
            <a href="#" className="hover:text-black transition-colors">Instagram</a>
            <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-black transition-colors">Twitter</a>
          </div>

          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-black/15">
            © 2024 / London Based
          </div>

        </div>
      </div>
    </footer>
  )
}
