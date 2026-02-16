import { FaCode, FaLeaf, FaHeartbeat, FaGlobeAfrica } from 'react-icons/fa';
import './ProjectCard.css';

const getProjectIcon = (category) => {
  if (!category) return FaCode;
  const c = category.toLowerCase();
  if (c.includes('agriculture')) return FaLeaf;
  if (c.includes('health')) return FaHeartbeat;
  if (c.includes('platform')) return FaGlobeAfrica;
  return FaCode;
};

const ProjectCard = ({ project }) => {
  const Icon = getProjectIcon(project.category);

  return (
    <div className="project-card">
      {project.image && (
        <div className="project-image-wrapper">
          {project.logo && (
            <div className="project-logo-badge" aria-hidden="true">
              <img
                src={project.logo}
                alt=""
                className="project-logo-image"
              />
            </div>
          )}
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
        </div>
      )}
      <div className="project-body">
        <div className="project-header">
          <div className="project-title-block">
            <span className="project-icon">
              <Icon />
            </span>
            <div>
              <h3 className="project-title">{project.title}</h3>
              {project.shortTitle && (
                <p className="project-short-title">{project.shortTitle}</p>
              )}
            </div>
          </div>
          {project.category && (
            <span className="project-category">{project.category}</span>
          )}
        </div>
        <p className="project-description">{project.description}</p>
        {project.role && (
          <p className="project-role">
            <strong>My role:</strong> {project.role}
          </p>
        )}
        {project.impact && (
          <p className="project-impact">
            <strong>Impact:</strong> {project.impact}
          </p>
        )}
        <div className="project-tech">
          {project.tech.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live.startsWith('http') ? project.live : `https://${project.live}`}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link project-link-live"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
