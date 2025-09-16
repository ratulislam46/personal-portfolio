import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { ImCancelCircle } from "react-icons/im";

const ProjectDetailsModal = ({ project, onClose }) => {
    if (!project) return null;

    const {
        liveLink,
        "githubLink-client": githubClient,
        "githubLink-server": githubServer,
    } = project;

    return (
        <div
            className="fixed inset-0 backdrop-blur-xl bg-opacity-50 flex justify-center items-center z-50 px-2 lg:px-0"
            onClick={onClose}
        >
            <div
                className="bg-white p-6 rounded shadow-lg max-w-lg w-full"
                onClick={(e) => e.stopPropagation()} style={{ maxHeight: '95vh', overflow: 'auto' }}
            >
                <div className='flex justify-between items-center'>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">{project.title}</h2>

                    {/* cancel button  */}
                    <button
                        onClick={onClose}
                        className="flex items-center gap-2"
                    >
                        <ImCancelCircle size={28} className='text-red-500 hover:text-red-600 cursor-pointer' />
                    </button>
                </div>
                <img
                    src={project.image}
                    alt={project.title}
                    className="mb-4 rounded"
                />
                <p className="mb-4 text-gray-600">{project.description}</p>
                <div className="mb-4">
                    <h3 className="font-semibold text-gray-800">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies?.map((tech, i) => (
                            <span
                                key={i}
                                className="bg-primary/40 text-gray-800 px-2 py-1 rounded text-xs"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                {project.challenges && project.challenges.length > 0 && (
                    <div className="mb-4">
                        <h3 className="font-semibold text-gray-600">Challenges:</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 px-3 md:px-4 lg:px-5">
                            {project.challenges.map((challenge, index) => (
                                <li key={index}>{challenge}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="flex flex-wrap gap-3 mt-auto">
                    {project.liveLink && (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-outline btn-primary flex items-center gap-2"
                        >
                            <FaExternalLinkAlt /> Live
                        </a>
                    )}
                    {githubClient && (
                        <a
                            href={githubClient}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-outline btn-info flex items-center gap-2"
                        >
                            <FaGithub /> GitHub
                        </a>
                    )}
                    {/* <button
                        onClick={onClose}
                        className="btn btn-sm btn-outline btn-error flex items-center gap-2"
                    >
                        Close
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsModal;
