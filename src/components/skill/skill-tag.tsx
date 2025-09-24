import styles from './skill-tag.module.css';

export const SkillTag = (args: {
  skills?: string[],
}) => {
  if (!args.skills) return (<></>);
  return (
    <div className={styles.skills}>
      {args.skills.map((skill, index) => (
        <div className={styles.tag} key={index}>
          <div className={styles.skill}>
            {skill}
          </div>
        </div>
      ))}
    </div>
  );
};
