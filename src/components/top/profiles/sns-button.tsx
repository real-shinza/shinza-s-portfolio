import Link from 'next/link';
import Image from 'next/image';
import data from '../../../data/sns.json';
import './sns-button.css';

export default function SnsButtons() {
  const sns: SnsInfo[] = data.sns;
  return (
    <div className="sns">
      {sns.map((sns, index) => (
        <div className="icon" key={index}>
          <Link className="sns-link" id={sns.name} href={sns.href} target="_blank">
            <div className="icon-img">
              <Image
                src={sns.src}
                alt={sns.name}
                width={32}
                height={32}
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
