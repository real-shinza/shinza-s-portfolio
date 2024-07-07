import Link from 'next/link';
import styles from './header-menu.module.css';

export const Menu = (args: {
  name: string,
  href: string,
}) => {
  return (
    <div className={styles.menu}>
      <Link className={styles.link} href={args.href}>
        <div className={styles.name}>
          {args.name}
        </div>
      </Link>
    </div>
  );
}
