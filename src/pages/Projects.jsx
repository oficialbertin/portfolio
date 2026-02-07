import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <SectionTitle
          title="Projects"
          subtitle="Real-world applications I've built to solve practical problems"
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
