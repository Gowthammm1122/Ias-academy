import { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ImageWithFallback } from './ImageWithFallback';

const BRAND = '#6269C9';

const testimonials = [
  {
    url: 'https://images.unsplash.com/photo-1628887590815-2860da1c2900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    name: 'Priya Sharma',
    rank: 'AIR 28',
    service: 'IAS',
    year: '2025',
    quote: 'Dr. Annamalai IAS Academy gave me more than just coaching — it gave me a roadmap. The faculty\'s dedication, personalised attention, and constant motivation helped me achieve what I once thought was impossible.',
  },
  {
    url: 'https://images.unsplash.com/photo-1628887590437-940b8e74e43a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    name: 'Aisha Khan',
    rank: 'AIR 67',
    service: 'IAS',
    year: '2025',
    quote: 'The comprehensive test series and daily feedback sessions were the real game-changers for me. I went from struggling with mains to writing 200-word answers confidently. Highly recommend this academy.',
  },
  {
    url: 'https://images.unsplash.com/photo-1773921403832-aaeba299e510?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    name: 'Rahul Desai',
    rank: 'AIR 42',
    service: 'IPS',
    year: '2025',
    quote: 'The mock interviews conducted by former IAS board members were invaluable. They prepared me for the real thing in every sense. Thank you for making my dream of serving the country come true.',
  },
  {
    url: 'https://images.unsplash.com/photo-1591655694472-cc751117d95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    name: 'Meera Krishnan',
    rank: 'AIR 89',
    service: 'IFS',
    year: '2024',
    quote: 'The study environment and peer learning culture here are exceptional. The faculty goes beyond the syllabus to build genuine understanding. Best decision I ever made for my UPSC preparation.',
  },
];

export function SuccessCarousel() {
  const [current, setCurrent] = useState(0);
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={22} fill={BRAND} style={{ color: BRAND }} />)}
          </div>
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: BRAND }}>Voices of Success</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4" >
            Student Testimonials
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ backgroundColor: BRAND }} />
        </div>

        {/* Testimonial Showcase */}
        <div
          ref={sectionRef}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]" key={current} style={{ transition: 'opacity 0.4s ease' }}>
                <ImageWithFallback
                  src={t.url}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
                {/* Overlay badge */}
                <div
                  className="absolute bottom-6 left-6 text-white px-5 py-3 rounded-xl shadow-lg backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(98,105,201,0.9)' }}
                >
                  <p className="font-extrabold text-xl" >{t.rank}</p>
                  <p className="text-white/85 text-xs font-semibold" >UPSC CSE {t.year} · {t.service}</p>
                </div>
              </div>

              {/* Decorative blob */}
              <div
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-20 -z-10"
                style={{ backgroundColor: BRAND }}
              />
            </div>

            {/* Quote */}
            <div>
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7 shadow-md"
                style={{ backgroundColor: BRAND }}
              >
                <Quote size={28} className="text-white" />
              </div>

              <blockquote
                className="text-gray-700 text-xl leading-relaxed mb-8 italic font-medium"
                
                key={`q-${current}`}
              >
                "{t.quote}"
              </blockquote>

              <div className="mb-8">
                <p className="text-gray-900 text-xl font-bold" >{t.name}</p>
                <p className="text-gray-500 text-sm mt-1" >
                  {t.service} Officer · UPSC CSE {t.year}
                </p>
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={BRAND} style={{ color: BRAND }} />)}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prev}
                  className="w-11 h-11 rounded-full border-2 flex items-center justify-center hover:text-white hover:border-transparent transition-all duration-300"
                  style={{ borderColor: BRAND, color: BRAND }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = BRAND; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = BRAND; }}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  className="w-11 h-11 rounded-full border-2 flex items-center justify-center hover:text-white transition-all duration-300"
                  style={{ borderColor: BRAND, color: BRAND }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = BRAND; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = BRAND; }}
                >
                  <ChevronRight size={20} />
                </button>

                {/* Dots */}
                <div className="flex gap-2 ml-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: i === current ? '24px' : '8px',
                        height: '8px',
                        backgroundColor: i === current ? BRAND : '#d1d5db',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
