import { Clock, Calendar, IndianRupee, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const BRAND = '#6269C9';

const courses = [
  {
    title: 'UPSC Prelims',
    badge: 'Most Popular',
    description: 'Comprehensive preparation for the Civil Services Preliminary Examination — complete GS + CSAT coverage.',
    duration: '6 Months',
    schedule: 'Weekend & Weekday Batches',
    fee: '50,000',
    highlights: ['Complete GS syllabus', 'CSAT intensive', '200+ mock tests', 'Current affairs'],
    accent: BRAND,
  },
  {
    title: 'UPSC Mains',
    badge: 'Advanced',
    description: 'In-depth coaching for the Civil Services Main Examination with answer-writing excellence focus.',
    duration: '8 Months',
    schedule: 'Regular Daily Batches',
    fee: '75,000',
    highlights: ['GS Paper I–IV', 'Essay mastery', 'Optional subjects', 'Interview prep'],
    accent: '#4e55a8',
  },
  {
    title: 'TNPSC Group I',
    badge: 'State Level',
    description: 'Complete guidance for Tamil Nadu Public Service Commission Group I Prelims and Mains.',
    duration: '5 Months',
    schedule: 'Morning & Evening Batches',
    fee: '40,000',
    highlights: ['Tamil syllabus focus', 'VAO + Group I', 'State GK', 'Mock exams'],
    accent: '#7078d4',
  },
  {
    title: 'Interview Guidance',
    badge: 'Final Stage',
    description: 'Personality development, mock panel interviews, and confidence-building by former board members.',
    duration: '2 Months',
    schedule: 'Flexible Scheduling',
    fee: '25,000',
    highlights: ['Mock interviews', 'DAF analysis', 'Body language', 'Expert panel'],
    accent: '#8289dd',
  },
];

export function Courses() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="courses" className="py-24 bg-white scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div
          ref={headRef}
          className={`text-center mb-16 transition-all duration-700 ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: BRAND, fontFamily: "'Inter', sans-serif" }}>Structured Programmes</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Courses
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base" style={{ fontFamily: "'Inter', sans-serif" }}>
            Specialised programmes designed to give you the edge at every stage of the civil services journey.
          </p>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ backgroundColor: BRAND }} />
        </div>

        {/* Cards */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => {
            const delay = gridVisible ? index * 100 : 0;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-400 flex flex-col"
                style={{
                  opacity: gridVisible ? 1 : 0,
                  transform: gridVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms, box-shadow 0.3s ease`,
                }}
              >
                {/* Top colored band */}
                <div
                  className="relative px-6 pt-8 pb-6 text-white"
                  style={{ backgroundColor: course.accent }}
                >
                  {/* Badge */}
                  <span className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                    {course.badge}
                  </span>
                  <h3 className="text-2xl font-extrabold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {course.title}
                  </h3>
                  <p className="text-white/85 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {course.description}
                  </p>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {/* Meta */}
                  <div className="space-y-2.5 mb-5">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Clock size={15} style={{ color: course.accent }} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Calendar size={15} style={{ color: course.accent }} />
                      <span>{course.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-900 text-base font-bold">
                      <IndianRupee size={15} style={{ color: course.accent }} />
                      <span>{course.fee}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-6 flex-1">
                    {course.highlights.map((h, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: course.accent }} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    className="group/btn w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-all duration-300 mt-auto hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                    style={{ backgroundColor: course.accent }}
                  >
                    Enquire Now
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom link */}
        <div className={`text-center mt-12 transition-all duration-700 ${gridVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '500ms' }}>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
            style={{ color: BRAND, fontFamily: "'Inter', sans-serif" }}
          >
            Can't find your course? Talk to our counsellors <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
