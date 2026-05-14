import { useEffect, useState } from 'react';
import { Award, Users, BookOpen, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import Poster2 from '../../images/poster2.png'
import Poster1 from '../../images/poster1.png'
import Poster3 from '../../images/poster1.png'


const HERO_SLIDES = [
  {
    image: Poster1,
    title: "AIR 12 - UPSC 2024",
    subtitle: "Our student makes us proud again.",
    tag: "Success Story"
  },
  {
    image: Poster2,
    title: "New Batch Starts June 15",
    subtitle: "Limited seats for UPSC & TNPSC Prelims 2026.",
    tag: "Admissions Open"
  },
  {
    image: Poster3,
    title: "Free Mock Interview",
    subtitle: "Guided by Retired IAS & IPS Officers.",
    tag: "Exclusive"
  }
];

const stats = [
  { icon: Award, value: '500+', label: 'IAS/IPS Selections' },
  { icon: Users, value: '25k+', label: 'Aspirants Trained' },
  { icon: Star, value: '23 Yrs', label: 'Legacy of Trust' },
  { icon: BookOpen, value: '100%', label: 'Updated Material' },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Optimized variants for a continuous sliding effect
  const slideVariants = {
    enter: {
      x: '100%', // Use percentages for cleaner responsiveness
      opacity: 0,
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: '-100%',
      opacity: 0,
    },
  };

  return (
    <section className="relative min-h-screen bg-slate-50 flex items-center pt-2 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-600 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-amber-400 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* ... existing text content ... */}
          <div className="inline-flex items-center text-indigo-800 text-xs font-bold tracking-widest mb-6">
            Top Ranked Academy in South India
          </div>

          <h1 className="text-slate-900 font-extrabold leading-[1.1] mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Empowering the <span className="text-indigo-600">Leaders</span> of Tomorrow’s India.
          </h1>

          <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
            Join Dr. P. Annamalai IAS Academy. We provide precision-targeted coaching for UPSC & TNPSC, led by expert faculty and retired civil servants.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              to="/contact"
              className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
            >
              Start Your Journey <ChevronRight size={18} />
            </Link>
            <Link
              to="/courses"
              className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-lg font-bold hover:bg-slate-50 transition-all"
            >
              View Courses
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-slate-200 pt-8">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Fixed Carousel */}
        <div className="relative flex justify-center items-center w-full">
          <div 
            className="relative overflow-hidden rounded-3xl shadow-2xl border-[8px] border-white bg-slate-200"
            style={{ 
              width: '100%', 
              maxWidth: '600px', 
              height: '774px' 
            }}
          >
            {/* mode="popLayout" is key to preventing the "white gap" */}
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                key={currentSlide}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 25 },
                  opacity: { duration: 0.3 }
                }}
                className="absolute inset-0 w-full h-full"
              >
                <img 
                  src={HERO_SLIDES[currentSlide].image} 
                  alt={HERO_SLIDES[currentSlide].title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-10 text-white w-full">
                  <span className="bg-amber-400 text-indigo-950 px-3 py-1 rounded text-xs font-black uppercase mb-4 inline-block">
                    {HERO_SLIDES[currentSlide].tag}
                  </span>
                  <h3 className="text-4xl font-bold mb-3 leading-tight">{HERO_SLIDES[currentSlide].title}</h3>
                  <p className="text-xl text-white/90">{HERO_SLIDES[currentSlide].subtitle}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Indicators */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 transition-all rounded-full ${currentSlide === i ? 'w-10 bg-indigo-600' : 'w-2 bg-slate-300'}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}