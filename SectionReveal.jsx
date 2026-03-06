import { motion } from 'framer-motion';

const SectionReveal = ({ children, className = '', ...props }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default SectionReveal;
