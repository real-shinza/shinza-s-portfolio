'use client';
import { LocaleStrings } from '../../common/type';
import { GetLocaleString } from '../../lib';
import styles from './card.module.css';

export const Card = (args: {
  id: string,
  title: LocaleStrings,
  children: React.ReactNode,
}) => {
  return (
    <div className={styles.card} id={args.id}>
      <h1 className={styles.title}>
        {GetLocaleString(args.title)}
      </h1>
      <div className={styles.content}>
        {args.children}
      </div>
    </div>
  );
};
