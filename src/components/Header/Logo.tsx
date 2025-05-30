import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href="/" className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
      <Image src="/img/7AVENUE-Logo.png" alt="7AVENUE" width={200} height={200} className="brightness-0 invert" />
    </Link>
  );
};

export default Logo;