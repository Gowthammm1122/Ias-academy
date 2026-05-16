import { Clock, Calendar, IndianRupee, ArrowRight, CheckCircle } from 'lucide-react';

const BRAND = '#6269C9';

const coursesData = [
  {
    title: 'TNPSC GROUP 2/2A PRELIMS ONLY',
    badge: 'Prelims Only',
    description: 'Comprehensive preparation for TNPSC Group 2/2A Preliminary Examination. Available Offline & Online.',
    duration: 'Contact Us',
    schedule: 'Flexible Batches',
    fee: 'View Online',
    highlights: ['Complete Syllabus', 'Offline/Online', 'Mock Tests', 'Current Affairs'],
    accent: BRAND,
    link: 'https://www.drpannamalaiiasacademy.com/wlp/course-quzwnf-1776892876075',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80' // Conceptual Study desk image
  },
  {
    title: 'TNPSC GROUP 1 PRELIMS ONLY',
    badge: 'Prelims Only',
    description: 'Targeted coaching for the TNPSC Group 1 Preliminary Examination. Available Offline & Online.',
    duration: 'Contact Us',
    schedule: 'Flexible Batches',
    fee: 'View Online',
    highlights: ['Group 1 Focus', 'Offline/Online', 'Expert Faculty', 'Test Series'],
    accent: BRAND,
    link: 'https://www.drpannamalaiiasacademy.com/wlp/course-quzwnf-1776892419556',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80' // Analytical planning image
  },
  {
    title: 'TNPSC GROUP 4',
    badge: 'Group 4',
    description: 'Complete guidance for Tamil Nadu Public Service Commission Group 4. Available Offline & Online.',
    duration: 'Contact Us',
    schedule: 'Flexible Batches',
    fee: 'View Online',
    highlights: ['Tamil syllabus focus', 'Offline/Online', 'State GK', 'Mock exams'],
    accent: BRAND,
    link: 'https://www.drpannamalaiiasacademy.com/wlp/course-quzwnf-1776800096108',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80' // Structured reading material image
  },
  {
    title: 'TNPSC GROUP 2/2A PCM',
    badge: 'Prelims Cum Mains',
    description: 'Integrated Prelims cum Mains (PCM) preparation for TNPSC Group 2/2A. Available Offline & Online.',
    duration: 'Contact Us',
    schedule: 'Flexible Batches',
    fee: 'View Online',
    highlights: ['PCM Strategy', 'Answer Writing', 'Offline/Online', 'Comprehensive'],
    accent: BRAND,
    link: 'https://www.drpannamalaiiasacademy.com/wlp/course-quzwnf-1776785628894',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80' // Advanced education image
  },
  {
    title: 'TNPSC GROUP 1',
    badge: 'Comprehensive',
    description: 'Complete integrated coaching for TNPSC Group 1 (Prelims + Mains). Available Offline & Online.',
    duration: 'Contact Us',
    schedule: 'Flexible Batches',
    fee: 'View Online',
    highlights: ['Mains Focus', 'Offline/Online', 'Interview Prep', 'Full Coverage'],
    accent: BRAND,
    link: 'https://www.drpannamalaiiasacademy.com/wlp/course-quzwnf-1776713377625',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80' // Official administration desk image
  }
];

export function CoursesPage() {
  return (
    <section id="courses" className="py-24 bg-slate-50 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header - Preserved Typography */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 text-indigo-600">Structured Programmes</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our Courses</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Specialised programmes designed to give you the edge at every stage of the civil services journey.
          </p>
        </div>

        {/* Clean Static Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-400 border border-slate-100 flex flex-col overflow-hidden"
            >
              {/* Card Image Block with Elegant Overlay Header */}
              <div className="relative h-56 bg-slate-100 overflow-hidden shrink-0">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Visual Soft Gradient Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/50 to-transparent" />
                
                {/* Premium Translucent Absolute Tag */}
                <span className="absolute top-4 right-4 text-[10px] font-extrabold uppercase bg-white/10 backdrop-blur-md text-white border border-white/20 px-3 py-1 rounded-full tracking-wide">
                  {course.badge}
                </span>

                {/* Left Absolute Title & Blurb Container inside Image bounds */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-bold leading-snug tracking-tight mb-1.5">
                    {course.title}
                  </h3>
                  <p className="text-white/75 text-[11px] leading-relaxed line-clamp-2 font-medium">
                    {course.description}
                  </p>
                </div>
              </div>

              {/* Card Technical Meta Information */}
              <div className="p-6 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <div className="grid grid-cols-2 gap-y-3 gap-x-2 border-b border-slate-100 pb-4 mb-5">
                    <div className="flex items-center gap-2 text-slate-600 text-xs">
                      <Clock size={14} style={{ color: course.accent }} className="opacity-80" />
                      <span className="font-semibold truncate">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 text-xs">
                      <Calendar size={14} style={{ color: course.accent }} className="opacity-80" />
                      <span className="font-semibold truncate">{course.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-900 text-xs font-bold col-span-2 mt-0.5">
                      <IndianRupee size={13} style={{ color: course.accent }} />
                      <span>{course.fee}</span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2.5 mb-8">
                    {course.highlights.map((highlight, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-xs font-semibold text-slate-600">
                        <CheckCircle size={14} style={{ color: course.accent }} className="shrink-0 opacity-90" />
                        <span className="truncate">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Link / CTA Action Button */}
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-bold text-xs transition-all tracking-wider uppercase shadow-md shadow-indigo-100/50 hover:opacity-95 active:scale-[0.99]"
                  style={{ backgroundColor: course.accent }}
                >
                  View Details / Enroll <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}