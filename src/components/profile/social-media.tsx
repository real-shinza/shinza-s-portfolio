import Link from 'next/link';
import Image from 'next/image';
import { SocialMediaData } from '../../common/type';
import styles from './social-media.module.css';

export const SocialMedia = (args: { socialMedia: SocialMediaData }) => {
  return (
    <div className={styles.social_media}>
      <Link className='sns-link' id={args.socialMedia.name} href={args.socialMedia.href} target='_blank'>
        <div className={styles.image}>
          <Image
            src={args.socialMedia.src}
            alt={args.socialMedia.name}
            width={32}
            height={32}
          />
        </div>
      </Link>
    </div>
  );
}
