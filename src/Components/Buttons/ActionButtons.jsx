import React from 'react';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FcViewDetails } from "react-icons/fc";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export const DetailsButton = ({ onClick, className = '', ...props }) => {
  return (
    <motion.button
      className={`btn btn-sm btn-outline btn-accent flex items-center gap-2 text-xs ${className}`}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...props}
    >
      <FcViewDetails className="text-base" /> Details
    </motion.button>
  );
};

export const LiveButton = ({ href, className = '', ...props }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-sm btn-outline btn-primary flex items-center gap-2 text-xs ${className}`}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <FaExternalLinkAlt className="text-sm" /> Live
    </motion.a>
  );
};

export const GithubButton = ({ href, className = '', children = 'GitHub', ...props }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-sm btn-outline btn-info flex items-center gap-2 text-xs ${className}`}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <FaGithub className="text-sm" /> {children}
    </motion.a>
  );
};