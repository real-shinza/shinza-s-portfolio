import { LanguageStrings } from '../../common/type';
import { GetLocale } from '../../lib';
import styles from './sub-content.module.css';

export const SubContent = (args: {
  subtitle: LanguageStrings,
  isHidden?: boolean,
  children: React.ReactNode,
}) => {
  if (args.isHidden) return (<></>);
  return (
    <div className={styles.sub_content}>
      <h3 className={styles.subtitle}>
        {GetLocale(args.subtitle)}
      </h3>
      {args.children}
    </div>
  );
};
