import Link from 'next/link'
import Image from 'next/image'

interface WorkInfo {
  className: string,
  href: string
  title: string,
  image: string,
  description: string
}

function WorkProp(prop: WorkInfo) {
  let propClassName: string = `${prop.className} prop`;
  let titleClassName: string = `${prop.className} title`;
  let imageClassName: string = `${prop.className} image`;
  let descriptionClassName: string = `${prop.className} description`;

  return (
    <div className={propClassName}>
      <Link href={prop.href} target="_blank">
        <div>
          <h3 className={titleClassName}>
            {prop.title}
          </h3>
          <Image
            className={imageClassName}
            src={prop.image}
            alt="work image"
            width={172}
            height={172}
          />
          <div className={descriptionClassName}>
            {prop.description}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default WorkProp;
