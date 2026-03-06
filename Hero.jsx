import { motion } from 'framer-motion';

const floating = {
  animate: {
    y: [0, -25, 12, 0],
    x: [0, 12, -10, 0],
  },
  transition: {
    duration: 14,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-32">
      <div className="container-padded relative pb-24 pt-20 md:pb-32">
        <motion.div
          {...floating}
          className="absolute -left-20 top-14 h-56 w-56 rounded-full bg-lavender/80 blur-3xl"
        />
        <motion.div
          {...floating}
          transition={{ ...floating.transition, duration: 17 }}
          className="absolute right-0 top-8 h-72 w-72 rounded-full bg-peach/70 blur-3xl"
        />
        <motion.div
          {...floating}
          transition={{ ...floating.transition, duration: 20 }}
          className="absolute bottom-0 left-1/3 h-52 w-52 rounded-full bg-sky/80 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <p className="mb-6 inline-flex rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#6d6397]">
            Premium Digital Growth Agency
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#231c50] md:text-6xl md:leading-[1.08]">
            We Turn Brands Into Digital Growth Machines
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-base text-[#645d86] md:text-xl">
            BRANDORA helps businesses grow through powerful branding, paid campaigns, and strategic
            social media.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#contact" className="pastel-button">
              Start Your Growth
            </a>
            <a href="#work" className="ghost-button">
              View Our Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
