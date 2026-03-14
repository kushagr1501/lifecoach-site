import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const serviceFeatures = [
  "Strategic 1:1 Behavioral Deconstruction",
  "Clinical Psychological Baseline Mapping",
  "Ultra-Endurance Grit Integration",
  "Daily Performance Accountability Loop"
]

export default function ProgramSection() {
  return (
    <section id="bootcamp" className="py-20 md:py-32 bg-white px-6">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="text-center mb-40 md:mb-60">
            <h3 className="text-8xl md:text-[10vw] font-bold tracking-tighter leading-[0.8] text-black">
            The 90-Day <br />
            <span className="serif italic text-black/5">Intervention.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
           
           <div className="lg:col-span-6">
              <p className="text-[24px] md:text-[38px] text-black font-medium leading-[1.1] tracking-tighter mb-16 md:mb-20">
                A private, high-stakes structural bootcamp for those who cannot afford to be inconsistent. I rebuild your hardware so performance becomes a biological default.
              </p>
              
              <div className="flex flex-col gap-8 md:gap-10 border-l border-black/10 pl-8 md:pl-12">
                 {serviceFeatures.map((feat, i) => (
                   <div key={i} className="flex flex-col gap-2 group cursor-default">
                      <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-[#FF5C00]">Phase 0{i+1}</span>
                      <span className="text-[20px] md:text-[26px] font-bold text-black/80 group-hover:text-black transition-colors">{feat}</span>
                   </div>
                 ))}
              </div>
           </div>

           <div className="lg:col-span-6 flex items-center justify-center">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
               className="bg-[#FAF9F6] p-10 md:p-16 lg:p-24 rounded-[5vw] md:rounded-[3vw] border border-black/5 shadow-2xl relative group overflow-hidden"
             >
                <div className="absolute top-0 right-0 p-8 md:p-12 opacity-[0.03]">
                   <span className="text-[25vw] sm:text-[15vw] font-black italic serif leading-none">TS</span>
                </div>

                <h4 className="text-[11px] md:text-[12px] font-black uppercase tracking-[0.5em] text-black/30 mb-8 md:mb-12">Note from Tomas</h4>
                <p className="text-[20px] md:text-[32px] font-bold leading-[1.2] tracking-tighter mb-12 md:mb-16 italic relative z-10">
                  "Most coaching fails because it treats symptoms. I find the neural friction points, then deploy grit-building protocols to force permanent change."
                </p>
                
                <button className="relative z-10 w-full sm:w-auto group flex items-center justify-between gap-6 bg-black text-white px-10 py-6 rounded-full text-[13px] md:text-[14px] font-black uppercase tracking-widest hover:bg-[#FF5C00] transition-all duration-500 shadow-xl">
                   <span>Secure Strategy Call</span>
                   <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-45 transition-transform" />
                </button>
             </motion.div>
           </div>

        </div>

      </div>
    </section>
  )
}
