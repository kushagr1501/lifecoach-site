import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'The Friction', href: '#problem' },
    { name: 'Authority', href: '#authority' },
    { name: 'The Intervention', href: '#bootcamp' }
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] p-6 md:p-10 pointer-events-none">
        <div className="max-w-[1400px] mx-auto flex justify-end items-center relative">
          
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="pointer-events-auto bg-black text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:bg-[#FF5C00] transition-all duration-700 active:scale-90 group"
          >
            <Menu className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>

        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-[#0A0A0B]/98 backdrop-blur-3xl text-white p-12 md:p-24 flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
               <div className="flex items-center gap-2">
                 <span className="text-2xl font-black tracking-tighter">tomas.</span>
                 <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C00]" />
               </div>
               <button 
                 onClick={() => setIsMenuOpen(false)}
                 className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
               >
                 <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
               </button>
            </div>

            <nav className="flex flex-col gap-6 md:gap-10">
               {navLinks.map((link, idx) => (
                 <motion.a
                   key={link.name}
                   href={link.href}
                   onClick={() => setIsMenuOpen(false)}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: idx * 0.1 + 0.3 }}
                   className="text-5xl md:text-8xl font-bold tracking-tighter hover:text-[#FF5C00] transition-colors group flex items-baseline gap-6"
                 >
                   <span className="text-lg font-black text-white/5 italic serif">0{idx + 1}</span>
                   <span className="group-hover:translate-x-10 transition-transform duration-700">{link.name}</span>
                 </motion.a>
               ))}
            </nav>

            <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-8 border-t border-white/5 pt-12">
               <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Protocol Intake</span>
                  <p className="text-xl font-bold">hello@tomasvitorka.com</p>
               </div>
               <button className="flex items-center gap-6 bg-[#FF5C00] text-white px-10 py-5 rounded-full text-[12px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-700 shadow-2xl shadow-[#FF5C00]/20">
                  <span>Start Application</span>
                  <ArrowUpRight className="w-5 h-5" />
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
