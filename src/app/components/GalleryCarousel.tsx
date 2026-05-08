import React from 'react';
import Slider, { Settings } from 'react-slick'; // Added Settings type
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ImageWithFallback } from './ImageWithFallback';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

const BRAND = '#6269C9';

// Explicitly typing the settings object
const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2200,
  cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  pauseOnHover: true,
  arrows: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2, arrows: false } },
    { breakpoint: 480, settings: { slidesToShow: 1, arrows: false } },
  ],
};

// Interface for your image objects
interface GalleryImage {
  url: string;
  label: string;
}

const galleryImages: GalleryImage[] = [
  { url: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=800', label: 'Classroom Session' },
  { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800', label: 'Group Discussion' },
  // ... rest of your images
];

export function GalleryCarousel() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="py-24 bg-white overflow-hidden">
      <style>{`
        .slick-prev:before, .slick-next:before {
          color: ${BRAND} !important;
          font-size: 24px;
        }
        .slick-prev { left: -30px; z-index: 10; }
        .slick-next { right: -30px; z-index: 10; }
        @media (max-width: 1280px) {
          .slick-prev { left: 10px; }
          .slick-next { right: 10px; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-8">
        <div
          ref={ref as React.RefObject<HTMLDivElement>} // Explicitly cast ref for TS
          className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          
        </div>

        <div
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <Slider {...settings}>
            {galleryImages.map((img, index) => (
              <div key={index} className="px-2 outline-none">
                <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 bg-gray-100">
                  <ImageWithFallback src="{img.url}" alt="{img.label}" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"/>
                  <div
                    className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(to top, rgba(98,105,201,0.95) 0%, transparent 70%)' }}
                  >
                    <span className="text-white text-sm font-semibold px-4 pb-4 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {img.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        
      </div>
    </section>
  );
}