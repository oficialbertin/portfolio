import './Footer.css';
import { personalInfo } from '../data/personal';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>HAKIZAYEZU Bertin</h3>
            <p>Full-Stack Web Developer | IT Professional | Trainer</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </p>
            <p>{personalInfo.phone}</p>
          </div>
          <div className="footer-section">
            <h4>Links</h4>
            <div className="footer-links">
              {personalInfo.github && (
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} HAKIZAYEZU Bertin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
