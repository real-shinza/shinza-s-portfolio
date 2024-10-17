import Link from 'next/link';
import { Menu } from './header-menu';
import { LanguageSelector } from './language-selector';
import {
  biographies,
  licenses,
  profile,
  skills,
  works,
} from '../../data';
import { GetHlParam } from '../../lib';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.list}>
        <Link className={styles.link} href={{ pathname: '/', query: GetHlParam() }}>
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
            name={profile.title}
            hash={profile.id}
          />
          <Menu
            name={works.title}
            hash={works.id}
          />
          <Menu
            name={biographies.title}
            hash={biographies.id}
          />
          <Menu
            name={skills.title}
            hash={skills.id}
          />
          <Menu
            name={licenses.title}
            hash={licenses.id}
          />
        </div>
      </div>
      <div className={styles.selector}>
        <LanguageSelector />
      </div>
    </header>
  );
};
