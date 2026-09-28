import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

const contactDetails = [
  {
    icon: <FaEnvelope className="w-5 h-5" />,
    label: 'Email',
    value: 'sarthakrodge4@gmail.com',
    href: 'mailto:sarthakrodge4@gmail.com',
  },
  {
    icon: <FaLinkedin className="w-5 h-5" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sarthakrodge',
    href: 'https://www.linkedin.com/in/sarthakrodge',
  },
  {
    icon: <FaPhone className="w-5 h-5" />,
    label: 'Phone',
    value: '+91 7507040556',
    href: 'tel:+917507040556',
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-32 md:py-44 px-6 md:px-12 max-w-5xl mx-auto relative border-t border-white/[0.06]">
      <div className="grid md:grid-cols-12 gap-16 items-start">
        {/* Left side — text */}
        <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="md:col-span-7">
          <div className="flex items-start gap-6 mb-12">
            <span className="section-num mt-1.5">04</span>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#C9A962] mb-4 font-medium" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Contact</p>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#E8E4DF] tracking-tight leading-tight"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Let's build
                <br />
                something great.
              </h2>
            </div>
          </div>
          
          <div className="pl-0 md:pl-[3.25rem]">
            <p className="text-[#8A8680] text-lg leading-[1.9] max-w-md">
              Whether it's a startup collaboration, investment conversation, or just
              an exchange of ideas — I'm always up for a good conversation.
            </p>
            
            <div className="mt-12">
              <a
                href="mailto:sarthakrodge4@gmail.com"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-medium text-[#07090E] bg-[#C9A962] hover:bg-[#E8E4DF] transition-all duration-500 rounded-full group"
              >
                Start a conversation
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right side — contact details */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="md:col-span-5 md:pt-24"
        >
          <div className="space-y-0">
            {contactDetails.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.label === 'LinkedIn' ? '_blank' : undefined}
                rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                className="flex items-start gap-5 py-6 border-b border-white/[0.06] first:border-t group transition-colors duration-300"
              >
                <div className="mt-1 text-[#8A8680] group-hover:text-[#C9A962] transition-colors duration-300">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#8A8680] mb-2" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{item.label}</p>
                  <p className="text-[#E8E4DF] text-sm md:text-base font-medium group-hover:text-[#C9A962] transition-colors duration-300">
                    {item.value}
                  </p>
                </div>
                <span className="text-[#8A8680] text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        {...fadeUp}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/[0.06]"
      >
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-[#E8E4DF]" style={{ fontFamily: 'Syne, sans-serif' }}>SR</span>
          <span className="text-[#8A8680] text-sm ml-4">© {new Date().getFullYear()} Sarthak Rodge.</span>
        </div>
        <p className="text-[#8A8680] text-xs tracking-[0.2em] uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Built with intent.</p>
      </motion.footer>
    </section>
  );
};
