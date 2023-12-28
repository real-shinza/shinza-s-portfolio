import Link from 'next/link';
import Image from 'next/image';

function WorkProp(prop: WorkInfo) {
  return (
    <div className="prop" id={prop.id}>
      <Link className="link" href={prop.href} target="_blank">
        <div>
          <Image
            className="image"
            src={prop.image}
            alt="work image"
            width={180}
            height={180}
          />
          <h3 className="name">
            {prop.name}
          </h3>
          <div className="description">
            {prop.description}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default WorkProp;
