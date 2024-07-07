import Image from 'next/image';
import styles from './profile-image.module.css';

export const ProfileImage = () => {
  return (
    <div>
      <Image
        className={styles.image}
        src='/profiles/profile7.jpg'
        alt='Profile image'
        width={256}
        height={256}
        priority={true}
      />
    </div>
  );
}
