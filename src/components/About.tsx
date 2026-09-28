import { motion } from 'framer-motion';

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
  return (
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

      <div className="grid md:grid-cols-12 gap-12 items-start">
        {/* Portrait photo */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="md:col-span-3"
        >
          <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#0F1117] relative group">
            <img
              src="/img3.jpg"
              alt="Sarthak Rodge"
              className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090E]/60 to-transparent" />
          </div>
        </motion.div>

        {/* Bio text */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="md:col-span-5"
        >
          <p className="text-[#8A8680] text-lg leading-[1.9] mb-6">
            I'm a startup founder who believes in building things that matter. My work sits
            at the intersection of technology, business strategy, and human-centered design — 
            taking ideas from napkin sketches to funded ventures.
          </p>
          <p className="text-[#8A8680] text-lg leading-[1.9]">
            From pitching at IIT Bombay's Eureka! to presenting at the MIT India Summit,
            I've learned that the best companies aren't built on hype — they're built on
            <span className="text-[#E8E4DF]"> relentless execution</span> and
            <span className="text-[#E8E4DF]"> deep empathy</span> for the problem.
          </p>
        </motion.div>

        {/* Capabilities */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:col-span-4"
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
              className="py-4 border-b border-white/[0.06] first:border-t group cursor-default"
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
  );
};
