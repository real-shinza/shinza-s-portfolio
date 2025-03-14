import { notoSans } from '../../../../lib';
import styles from './not-found.module.css';

export default () => {
  return (
    <div className={styles.text} style={notoSans.en.style}>
      404 Not Found
    </div>
  );
};
