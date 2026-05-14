import { Target, Eye, Award, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const BRAND = '#6269C9';

const pillars = [
  'Founded by a 35-year IAS veteran',
  '500+ total civil service selections',
  'Expert faculty — former civil servants',
  'Personalised mentoring & feedback',
  'Daily current affairs & test series',
  'Online & offline batch options',
];

const values = [
  { icon: Target, title: 'Our Mission', text: 'To empower every aspiring civil servant with structured knowledge, strategic guidance, and unwavering support to excel in UPSC & TNPSC exams.' },
  { icon: Eye, title: 'Our Vision', text: "To be India's most trusted civil services institution — shaping future leaders who transform the nation through ethical governance." },
  { icon: Award, title: 'Our Values', text: 'Excellence, Integrity, Innovation, and a Student-First approach form the cornerstone of everything we do.' },
];

export function AboutSection() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal({ threshold: 0.15 });
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal({ threshold: 0.15 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="about" className="py-24 bg-white scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section header */}
        <div
          ref={headRef}
          className={`text-center mb-16 transition-all duration-700 ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: BRAND }}>Who We Are</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4" >
            About Dr. P. Annamalai IAS Academy
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ backgroundColor: BRAND }} />
        </div>

        {/* Two-column */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Left — text */}
          <div
            ref={leftRef}
            className={`transition-all duration-800 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
            
          >
            <h3 className="text-3xl font-extrabold mb-5" style={{ color: BRAND }}>
              Excellence in Civil Services Coaching Since 2001
            </h3>
            <p className="text-gray-600 leading-relaxed mb-5 text-base">
              Founded by <strong className="text-gray-900">Dr. P. Annamalai</strong>, a distinguished IAS officer with over 35 years of administrative experience, our academy has been a beacon of civil services excellence in Tamil Nadu and across India.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              With a proven track record of producing hundreds of successful UPSC and TNPSC candidates, we combine expert faculty, updated study materials, regular test series, and personalised mentoring — giving every aspirant the best shot at their dream.
            </p>

            {/* Pillars checklist */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pillars.map((p, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-2.5 text-sm text-gray-700 font-medium transition-all duration-500`}
                  style={{ transitionDelay: `${leftVisible ? i * 80 : 0}ms`, opacity: leftVisible ? 1 : 0, transform: leftVisible ? 'translateX(0)' : 'translateX(-12px)' }}
                >
                  <CheckCircle size={17} style={{ color: BRAND, flexShrink: 0 }} />
                  {p}
                </li>
              ))}
            </ul>

            <a
              href="/about"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3 rounded-xl text-white font-bold text-sm hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
              style={{ backgroundColor: BRAND }}
            >
              Learn More About Us →
            </a>
          </div>

          {/* Right — values cards */}
          <div
            ref={rightRef}
            className={`space-y-5 transition-all duration-800 ${rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="group flex items-start gap-5 bg-gray-50 rounded-2xl p-6 border-l-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                  style={{
                    borderColor: BRAND,
                    transitionDelay: `${rightVisible ? i * 100 : 0}ms`,
                  }}
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: 'rgba(98,105,201,0.12)' }}
                  >
                    <Icon size={24} style={{ color: BRAND }} />
                  </div>
                  <div >
                    <h4 className="font-bold text-gray-900 text-lg mb-1">{v.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{v.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom accent bar */}
        <div
          ref={cardsRef}
          className={`rounded-2xl p-8 text-white text-center transition-all duration-700 ${cardsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          style={{ background: `linear-gradient(135deg, #4048a0, ${BRAND}, #7a81d9)` }}
        >
          <p className="text-xl md:text-2xl font-bold mb-2" >
            Ready to start your IAS journey?
          </p>
          <p className="text-white/80 mb-6 text-sm" >
            Talk to our expert counsellors today — free of charge.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="px-7 py-2.5 bg-white rounded-lg font-bold text-sm hover:opacity-90 transition" style={{ color: BRAND }}>
              Book Free Counselling
            </a>
            <a href="/resources" className="px-7 py-2.5 border-2 border-white/60 rounded-lg font-bold text-sm text-white hover:bg-white/10 transition">
              Browse Resources
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
