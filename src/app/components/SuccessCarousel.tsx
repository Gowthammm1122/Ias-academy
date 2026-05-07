import { ImageWithFallback } from './ImageWithFallback';
import { Quote, Star } from 'lucide-react';

export function SuccessCarousel() {
  const testimonials = [
    {
      url: 'https://images.unsplash.com/photo-1628887590815-2860da1c2900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      name: 'Priya Sharma',
      rank: 'AIR 28, IAS',
      quote: 'Dr. Annamalai IAS Academy provided me with the perfect guidance and study material. The faculty\'s dedication and personalized attention helped me achieve my dream.'
    },
    {
      url: 'https://images.unsplash.com/photo-1628887590437-940b8e74e43a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      name: 'Aisha Khan',
      rank: 'AIR 67, IAS',
      quote: 'The comprehensive test series and regular feedback sessions were instrumental in my success. I highly recommend this academy to all UPSC aspirants.'
    },
    {
      url: 'https://images.unsplash.com/photo-1773921403832-aaeba299e510?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      name: 'Rahul Desai',
      rank: 'AIR 42, IPS',
      quote: 'The mock interviews and personality development sessions prepared me thoroughly for the final stage. Thank you for making my dream come true!'
    },
    {
      url: 'https://images.unsplash.com/photo-1591655694472-cc751117d95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      name: 'Meera Krishnan',
      rank: 'AIR 89, IFS',
      quote: 'The study environment and peer learning at this academy are exceptional. The faculty goes beyond the syllabus to ensure conceptual clarity.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #6269C9, transparent)' }}></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #6269C9, transparent)' }}></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="#6269C9" style={{ color: '#6269C9' }} />
              ))}
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our successful candidates who turned their dreams into reality
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <div className="h-72 overflow-hidden">
                  <ImageWithFallback
                    src={testimonial.url}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 right-4 rounded-full p-3 shadow-lg" style={{ backgroundColor: '#6269C9' }}>
                  <Quote className="text-white" size={24} />
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#6269C9" style={{ color: '#6269C9' }} />
                  ))}
                </div>

                <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="border-t pt-4" style={{ borderColor: 'rgba(98, 105, 201, 0.2)' }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{testimonial.name}</h3>
                  <div className="inline-block px-4 py-1 rounded-full text-white text-sm font-semibold" style={{ backgroundColor: '#6269C9' }}>
                    {testimonial.rank}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">Join hundreds of successful candidates who achieved their dreams with us</p>
          <button className="text-white px-8 py-3 rounded-lg font-bold text-lg transition hover:opacity-90 shadow-lg" style={{ backgroundColor: '#6269C9' }}>
            View All Success Stories
          </button>
        </div>
      </div>
    </section>
  );
}
