import { BookOpen, Users, Video, FileText, Award, Clock, Zap, Globe } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const BRAND = '#6269C9';

const features = [
  { icon: BookOpen, title: 'Comprehensive Study Material', description: 'Updated, well-researched notes covering the complete UPSC & TNPSC syllabus — chapter by chapter.' },
  { icon: Users, title: 'Experienced Faculty', description: 'Learn directly from former IAS, IPS, IFS officers and subject-matter experts with decades of experience.' },
  { icon: Video, title: 'Online & Offline Classes', description: 'Attend live classes in Chennai or stream them online — flexible batches to suit your schedule.' },
  { icon: FileText, title: 'Regular Test Series', description: 'Weekly sectional tests, full-length mock exams with detailed performance analysis and rank prediction.' },
  { icon: Award, title: 'Proven Track Record', description: '500+ civil service selections including IAS, IPS, IFS, and TNPSC toppers since 2001.' },
  { icon: Clock, title: 'Daily Current Affairs', description: 'Morning current affairs classes, monthly magazines, and a curated news digest every day.' },
  { icon: Zap, title: 'Personalised Mentoring', description: 'One-on-one mentoring sessions, answer script evaluation, and targeted feedback on weak areas.' },
  { icon: Globe, title: 'All-India Test Ranking', description: 'Benchmark yourself against aspirants across India with our national-level test series.' },
];

export function Features() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.08 });

  return (
    <section className="py-24 overflow-hidden" style={{ backgroundColor: '#f8f7ff' }}>
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div
          ref={headRef}
          className={`text-center mb-16 transition-all duration-700 ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: BRAND, fontFamily: "'Inter', sans-serif" }}>Why Students Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Why Choose Dr. P. Annamalai IAS Academy?
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ backgroundColor: BRAND }} />
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const delay = gridVisible ? index * 60 : 0;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-400 cursor-default"
                style={{
                  opacity: gridVisible ? 1 : 0,
                  transform: gridVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms, box-shadow 0.3s ease, border-color 0.3s ease`,
                  borderColor: 'transparent',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${BRAND}30`; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'transparent'; }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: 'rgba(98,105,201,0.1)' }}
                >
                  <Icon size={28} style={{ color: BRAND }} />
                </div>
                <h3
                  className="text-base font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="mt-5 h-0.5 w-0 rounded-full group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: BRAND }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
