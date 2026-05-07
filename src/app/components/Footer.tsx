import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-12 pb-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. P. Annamalai IAS Academy</h3>
            <p className="text-gray-400 mb-4">
              Leading institution for civil services preparation with proven track record of excellence.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-white/10 p-2 rounded hover:bg-white/20 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded hover:bg-white/20 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded hover:bg-white/20 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded hover:bg-white/20 transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white transition">Courses</a></li>
              <li><a href="#faculty" className="text-gray-400 hover:text-white transition">Faculty</a></li>
              <li><a href="#results" className="text-gray-400 hover:text-white transition">Results</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">UPSC Prelims</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">UPSC Mains</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">TNPSC Group I</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Interview Guidance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Test Series</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <p className="text-gray-400">
                  No. 123, Anna Salai,<br />
                  Chennai - 600002,<br />
                  Tamil Nadu, India
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={20} />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition">
                  +91 9876543210
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} />
                <a href="mailto:info@drannamalaiias.com" className="text-gray-400 hover:text-white transition">
                  info@drannamalaiias.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>&copy; 2026 Dr. P. Annamalai IAS Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
