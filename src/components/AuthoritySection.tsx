const pedigree = [
  { value: 'BSc Psych', label: 'Clinical Authority' },
  { value: '450+', label: '1:1 Transformations' },
  { value: '4x Cert', label: 'Master Coach' },
  { value: 'Ultra.', label: 'Mental Grit' }
]

export default function AuthoritySection() {
  return (
    <section id="authority" className="py-24 md:py-40 bg-[#FAF9F6] px-6 border-t border-black/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-start justify-between">
          
          <div className="lg:w-1/2 static lg:sticky top-40">
            <h3 className="text-8xl md:text-[10vw] lg:text-[7vw] font-bold tracking-tighter leading-[0.8] text-black mb-16">
              Clinical <br />
              <span className="serif italic text-[#FF5C00] lowercase">Authority.</span>
            </h3>
            
            <p className="text-[26px] md:text-[32px] text-black font-medium leading-[1.2] tracking-tighter max-w-xl">
              "I don't just teach discipline; I re-engineer it. My strategy combines behavioral science with the endurance required for 100-mile runs."
            </p>
          </div>

          <div className="lg:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 pt-12 border-t border-black/10 lg:border-t-0 lg:pt-0">
            {pedigree.map((stat, i) => (
              <div key={i} className="flex flex-col gap-3 group cursor-default">
                 <span className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-black group-hover:text-[#FF5C00] transition-colors">{stat.value}</span>
                 <span className="text-[11px] font-black uppercase tracking-widest text-black/30 leading-none">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
