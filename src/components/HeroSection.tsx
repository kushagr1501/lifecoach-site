import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import tomasPortrait from '../assets/tomas.jpg';


export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#FDFBFA] flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
      <div className="relative w-full max-w-[1600px] min-h-[90vh] bg-[#F9F7F2] rounded-[2.5vw] border border-black/5 overflow-hidden flex flex-col items-center justify-center shadow-2xl py-20 md:py-32">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-8 md:top-12 left-8 md:left-12 flex items-center gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-black/10 shadow-sm">
            <img src={tomasPortrait} alt="TS" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black">Tomas Svitorka</span>
            <span className="text-[8px] font-bold uppercase tracking-[0.1em] text-black/30">Clinical Performance</span>
          </div>
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 md:mb-16"
          >
            <h1 className="text-[11vw] md:text-[9vw] lg:text-[7.5vw] font-bold tracking-[-0.07em] leading-[0.82] text-black uppercase flex flex-col items-center">
              <div className="relative inline-block mb-4 md:mb-0">
                <span className="relative z-10 uppercase">(ALMOST) THE ONLY</span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-[10%] left-0 h-[70%] bg-[#FF5C00] -z-10 -rotate-1 origin-left shadow-[0_10px_30px_rgba(255,92,0,0.2)]"
                />
              </div>
              <span className="tracking-[-0.04em] md:tracking-[-0.08em]">PLACE TO DROP THE WEIGHT</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <p className="text-[26px] md:text-[38px] lg:text-[48px] text-black font-semibold leading-[0.98] tracking-tighter text-balance mb-12">
              "You've spent years being the strength for everyone else. Now, let's build a <span className="serif italic font-normal text-[#FF5C00] relative">
                home
                <motion.svg viewBox="0 0 100 20" className="absolute -bottom-2 left-0 w-full h-3 text-[#FF5C00]/30" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.5, duration: 1 }}>
                  <path d="M5,15 Q50,5 95,15" fill="transparent" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </motion.svg>
              </span> for your own peace."
            </p>
            <div className="max-w-2xl text-center flex flex-col items-center gap-12">
              <p className="text-lg md:text-xl text-black/40 leading-relaxed font-medium">
                I don't treat you like a machine. I treat you like a founder who has outgrown their own engine. We re-engineer the person behind the performance of your life.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-10 group cursor-pointer bg-black text-white px-10 py-6 rounded-full shadow-[0_30px_70px_-15px_rgba(0,0,0,0.3)] hover:bg-[#FF5C00] transition-all duration-700"
              >
                <div className="flex flex-col items-start text-left">
                  <span className="text-[13px] font-black uppercase tracking-[0.2em]">Enter The Advisory</span>
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.1em]">3 Intake Units Open / Q2</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowUpRight className="w-6 h-6 transform group-hover:rotate-45 transition-transform" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-[15%] right-[-5%] pointer-events-none select-none opacity-[0.02] -z-10">
          <span className="text-[35vw] font-black uppercase leading-none italic tracking-tighter">Peace.</span>
        </div>
        <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 right-8 md:right-12 flex justify-between items-end opacity-[0.15] pointer-events-none select-none">
          <div className="flex flex-col">
            <span className="text-[9px] font-black uppercase tracking-[0.4em]">Clinical Pedigree</span>
            <span className="text-[9px] font-bold text-black/40 uppercase tracking-[0.1em]">EST. LONDON / 24</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-[#FF5C00] animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em]">Strategy Live</span>
          </div>
        </div>
      </div>
    </section>
  )
}
