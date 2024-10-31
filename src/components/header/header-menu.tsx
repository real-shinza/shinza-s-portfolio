import { Link } from '../../i18n/routing';
import { LocaleStrings } from '../../common/type';
import { GetLocale } from '../../lib';
import styles from './header-menu.module.css';

export const Menu = (args: {
  title: LocaleStrings,
  hash: string,
}) => {
  return (
    <div className={styles.menu}>
      <Link className={styles.link} href={{ pathname: '/', hash: args.hash }}>
        <div className={styles.name}>
          {GetLocale(args.title)}
        </div>
      </Link>
    </div>
  );
};
