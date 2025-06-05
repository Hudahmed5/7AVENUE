import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link 
      href="/" 
      className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity"
      style={{ fontFamily: 'Space Grotesk', fontWeight: 700 }}
    >
      <Image src="/svg/7AVENUE-Logo 1.svg" alt="7AVENUE" width={150} height={22.22} className="brightness-0 invert" />
    </Link>
  );
};

export default Logo;