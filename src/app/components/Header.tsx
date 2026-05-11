import { Menu, Phone, Mail, MapPin, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import IASLogo from '../../images/IAS.png';

const BRAND = '#6269C9';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Courses',
    dropdown: [
      { label: 'UPSC Prelims', to: '/#courses' },
      { label: 'UPSC Mains', to: '/#courses' },
      { label: 'TNPSC Group I', to: '/#courses' },
      { label: 'Interview Guidance', to: '/#courses' },
      { label: 'Test Series', to: '/#courses' },
    ]
  },
  { label: 'Resources', to: '/resources' },
  { label: 'Event Gallery', to: '/event-gallery' },
  { label: 'Contact', to: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to);
  };

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

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
                  style={{ color: BRAND, fontFamily: "'Playfair Display', serif" }}
                >
                  Dr P. Annamalai IAS Academy
                </div>
                <p className="text-xs text-gray-500 font-medium tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Excellence in Civil Services Preparation
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" style={{ fontFamily: "'Inter', sans-serif" }}>
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className="flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg transition-all hover:bg-gray-50"
                      style={{ color: openDropdown === link.label ? BRAND : '#374151' }}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className="transition-transform"
                        style={{ transform: openDropdown === link.label ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      />
                    </button>
                    {openDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-52 z-50">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            to={item.to}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:text-white hover:pl-6 transition-all font-medium"
                            style={{ transition: 'all 0.15s' }}
                            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = BRAND; e.currentTarget.style.color = '#fff'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = ''; }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.to!}
                    className="px-3 py-2 text-sm font-semibold rounded-lg transition-all hover:bg-gray-50"
                    style={{ color: isActive(link.to!) ? BRAND : '#374151' }}
                  >
                    {link.label}
                    {isActive(link.to!) && (
                      <span className="block h-0.5 rounded-full mt-0.5" style={{ backgroundColor: BRAND }} />
                    )}
                  </Link>
                )
              )}

              {/* Student Portal CTA */}
              <Link
                to="/student-portal"
                className="ml-2 text-white px-5 py-2 rounded-lg font-semibold text-sm transition hover:opacity-90 hover:shadow-lg shadow-md"
                style={{ backgroundColor: BRAND, fontFamily: "'Inter', sans-serif" }}
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
            <nav className="lg:hidden pb-5 border-t border-gray-100 pt-3 flex flex-col gap-1" style={{ fontFamily: "'Inter', sans-serif" }}>
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <div className="px-3 py-2 font-semibold text-gray-500 text-xs uppercase tracking-widest">{link.label}</div>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.to}
                        className="block pl-6 py-2 text-sm text-gray-700 hover:text-purple-700 font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.to!}
                    className="px-3 py-2.5 text-sm font-semibold rounded-lg transition"
                    style={{ color: isActive(link.to!) ? BRAND : '#374151', backgroundColor: isActive(link.to!) ? 'rgba(98,105,201,0.08)' : '' }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
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
