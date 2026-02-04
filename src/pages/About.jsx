import SectionTitle from '../components/SectionTitle';
import { bio, careerInterests, education } from '../data/personal';
import { experiences } from '../data/experience';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <SectionTitle
          title="About Me"
          subtitle="Learn more about my background, education, and career journey"
        />

        <section className="about-section">
          <div className="bio-content">
            <h3>Who I Am</h3>
            <div className="bio-text">
              {bio.long.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="career-interests">
            <h3>Career Interests</h3>
            <ul className="interests-list">
              {careerInterests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="education-section">
          <h2 className="section-heading">Education</h2>
          <div className="education-timeline">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-header">
                  <h3>{edu.degree}</h3>
                  <span className="education-status">{edu.status}</span>
                </div>
                <p className="education-institution">{edu.institution}</p>
                <p className="education-period">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="experience-section">
          <h2 className="section-heading">Experience</h2>
          <div className="experience-timeline">
            {experiences.map((exp) => (
              <div key={exp.id} className="experience-item">
                <div className="experience-header">
                  <div>
                    <h3>{exp.title}</h3>
                    <p className="experience-company">{exp.company}</p>
                    <p className="experience-location">{exp.location}</p>
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="experience-description">{exp.description}</p>
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
