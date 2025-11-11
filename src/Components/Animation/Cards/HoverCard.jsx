import React from 'react';
import { motion } from 'framer-motion';

const HoverCard = ({ 
  children, 
  className = '',
  hoverScale = 1.05,
  hoverY = -8,
  hoverDuration = 0.3,
  ...props 
}) => {
  return (
    <motion.div
      whileHover={{ 
        scale: hoverScale, 
        y: hoverY,
        transition: { duration: hoverDuration } 
      }}
      className={`group relative overflow-hidden rounded-xl 
        bg-base-100 shadow-lg hover:shadow-xl hover:shadow-primary/20
        border border-base-content/10 hover:border-primary/40
        transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl 
        group-hover:bg-primary/20 transition-all duration-500 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      {children}
      
      {/* Hover Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-base-content/5 to-transparent 
          translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      </div>
    </motion.div>
  );
};

export default HoverCard;