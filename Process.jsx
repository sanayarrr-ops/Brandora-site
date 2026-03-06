import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import { processSteps } from './data';

const Process = () => {
  return (
    <SectionReveal id="process" className="container-padded py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8b80b8]">Process</p>
      <h2 className="section-title">A clear system from insight to scale.</h2>

      <div className="relative mt-12 grid gap-6 md:grid-cols-4">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="absolute left-8 right-8 top-6 hidden h-[2px] origin-left bg-gradient-to-r from-[#d4c8ff] via-[#f5c8da] to-[#bbe8ff] md:block"
        />
        {processSteps.map((step, index) => (
          <motion.article
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            className="glass-card relative p-6"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f4efff] text-lg font-semibold text-[#4a3f83]">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold text-[#2d255c]">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#655d88]">{step.text}</p>
          </motion.article>
        ))}
      </div>
    </SectionReveal>
  );
};

export default Process;
