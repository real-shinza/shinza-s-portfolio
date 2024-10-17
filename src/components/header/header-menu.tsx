import Link from 'next/link';
import { GetHlParam, GetLocale } from '../../lib';
import { LanguageStrings } from '../../common/type';
import styles from './header-menu.module.css';

export const Menu = (args: {
  name: LanguageStrings,
  hash: string,
}) => {
  return (
    <div className={styles.menu}>
      <Link className={styles.link} href={{ pathname: '/', query: GetHlParam(), hash: args.hash }}>
        <div className={styles.name}>
          {GetLocale(args.name)}
        </div>
      </Link>
    </div>
  );
};
