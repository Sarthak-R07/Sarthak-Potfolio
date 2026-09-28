import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 md:px-12 py-5 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-md bg-[#07090E]/80 border-b border-white/[0.06]' : ''
      }`}
    >
      <a href="#" className="text-lg font-semibold tracking-tight text-[#E8E4DF]" style={{ fontFamily: 'Syne, sans-serif' }}>
        SR
      </a>

      <div className="hidden md:flex gap-10 items-center">
        <a href="#about" className="text-sm text-[#8A8680] hover:text-[#E8E4DF] transition-colors duration-300">About</a>
        <a href="#work" className="text-sm text-[#8A8680] hover:text-[#E8E4DF] transition-colors duration-300">Projects</a>
        <a href="#milestones" className="text-sm text-[#8A8680] hover:text-[#E8E4DF] transition-colors duration-300">Milestones</a>
        <a href="#contact" className="text-sm text-[#C9A962] hover:text-[#E8E4DF] transition-colors duration-300">Get in Touch</a>
      </div>
    </motion.nav>
  );
};
