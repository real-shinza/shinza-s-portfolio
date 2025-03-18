import { Link } from '../../i18n/routing';
import { BiographyEntry } from '../../common/type';
import { GetLocaleString } from '../../lib';
import styles from './biography.module.css';

export const Biography = (args: { entries: BiographyEntry[] }) => {
  return (
    <table className={styles.table}>
      <tbody>
        {args.entries.map((entry, index) => (
          <tr key={index}>
            <td className={styles.period}>
              {GetLocaleString(entry.period)}
            </td>
            <td className={styles.name}>
              <Link className={styles.link} href={`/biography/${entry.id}`}>
                {GetLocaleString(entry.name)}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
