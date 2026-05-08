import { Trophy, Star, ArrowRight } from 'lucide-react';
import { useScrollReveal, useCountUp } from '../hooks/useScrollReveal';

const BRAND = '#6269C9';

const toppers = [
  { name: 'Arun Kumar', rank: 'AIR 15', year: '2025', service: 'IAS', state: 'Tamil Nadu' },
  { name: 'Priya Venkat', rank: 'AIR 28', year: '2025', service: 'IAS', state: 'Tamil Nadu' },
  { name: 'Rajesh Mohan', rank: 'AIR 42', year: '2025', service: 'IPS', state: 'Tamil Nadu' },
  { name: 'Deepika Rao', rank: 'AIR 67', year: '2024', service: 'IAS', state: 'Tamil Nadu' },
  { name: 'Vikram Singh', rank: 'AIR 89', year: '2024', service: 'IFS', state: 'Tamil Nadu' },
  { name: 'Lakshmi Devi', rank: 'AIR 103', year: '2024', service: 'IAS', state: 'Tamil Nadu' },
];

const summaryStats = [
  { label: 'Total Selections', target: 500, suffix: '+', color: BRAND },
  { label: 'IAS / IPS Officers', target: 150, suffix: '+', color: '#5159b8' },
  { label: 'State Service Officers', target: 350, suffix: '+', color: '#7078d4' },
  { label: 'Years of Excellence', target: 25, suffix: '+', color: '#8289dd' },
];

function StatCounter({ target, suffix, label, color, active }: { target: number; suffix: string; label: string; color: string; active: boolean }) {
  const count = useCountUp(target, active, 2200);
  return (
    <div className="text-center group cursor-default">
      <div
        className="text-4xl md:text-5xl font-extrabold mb-2 transition-transform group-hover:scale-110 duration-300"
        style={{ color, fontFamily: "'Playfair Display', serif" }}
      >
        {count}{suffix}
      </div>
      <p className="text-gray-600 text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>{label}</p>
    </div>
  );
}

export function Results() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: toppersRef, isVisible: toppersVisible } = useScrollReveal({ threshold: 0.05 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="results" className="py-24 scroll-mt-20 overflow-hidden" style={{ backgroundColor: '#f8f7ff' }}>
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div
          ref={headRef}
          className={`text-center mb-16 transition-all duration-700 ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: BRAND, fontFamily: "'Inter', sans-serif" }}>Hall of Fame</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Success Stories
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base" style={{ fontFamily: "'Inter', sans-serif" }}>
            Celebrating the achievers who worked hard and earned their place in India's finest civil services.
          </p>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ backgroundColor: BRAND }} />
        </div>

        {/* Toppers Grid */}
        <div ref={toppersRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {toppers.map((topper, index) => {
            const delay = toppersVisible ? index * 80 : 0;
            return (
              <div
                key={index}
                className="group relative text-white rounded-2xl p-6 shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 cursor-default"
                style={{
                  background: `linear-gradient(135deg, #4048a0, ${BRAND})`,
                  opacity: toppersVisible ? 1 : 0,
                  transform: toppersVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.97)',
                  transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms, box-shadow 0.3s ease`,
                }}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl" style={{ background: 'radial-gradient(circle at 50% 0%, #fff, transparent 70%)' }} />

                <div className="flex items-start justify-between mb-4 relative">
                  <div>
                    <h3 className="text-xl font-bold mb-0.5" style={{ fontFamily: "'Playfair Display', serif" }}>{topper.name}</h3>
                    <p className="text-white/80 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {topper.service} · UPSC {topper.year}
                    </p>
                  </div>
                  <Trophy className="text-yellow-300 group-hover:rotate-12 transition-transform duration-300" size={30} />
                </div>

                <div className="flex items-end justify-between relative">
                  <div
                    className="text-4xl font-extrabold"
                    style={{ fontFamily: "'Playfair Display', serif", color: '#fbbf24' }}
                  >
                    {topper.rank}
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="#fbbf24" className="text-yellow-300" />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats count-up */}
        <div
          ref={statsRef}
          className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-10 transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
            {summaryStats.map((s, i) => (
              <StatCounter key={i} target={s.target} suffix={s.suffix} label={s.label} color={s.color} active={statsVisible} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-10 transition-all duration-700 ${statsVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          <a
            href="/event-gallery"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-white font-semibold text-sm hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg"
            style={{ backgroundColor: BRAND, fontFamily: "'Inter', sans-serif" }}
          >
            View All Success Stories <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
