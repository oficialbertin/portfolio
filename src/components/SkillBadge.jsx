import './SkillBadge.css';

const SkillBadge = ({ skill, level }) => {
  const getLevelColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'advanced':
        return '#10b981';
      case 'intermediate':
        return '#2563eb';
      case 'basic':
        return '#f59e0b';
      default:
        return '#6b7280';
    }
  };

  return (
    <div className="skill-badge">
      <span className="skill-name">{skill}</span>
      {level && (
        <span
          className="skill-level"
          style={{ backgroundColor: getLevelColor(level) }}
        >
          {level}
        </span>
      )}
    </div>
  );
};

export default SkillBadge;
