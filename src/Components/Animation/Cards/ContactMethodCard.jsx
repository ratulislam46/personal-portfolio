import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const ContactMethodCard = ({ 
  icon: IconComponent, 
  label, 
  value, 
  iconSize = 24,
  className = '',
  ...props 
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3 }
      }}
      className={`group relative overflow-hidden rounded-xl 
        p-4 md:p-5 lg:p-6 flex items-center gap-3 md:gap-4 lg:gap-5
        bg-base-100 shadow-lg hover:shadow-xl hover:shadow-primary/20
        border border-base-content/10 hover:border-primary/40
        transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full blur-2xl 
        group-hover:bg-primary/20 transition-all duration-500 -translate-y-1/2 translate-x-1/2"></div>

      {/* Icon Container */}
      <div className="relative z-10 p-2.5 md:p-3 bg-primary/10 rounded-xl 
        group-hover:bg-primary/20 transition-all duration-300
        group-hover:scale-110 group-hover:rotate-6 flex-shrink-0">
        {IconComponent && <IconComponent 
          size={iconSize} 
          className="text-primary group-hover:text-primary transition-colors duration-300" 
        />}
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 min-w-0">
        <h3 className="text-xs sm:text-sm md:text-sm font-semibold text-base-content/60 mb-0.5 md:mb-1">
          {label}
        </h3>
        <p className="text-sm md:text-base font-medium text-base-content 
          group-hover:text-primary transition-colors duration-300 break-words">
          {value}
        </p>
      </div>

      {/* Hover Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-base-content/5 to-transparent 
          translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      </div>
    </motion.div>
  );
};

export default ContactMethodCard;