import { Menu, Phone, Mail, MapPin, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import IASLogo from '../../images/IAS.png';

const BRAND = '#6269C9';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Courses', to: '/courses' },
  { label: 'Resources', to: '/resources' },
  { label: 'Event Gallery', to: '/event-gallery' },
  { label: 'Contact', to: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to);
  };

  return (
    <>


      {/* Top Info Bar */}
      <div className="text-white py-2 text-xs hidden md:block" style={{ backgroundColor: BRAND }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-5 flex-wrap">
            <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-white/80 transition">
              <Phone size={13} />
              +91 98765 43210
            </a>
            <a href="mailto:info@drannamalaiias.com" className="flex items-center gap-1.5 hover:text-white/80 transition">
              <Mail size={13} />
              info@drannamalaiias.com
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={13} />
            No. 123, Anna Salai, Chennai – 600002
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-3">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-md" style={{ backgroundColor: BRAND }}>
                <img src={IASLogo} alt="IAS Academy Logo" className="w-10 h-10 object-contain drop-shadow-sm" />
              </div>
              <div>
                <div
                  className="font-extrabold text-xl leading-tight"
                  style={{ color: BRAND }}
                >
                  Dr P. Annamalai IAS Academy
                </div>
                <p className="text-xs text-gray-500 font-medium tracking-wide" >
                  Excellence in Civil Services Preparation
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="px-3 py-2 text-sm font-semibold rounded-lg transition-all hover:bg-gray-50"
                  style={{ color: isActive(link.to) ? BRAND : '#374151' }}
                >
                  {link.label}
                  {isActive(link.to) && (
                    <span className="block h-0.5 rounded-full mt-0.5" style={{ backgroundColor: BRAND }} />
                  )}
                </Link>
              ))}

              {/* Student Portal CTA */}
              <Link
                to="/student-portal"
                className="ml-2 text-white px-5 py-2 rounded-lg font-semibold text-sm transition hover:opacity-90 hover:shadow-lg shadow-md"
                style={{ backgroundColor: BRAND }}
              >
                Student Portal
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden pb-5 border-t border-gray-100 pt-3 flex flex-col gap-1" >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="px-3 py-2.5 text-sm font-semibold rounded-lg transition"
                  style={{ color: isActive(link.to) ? BRAND : '#374151', backgroundColor: isActive(link.to) ? 'rgba(98,105,201,0.08)' : '' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/student-portal"
                className="mt-2 mx-3 text-center text-white py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition"
                style={{ backgroundColor: BRAND }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Student Portal
              </Link>
              {/* Mobile Contact Info */}
              <div className="mt-3 mx-3 p-3 rounded-lg bg-gray-50 text-xs text-gray-600 space-y-1.5">
                <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-purple-700">
                  <Phone size={12} style={{ color: BRAND }} /> +91 98765 43210
                </a>
                <a href="mailto:info@drannamalaiias.com" className="flex items-center gap-2 hover:text-purple-700">
                  <Mail size={12} style={{ color: BRAND }} /> info@drannamalaiias.com
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
