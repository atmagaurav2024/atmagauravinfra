import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/70 backdrop-blur-xl border-b border-zinc-200' : 'bg-transparent'
      }`}
      data-testid="main-navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center" data-testid="logo-link">
            <div className="text-xl lg:text-2xl font-black tracking-tighter uppercase">
              <span className="text-zinc-950">ATMAGAURAV</span>
              <span className="text-amber-500 ml-2">INFRA</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.name.toLowerCase()}`}
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  location.pathname === link.path
                    ? 'text-amber-500'
                    : 'text-zinc-950 hover:text-amber-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-zinc-950"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-zinc-200" data-testid="mobile-menu">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
                className={`block text-sm font-semibold tracking-wide transition-colors ${
                  location.pathname === link.path
                    ? 'text-amber-500'
                    : 'text-zinc-950 hover:text-amber-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;