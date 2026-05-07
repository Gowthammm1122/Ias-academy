import { useState, useEffect } from 'react';
import { X, BookOpen, Phone } from 'lucide-react';

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Only show once per browser session
    if (!sessionStorage.getItem('welcomeShown')) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('welcomeShown', 'true');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative animate-in fade-in zoom-in duration-300">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close popup"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#6269C9' }}>
            <BookOpen size={40} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome to Dr. P. Annamalai IAS Academy!
          </h2>
          <p className="text-gray-600 mb-6">
            Begin your journey to success with India's premier civil services coaching institute.
          </p>
          <div className="rounded-lg p-4 mb-4" style={{ backgroundColor: 'rgba(98, 105, 201, 0.1)', border: '2px solid #6269C9' }}>
            <p className="font-bold mb-2" style={{ color: '#6269C9' }}>🎉 Special Offer!</p>
            <p className="text-gray-700">Get 20% discount on enrollment this month</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-full text-white py-3 rounded-lg font-bold transition hover:opacity-90"
            style={{ backgroundColor: '#6269C9' }}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}

export function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom duration-500">
      <div className="bg-white rounded-lg shadow-2xl max-w-sm p-6 relative border-2" style={{ borderColor: '#6269C9' }}>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close contact popup"
        >
          <X size={20} />
        </button>

        <div className="flex items-start gap-4">
          <div className="rounded-full p-3 flex-shrink-0" style={{ backgroundColor: '#6269C9' }}>
            <Phone size={24} className="text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Need Help?</h3>
            <p className="text-sm text-gray-600 mb-3">
              Talk to our admission counselor for personalized guidance
            </p>
            <a
              href="tel:+919876543210"
              className="inline-block text-white px-4 py-2 rounded text-sm font-semibold transition hover:opacity-90"
              style={{ backgroundColor: '#6269C9' }}
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AdmissionPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  });

  useEffect(() => {
    // Show after WelcomePopup has been dismissed (offset by enough time)
    if (!sessionStorage.getItem('admissionShown')) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('admissionShown', 'true');
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Our team will contact you soon.');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-lg max-w-lg w-full p-6 relative animate-in fade-in zoom-in duration-300">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close admission popup"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          🎓 Admission Open for 2026 Batch
        </h2>
        <p className="text-gray-600 mb-6">
          Register now and get a free counseling session with our experts
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
              onFocus={(e) => (e.currentTarget.style.outline = '2px solid #6269C9')}
              onBlur={(e) => (e.currentTarget.style.outline = 'none')}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
              onFocus={(e) => (e.currentTarget.style.outline = '2px solid #6269C9')}
              onBlur={(e) => (e.currentTarget.style.outline = 'none')}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
              onFocus={(e) => (e.currentTarget.style.outline = '2px solid #6269C9')}
              onBlur={(e) => (e.currentTarget.style.outline = 'none')}
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Course Interest</label>
            <select
              required
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
              onFocus={(e) => (e.currentTarget.style.outline = '2px solid #6269C9')}
              onBlur={(e) => (e.currentTarget.style.outline = 'none')}
            >
              <option value="">Select a course</option>
              <option value="upsc-prelims">UPSC Prelims</option>
              <option value="upsc-mains">UPSC Mains</option>
              <option value="tnpsc">TNPSC Group I</option>
              <option value="interview">Interview Guidance</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full text-white py-3 rounded-lg font-bold transition hover:opacity-90"
            style={{ backgroundColor: '#6269C9' }}
          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
}
