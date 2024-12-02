import { LocaleStrings } from '../../common/type';
import { GetLocaleString } from '../../lib';
import styles from './sub-content.module.css';

export const SubContent = (args: {
  subtitle: LocaleStrings,
  isHidden?: boolean,
  children: React.ReactNode,
}) => {
  if (args.isHidden) return (<></>);
  return (
    <div className={styles.sub_content}>
      <h3 className={styles.subtitle}>
        {GetLocaleString(args.subtitle)}
      </h3>
      {args.children}
    </div>
  );
};
