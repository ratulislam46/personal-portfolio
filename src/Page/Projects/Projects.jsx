import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loading/Loading';
import SingleProject from './SingleProject';
import { Typewriter } from 'react-simple-typewriter';
import TypeWriter from '../../Components/Typewriter/TypeWriter';

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
    // console.log(projects);
    // console.log(loading);

    if (loading) return <Loading />

    return (
        <div className='mx-2 md:mx-0'>
            <h1 className='text-center text-2xl md:text-4xl lg:text-5xl text-base-content font-bold mt-12 mb-6 py-10 font-serif'>
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
                        ></SingleProject>
                    )
                }
            </div>
        </div>
    );
};

export default Projects;