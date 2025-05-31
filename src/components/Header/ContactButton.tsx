import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';

const ContactButton = () => {
  return (
    <Link
      href="/contact"
      className="bg-yellow-300 hover:bg-yellow-400 px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base rounded-full font-medium text-black transition-all hover:scale-105 flex items-center gap-2"
    >
      <span className="hidden sm:inline">Get in touch</span>
      <span className="sm:hidden">Contact</span>
      <BsArrowUpRight className="w-3 h-3 text-black" />
    </Link>
  );
};

export default ContactButton; 