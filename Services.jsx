import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import { services } from './data';

const Services = () => {
  return (
    <SectionReveal id="services" className="container-padded py-20 md:py-28">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8b80b8]">Services</p>
      <h2 className="section-title">High-performance growth services for modern brands.</h2>
      <p className="section-subtitle">
        Every BRANDORA engagement combines premium aesthetics with measurable business outcomes.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: index * 0.15 }}
            whileHover={{ y: -7, scale: 1.01 }}
            className="glass-card bg-pastel-gradient p-7"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 text-sm font-bold text-[#4e4286]">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#2b2358]">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#615985]">{service.description}</p>
            <ul className="mt-5 space-y-2">
              {service.points.map((point) => (
                <li key={point} className="text-sm text-[#453c71]">
                  {point}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </SectionReveal>
  );
};

export default Services;
