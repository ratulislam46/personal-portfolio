import React, { useState, useEffect } from 'react';
import logo from '../../../public/portfolio-logo.png';

const LoadingScreen = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      // Wait for fade out animation to complete before removing
      setTimeout(() => {
        setIsVisible(false);
        onFinish();
      }, 500); // Match this with the CSS transition duration
    }, 2000); // Show logo for 2 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-base-100 transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="animate-pulse">
        <img 
          src={logo} 
          alt="Loading Logo" 
          className="w-48 h-48 object-contain"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;