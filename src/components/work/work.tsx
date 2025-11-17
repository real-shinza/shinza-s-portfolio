import Image from 'next/image';
import { Link } from '../../i18n/routing';
import { WorkEntry } from '../../common/type';
import { GetLocaleString } from '../../lib';
import styles from './work.module.css';

export const Work = (args: { entries: WorkEntry[] }) => {
  return (
    <div className={styles.worksWrapper}>
      <div className={styles.works}>
        {args.entries.map((entry, index) => (
          <div className={styles.work} id={entry.id} key={index}>
            <div className={styles.scaleWrap}>
              <Link className={styles.link} href={`/work/${entry.id}`}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={entry.image}
                    alt='work image'
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3 className={styles.name}>
                  {GetLocaleString(entry.name)}
                </h3>
                <div className={styles.description}>
                  {GetLocaleString(entry.description_short)}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
