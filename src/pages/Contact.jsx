import { FaDownload } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import { personalInfo } from '../data/personal';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <SectionTitle
          title="Get In Touch"
          subtitle="I'm open to internships, junior developer roles, collaborations, and community-driven tech projects"
        />

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <a href={`mailto:${personalInfo.email}`}>
                {personalInfo.email}
              </a>
            </div>

            <div className="contact-item">
              <h3>Phone</h3>
              <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}>
                {personalInfo.phone}
              </a>
            </div>

            <div className="contact-item">
              <h3>Location</h3>
              <p>{personalInfo.location}</p>
            </div>

            {personalInfo.github && (
              <div className="contact-item">
                <h3>GitHub</h3>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </div>
            )}

            {personalInfo.linkedin && (
              <div className="contact-item">
                <h3>LinkedIn</h3>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </div>
            )}

            <div className="contact-item">
              <h3>Languages</h3>
              <div className="languages-list">
                {personalInfo.languages.map((lang, index) => (
                  <span key={index} className="language-badge">
                    {lang.name} - {lang.level}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-message">
            <h3>Let's Connect</h3>
            <p>
              Feel free to reach out if you're interested in collaborating on a project,
              have a job opportunity, or just want to connect. I'm always open to
              discussing new ideas and opportunities.
            </p>
            <div className="contact-cta">
              <a
                href={`mailto:${personalInfo.email}?subject=Portfolio Contact`}
                className="btn-contact"
              >
                Send Email
              </a>
              <a
                href="/uploads/CURRICULUM_VITAE_for_HAKIZAYEZU_Bertin.pdf"
                download
                className="btn-contact btn-download-cv"
              >
                <FaDownload /> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
