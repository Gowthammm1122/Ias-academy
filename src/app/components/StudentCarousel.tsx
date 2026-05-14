import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ImageWithFallback } from './ImageWithFallback';
import { useScrollReveal } from '../hooks/useScrollReveal';

const BRAND = '#6269C9';

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  pauseOnHover: true,
  cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

const classroomImages = [
  { url: 'https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Interactive Classroom Sessions' },
  { url: 'https://images.unsplash.com/photo-1758270704384-9df36d94a29d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Focused Learning Environment' },
  { url: 'https://images.unsplash.com/photo-1758270704787-615782711641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Group Discussions & Collaboration' },
  { url: 'https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Collaborative Learning Sessions' },
  { url: 'https://images.unsplash.com/photo-1758270704021-361c165d68fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Expert Faculty Guidance' },
  { url: 'https://images.unsplash.com/photo-1758270704286-83476deb3bd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', caption: 'Active Student Participation' },
];

export function StudentCarousel() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="py-24 overflow-hidden" style={{ backgroundColor: '#f8f7ff' }}>
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: BRAND }}>The Campus Experience</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4" >
            Our Learning Environment
          </h2>
          <p className="text-gray-500 text-base" >
            State-of-the-art facilities, engaged students, and a culture of disciplined excellence.
          </p>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ backgroundColor: BRAND }} />
        </div>

        {/* Slider */}
        <div
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <Slider {...settings} className="student-carousel">
            {classroomImages.map((image, index) => (
              <div key={index} className="px-3">
                <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-400">
                  <div className="overflow-hidden">
                    <ImageWithFallback
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div
                    className="text-white p-4 text-center font-semibold text-sm"
                    style={{ backgroundColor: BRAND }}
                  >
                    {image.caption}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Slick dots override */}
      <style>{`
        .student-carousel .slick-dots li button:before {
          color: ${BRAND};
          font-size: 10px;
        }
        .student-carousel .slick-dots li.slick-active button:before {
          color: ${BRAND};
        }
      `}</style>
    </section>
  );
}
