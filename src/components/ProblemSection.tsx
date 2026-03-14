import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const diagnostics = [
  {
    title: 'Motivation Collapse',
    description: 'Relying on "feeling like it" to execute. When your neurochemistry dips—consistency fails.',
    label: '01 / Neural Baseline'
  },
  {
    title: 'Cognitive Friction',
    description: 'Underlying psychological loops like procrastination acting as a silent brake on your bandwidth.',
    label: '02 / OS Error'
  },
  {
    title: 'Operational Drift',
    description: 'Working harder while losing tactical clarity. Your daily actions are no longer strategic.',
    label: '03 / Strategy Leak'
  }
]

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 md:py-32 bg-[#FAF9F6] px-6">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex flex-col items-center text-center mb-32 md:mb-48">
          <div className="mb-12">
            <h3 className="text-6xl md:text-8xl lg:text-[7vw] font-bold tracking-tighter leading-[0.85] text-black italic serif opacity-10">
              The barriers to <br />
              your maximum.
            </h3>
          </div>
          <p className="max-w-3xl text-[20px] md:text-[24px] text-black/60 font-medium leading-[1.3] tracking-tight text-balance">
            I don't offer life hacks. I audit your human hardware to find where you are leaking performance bandwidth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5 border border-black/5 rounded-[3vw] overflow-hidden shadow-2xl">
          {diagnostics.map((diag, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-12 md:p-16 flex flex-col group hover:bg-black hover:text-white transition-all duration-700 ease-[0.16, 1, 0.3, 1] cursor-default"
            >
              <div className="flex justify-between items-start mb-24">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/20 group-hover:text-white/40">{diag.label}</span>
                <ArrowRight className="w-5 h-5 text-[#FF5C00] group-hover:translate-x-3 transition-transform" />
              </div>

              <h4 className="text-4xl lg:text-5xl font-bold tracking-tighter mb-10 leading-[0.9] group-hover:pl-4 transition-all duration-500">
                {diag.title}
              </h4>
              <p className="text-[18px] text-black/50 font-medium leading-relaxed group-hover:text-white/60">
                {diag.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
