import { useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = ['Home', 'Services', 'Work', 'Process', 'About', 'Contact'];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-white/65 backdrop-blur-xl">
      <div className="container-padded flex h-20 items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-[0.2em] text-[#2b2358]">
          BRANDORA
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="group relative text-sm font-medium text-[#4d447a] transition hover:text-[#2b2358]"
            >
              {link}
              <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 rounded-full bg-[#a993f8] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a href="#contact" className="pastel-button text-center">
            Get Free Strategy Call
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-[#d6ccff] px-4 py-2 text-sm font-semibold text-[#4d447a] md:hidden"
        >
          Menu
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="container-padded flex flex-col gap-4 pb-6 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#4d447a]"
            >
              {link}
            </a>
          ))}
          <a href="#contact" className="pastel-button w-fit" onClick={() => setOpen(false)}>
            Get Free Strategy Call
          </a>
        </motion.nav>
      )}
    </header>
  );
};

export default Navbar;
