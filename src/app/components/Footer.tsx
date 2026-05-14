import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router';
import IASLogo from '../../images/IAS.png';

const BRAND = '#6269C9';

export function Footer() {
  return (
    <footer className="text-white pt-14 pb-6" style={{ backgroundColor: '#111827' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 shadow-md" style={{ backgroundColor: BRAND }}>
                <img src={IASLogo} alt="IAS Academy Logo" className="w-8 h-8 object-contain drop-shadow-sm" />
              </div>
              <div>
                <p className="font-extrabold text-base leading-tight" >Dr P. Annamalai</p>
                <p className="text-xs text-gray-400 font-medium">IAS Academy</p>
              </div>
            </div>
            <p className="text-gray-400 mb-5 text-sm leading-relaxed">
              Leading institution for civil services preparation with a proven track record of excellence since 2001.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition hover:scale-110">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition hover:scale-110">
                <Twitter size={16} />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition hover:scale-110">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition hover:scale-110">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-5 text-white tracking-wide uppercase text-xs" style={{ color: BRAND, letterSpacing: '0.1em' }}>Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Resources', to: '/resources' },
                { label: 'Event Gallery', to: '/event-gallery' },
                { label: 'Contact Us', to: '/contact' },
                { label: 'Student Portal', to: '/student-portal' },
              ].map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-gray-400 hover:text-white transition text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" style={{ backgroundColor: BRAND }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-base font-bold mb-5 uppercase text-xs tracking-widest" style={{ color: BRAND }}>Our Courses</h3>
            <ul className="space-y-3">
              {[
                'UPSC Prelims',
                'UPSC Mains',
                'TNPSC Group I',
                'TNPSC Group II/IIA',
                'Interview Guidance',
                'Test Series',
              ].map(course => (
                <li key={course}>
                  <a href="/#courses" className="text-gray-400 hover:text-white transition text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" style={{ backgroundColor: BRAND }} />
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold mb-5 uppercase text-xs tracking-widest" style={{ color: BRAND }}>Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" style={{ color: BRAND }} />
                <p className="text-gray-400 text-sm leading-relaxed">
                  No. 123, Anna Salai,<br />
                  Chennai – 600002,<br />
                  Tamil Nadu, India
                </p>
              </div>
              <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-white transition group">
                <Phone size={18} style={{ color: BRAND }} />
                <span className="text-gray-400 group-hover:text-white text-sm">+91 98765 43210</span>
              </a>
              <a href="mailto:info@drannamalaiias.com" className="flex items-center gap-3 hover:text-white transition group">
                <Mail size={18} style={{ color: BRAND }} />
                <span className="text-gray-400 group-hover:text-white text-sm">info@drannamalaiias.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-gray-500 text-xs">
          <p>© 2026 Dr. P. Annamalai IAS Academy. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Use</a>
            <a href="#" className="hover:text-white transition">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
