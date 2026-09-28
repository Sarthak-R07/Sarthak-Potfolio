import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

const projects = [
  {
    title: 'Renuka Devi Website',
    type: 'Web Development',
    description: 'A thoughtfully designed website delivering a seamless digital presence.',
    websiteLink: 'https://sarthak-r07.github.io/Renuka-Devi/',
    videoLink: null,
    flagship: false,
  },
  {
    title: 'Swaraj Saathi',
    type: 'Flagship Product',
    description: 'The biggest project in the portfolio — a comprehensive platform built to empower and create real impact at scale. From ideation to execution, Swaraj Saathi represents the full spectrum of product thinking, engineering, and mission-driven design.',
    websiteLink: '#', // TODO: Replace with actual website link
    videoLink: 'https://drive.google.com/file/d/1e1QFynU-nk0Ujk90JnGCilf_yxIBxEnu/view?usp=drive_link',
    flagship: true,
  },
];

export const Work = () => {
  return (
    <section id="work" className="py-32 md:py-44 px-6 md:px-12 max-w-5xl mx-auto relative">
      <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="flex items-start gap-6 mb-16">
        <span className="section-num mt-1.5">02</span>
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-4 font-medium" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Projects</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#E8E4DF] tracking-tight leading-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Things I've
            <br />
            built.
          </h2>
        </div>
      </motion.div>

      <div className="space-y-0 pl-0 md:pl-12">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            {...fadeUp}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`group py-12 border-b border-white/[0.06] first:border-t ${project.flagship ? 'relative' : ''}`}
          >
            {/* Flagship badge */}
            {project.flagship && (
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 text-[0.65rem] tracking-[0.2em] uppercase font-medium text-[#C9A962] border border-[#C9A962]/30 rounded-full bg-[#C9A962]/5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A962] animate-pulse" />
                  Flagship
                </span>
              </div>
            )}

            <div className="grid md:grid-cols-12 gap-8 items-start">
              {/* Type label */}
              <div className="md:col-span-3">
                <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#8A8680] font-medium" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{project.type}</p>
              </div>

              {/* Title + Description */}
              <div className="md:col-span-6">
                <h3
                  className="text-2xl md:text-3xl font-semibold text-[#E8E4DF] mb-4 tracking-tight group-hover:text-[#C9A962] transition-colors duration-500"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {project.title}
                </h3>
                <p className="text-[#8A8680] text-sm md:text-base leading-relaxed">{project.description}</p>
              </div>

              {/* Links */}
              <div className="md:col-span-3 flex md:justify-end items-start gap-3 flex-wrap">
                <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#E8E4DF] hover:text-[#C9A962] transition-all duration-300 group/link"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  <span className="border-b border-[#E8E4DF]/30 group-hover/link:border-[#C9A962]/50 pb-0.5 transition-colors">Visit Site</span>
                  <span className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300">↗</span>
                </a>

                {project.videoLink && (
                  <a
                    href={project.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 text-xs font-medium text-[#C9A962] hover:text-[#d4b672] transition-all duration-300 group/link"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    <span className="border-b border-[#C9A962]/30 group-hover/link:border-[#d4b672]/50 pb-0.5 transition-colors">Watch Demo</span>
                    <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
