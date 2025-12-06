import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const SectionHeader = ({ 
  title, 
  subtitle, 
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  ...props 
}) => {
  return (
    <motion.div
      className={`text-center mb-16 relative ${className}`}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <h1 className={`text-primary text-3xl md:text-4xl lg:text-5xl font-bold mb-4 mt-8 tracking-tight ${titleClassName}`}>
        {title}
      </h1>
      <div className="inline-block">
        <p className={`text-xl md:text-2xl lg:text-3xl font-bold text-base-content leading-relaxed ${subtitleClassName}`}>
          {subtitle}
        </p>
        <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-4 rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default SectionHeader;