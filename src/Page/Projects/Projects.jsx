import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loading/Loading';
import SingleProject from './SingleProject';
import { Typewriter } from 'react-simple-typewriter';
import TypeWriter from '../../Components/Typewriter/TypeWriter';
import ProjectDetailsModal from './ProjectDetailsModal';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProject, setSelectedProject] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const projects = fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
                setLoading(false)
            })
    }, [setLoading, setProjects])

    if (loading) return <Loading />

    return (
        <div className='mx-2 md:mx-0'>
            <h1 className='text-center text-2xl md:text-4xl lg:text-5xl text-base-content font-bold  mb-8'>
                <span className='text-2xl lg:text-4xl'>
                    M
                    <TypeWriter text='y Projects'></TypeWriter>
                </span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            </div>
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