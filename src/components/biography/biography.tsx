import { BiographyEntry } from '../../common/type';
import { GetLocaleString } from '../../lib';
import styles from './biography.module.css';

export const Biography = (args: { entries: BiographyEntry[] }) => {
  return (
    <table className={styles.table}>
      <tbody>
        {args.entries.map((entry, index) => (
          <tr key={index}>
            <td className={styles.date}>{GetLocaleString(entry.date)}</td>
            <td className={styles.description}>{GetLocaleString(entry.description)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
