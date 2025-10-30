import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loading/Loading';
import SingleProject from './SingleProject';
import ProjectDetailsModal from './ProjectDetailsModal';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
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
            <SectionHeader 
                title="Featured Projects"
                subtitle="Showcasing My Best Work"
            />

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