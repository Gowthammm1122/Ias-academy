import { useEffect, useState } from 'react';
import { Award, TrendingUp, Users, BookOpen, ChevronDown } from 'lucide-react';
import { Link } from 'react-router';

const BRAND = '#6269C9';

const TYPING_WORDS = [
  'IAS Officers',
  'IPS Officers',
  'IFS Officers',
  'TNPSC Toppers',
  'Civil Servants',
];

function TypingText() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const word = TYPING_WORDS[wordIdx];
    if (paused) {
      const t = setTimeout(() => { setDeleting(true); setPaused(false); }, 1800);
      return () => clearTimeout(t);
    }
    if (!deleting) {
      if (displayed.length < word.length) {
        const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 75);
        return () => clearTimeout(t);
      } else {
        setPaused(true);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % TYPING_WORDS.length);
      }
    }
  }, [displayed, deleting, paused, wordIdx]);

  return (
    <span className="inline-block" style={{ color: '#fbbf24', minWidth: '220px' }}>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

const stats = [
  { icon: Award, value: '500+', label: 'Total Selections' },
  { icon: TrendingUp, value: '95%', label: 'Success Rate' },
  { icon: Users, value: '50+', label: 'Expert Faculty' },
  { icon: BookOpen, value: '25+', label: 'Years of Excellence' },
];

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1757390026877-5a5d8d0149f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920)',
          transform: `translateY(${scrollY * 0.4}px)`,
          willChange: 'transform',
        }}
      />
      {/* Multi-layer gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(40,48,160,0.88) 0%, rgba(98,105,201,0.75) 50%, rgba(40,48,160,0.88) 100%)',
        }}
      />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      {/* Animated dot-grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 w-full">
        {/* Badge */}
        <div
          className={`flex justify-center mb-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          style={{ transitionDelay: '100ms' }}
        >
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-semibold border border-white/30 backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Tamil Nadu's Most Trusted IAS Coaching — Since 2001
          </span>
        </div>

        {/* Headline */}
        <div
          className={`text-center mb-4 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <h1
            className="text-white font-extrabold leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)',
              textShadow: '0 2px 20px rgba(0,0,0,0.3)',
            }}
          >
            Dr. P. Annamalai IAS Academy
          </h1>
        </div>

        {/* Tagline with typing */}
        <div
          className={`text-center mb-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '350ms', fontFamily: "'Inter', sans-serif" }}
        >
          <p className="text-xl md:text-2xl text-white/90 font-medium">
            We Shape India's Next Generation of{' '}
            <TypingText />
          </p>
        </div>

        {/* Sub-tagline */}
        <div
          className={`text-center mb-10 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '500ms', fontFamily: "'Inter', sans-serif" }}
        >
          <p className="text-white/75 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Expert coaching for UPSC, TNPSC, and all Civil Services examinations.
            Personalised mentoring · Updated study materials · Proven results.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '650ms', fontFamily: "'Inter', sans-serif" }}
        >
          <Link
            to="/contact"
            className="group relative overflow-hidden px-8 py-3.5 rounded-xl font-bold text-base text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
            style={{ backgroundColor: '#fbbf24', color: '#1e1b4b' }}
          >
            <span className="relative z-10">Enrol Now — Free Counselling</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </Link>
          <Link
            to="/resources"
            className="group px-8 py-3.5 rounded-xl font-bold text-base text-white border-2 border-white/60 hover:border-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Explore Free Resources
          </Link>
        </div>

        {/* Stats Bar */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '800ms' }}
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="group relative rounded-2xl p-5 text-center border border-white/20 backdrop-blur-sm hover:border-white/50 hover:bg-white/15 transition-all duration-300 cursor-default"
                style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
              >
                <div className="w-10 h-10 mx-auto mb-2 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                  <Icon size={20} className="text-white" />
                </div>
                <div
                  className="text-3xl font-extrabold text-white mb-0.5"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.value}
                </div>
                <p className="text-white/75 text-xs font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/60 text-xs">
        <span style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.1em' }}>SCROLL</span>
        <ChevronDown size={18} className="animate-bounce" />
      </div>
    </section>
  );
}
