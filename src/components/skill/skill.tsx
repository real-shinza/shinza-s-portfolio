import { LanguageStrings, SkillEntry } from '../../common/type';
import { GetLocale } from '../../lib';
import styles from './skill.module.css';

export const Skill = (args: { entries: SkillEntry[] }) => {
  const yearStrings: LanguageStrings = { ja: '年', en: ' years', cn: '年', tw: '年', ko: ' 년' };
  return (
    <table className={styles.table}>
      <tbody>
        {args.entries.map((entry, index) => (
          <tr key={index}>
            <td className={styles.name}>{entry.name}</td>
            <td className={styles.exp}>{`${entry.exp}${GetLocale(yearStrings)}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
