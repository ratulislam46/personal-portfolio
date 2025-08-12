import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FcViewDetails } from "react-icons/fc";

const SingleProject = ({ project, onDetailsClick }) => {
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
    <div data-aos="zoom-in-up" className="bg-base-100 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 flex flex-col min-h-[480px]">
      {/* Image */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex-1 p-4 flex flex-col">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-400 mb-4">{description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies?.map((tech, index) => (
              <span
                key={index}
                className="bg-primary/40 text-base-content px-2 py-1 rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>


        <div className="flex flex-wrap gap-3 mt-auto">
          <button
            className="btn btn-sm btn-outline btn-se flex items-center gap-2"
            onClick={() => onDetailsClick(project)}
          >
            <FcViewDetails /> Details
          </button>

          {liveLink && (
            <a
              href={liveLink}
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
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
