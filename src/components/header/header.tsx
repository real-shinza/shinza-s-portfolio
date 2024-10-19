'use client';
import { Link } from '../../i18n/routing';
import { Menu } from './header-menu';
import { LanguageSelector } from './language-selector';
import {
  biography,
  license,
  profile,
  skill,
  work,
} from '../../data';
import { notoSans } from '../../lib';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.list}>
        <Link className={styles.link} href='/'>
          <div className={styles.title}>
            <div className={styles.name} style={notoSans.en.style}>
              Shinza&#39;s Portfolio
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.list}>
        <div className={styles.menus}>
          <Menu
            title={profile.title}
            hash={profile.id}
          />
          <Menu
            title={work.title}
            hash={work.id}
          />
          <Menu
            title={biography.title}
            hash={biography.id}
          />
          <Menu
            title={skill.title}
            hash={skill.id}
          />
          <Menu
            title={license.title}
            hash={license.id}
          />
        </div>
      </div>
      <div className={styles.selector}>
        <LanguageSelector />
      </div>
    </header>
  );
};
