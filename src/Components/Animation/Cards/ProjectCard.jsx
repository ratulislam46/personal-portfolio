import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { DetailsButton, LiveButton, GithubButton } from "../../Buttons/ActionButtons";

const ProjectCard = ({ project, onDetailsClick, className = '' }) => {
  const {
    title,
    description,
    technologies,
    image,
    liveLink,
    "githubLink-client": githubClient,
  } = project;

  return (
    <motion.div
      whileHover={{ 
        scale: 1.05, 
        y: -8,
        transition: { duration: 0.3 } 
      }}
      className={`group relative overflow-hidden bg-base-100 shadow-lg rounded-xl hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 flex flex-col min-h-[480px] border border-base-content/10 hover:border-primary/40 ${className}`}
    >
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl 
        group-hover:bg-primary/20 transition-all duration-500 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-100/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 p-5 flex flex-col">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-base-content group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-base-content/70 mb-4 leading-relaxed">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-5">
            {technologies?.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: techIndex * 0.05 }}
                className="bg-primary/10 border border-primary/30 text-base-content px-3 py-1 rounded-lg text-xs font-medium
                  hover:bg-primary/20 hover:border-primary/50 transition-all duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 mt-auto">
          <DetailsButton onClick={() => onDetailsClick(project)} />
          
          {liveLink && <LiveButton href={liveLink} />}
          {githubClient && <GithubButton href={githubClient} />}
        </div>
      </div>

      {/* Hover Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-base-content/5 to-transparent 
          translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;