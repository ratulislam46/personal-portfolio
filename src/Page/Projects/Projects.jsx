import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loading/Loading';
import SingleProject from './SingleProject';
import { Typewriter } from 'react-simple-typewriter';
import TypeWriter from '../../Components/Typewriter/TypeWriter';
import ProjectDetailsModal from './ProjectDetailsModal';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProject, setSelectedProject] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
                setLoading(false)
            })
    }, [setLoading, setProjects])

    if (loading) return <Loading />

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    return (
        <div className='mx-2 md:mx-0'>
            {/* Header Section */}
            <motion.div
                className='text-center mb-16 relative'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h1 className='text-primary text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-8 tracking-tight'>
                    Featured Projects
                </h1>
                <div className="inline-block">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-base-content leading-relaxed">
                        Showcasing My Best Work
                    </p>
                    <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-4 rounded-full"></div>
                </div>
            </motion.div>

            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {
                    projects?.map(project =>
                        <SingleProject
                            key={project.id}
                            project={project}
                            onDetailsClick={(proj) => {
                                setSelectedProject(proj);
                                setModalOpen(true);
                            }}
                        ></SingleProject>
                    )
                }
            </motion.div>
            {modalOpen && (
                <ProjectDetailsModal
                    project={selectedProject}
                    onClose={() => setModalOpen(false)}
                />
            )}
        </div>
    );
};

export default Projects;