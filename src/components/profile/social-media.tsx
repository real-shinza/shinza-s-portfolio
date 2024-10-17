import Link from 'next/link';
import Image from 'next/image';
import { SocialMediaEntry } from '../../common/type';
import styles from './social-media.module.css';

export const SocialMedia = (args: { entry: SocialMediaEntry }) => {
  return (
    <div className={styles.social_media}>
      <Link id={args.entry.name} href={args.entry.href} target='_blank'>
        <div className={styles.image}>
          <Image
            src={args.entry.src}
            alt={args.entry.name}
            width={32}
            height={32}
          />
        </div>
      </Link>
    </div>
  );
};
