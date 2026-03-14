import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-32 md:py-48 bg-white relative overflow-hidden flex flex-col items-center border-t border-black/5">
      
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-[#FF5C00]/3 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] w-full mx-auto px-6 text-center relative z-10">

        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[10vw] font-bold tracking-tighter leading-[0.8] text-black mb-16 md:mb-24"
        >
          Build an unbreakable life <br />
          <span className="serif italic text-black/5 lowercase">and lead.</span>
        </motion.h2>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.5 }}
        >
          <button className="group relative flex items-center gap-16 px-16 py-10 bg-black text-white rounded-full hover:bg-[#FF5C00] transition-all duration-700 ease-[0.16, 1, 0.3, 1] transform shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)]">
             <span className="text-[20px] md:text-[32px] uppercase tracking-[0.1em] font-black serif">Begin Application</span>
             <ArrowUpRight strokeWidth={2.5} className="w-12 h-12 group-hover:rotate-45 transition-transform duration-700" />
          </button>
        </motion.div>

        <div className="mt-24 text-[12px] font-black uppercase tracking-[0.5em] text-black/20 italic serif">
          Only 3 slots available for private advisory.
        </div>
        
      </div>

       <div className="absolute bottom-[-10vw] left-0 right-0 overflow-hidden whitespace-nowrap opacity-[0.03] select-none pointer-events-none">
          <span className="text-[30vw] font-black text-black uppercase leading-none">Unbreakable Self-Discipline</span>
       </div>
    </section>
  )
}
