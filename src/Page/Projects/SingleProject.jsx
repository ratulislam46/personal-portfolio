import React from "react";
import ProjectCard from "../../Components/Animation/Cards/ProjectCard";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const SingleProject = ({ project, onDetailsClick }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <ProjectCard project={project} onDetailsClick={onDetailsClick} />
    </motion.div>
  );
};

export default SingleProject;