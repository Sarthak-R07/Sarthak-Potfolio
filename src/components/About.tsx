import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const portraits = [
  {
    src: '/Sarthak-Potfolio/img3.jpg',
    label: '01 · Studio',
    tag: 'Founder Portrait',
    caption: 'Sarthak Rodge — Startup Founder & Innovator',
  },
  {
    src: '/Sarthak-Potfolio/img4.jpg',
    label: '02 · Finale',
    tag: 'Capital Nexus',
    caption: 'Sarthak Rodge at Capital Nexus Grand Finale — Delhi',
  },
];

const capabilities = [
  { label: 'Strategic Planning', desc: 'Market positioning & go-to-market' },
  { label: 'Venture Growth', desc: 'Zero-to-one scaling & fundraising' },
  { label: 'Product Thinking', desc: 'User-first design & architecture' },
  { label: 'Team Leadership', desc: 'Cross-functional team orchestration' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

export const About = () => {
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);

  // Track scroll progress of the image container
  const { scrollYProgress } = useScroll({
    target: imgContainerRef,
    offset: ['start 90%', 'center 50%'],
  });

  // Map scroll progress (0 to 1) to grayscale percentage
  const imgFilter = useTransform(scrollYProgress, [0, 1], ['grayscale(100%)', 'grayscale(0%)']);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        setActiveIdx((prev) => (prev > 0 ? prev - 1 : portraits.length - 1));
      } else if (e.key === 'ArrowRight') {
        setActiveIdx((prev) => (prev < portraits.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <>
      <section id="about" className="py-32 md:py-44 px-6 md:px-12 max-w-5xl mx-auto relative">
        {/* Section header with number */}
        <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="flex items-start gap-6 mb-16">
          <span className="section-num mt-1.5">01</span>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-4 font-medium" style={{ fontFamily: 'JetBrains Mono, monospace' }}>About</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#E8E4DF] tracking-tight leading-tight"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Turning complex problems
              <br />
              into scalable ventures.
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Dual attached portrait photos */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="md:col-span-4"
          >
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[#C9A962] font-medium" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                Portraits (2)
              </span>
              <span className="text-[0.65rem] text-[#8A8680]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                Click to expand
              </span>
            </div>

            <div ref={imgContainerRef} className="grid grid-cols-2 gap-3">
              {portraits.map((p, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveIdx(idx);
                    setLightboxOpen(true);
                  }}
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#0F1117] border border-white/10 hover:border-[#C9A962]/70 transition-all duration-300 cursor-pointer shadow-xl shadow-black/40"
                >
                  <motion.img
                    src={p.src}
                    alt={p.caption}
                    style={{ filter: imgFilter }}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090E]/90 via-[#07090E]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Subtle label overlay */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex flex-col">
                    <span
                      className="text-[0.55rem] tracking-wider uppercase text-[#C9A962] font-semibold"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      {p.label}
                    </span>
                    <span className="text-[0.65rem] text-[#E8E4DF] font-medium line-clamp-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                      {p.tag}
                    </span>
                  </div>

                  {/* Corner expand icon hint on hover */}
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="text-[0.65rem]">↗</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick switcher buttons */}
            <div className="flex items-center gap-2 mt-3 p-1 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              {portraits.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveIdx(idx);
                    setLightboxOpen(true);
                  }}
                  className="flex-1 py-1.5 px-2 rounded-lg text-[0.65rem] tracking-wider uppercase transition-all duration-200 text-center text-[#8A8680] hover:text-[#E8E4DF] hover:bg-white/[0.04] cursor-pointer"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-5"
          >
            <p className="text-[#8A8680] text-base md:text-lg leading-[1.85] mb-6">
              I'm a startup founder who believes in building things that matter. My work sits
              at the intersection of technology, business strategy, and human-centered design — 
              taking ideas from napkin sketches to funded ventures.
            </p>
            <p className="text-[#8A8680] text-base md:text-lg leading-[1.85]">
              From pitching at IIT Bombay's Eureka! to presenting at the MIT India Summit and Capital Nexus Grand Finale in Delhi,
              I've learned that the best companies aren't built on hype — they're built on
              <span className="text-[#E8E4DF]"> relentless execution</span> and
              <span className="text-[#E8E4DF]"> deep empathy</span> for the problem.
            </p>
          </motion.div>

          {/* Capabilities */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-3"
          >
            <p
              className="text-[0.65rem] tracking-[0.2em] uppercase text-[#8A8680] mb-4"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Core Focus
            </p>
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="py-3.5 border-b border-white/[0.06] first:border-t group cursor-default"
              >
                <p className="text-[#E8E4DF] text-sm font-medium mb-0.5 group-hover:text-[#C9A962] transition-colors duration-300">
                  {cap.label}
                </p>
                <p className="text-[#8A8680] text-xs leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[#07090E]/90 backdrop-blur-md" />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden rounded-2xl bg-[#0F1117] border border-white/[0.08] shadow-2xl shadow-black"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/[0.06] bg-[#07090E]/80 backdrop-blur-sm shrink-0">
                <div className="flex items-center gap-3">
                  <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[#C9A962] font-medium" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {portraits[activeIdx].label}
                  </span>
                  <span className="text-[#8A8680] text-xs">·</span>
                  <span className="text-xs text-[#E8E4DF] font-medium" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {portraits[activeIdx].tag}
                  </span>
                </div>

                <button
                  onClick={() => setLightboxOpen(false)}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[#8A8680] hover:text-[#E8E4DF] hover:bg-white/[0.06] transition-all duration-300 cursor-pointer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Main Photo View */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#07090E] flex flex-col items-center justify-between min-h-0">
                <div className="relative w-full flex items-center justify-center flex-1 max-h-[58vh] my-auto">
                  {/* Previous button */}
                  <button
                    onClick={() => setActiveIdx((prev) => (prev > 0 ? prev - 1 : portraits.length - 1))}
                    className="absolute left-2 sm:left-4 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-[#C9A962] text-white hover:text-black flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/10 text-xl font-bold cursor-pointer"
                    title="Previous (←)"
                  >
                    ‹
                  </button>

                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeIdx}
                      src={portraits[activeIdx].src}
                      alt={portraits[activeIdx].caption}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="max-h-[56vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
                    />
                  </AnimatePresence>

                  {/* Next button */}
                  <button
                    onClick={() => setActiveIdx((prev) => (prev < portraits.length - 1 ? prev + 1 : 0))}
                    className="absolute right-2 sm:right-4 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-[#C9A962] text-white hover:text-black flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/10 text-xl font-bold cursor-pointer"
                    title="Next (→)"
                  >
                    ›
                  </button>
                </div>

                {/* Caption & Counter */}
                <div className="w-full text-center mt-4">
                  <p className="text-sm text-[#E8E4DF] font-medium" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {portraits[activeIdx].caption}
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <p className="text-[0.65rem] text-[#8A8680] tracking-widest uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      Photo {activeIdx + 1} of {portraits.length}
                    </p>
                    <span className="text-[0.6rem] text-[#8A8680]/60 hidden sm:inline" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      · Use ← / → keys
                    </span>
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="flex items-center justify-center gap-3 mt-4 pt-3 border-t border-white/[0.06] w-full">
                  {portraits.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIdx(idx)}
                      className={`relative w-14 h-16 sm:w-16 sm:h-20 rounded-lg overflow-hidden border transition-all duration-200 shrink-0 cursor-pointer ${
                        activeIdx === idx
                          ? 'border-[#C9A962] ring-2 ring-[#C9A962]/30 scale-105'
                          : 'border-white/10 opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img src={p.src} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
