import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';

interface ContactButtonProps {
  className?: string;
}

const ContactButton = ({ className = '' }: ContactButtonProps) => {
  return (
    <Link
      href="/contact"
      className={`bg-yellow-300 hover:bg-yellow-400 px-4 sm:px-6 py-1.5 sm:py-2 text-base sm:text-base rounded-full font-medium text-black transition-all hover:scale-105 flex items-center gap-2 ${className}`}
    >
      <span>Get in touch</span>
      <BsArrowUpRight className="w-3.5 h-3.5 text-black" />
    </Link>
  );
};

export default ContactButton; 