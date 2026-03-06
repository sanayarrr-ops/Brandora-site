import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import { workItems } from './data';

const Work = () => {
  return (
    <SectionReveal id="work" className="container-padded py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8b80b8]">Case Studies</p>
      <h2 className="section-title">Campaign outcomes built to scale.</h2>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {workItems.map((item, index) => (
          <motion.article
            key={item.brand}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: index * 0.1 }}
            className="group glass-card relative overflow-hidden p-8"
          >
            <div className="absolute inset-0 bg-lilac-gradient opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a7fba]">{item.brand}</p>
              <p className="mt-3 max-w-md text-lg font-medium text-[#2b2358]">{item.summary}</p>
              <p className="mt-8 text-2xl font-semibold text-[#3f3474]">{item.result}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionReveal>
  );
};

export default Work;
