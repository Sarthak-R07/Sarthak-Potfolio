import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const milestones = [
  {
    year: '2026',
    title: 'Eureka! Zonals',
    org: 'E-Cell, IIT Bombay',
    detail: 'Selected through Wildcard Entry — recognised among the top 1% of startup applicants in Asia\'s premier business model competition.',
    logo: '/logo_eureka.png',
    logoBg: 'bg-white',
    proofMail: '/eureka.png',
  },
  {
    year: '2026',
    title: 'Capital Nexus Grand Finale',
    org: 'Delhi',
    detail: 'Advanced to the Grand Finale, pitching directly to angel investors, venture capitalists, and family offices.',
    logo: '/logo_capital_nexus.png',
    logoBg: 'bg-white',
    proofMail: '/capital_nexus_delhi.png',
  },
  {
    year: '2026',
    title: 'MIT India IRS',
    org: 'Pune',
    detail: 'Shortlisted for Capital Nexus at the MIT India Industry-Institute Reconnect Summit — engaging with ecosystem leaders and institutional stakeholders.',
    logo: '/logo_capital_nexus.png',
    logoBg: 'bg-white',
    proofMail: '/mit_india.png',
  },
  {
    year: '2026',
    title: 'TiE U Global Pitch',
    org: 'TiE Pune Chapter',
    detail: 'Semi-finalist in the TiE U Global Pitch Competition, working closely with a dedicated TiE mentor on venture strategy.',
    logo: '/logo_tie.png',
    logoBg: 'bg-white',
    proofMail: '/tie_pune.png',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

export const Projects = () => {
  const [openMail, setOpenMail] = useState<number | null>(null);

  return (
    <>
      <section id="milestones" className="py-32 md:py-44 px-6 md:px-12 max-w-5xl mx-auto relative">
        <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="flex items-start gap-6 mb-16">
          <span className="section-num mt-1.5">03</span>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-4 font-medium" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Recognition</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#E8E4DF] tracking-tight leading-tight"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Milestones along
              <br />
              the journey.
            </h2>
          </div>
        </motion.div>

        <div className="space-y-0 pl-0 md:pl-12">
          {milestones.map((item, idx) => (
            <motion.div
              key={idx}
              {...fadeUp}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group py-12 border-b border-white/[0.06] first:border-t"
            >
              <div className="grid md:grid-cols-12 gap-8 items-start">
                {/* Logo & Year */}
                <div className="md:col-span-3 flex flex-col items-start gap-4">
                  <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#C9A962] font-medium" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{item.year}</p>
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden ${item.logoBg} p-2.5 flex items-center justify-center shrink-0 border border-white/10 shadow-2xl`}>
                    <img
                      src={item.logo}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Title + Description */}
                <div className="md:col-span-6">
                  <p className="text-xs text-[#8A8680] mb-2 font-medium tracking-wide uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{item.org}</p>
                  <h3
                    className="text-2xl md:text-3xl font-semibold text-[#E8E4DF] mb-4 tracking-tight group-hover:text-[#C9A962] transition-colors duration-500 cursor-pointer"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                    onClick={() => setOpenMail(idx)}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#8A8680] text-sm md:text-base leading-relaxed">{item.detail}</p>
                </div>

                {/* View Mail button */}
                <div className="md:col-span-3 flex md:justify-end items-start md:pt-6">
                  <button
                    onClick={() => setOpenMail(idx)}
                    className="inline-flex items-center gap-2 text-xs font-medium text-[#8A8680] hover:text-[#C9A962] transition-all duration-300 group/btn"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    <span className="border-b border-[#8A8680]/30 group-hover/btn:border-[#C9A962]/50 pb-0.5 transition-colors">View Proof</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mail proof modal */}
      <AnimatePresence>
        {openMail !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={() => setOpenMail(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[#07090E]/90 backdrop-blur-md" />

            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-2xl bg-[#0F1117] border border-white/[0.08] shadow-2xl shadow-black"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06] bg-[#07090E]/50">
                <div>
                  <p className="text-[#E8E4DF] font-medium text-lg" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {milestones[openMail].title}
                  </p>
                  <p className="text-[#8A8680] text-xs mt-1 uppercase tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Selection confirmation</p>
                </div>
                <button
                  onClick={() => setOpenMail(null)}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[#8A8680] hover:text-[#E8E4DF] hover:bg-white/[0.06] transition-all duration-300"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Mail image */}
              <div className="overflow-y-auto max-h-[calc(90vh-76px)] bg-[#F8F9FA] p-6 md:p-10 flex justify-center">
                <img
                  src={milestones[openMail].proofMail}
                  alt={`${milestones[openMail].title} proof email`}
                  className="max-w-full h-auto block rounded shadow-lg border border-black/5"
                  style={{ imageRendering: 'auto' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
