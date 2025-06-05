import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

interface ContactButtonProps {
  className?: string;
}

const ContactButton = ({ className = '' }: ContactButtonProps) => {
  return (
    <Link
      href="/contact"
      className={`bg-[#FFDB71] hover:bg-[#FFDB71] px-4 sm:px-6 py-1.5 sm:py-2 text-base sm:text-base rounded-full font-medium text-black transition-all flex items-center gap-2 group ${className}`}
    >
      <span>Get in touch</span>
      <BsArrowRight className="w-3.5 h-3.5 text-black transform group-hover:-rotate-90 transition-transform duration-300" />
    </Link>
  );
};

export default ContactButton; 