import Link from 'next/link';

const ContactButton = () => {
  return (
    <Link
      href="/contact"
      className="bg-yellow-300 hover:bg-yellow-400 px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base rounded-full font-medium text-black transition-all hover:scale-105"
    >
      <span className="hidden sm:inline">Get in touch</span>
      <span className="sm:hidden">Contact</span>
      <span className="ml-1">→</span>
    </Link>
  );
};

export default ContactButton; 