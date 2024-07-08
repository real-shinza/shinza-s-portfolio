import { BiographyData } from '../../common/type';
import styles from './biography.module.css';

export const Biography = (args: { data: BiographyData[] }) => {
  return (
    <table className={styles.table}>
      <tbody>
        {args.data.map((data, index) => (
          <tr key={index}>
            <td className={styles.date}>{data.date}</td>
            <td className={styles.description}>{data.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
