import { Link } from '../../i18n/routing';
import { BiographyEntry } from '../../common/type';
import { GetLocaleString } from '../../lib';
import styles from './biography.module.css';

export const Biography = (args: { entries: BiographyEntry[] }) => {
  return (
    <div className={styles.table}>
      {args.entries.map((entry, index) => (
        <div className={styles.biography} key={index}>
          <div className={styles.period}>
            {GetLocaleString(entry.period)}
          </div>
          <div className={styles.name}>
            <Link className={styles.link} href={`/biography/${entry.id}`}>
              {GetLocaleString(entry.name)}
              <div className={styles.image}></div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
