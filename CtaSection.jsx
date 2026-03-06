import { motion } from 'framer-motion';

const CtaSection = () => {
  return (
    <section id="contact" className="container-padded py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[2rem] bg-lilac-gradient p-10 shadow-glow md:p-16"
      >
        <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-white/30 blur-2xl" />
        <div className="absolute -bottom-10 left-10 h-44 w-44 rounded-full bg-white/20 blur-2xl" />

        <div className="relative text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#4c3e86]">Let&apos;s Build</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#281f59] md:text-5xl">Ready to Scale Your Brand?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-[#50437f] md:text-lg">
            Book a strategy session and get a tailored growth blueprint for paid media, content, and brand.
          </p>
          <a href="mailto:hello@brandora.co" className="pastel-button mx-auto mt-8 inline-flex">
            Book a Free Growth Call
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaSection;

