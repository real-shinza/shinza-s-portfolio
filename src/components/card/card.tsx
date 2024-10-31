'use client';
import { LanguageStrings } from '../../common/type';
import { GetLocale } from '../../lib';
import styles from './card.module.css';

export const Card = (args: {
  id: string,
  title: LanguageStrings,
  children: React.ReactNode,
}) => {
  return (
    <div className={styles.card} id={args.id}>
      <h1 className={styles.title}>
        {GetLocale(args.title)}
      </h1>
      <div className={styles.content}>
        {args.children}
      </div>
    </div>
  );
};
