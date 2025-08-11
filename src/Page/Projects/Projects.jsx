import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loading/Loading';
import SingleProject from './SingleProject';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const projects = fetch('/public/projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
                setLoading(false)
            })
    }, [setLoading, setProjects])
    console.log(projects);
    console.log(loading);

    if (loading) return <Loading />

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    projects?.map(project =>
                        <SingleProject
                            key={project.id}
                            project={project}
                        ></SingleProject>
                    )
                }
            </div>
        </div>
    );
};

export default Projects;