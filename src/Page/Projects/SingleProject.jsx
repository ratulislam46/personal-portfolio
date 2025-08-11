import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const SingleProject = ({ project }) => {
    const {
        title,
        description,
        technologies,
        image,
        liveLink,
        "githubLink-client": githubClient,
        "githubLink-server": githubServer,
    } = project;

    return (
        <section section className="py-10 px-4 md:px-8">
            <div className="bg-base-100 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 flex flex-col mx-2 lg:mx-0">
                {/* Image */}
                <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden relative">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Content */}
                <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">{title}</h3>
                        <p className="text-sm text-gray-400 mb-4">{description}</p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {technologies?.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-primary/20 text-primary px-2 py-1 rounded text-xs"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3 mt-auto">
                        {liveLink && (
                            <a
                                href={liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-sm btn-primary flex items-center gap-2"
                            >
                                <FaExternalLinkAlt /> Live
                            </a>
                        )}
                        {githubClient && (
                            <a
                                href={githubClient}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-sm btn-outline flex items-center gap-2"
                            >
                                <FaGithub /> Client
                            </a>
                        )}
                        {/* {githubServer && (
            <a
              href={githubServer}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline flex items-center gap-2"
            >
              <FaGithub /> Server
            </a>
          )} */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleProject;
