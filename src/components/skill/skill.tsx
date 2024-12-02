import { LocaleStrings, SkillEntry } from '../../common/type';
import { GetLocaleString } from '../../lib';
import styles from './skill.module.css';

export const Skill = (args: { entries: SkillEntry[] }) => {
  const yearStrings: LocaleStrings = { 'ja': '年', 'en': ' years', 'zh-CN': '年', 'zh-TW': '年', 'ko': '년' };
  return (
    <table className={styles.table}>
      <tbody>
        {args.entries.map((entry, index) => (
          <tr key={index}>
            <td className={styles.name}>{entry.name}</td>
            <td className={styles.exp}>{`${entry.exp}${GetLocaleString(yearStrings)}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
