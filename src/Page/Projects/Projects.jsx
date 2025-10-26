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
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className='text-center text-green-400 text-2xl md:text-4xl lg:text-5xl font-bold mb-12'
            >
                <span className='text-2xl lg:text-4xl'>
                    Featured Projects
                    {/* <TypeWriter text='y Projects'></TypeWriter> */}
                </span>
            </motion.h1>
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