import SectionTitle from '../components/SectionTitle';
import SkillBadge from '../components/SkillBadge';
import { skills } from '../data/skills';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills">
      <div className="container">
        <SectionTitle
          title="Skills"
          subtitle="Technical skills and competencies I bring to every project"
        />

        <section className="skills-section">
          <div className="skill-category">
            <h3 className="category-title">Frontend Development</h3>
            <div className="skills-grid">
              {skills.frontend.map((skill, index) => (
                <SkillBadge
                  key={index}
                  skill={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">Backend Development</h3>
            <div className="skills-grid">
              {skills.backend.map((skill, index) => (
                <SkillBadge
                  key={index}
                  skill={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">Databases</h3>
            <div className="skills-grid">
              {skills.databases.map((skill, index) => (
                <SkillBadge
                  key={index}
                  skill={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">Programming & Systems</h3>
            <div className="skills-grid">
              {skills.programming.map((skill, index) => (
                <SkillBadge
                  key={index}
                  skill={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">Tools & Platforms</h3>
            <div className="skills-grid">
              {skills.tools.map((skill, index) => (
                <SkillBadge
                  key={index}
                  skill={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">Soft Skills</h3>
            <div className="skills-grid soft-skills">
              {skills.softSkills.map((skill, index) => (
                <SkillBadge key={index} skill={skill} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
