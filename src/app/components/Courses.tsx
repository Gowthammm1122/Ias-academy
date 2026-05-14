import { useState, useEffect } from 'react';
import { Clock, Calendar, IndianRupee, ArrowRight, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

const BRAND = '#6269C9';

const courses = [
  {
    title: 'TNPSC GROUP 2/2A PRELIMS ONLY',
    badge: 'Prelims Only',
    description: 'Comprehensive preparation for TNPSC Group 2/2A Preliminary Examination. Available Offline & Online.',
    duration: 'Contact Us',
    schedule: 'Flexible Batches',
    fee: 'View Online',
    highlights: ['Complete Syllabus', 'Offline/Online', 'Mock Tests', 'Current Affairs'],
    accent: '#6269C9',
    link: 'https://www.drpannamalaiiasacademy.com/wlp/course-quzwnf-1776892876075'
  },
  {
    title: 'TNPSC GROUP 1 PRELIMS ONLY',
    badge: 'Prelims Only',
    description: 'Targeted coaching for the TNPSC Group 1 Preliminary Examination. Available Offline & Online.',
    duration: 'Contact Us',
    schedule: 'Flexible Batches',
    fee: 'View Online',
    highlights: ['Group 1 Focus', 'Offline/Online', 'Expert Faculty', 'Test Series'],
    accent: '#6269C9',
    link: 'https://www.drpannamalaiiasacademy.com/wlp/course-quzwnf-1776892419556'
  },
  {
    title: 'TNPSC GROUP 4',
    badge: 'Group 4',
    description: 'Complete guidance for Tamil Nadu Public Service Commission Group 4. Available Offline & Online.',
    duration: 'Contact Us',
    schedule: 'Flexible Batches',
    fee: 'View Online',
    highlights: ['Tamil syllabus focus', 'Offline/Online', 'State GK', 'Mock exams'],
    accent: '#6269C9',
    link: 'https://www.drpannamalaiiasacademy.com/wlp/course-quzwnf-1776800096108'
  },
  {
    title: 'TNPSC GROUP 2/2A PCM',
    badge: 'Prelims Cum Mains',
    description: 'Integrated Prelims cum Mains (PCM) preparation for TNPSC Group 2/2A. Available Offline & Online.',
    duration: 'Contact Us',
    schedule: 'Flexible Batches',
    fee: 'View Online',
    highlights: ['PCM Strategy', 'Answer Writing', 'Offline/Online', 'Comprehensive'],
    accent: '#6269C9',
    link: 'https://www.drpannamalaiiasacademy.com/wlp/course-quzwnf-1776785628894'
  },
  {
    title: 'TNPSC GROUP 1',
    badge: 'Comprehensive',
    description: 'Complete integrated coaching for TNPSC Group 1 (Prelims + Mains). Available Offline & Online.',
    duration: 'Contact Us',
    schedule: 'Flexible Batches',
    fee: 'View Online',
    highlights: ['Mains Focus', 'Offline/Online', 'Interview Prep', 'Full Coverage'],
    accent: '#6269C9',
    link: 'https://www.drpannamalaiiasacademy.com/wlp/course-quzwnf-1776713377625'
  }
];

export function Courses() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 > courses.length - cardsToShow ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? courses.length - cardsToShow : prev - 1));
  };

  return (
    <section id="courses" className="py-24 bg-slate-50 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header - Consistent with image_a375da.png */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 text-indigo-600">Structured Programmes</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our Courses</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Specialised programmes designed to give you the edge at every stage of the civil services journey.
          </p>
        </div>

        {/* Slider Controls & Viewport */}
        <div className="relative group">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-slate-800 hover:bg-indigo-600 hover:text-white transition-all opacity-0 group-hover:opacity-100 border border-slate-100"
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-slate-800 hover:bg-indigo-600 hover:text-white transition-all opacity-0 group-hover:opacity-100 border border-slate-100"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards Viewport */}
          <div className="overflow-hidden py-4 px-2">
            <motion.div 
              className="flex gap-6"
              animate={{ x: `calc(-${currentIndex * (100 / cardsToShow)}% - ${currentIndex * (24 / cardsToShow)}px)` }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              {courses.map((course, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `calc((100% / ${cardsToShow}) - ${(24 * (cardsToShow - 1)) / cardsToShow}px)` }}
                >
                  <div className="h-full bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col overflow-hidden">
                    {/* Header: Solid Color consistent with the requested style */}
                    <div className="p-8 text-white relative" style={{ backgroundColor: course.accent }}>
                      <span className="absolute top-4 right-6 text-[10px] font-black uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                        {course.badge}
                      </span>
                      <h3 className="text-xl font-bold mb-3 mt-4 leading-snug min-h-[56px] flex items-center">
                        {course.title}
                      </h3>
                      <p className="text-white/80 text-xs leading-relaxed line-clamp-2">
                        {course.description}
                      </p>
                    </div>

                    {/* Body */}
                    <div className="p-8 flex flex-col flex-1 bg-white">
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3 text-slate-600 text-sm">
                          <Clock size={16} style={{ color: course.accent }} />
                          <span className="font-semibold">{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600 text-sm">
                          <Calendar size={16} style={{ color: course.accent }} />
                          <span className="font-semibold">{course.schedule}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-900 text-base font-bold">
                          <IndianRupee size={16} style={{ color: course.accent }} />
                          <span>{course.fee}</span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-10 flex-1">
                        {course.highlights.map((h, j) => (
                          <li key={j} className="flex items-center gap-3 text-xs font-medium text-slate-600">
                            <CheckCircle size={14} style={{ color: course.accent }} />
                            {h}
                          </li>
                        ))}
                      </ul>

                      <a
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-white font-bold text-sm transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-indigo-100"
                        style={{ backgroundColor: course.accent }}
                      >
                        View Details / Enroll <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: courses.length - (cardsToShow - 1) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 transition-all rounded-full ${currentIndex === i ? 'w-8 bg-indigo-600' : 'w-2 bg-slate-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}