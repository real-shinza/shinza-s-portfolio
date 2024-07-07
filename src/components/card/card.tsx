import styles from './card.module.css';

export const Card = (args: {
  id: string,
  title: string,
  children: React.ReactNode,
}) => {
  return (
    <div className={styles.card} id={args.id}>
      <h1 className={styles.title}>
        {args.title}
      </h1>
      <div className={styles.content}>
        {args.children}
      </div>
    </div>
  );
}
