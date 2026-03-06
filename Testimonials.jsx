import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import { testimonials } from './data';

const Testimonials = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  const item = testimonials[active];

  return (
    <SectionReveal id="about" className="container-padded py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8b80b8]">Testimonials</p>
      <h2 className="section-title">Trusted by growth-focused founders and teams.</h2>

      <div className="glass-card mt-10 overflow-hidden bg-pastel-gradient p-8 md:p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -22 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/85 text-sm font-bold text-[#4a3f83]">
                {item.avatar}
              </div>
              <div>
                <p className="text-lg font-semibold text-[#2d255c]">{item.name}</p>
                <p className="text-sm text-[#645d86]">{item.company}</p>
              </div>
            </div>

            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#3f376e] md:text-2xl">"{item.quote}"</p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              aria-label={`Testimonial ${index + 1}`}
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === active ? 'w-8 bg-[#8e7cd7]' : 'w-2.5 bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </SectionReveal>
  );
};

export default Testimonials;
