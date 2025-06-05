import Link from 'next/link';
import Image from 'next/image';

interface ContactButtonProps {
  className?: string;
}

const ContactButton = ({ className = '' }: ContactButtonProps) => {
  return (
    <Link
      href="/contact"
      className={`bg-[#FFDB71] hover:bg-[#FFDB71] px-[16px] py-[8.5px] text-base rounded-full font-medium text-black transition-all flex items-center gap-2 group ${className}`}
      style={{ fontFamily: 'Space Grotesk', fontWeight: 500 }}
    >
      <span>Get in touch</span>
      <Image 
        src="/svg/arrow-right-normal.svg" 
        alt="Arrow right" 
        width={24} 
        height={24} 
        className="transform group-hover:-rotate-45 transition-transform duration-300"
      />
    </Link>
  );
};

export default ContactButton; 