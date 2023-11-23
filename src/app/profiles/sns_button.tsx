import Link from 'next/link'
import Image from 'next/image'

interface Sns {
  name: string,
  href: string,
  src: string,
  size: number
};

function SnsButton(sns: Sns) {
  let className = `sns-button ${sns.name}`;

  return (
    <Link href={sns.href} className={className} target="_blank">
      <Image
        className={sns.name}
        src={sns.src}
        alt={sns.name}
        width={sns.size}
        height={sns.size}
      />
    </Link>
  );
}

export default SnsButton;
