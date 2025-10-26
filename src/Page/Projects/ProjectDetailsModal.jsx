import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { ImCancelCircle } from "react-icons/im";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const ProjectDetailsModal = ({ project, onClose }) => {
    if (!project) return null;

    const {
        "githubLink-client": githubClient,
        "githubLink-server": githubServer,
    } = project;

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const modalVariants = {
        hidden: { 
            opacity: 0, 
            scale: 0.8,
            y: 50
        },
        visible: { 
            opacity: 1, 
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                duration: 0.5,
                bounce: 0.3
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: 50,
            transition: { duration: 0.3 }
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="fixed inset-0 backdrop-blur-sm bg-black/60 flex justify-center items-center z-50 px-4 py-6"
                onClick={onClose}
            >
                <motion.div
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="relative bg-base-100 rounded-2xl shadow-2xl max-w-2xl w-full border border-base-content/10 overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                    style={{ maxHeight: '90vh' }}
                >
                    {/* Decorative Blur */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    
                    {/* Header */}
                    <div className='sticky top-0 z-20 bg-base-100/95 backdrop-blur-sm border-b border-base-content/10 px-6 py-4 flex justify-between items-start'>
                        <h2 className="text-2xl md:text-3xl font-bold text-base-content pr-4">
                            {project.title}
                        </h2>
                        <motion.button
                            onClick={onClose}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex-shrink-0"
                        >
                            <ImCancelCircle size={28} className='text-error hover:text-error/80 transition-colors' />
                        </motion.button>
                    </div>

                    {/* Scrollable Content */}
                    <div className="overflow-y-auto" style={{ maxHeight: 'calc(90vh - 80px)' }}>
                        <div className="p-6 space-y-6">
                            {/* Project Image */}
                            <motion.div 
                                className="relative rounded-xl overflow-hidden shadow-lg group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-base-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </motion.div>

                            {/* Description */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <p className="text-base-content/80 leading-relaxed text-sm md:text-base">
                                    {project.description}
                                </p>
                            </motion.div>

                            {/* Technologies */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="space-y-3"
                            >
                                <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                                    <span className="w-1 h-5 bg-primary rounded-full"></span>
                                    Technologies
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies?.map((tech, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.5 + i * 0.05 }}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            className="bg-primary/10 border border-primary/30 text-base-content px-3 py-1.5 rounded-lg text-xs font-medium
                                                hover:bg-primary/20 hover:border-primary/50 transition-all duration-200 cursor-default"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Challenges */}
                            {project.challenges && project.challenges.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="space-y-3"
                                >
                                    <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                                        <span className="w-1 h-5 bg-primary rounded-full"></span>
                                        Challenges & Solutions
                                    </h3>
                                    <ul className="space-y-2">
                                        {project.challenges.map((challenge, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.7 + index * 0.1 }}
                                                className="flex gap-3 text-base-content/80 text-sm md:text-base"
                                            >
                                                <span className="text-primary mt-1 flex-shrink-0">•</span>
                                                <span className="leading-relaxed">{challenge}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}

                            {/* Action Buttons */}
                            <motion.div 
                                className="flex flex-wrap gap-3 pt-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                            >
                                {project.liveLink && (
                                    <motion.a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-sm md:btn-md btn-primary flex items-center gap-2"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaExternalLinkAlt /> View Live
                                    </motion.a>
                                )}
                                {githubClient && (
                                    <motion.a
                                        href={githubClient}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-sm md:btn-md btn-outline btn-info flex items-center gap-2"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaGithub /> View Code
                                    </motion.a>
                                )}
                                {githubServer && (
                                    <motion.a
                                        href={githubServer}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-sm md:btn-md btn-outline btn-secondary flex items-center gap-2"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaGithub /> Server Code
                                    </motion.a>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectDetailsModal;
