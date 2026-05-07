import { Menu, Phone, Mail, MapPin, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      {/* Top Info Bar */}
      <div className="text-white py-2 text-sm" style={{ backgroundColor: '#6269C9' }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1">
              <Phone size={14} />
              +91 9876543210
            </span>
            <span className="flex items-center gap-1">
              <Mail size={14} />
              info@drannamalaiias.com
            </span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            Chennai, Tamil Nadu
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#6269C9' }}>
                DPA
              </div>
              <div>
                <h1 className="font-bold text-xl" style={{ color: '#6269C9' }}>Dr P. Annamalai IAS Academy</h1>
                <p className="text-xs text-gray-600">Excellence in Civil Services Preparation</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link to="/" className="text-gray-700 transition hover:opacity-80" onMouseEnter={(e) => e.currentTarget.style.color = '#6269C9'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Home</Link>
              {isHome ? (
                <a href="#about" className="text-gray-700 transition hover:opacity-80" onMouseEnter={(e) => e.currentTarget.style.color = '#6269C9'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>About</a>
              ) : (
                <Link to="/#about" className="text-gray-700 transition hover:opacity-80" onMouseEnter={(e) => e.currentTarget.style.color = '#6269C9'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>About</Link>
              )}
              {isHome ? (
                <a href="#courses" className="text-gray-700 transition hover:opacity-80" onMouseEnter={(e) => e.currentTarget.style.color = '#6269C9'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Courses</a>
              ) : (
                <Link to="/#courses" className="text-gray-700 transition hover:opacity-80" onMouseEnter={(e) => e.currentTarget.style.color = '#6269C9'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Courses</Link>
              )}
              {isHome ? (
                <a href="#faculty" className="text-gray-700 transition hover:opacity-80" onMouseEnter={(e) => e.currentTarget.style.color = '#6269C9'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Faculty</a>
              ) : (
                <Link to="/#faculty" className="text-gray-700 transition hover:opacity-80" onMouseEnter={(e) => e.currentTarget.style.color = '#6269C9'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Faculty</Link>
              )}
              {isHome ? (
                <a href="#results" className="text-gray-700 transition hover:opacity-80" onMouseEnter={(e) => e.currentTarget.style.color = '#6269C9'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Results</a>
              ) : (
                <Link to="/#results" className="text-gray-700 transition hover:opacity-80" onMouseEnter={(e) => e.currentTarget.style.color = '#6269C9'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Results</Link>
              )}
              <Link to="/event-gallery" className="text-gray-700 transition hover:opacity-80" onMouseEnter={(e) => e.currentTarget.style.color = '#6269C9'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Event Gallery</Link>
              <Link to="/student-portal" className="text-white px-6 py-2 rounded transition hover:opacity-90" style={{ backgroundColor: '#6269C9' }}>Student Portal</Link>
              {isHome ? (
                <a href="#contact" className="text-white px-6 py-2 rounded transition hover:opacity-90" style={{ backgroundColor: '#6269C9' }}>Contact Us</a>
              ) : (
                <Link to="/#contact" className="text-white px-6 py-2 rounded transition hover:opacity-90" style={{ backgroundColor: '#6269C9' }}>Contact Us</Link>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden pb-4 flex flex-col gap-3">
              <Link to="/" className="text-gray-700 transition py-2" onClick={() => setMobileMenuOpen(false)} onMouseEnter={(e) => e.currentTarget.style.color = '#6269C9'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Home</Link>
              {isHome ? (
                <a href="#about" className="text-gray-700 transition py-2" onClick={() => setMobileMenuOpen(false)} onMouseEnter={(e) => e.currentTarget.style.color = '#6269C9'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>About</a>
              ) : (
                <Link to="/#about" className="text-gray-700 transition py-2" onClick={() => setMobileMenuOpen(false)} onMouseEnter={(e) => e.currentTarget.style.color = '#6269C9'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>About</Link>
              )}
              {isHome ? (
                <a href="#courses" className="text-gray-700 transition py-2" onClick={() => setMobileMenuOpen(false)} onMouseEnter={(e) => e.currentTarget.style.color = '#6269C9'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Courses</a>
              ) : (
                <Link to="/#courses" className="text-gray-700 transition py-2" onClick={() => setMobileMenuOpen(false)} onMouseEnter={(e) => e.currentTarget.style.color = '#6269C9'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Courses</Link>
              )}
              {isHome ? (
                <a href="#faculty" className="text-gray-700 transition py-2" onClick={() => setMobileMenuOpen(false)} onMouseEnter={(e) => e.currentTarget.style.color = '#6269C9'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Faculty</a>
              ) : (
                <Link to="/#faculty" className="text-gray-700 transition py-2" onClick={() => setMobileMenuOpen(false)} onMouseEnter={(e) => e.currentTarget.style.color = '#6269C9'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Faculty</Link>
              )}
              {isHome ? (
                <a href="#results" className="text-gray-700 transition py-2" onClick={() => setMobileMenuOpen(false)} onMouseEnter={(e) => e.currentTarget.style.color = '#6269C9'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Results</a>
              ) : (
                <Link to="/#results" className="text-gray-700 transition py-2" onClick={() => setMobileMenuOpen(false)} onMouseEnter={(e) => e.currentTarget.style.color = '#6269C9'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Results</Link>
              )}
              <Link to="/event-gallery" className="text-gray-700 transition py-2" onClick={() => setMobileMenuOpen(false)} onMouseEnter={(e) => e.currentTarget.style.color = '#6269C9'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Event Gallery</Link>
              <Link to="/student-portal" className="text-white px-6 py-2 rounded transition text-center hover:opacity-90" style={{ backgroundColor: '#6269C9' }} onClick={() => setMobileMenuOpen(false)}>Student Portal</Link>
              {isHome ? (
                <a href="#contact" className="text-white px-6 py-2 rounded transition text-center hover:opacity-90" style={{ backgroundColor: '#6269C9' }} onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
              ) : (
                <Link to="/#contact" className="text-white px-6 py-2 rounded transition text-center hover:opacity-90" style={{ backgroundColor: '#6269C9' }} onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
              )}
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
