import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { ProjectType } from '../../../../lib/types/ProjectType'; // Adjust the import path as needed

const ProjectCard: React.FC<ProjectType> = ({ title, roles, description, technologies, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <div className="mb-3 flex flex-wrap gap-2">
          {roles.map((role, index) => (
            <span 
              key={index} 
              className={`text-xs px-2 py-1 rounded-sm ${role.color} font-semibold`}
              style={{ color: role.textColor }}
            >
              {role.name}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-600 mb-3 line-clamp-3">
          {description[0]}
        </p>
        <div className="text-xs text-gray-500 mb-3">
          {technologies.join(' • ')}
        </div>
      </div>
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block bg-gray-100 text-gray-700 text-sm py-2 px-4 hover:bg-gray-200 transition-colors duration-300"
        >
          View Project <FaExternalLinkAlt className="inline ml-1" />
        </a>
      )}
    </div>
  );
};

export default ProjectCard;