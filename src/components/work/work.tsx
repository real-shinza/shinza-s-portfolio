import Link from 'next/link';
import Image from 'next/image';
import { WorkData } from '../../common/type';
import styles from './work.module.css';

export const Work = (args: { work: WorkData }) => {
  return (
    <div className={styles.work} id={args.work.id}>
      <Link className={styles.link} href={`/work/${args.work.id}`}>
        <div>
          <div className={styles.image}>
            <Image
              src={args.work.image}
              alt='work image'
              width={180}
              height={180}
            />
          </div>
          <h3 className={styles.name}>
            {args.work.name}
          </h3>
          <div className={styles.description}>
            {args.work.description_short}
          </div>
        </div>
      </Link>
    </div>
  );
}
