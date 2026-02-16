import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import { personalInfo } from '../data/personal';
import { projects } from '../data/projects';
import profileImage from '../assets/images/122A7974.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-image-wrapper">
              <img 
                src={profileImage} 
                alt={personalInfo.name}
                className="hero-profile-image"
              />
            </div>
            <h1 className="hero-name">{personalInfo.name}</h1>
            <h2 className="hero-role">{personalInfo.role}</h2>
            <p className="hero-tagline">{personalInfo.tagline}</p>
            <p className="hero-intro">
              Motivated and tech-savvy IT professional with hands-on experience in full-stack web development, system support, and digital solutions. Passionate about education, entrepreneurship, and social impact.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                View Projects
              </Link>
              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  GitHub Profile
                </a>
              )}
              <a
                href="/uploads/CURRICULUM_VITAE_for_HAKIZAYEZU_Bertin.pdf"
                download
                className="btn btn-download"
              >
                <FaDownload /> Download Resume
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn btn-outline"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-projects">
        <div className="featured-container">
          <div className="featured-header">
            <h2>Highlighted Projects</h2>
            <p>
              A selection of platforms I&apos;ve built for youth employment, health,
              and agriculture using modern web technologies.
            </p>
          </div>
          <div className="featured-grid">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="featured-card">
                <div className="featured-tag">{project.category}</div>
                <h3>{project.title}</h3>
                {project.shortTitle && (
                  <p className="featured-short-title">{project.shortTitle}</p>
                )}
                <p className="featured-description">{project.description}</p>
                <ul className="featured-bullets">
                  {project.role && <li>{project.role}</li>}
                  {project.impact && <li>{project.impact}</li>}
                </ul>
                <div className="featured-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live.startsWith('http') ? project.live : `https://${project.live}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
