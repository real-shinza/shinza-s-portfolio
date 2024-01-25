import Image from 'next/image';
import './profile-image.css';

export default function ProfileImages() {
  const images: string[] = [
    "/profiles/profile7.jpg",
  ];
  return (
    <div className="profile-images">
      {images.map((image, index) => (
        <Image
          key={index}
          className="profile-image"
          src={image}
          alt="Profile image"
          width={256}
          height={256}
          priority={true}
        />
      ))}
    </div>
  );
}
