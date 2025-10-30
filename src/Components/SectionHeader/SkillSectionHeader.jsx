import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const SkillSectionHeader = ({ title, className = '', ...props }) => {
  return (
    <motion.div
      className={`text-center mb-10 md:mb-12 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-4">
        {title}
      </h2>
      <div className="w-16 md:w-20 h-1 bg-primary mx-auto rounded-full"></div>
    </motion.div>
  );
};

export default SkillSectionHeader;