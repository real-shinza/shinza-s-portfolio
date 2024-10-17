import Link from 'next/link';
import Image from 'next/image';
import { WorkEntry } from '../../common/type';
import { GetHlParam, GetLocale } from '../../lib';
import styles from './work.module.css';

export const Work = (args: { entries: WorkEntry[] }) => {
  return (
    <>
      {args.entries.map((entry, index) => (
        <div className={styles.work} id={entry.id} key={index}>
          <Link className={styles.link} href={{ pathname: `/work/${entry.id}`, query: GetHlParam() }}>
            <div>
              <div className={styles.image}>
                <Image
                  src={entry.image}
                  alt='work image'
                  width={180}
                  height={180}
                />
              </div>
              <h3 className={styles.name}>
                {GetLocale(entry.name)}
              </h3>
              <div className={styles.description}>
                {GetLocale(entry.description_short)}
              </div>
            </div>
          </Link>
        </div>

      ))}
    </>
  );
};
