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
    <table className={styles.table}>
      <tbody>
        {args.entries.map((entry, index) => (
          <tr key={index}>
            <td className={styles.name}>{entry.name}</td>
            <td className={styles.exp}>{GatExp(entry.exp)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
