import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const SkillCard = ({ 
  icon,
  title,
  className = '',
  iconContainerClassName = '',
  ...props 
}) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05, 
        y: -8,
        transition: { duration: 0.3 } 
      }}
      className={`group relative overflow-hidden rounded-xl 
        py-5 px-3 flex flex-col items-center text-center
        bg-base-100 shadow-lg hover:shadow-xl hover:shadow-primary/20
        border border-base-content/10 hover:border-primary/40
        transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-full blur-2xl 
        group-hover:bg-primary/20 transition-all duration-500 -translate-y-1/2 translate-x-1/2"></div>
      
      {/* Icon Container */}
      <div className={`relative z-10 mb-3 p-2.5 bg-primary/10 rounded-xl 
        group-hover:bg-primary/20 transition-all duration-300
        group-hover:scale-110 group-hover:rotate-6 ${iconContainerClassName}`}>
        {icon}
      </div>
      
      {/* Title */}
      <h3 className="relative z-10 text-sm font-semibold text-base-content 
        group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      {/* Hover Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-base-content/5 to-transparent 
          translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      </div>
    </motion.div>
  );
};

export default SkillCard;