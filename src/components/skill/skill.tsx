import { StarLevel } from './star-level';
import { SkillEntry } from '../../common/type';
import styles from './skill.module.css';

export const Skill = (args: { entries: SkillEntry[] }) => {
  return (
    <div className={styles.table}>
      {args.entries.map((entry, index) => (
        <div className={styles.skill} key={index}>
          <div className={styles.name}>{entry.name}</div>
          <StarLevel level={entry.level} />
        </div>
      ))}
    </div>
  );
};
