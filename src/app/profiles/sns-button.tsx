import Link from 'next/link';
import Image from 'next/image';

function SnsButton(sns: Sns) {
  return (
    <div className="icon">
      <Link href={sns.href} target="_blank">
        <Image
          className="icon-img"
          src={sns.src}
          alt={sns.name}
          width={sns.size}
          height={sns.size}
        />
      </Link>
    </div>
  );
}

export default SnsButton;
