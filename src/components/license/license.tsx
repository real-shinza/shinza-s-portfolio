import { LicenseEntry } from '../../common/type';
import { GetLocaleString } from '../../lib';
import styles from './license.module.css';

export const License = (args: { entries: LicenseEntry[] }) => {
  return (
    <div className={styles.table}>
      {args.entries.map((entry, index) => (
        <div className={styles.license} key={index}>
          <div className={styles.date}>{GetLocaleString(entry.date)}</div>
          <div className={styles.name}>{GetLocaleString(entry.name)}</div>
        </div>
      ))}
    </div>
  );
};
