import Link from 'next/link';
import Image from 'next/image';
import './work.css';

export default function WorkProp(prop: WorkInfo) {
  return (
    <div className="prop" id={prop.id}>
      <Link className="link" href={`/work/${prop.id}`}>
        <div>
          <div className="image">
            <Image
              src={prop.image}
              alt="work image"
              width={180}
              height={180}
            />
          </div>
          <h3 className="name">
            {prop.name}
          </h3>
          <div className="description">
            {prop.description_short}
          </div>
        </div>
      </Link>
    </div>
  );
}
