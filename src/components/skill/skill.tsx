import { SkillData } from '../../common/type';
import styles from './skill.module.css';

export const Skill = (args: { data: SkillData[] }) => {
  return (
    <table className={styles.table}>
      <tbody>
        {args.data.map((data, index) => (
          <tr key={index}>
            <td className={styles.name}>{data.name}</td>
            <td className={styles.exp}>{data.exp}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
