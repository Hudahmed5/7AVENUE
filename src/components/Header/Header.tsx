import Logo from './Logo';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';
import ContactButton from './ContactButton';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#1A1B1E] bg-opacity-80 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <Logo />
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
            <Navigation />
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <ThemeToggle />
              <ContactButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 