import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ImageWithFallback } from './ImageWithFallback';

export function GalleryCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const galleryImages = [
    'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1758270704080-e3556e6794a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1758270703662-b7d58bf0a8a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1544456203-0af5a69f5789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1773921404238-df0227d74be9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1760348082270-3a46a3512850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Campus Gallery</h2>
          <p className="text-xl text-gray-600">Glimpses of our vibrant academic community</p>
        </div>

        <Slider {...settings}>
          {galleryImages.map((image, index) => (
            <div key={index} className="px-2">
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                <ImageWithFallback
                  src={image}
                  alt={`Campus life ${index + 1}`}
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
