import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface MilestonePhoto {
  src: string;
  caption: string;
  label: string;
}

interface Milestone {
  year: string;
  title: string;
  org: string;
  detail: string;
  logo: string;
  logoBg: string;
  proofMail: string;
  photos?: MilestonePhoto[];
}

const milestones: Milestone[] = [
  {
    year: '2026',
    title: 'Eureka! Zonals',
    org: 'E-Cell, IIT Bombay',
    detail: 'Selected through Wildcard Entry — recognised among the top 1% of startup applicants in Asia\'s premier business model competition.',
    logo: '/Sarthak-Potfolio/logo_eureka.png',
    logoBg: 'bg-white',
    proofMail: '/Sarthak-Potfolio/eureka.png',
    photos: [
      {
        src: '/Sarthak-Potfolio/eureka_badge.jpg',
        caption: 'Official Eureka! 2026 Startup Delegate Badge — Sarthak Rodge',
        label: 'Startup Badge',
      },
      {
        src: '/Sarthak-Potfolio/eureka_desai_sethi.jpg',
        caption: 'Desai Sethi School of Entrepreneurship, IIT Bombay',
        label: 'IIT Bombay',
      },
      {
        src: '/Sarthak-Potfolio/eureka_banner.jpg',
        caption: 'Eureka! Road to Enterprise 2026 — AI & Deeptech Track',
        label: 'Zonals Banner',
      },
      {
        src: '/Sarthak-Potfolio/eureka_campus.jpg',
        caption: 'At Desai Sethi School of Entrepreneurship, IIT Bombay Campus',
        label: 'Campus View',
      },
    ],
  },
  {
    year: '2026',
    title: 'Capital Nexus Grand Finale',
    org: 'Delhi',
    detail: 'Advanced to the Grand Finale, pitching directly to angel investors, venture capitalists, and family offices.',
    logo: '/Sarthak-Potfolio/logo_capital_nexus.png',
    logoBg: 'bg-white',
    proofMail: '/Sarthak-Potfolio/capital_nexus_delhi.png',
  },
  {
    year: '2026',
    title: 'MIT India IRS',
    org: 'Pune',
    detail: 'Shortlisted for Capital Nexus at the MIT India Industry-Institute Reconnect Summit — engaging with ecosystem leaders and institutional stakeholders.',
    logo: '/Sarthak-Potfolio/logo_capital_nexus.png',
    logoBg: 'bg-white',
    proofMail: '/Sarthak-Potfolio/mit_india.png',
    photos: [
      {
        src: '/Sarthak-Potfolio/mit_portrait.jpg',
        caption: 'Sarthak Rodge at the Capital Nexus Grand Finale, Pune',
        label: 'At the Finale',
      },
      {
        src: '/Sarthak-Potfolio/mit_pitching.jpg',
        caption: 'Pitching Swaraj Saathi to investors and industry leaders',
        label: 'Live Pitch',
      },
      {
        src: '/Sarthak-Potfolio/mit_deck.jpg',
        caption: 'Swaraj Saathi pitch deck — Voice-First AI for 800M rural citizens',
        label: 'Pitch Deck',
      },
      {
        src: '/Sarthak-Potfolio/mit_presentation.jpg',
        caption: 'Final presentation slide — Founder, Mentors & The Ask',
        label: 'Presentation',
      },
    ],
  },
  {
    year: '2026',
    title: 'TiE U Global Pitch',
    org: 'TiE Pune Chapter',
    detail: 'Semi-finalist in the TiE U Global Pitch Competition, working closely with a dedicated TiE mentor on venture strategy.',
    logo: '/Sarthak-Potfolio/logo_tie.png',
    logoBg: 'bg-white',
    proofMail: '/Sarthak-Potfolio/tie_pune.png',
    photos: [
      {
        src: '/Sarthak-Potfolio/tie_pune_venue.jpg',
        caption: 'TiE U Global Pitch — Pune Chapter Semi-Finals at Auditorium, IMDR',
        label: 'Semi-Finals Venue',
      },
    ],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

export const Projects = () => {
  const [openMail, setOpenMail] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'photos' | 'mail'>('photos');
  const [activePhoto, setActivePhoto] = useState<number>(0);

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
                    onClick={() => {
                      setOpenMail(idx);
                      setActiveTab(item.photos && item.photos.length > 0 ? 'photos' : 'mail');
                      setActivePhoto(0);
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#8A8680] text-sm md:text-base leading-relaxed">{item.detail}</p>

                  {/* Event Photos Gallery Strip if available */}
                  {item.photos && item.photos.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-white/[0.06]">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[#C9A962] font-medium" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                          Event Gallery
                        </span>
                        <span className="text-[0.65rem] text-[#8A8680]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                          {item.photos.length} Photos · Click to expand
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
                        {item.photos.map((photo, pIdx) => (
                          <div
                            key={pIdx}
                            onClick={() => {
                              setOpenMail(idx);
                              setActiveTab('photos');
                              setActivePhoto(pIdx);
                            }}
                            className="group/photo relative aspect-[3/4] rounded-xl overflow-hidden bg-[#0F1117] border border-white/10 hover:border-[#C9A962]/70 transition-all duration-300 cursor-pointer shadow-lg"
                          >
                            <img
                              src={photo.src}
                              alt={photo.caption}
                              className="w-full h-full object-cover object-center group-hover/photo:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-1.5 sm:p-2">
                              <span className="text-[0.55rem] tracking-wider uppercase text-[#C9A962] font-semibold leading-tight line-clamp-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                                {photo.label}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* View Mail & Photos button */}
                <div className="md:col-span-3 flex md:flex-col md:items-end items-start gap-2.5 md:pt-6">
                  {item.photos && item.photos.length > 0 && (
                    <button
                      onClick={() => {
                        setOpenMail(idx);
                        setActiveTab('photos');
                        setActivePhoto(0);
                      }}
                      className="inline-flex items-center gap-2 text-xs font-medium text-[#C9A962] hover:text-white transition-all duration-300 group/btn"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      <span className="border-b border-[#C9A962]/40 group-hover/btn:border-white pb-0.5 transition-colors">Event Gallery ({item.photos.length})</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setOpenMail(idx);
                      setActiveTab('mail');
                    }}
                    className="inline-flex items-center gap-2 text-xs font-medium text-[#8A8680] hover:text-[#C9A962] transition-all duration-300 group/btn"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    <span className="border-b border-[#8A8680]/30 group-hover/btn:border-[#C9A962]/50 pb-0.5 transition-colors">View Proof Mail</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mail proof & Photo Gallery modal */}
      <AnimatePresence>
        {openMail !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8"
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
              className="relative max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden rounded-2xl bg-[#0F1117] border border-white/[0.08] shadow-2xl shadow-black"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/[0.06] bg-[#07090E]/80 backdrop-blur-sm shrink-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                  <div>
                    <p className="text-[#E8E4DF] font-medium text-base sm:text-lg" style={{ fontFamily: 'Syne, sans-serif' }}>
                      {milestones[openMail].title}
                    </p>
                    <p className="text-[#8A8680] text-[0.65rem] uppercase tracking-widest mt-0.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      {milestones[openMail].org}
                    </p>
                  </div>

                  {/* Tabs if milestone has both photos and proof mail */}
                  {milestones[openMail].photos && milestones[openMail].photos!.length > 0 && (
                    <div className="flex items-center gap-1.5 p-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs">
                      <button
                        onClick={() => setActiveTab('photos')}
                        className={`px-3 py-1 rounded-md transition-all duration-200 font-medium ${
                          activeTab === 'photos'
                            ? 'bg-[#C9A962]/20 text-[#C9A962] border border-[#C9A962]/30'
                            : 'text-[#8A8680] hover:text-[#E8E4DF]'
                        }`}
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        Photos ({milestones[openMail].photos!.length})
                      </button>
                      <button
                        onClick={() => setActiveTab('mail')}
                        className={`px-3 py-1 rounded-md transition-all duration-200 font-medium ${
                          activeTab === 'mail'
                            ? 'bg-[#C9A962]/20 text-[#C9A962] border border-[#C9A962]/30'
                            : 'text-[#8A8680] hover:text-[#E8E4DF]'
                        }`}
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        Proof Email
                      </button>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setOpenMail(null)}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[#8A8680] hover:text-[#E8E4DF] hover:bg-white/[0.06] transition-all duration-300 shrink-0"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Body */}
              {activeTab === 'photos' && milestones[openMail].photos && milestones[openMail].photos!.length > 0 ? (
                <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#07090E] flex flex-col items-center justify-between min-h-0">
                  {/* Main Image with Navigation Arrows */}
                  <div className="relative w-full flex items-center justify-center flex-1 max-h-[58vh] my-auto">
                    {/* Previous button */}
                    <button
                      onClick={() => setActivePhoto((prev) => (prev > 0 ? prev - 1 : milestones[openMail].photos!.length - 1))}
                      className="absolute left-2 sm:left-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-[#C9A962] text-white hover:text-black flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/10 text-xl font-bold"
                      title="Previous photo"
                    >
                      ‹
                    </button>

                    <img
                      src={milestones[openMail].photos![activePhoto].src}
                      alt={milestones[openMail].photos![activePhoto].caption}
                      className="max-h-[56vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
                    />

                    {/* Next button */}
                    <button
                      onClick={() => setActivePhoto((prev) => (prev < milestones[openMail].photos!.length - 1 ? prev + 1 : 0))}
                      className="absolute right-2 sm:right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-[#C9A962] text-white hover:text-black flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/10 text-xl font-bold"
                      title="Next photo"
                    >
                      ›
                    </button>
                  </div>

                  {/* Caption & Counter */}
                  <div className="w-full text-center mt-4">
                    <p className="text-sm text-[#E8E4DF] font-medium" style={{ fontFamily: 'Syne, sans-serif' }}>
                      {milestones[openMail].photos![activePhoto].caption}
                    </p>
                    <p className="text-[0.65rem] text-[#8A8680] mt-1 tracking-widest uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      Photo {activePhoto + 1} of {milestones[openMail].photos!.length}
                    </p>
                  </div>

                  {/* Thumbnail Row */}
                  <div className="flex items-center justify-center gap-2.5 mt-4 pt-3 border-t border-white/[0.06] w-full overflow-x-auto pb-1">
                    {milestones[openMail].photos!.map((photo, pIdx) => (
                      <button
                        key={pIdx}
                        onClick={() => setActivePhoto(pIdx)}
                        className={`relative w-12 h-14 sm:w-14 sm:h-16 rounded-lg overflow-hidden border transition-all duration-200 shrink-0 ${
                          activePhoto === pIdx
                            ? 'border-[#C9A962] ring-2 ring-[#C9A962]/30 scale-105'
                            : 'border-white/10 opacity-50 hover:opacity-100'
                        }`}
                      >
                        <img src={photo.src} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Mail image */
                <div className="overflow-y-auto max-h-[calc(92vh-76px)] bg-[#F8F9FA] p-6 md:p-10 flex justify-center">
                  <img
                    src={milestones[openMail].proofMail}
                    alt={`${milestones[openMail].title} proof email`}
                    className="max-w-full h-auto block rounded shadow-lg border border-black/5"
                    style={{ imageRendering: 'auto' }}
                  />
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
