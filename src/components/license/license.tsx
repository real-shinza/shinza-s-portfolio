import { LicenseEntry } from '../../common/type';
import { GetLocale } from '../../lib';
import styles from './license.module.css';

export const License = (args: { entries: LicenseEntry[] }) => {
  return (
    <table className={styles.table}>
      <tbody>
        {args.entries.map((entry, index) => (
          <tr key={index}>
            <td className={styles.date}>{GetLocale(entry.date)}</td>
            <td className={styles.name}>{GetLocale(entry.name)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
