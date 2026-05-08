import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, CheckCircle } from 'lucide-react';

const BRAND = '#6269C9';

const EXAMS = ['UPSC CSE', 'TNPSC Group I', 'TNPSC Group II/IIA', 'TNPSC Group IV', 'Other'];
const COURSES = ['UPSC Prelims', 'UPSC Mains', 'TNPSC Group I', 'Interview Guidance', 'Test Series', 'Foundation Course'];

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Location',
    lines: ['No. 123, Anna Salai,', 'Chennai – 600002,', 'Tamil Nadu, India'],
    cta: 'Get Directions',
    href: 'https://maps.google.com',
  },
  {
    icon: Phone,
    title: 'Phone Numbers',
    lines: ['+91 98765 43210', '+91 44 2345 6789'],
    cta: 'Call Us Now',
    href: 'tel:+919876543210',
  },
  {
    icon: Mail,
    title: 'Email Address',
    lines: ['info@drannamalaiias.com', 'admissions@drannamalaiias.com'],
    cta: 'Send Email',
    href: 'mailto:info@drannamalaiias.com',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Mon – Sat: 8:00 AM – 8:00 PM', 'Sunday: 9:00 AM – 1:00 PM'],
    cta: null,
    href: null,
  },
];

const faqs = [
  { q: 'When does the next batch start?', a: 'Our UPSC and TNPSC batches start every month. Contact us or fill the enquiry form to know the upcoming batch schedules.' },
  { q: 'Do you offer online classes?', a: 'Yes, we offer both offline (Chennai) and live online classes streamed through our dedicated student portal.' },
  { q: 'Are there hostel facilities available?', a: 'We have tie-ups with nearby hostels for outstation students. Contact our admissions team for details.' },
  { q: 'Is there an EMI option for fees?', a: 'Yes, we offer flexible EMI plans with 0% interest. Our counsellors will help you choose the right plan.' },
];

export function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', exam: '', course: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">

      {/* Hero Banner */}
      <div className="text-white py-20 relative overflow-hidden" style={{ background: `linear-gradient(135deg, #4048a0 0%, ${BRAND} 60%, #7a81d9 100%)` }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <p className="text-sm uppercase tracking-widest font-semibold text-white/70 mb-3">We're Here to Help</p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-5 tracking-tight">Contact Us</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
            Have a question or ready to start your IAS journey? Reach out to us and our team will get back to you within 24 hours.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <div key={i} className="rounded-2xl p-7 text-center shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4" style={{ backgroundColor: 'rgba(98,105,201,0.12)' }}>
                    <Icon size={28} style={{ color: BRAND }} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-3">{info.title}</h3>
                  {info.lines.map((line, j) => (
                    <p key={j} className="text-gray-600 text-sm leading-relaxed">{line}</p>
                  ))}
                  {info.cta && info.href && (
                    <a href={info.href} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm font-semibold hover:underline" style={{ color: BRAND }}>
                      {info.cta} →
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enquiry Form + Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(98,105,201,0.12)' }}>
                  <MessageSquare size={20} style={{ color: BRAND }} />
                </div>
                <h2 className="text-2xl font-extrabold text-gray-900">Student Enquiry Form</h2>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle size={64} className="mb-4" style={{ color: BRAND }} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You, {form.name}!</h3>
                  <p className="text-gray-600 max-w-xs">We have received your enquiry and will contact you within 24 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', exam: '', course: '', message: '' }); }}
                    className="mt-6 px-6 py-2 rounded-lg text-white font-semibold hover:opacity-90 transition text-sm"
                    style={{ backgroundColor: BRAND }}
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text" name="name" value={form.name} onChange={handleChange} required
                        placeholder="Your full name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition"
                        style={{ '--tw-ring-color': BRAND } as React.CSSProperties}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                      <input
                        type="email" name="email" value={form.email} onChange={handleChange} required
                        placeholder="your@email.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile Number *</label>
                    <input
                      type="tel" name="phone" value={form.phone} onChange={handleChange} required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Target Exam</label>
                      <select name="exam" value={form.exam} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none bg-white">
                        <option value="">Select Exam</option>
                        {EXAMS.map(e => <option key={e}>{e}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Preferred Course</label>
                      <select name="course" value={form.course} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none bg-white">
                        <option value="">Select Course</option>
                        {COURSES.map(c => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      placeholder="Tell us how we can help you…"
                      rows={4}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 resize-none transition"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-bold hover:opacity-90 transition text-base"
                    style={{ backgroundColor: BRAND }}
                  >
                    <Send size={18} /> Submit Enquiry
                  </button>
                </form>
              )}
            </div>

            {/* Map + Quick Links */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex-1 min-h-64">
                <iframe
                  title="Dr P Annamalai IAS Academy Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9823576!2d80.2519!3d13.0604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAzJzM3LjQiTiA4MMKwMTUnMDYuOCJF!5e0!3m2!1sen!2sin!4v1000000000000"
                  className="w-full h-64 md:h-full"
                  style={{ border: 0, minHeight: '300px' }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg mb-4">Reach Us Directly</h3>
                <div className="space-y-3">
                  <a href="tel:+919876543210" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition group">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(98,105,201,0.12)' }}>
                      <Phone size={18} style={{ color: BRAND }} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Call Us</p>
                      <p className="font-semibold text-gray-900 text-sm group-hover:text-purple-700">+91 98765 43210</p>
                    </div>
                  </a>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition group">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-green-100">
                      <MessageSquare size={18} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">WhatsApp</p>
                      <p className="font-semibold text-gray-900 text-sm group-hover:text-green-700">Chat on WhatsApp</p>
                    </div>
                  </a>
                  <a href="mailto:info@drannamalaiias.com" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition group">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(98,105,201,0.12)' }}>
                      <Mail size={18} style={{ color: BRAND }} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Email Us</p>
                      <p className="font-semibold text-gray-900 text-sm group-hover:text-purple-700">info@drannamalaiias.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: BRAND }}>Common Questions</p>
            <h2 className="text-4xl font-extrabold text-gray-900">FAQs</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <button
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-gray-900 text-base hover:bg-gray-100 transition"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span className="ml-4 flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-lg font-bold" style={{ backgroundColor: BRAND }}>
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
