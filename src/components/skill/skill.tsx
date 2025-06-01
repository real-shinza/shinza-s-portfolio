import { LocaleStrings, SkillEntry } from '../../common/type';
import { GetLocaleString } from '../../lib';
import styles from './skill.module.css';

export const Skill = (args: { entries: SkillEntry[] }) => {
  const GatExp = (exp: Number) => {
    const yearStrings: LocaleStrings = {
      'ja': `${exp}年`,
      'en': `${exp} ${exp === 1 ? 'year' : 'years'}`,
      'zh-CN': `${exp}年`,
      'zh-TW': `${exp}年`,
      'ko': `${exp}년`,
    };
    return GetLocaleString(yearStrings);
  };
  return (
    <div className={styles.table}>
      {args.entries.map((entry, index) => (
        <div className={styles.skill} key={index}>
          <div className={styles.name}>{entry.name}</div>
          <div className={styles.exp}>{GatExp(entry.exp)}</div>
        </div>
      ))}
    </div>
  );
};
