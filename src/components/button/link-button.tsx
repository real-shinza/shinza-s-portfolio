import Link from 'next/link';
import styles from './link-button.module.css';

export const LinkButton = (args: {
  name: string,
  link: string,
  color_code: string,
}) => {
  return (
    <div>
      <Link className='external-link' href={args.link} target='_blank'>
        <button className={styles.button} type='button' style={{ backgroundColor: args.color_code }}>
          {args.name}
        </button>
      </Link>
    </div>
  );
};
