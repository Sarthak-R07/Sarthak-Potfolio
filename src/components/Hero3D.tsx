import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

export const Hero3D = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Subtle particle background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <Stars radius={200} depth={80} count={1500} factor={2} saturation={0} fade speed={0.3} />
        </Canvas>
      </div>

      {/* Photo mosaic behind text */}
      <div className="absolute inset-0 z-[1] grid grid-cols-3 gap-[2px] opacity-[0.25]">
        <div className="overflow-hidden">
          <img src="/img3.jpg" alt="" className="w-full h-full object-cover object-top scale-110" />
        </div>
        <div className="overflow-hidden">
          <img src="/img2.jpg" alt="" className="w-full h-full object-cover object-center scale-110" />
        </div>
        <div className="overflow-hidden">
          <img src="/img1.jpg" alt="" className="w-full h-full object-cover object-top scale-110" />
        </div>
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[#07090E] via-[#07090E]/30 to-[#07090E]" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#07090E]/70 via-transparent to-[#07090E]/70" />

      {/* Hero text */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '3rem' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-px bg-[#C9A962] mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-[0.7rem] md:text-xs tracking-[0.4em] uppercase text-[#C9A962] mb-8 font-medium"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          Startup Founder & Innovator
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-[3.5rem] md:text-[7rem] lg:text-[9rem] font-extrabold text-[#E8E4DF] tracking-[-0.04em] leading-[0.85]"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          Sarthak
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8E4DF] to-[#C9A962]">Rodge</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 text-base md:text-lg text-[#8A8680] max-w-md mx-auto font-light leading-relaxed tracking-wide"
        >
          Building ventures that solve real problems — from zero to scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-6"
        >
          <a
            href="#work"
            className="text-sm font-medium text-[#07090E] bg-[#C9A962] px-6 py-3 rounded-full hover:bg-[#d4b672] transition-colors duration-300"
          >
            View Work
          </a>
          <a
            href="#milestones"
            className="text-sm font-medium text-[#C9A962] border border-[#C9A962]/30 px-6 py-3 rounded-full hover:bg-[#C9A962]/10 transition-colors duration-300"
          >
            Achievements
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-[#8A8680] hover:text-[#E8E4DF] transition-colors duration-300"
          >
            Get in Touch →
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <p className="text-[0.6rem] tracking-[0.3em] uppercase text-[#8A8680]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Scroll</p>
        <div className="w-px h-10 bg-gradient-to-b from-[#C9A962] to-transparent" />
      </motion.div>
    </section>
  );
};
