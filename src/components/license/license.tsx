import { Licenses } from '../../common/type';
import styles from './license.module.css';

export const License = (args: { licenses: Licenses }) => {
  return (
    <table className={styles.table}>
      <tbody>
        {args.licenses.map((license, index) => (
          <tr key={index}>
            <td className={styles.date}>{license.date}</td>
            <td className={styles.name}>{license.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
