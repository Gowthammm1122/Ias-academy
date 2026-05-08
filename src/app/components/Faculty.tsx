import { GraduationCap, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const BRAND = '#6269C9';

const facultyMembers = [
  { name: 'Dr. P. Annamalai', role: 'Founder & Director', qualification: 'IAS (Retd.)', subject: 'Public Administration', experience: '35+ yrs', color: BRAND },
  { name: 'Mrs. Kavitha Suresh', role: 'Senior Faculty', qualification: 'Ph.D. Indian History', subject: 'History & Art & Culture', experience: '20+ yrs', color: '#5159b8' },
  { name: 'Mr. Rajkumar Singh', role: 'Senior Faculty', qualification: 'IFS (Retd.)', subject: 'Geography & Environment', experience: '25+ yrs', color: '#7078d4' },
  { name: 'Dr. Meena Krishnan', role: 'Faculty', qualification: 'IPS (Retd.), LL.M.', subject: 'Polity & Governance', experience: '22+ yrs', color: '#4e55a8' },
  { name: 'Prof. Sundar Rajan', role: 'Faculty', qualification: 'Ph.D. Economics', subject: 'Economics & Budget', experience: '18+ yrs', color: '#8289dd' },
  { name: 'Mrs. Priya Sharma', role: 'Faculty', qualification: 'M.A. Philosophy', subject: 'Ethics, Integrity & Essay', experience: '15+ yrs', color: '#6b72cc' },
];

export function Faculty() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="faculty" className="py-24 bg-white scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div
          ref={headRef}
          className={`text-center mb-16 transition-all duration-700 ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: BRAND, fontFamily: "'Inter', sans-serif" }}>The Experts</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Esteemed Faculty
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base" style={{ fontFamily: "'Inter', sans-serif" }}>
            Learn from former civil servants and academic experts who have walked the path themselves.
          </p>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ backgroundColor: BRAND }} />
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {facultyMembers.map((faculty, index) => {
            const delay = gridVisible ? index * 90 : 0;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-400"
                style={{
                  opacity: gridVisible ? 1 : 0,
                  transform: gridVisible ? 'translateY(0)' : 'translateY(35px)',
                  transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms, box-shadow 0.3s ease`,
                }}
              >
                {/* Top strip */}
                <div className="h-2 w-full" style={{ backgroundColor: faculty.color }} />

                <div className="p-7 flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                    style={{ backgroundColor: faculty.color }}
                  >
                    <GraduationCap size={38} className="text-white" />
                  </div>

                  {/* Initials overlay on hover */}
                  <div className="mb-1">
                    <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {faculty.name}
                    </h3>
                  </div>
                  <p className="text-sm font-semibold mb-1" style={{ color: faculty.color, fontFamily: "'Inter', sans-serif" }}>
                    {faculty.role}
                  </p>
                  <p className="text-xs text-gray-500 mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {faculty.qualification}
                  </p>

                  {/* Subject tag */}
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3"
                    style={{ backgroundColor: faculty.color }}
                  >
                    {faculty.subject}
                  </span>

                  {/* Experience */}
                  <div
                    className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border"
                    style={{ color: faculty.color, borderColor: `${faculty.color}40`, backgroundColor: `${faculty.color}10`, fontFamily: "'Inter', sans-serif" }}
                  >
                    {faculty.experience} of teaching
                  </div>

                  {/* Bottom hover line */}
                  <div
                    className="mt-5 h-0.5 w-0 rounded-full group-hover:w-3/4 transition-all duration-500"
                    style={{ backgroundColor: faculty.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* View all */}
        <div className={`text-center mt-12 transition-all duration-700 ${gridVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <a
            href="/about"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-white font-semibold text-sm hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg"
            style={{ backgroundColor: BRAND, fontFamily: "'Inter', sans-serif" }}
          >
            Meet All Faculty <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
