import Link from 'next/link';
import { Menu } from './header-menu';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.list}>
        <Link className={styles.link} href='/'>
          <div className={styles.title}>
            <div className={styles.name}>
              Shinza&#39;s Portfolio
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.list}>
        <div className={styles.menus}>
          <Menu
            name='プロフィール'
            href='/#profile'
          />
          <Menu
            name='作品'
            href='/#work'
          />
          <Menu
            name='略歴'
            href='/#biography'
          />
          <Menu
            name='スキル'
            href='/#skill'
          />
          <Menu
            name='所有資格'
            href='/#license'
          />
        </div>
      </div>
    </header>
  );
};
