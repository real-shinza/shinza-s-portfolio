import Image from 'next/image';
import styles from './star-level.module.css';

export const StarLevel = (args: { level: number }) => {
  const max: number = 5;
  return (
    <div className={styles.stars}>
      {Array.from({ length: max }).map((_, index) => {
        const isActive = index < args.level;
        return (
          <div  className={styles.star} key={index}>
            <Image
              src={isActive ? '/stars/star-yellow.svg' : '/stars/star-gray.svg'}
              alt={isActive ? 'active star' : 'inactive star'}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        );
      })}
    </div>
  );
};
