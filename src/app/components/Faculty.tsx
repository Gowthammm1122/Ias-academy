import { GraduationCap, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const BRAND = '#6269C9';

const facultyMembers = [
  { 
    name: 'GUNASEKARAN V', 
    role: 'Faculty', 
    qualification: 'B.E - EEE', 
    subject: 'Maths & Reasoning', 
    experience: '5 years', 
    color: BRAND,
    image: 'https://via.placeholder.com/150' 
  },
  { 
    name: 'P. Rajiv Gandhi', 
    role: 'Faculty', 
    qualification: 'MA History, DEEE', 
    subject: 'Tamil Society & TN Dev.', 
    color: '#5159b8',
    experience: '5 years', 
    image: 'https://via.placeholder.com/150' 
  },
  { 
    name: 'XYZ (Update Name)', 
    role: 'Faculty', 
    qualification: 'BA, ME', 
    subject: 'Indian Economy', 
    experience: '5 years', 
    color: '#7078d4',
    image: 'https://via.placeholder.com/150' 
  },
  { 
    name: 'XYZW (Update Name)', 
    role: 'Faculty', 
    qualification: 'BDS (Dental Surgeon)', 
    subject: 'Science & Tech, Anthro.', 
    experience: '4.5 years', 
    color: '#4e55a8',
    image: 'https://via.placeholder.com/150' 
  },
  { 
    name: 'RTXY (Update Name)', 
    role: 'Faculty', 
    qualification: 'B.E. EEE', 
    subject: 'History', 
    experience: '7 years', 
    color: '#8289dd',
    image: 'https://via.placeholder.com/150' 
  },
  { 
    name: 'Coming Soon', 
    role: 'Faculty Expert', 
    qualification: 'Academic Specialist', 
    subject: 'General Studies', 
    experience: 'Multiple Years', 
    color: '#6b72cc',
    image: 'https://via.placeholder.com/150' 
  },
];

export function Faculty() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    // Added a mild, refreshing blue-slate background to contrast against standard white pages
    <section id="faculty" className="py-24 bg-gradient-to-b from-slate-50/50 to-blue-50/40 border-y border-slate-100 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header - Kept exactly the same */}
        <div
          ref={headRef}
          className={`text-center mb-16 transition-all duration-700 ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: BRAND }}>The Experts</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4" >
            Our Esteemed Faculty
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base" >
            Learn from former civil servants and academic experts who have walked the path themselves.
          </p>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ backgroundColor: BRAND }} />
        </div>

        {/* Grid - Minimal Row Layout */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyMembers.map((faculty, index) => {
            const delay = gridVisible ? index * 70 : 0;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl border border-slate-100 p-5 flex items-start gap-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                style={{
                  opacity: gridVisible ? 1 : 0,
                  transform: gridVisible ? 'translateY(0)' : 'translateY(25px)',
                  transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms, box-shadow 0.3s ease, transform 0.3s ease`,
                }}
              >
                {/* Clean, compact image container */}
                <div className="relative shrink-0 w-24 h-24 md:w-26 md:h-26 rounded-lg overflow-hidden bg-slate-50 border border-slate-100">
                  <img 
                    src={faculty.image} 
                    alt={faculty.name}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Subtle corner badge */}
                  <div 
                    className="absolute top-0 left-0 w-6 h-6 rounded-br-lg flex items-center justify-center text-white"
                    style={{ backgroundColor: faculty.color }}
                  >
                    <GraduationCap size={12} />
                  </div>
                </div>

                {/* Minimalist Details Container */}
                <div className="flex flex-col flex-1 min-w-0 h-24 md:h-26 justify-between">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 truncate leading-tight group-hover:text-gray-800">
                      {faculty.name}
                    </h3>
                    <p className="text-[10px] text-gray-400 font-semibold tracking-wide uppercase truncate mt-0.5">
                      {faculty.qualification}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-xs font-semibold mb-1.5" style={{ color: faculty.color }}>
                      {faculty.role} • {faculty.experience} exp
                    </p>

                    {/* Left aligned minimal subject tag */}
                    <span
                      className="inline-block px-2.5 py-0.5 rounded text-[11px] font-medium"
                      style={{ backgroundColor: `${faculty.color}12`, color: faculty.color }}
                    >
                      {faculty.subject}
                    </span>
                  </div>
                </div>

                {/* Micro accent left border on hover */}
                <div 
                  className="absolute left-0 top-1/4 bottom-1/4 w-0.5 rounded-r group-hover:h-1/2 transition-all duration-300"
                  style={{ backgroundColor: faculty.color }}
                />
              </div>
            );
          })}
        </div>

        {/* View all - Kept exactly the same */}
        <div className={`text-center mt-12 transition-all duration-700 ${gridVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '500ms' }}>
          <a
            href="/about"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-white font-semibold text-sm hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg"
            style={{ backgroundColor: BRAND }}
          >
            Meet All Faculty <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}