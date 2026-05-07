import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ImageWithFallback } from './ImageWithFallback';

export function StudentCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const classroomImages = [
    {
      url: 'https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      caption: 'Interactive classroom sessions'
    },
    {
      url: 'https://images.unsplash.com/photo-1758270704384-9df36d94a29d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      caption: 'Focused learning environment'
    },
    {
      url: 'https://images.unsplash.com/photo-1758270704787-615782711641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      caption: 'Group discussions and collaboration'
    },
    {
      url: 'https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      caption: 'Collaborative learning sessions'
    },
    {
      url: 'https://images.unsplash.com/photo-1758270704021-361c165d68fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      caption: 'Expert faculty guidance'
    },
    {
      url: 'https://images.unsplash.com/photo-1758270704286-83476deb3bd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      caption: 'Active student participation'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Learning Environment</h2>
          <p className="text-xl text-gray-600">State-of-the-art facilities and engaged students</p>
        </div>

        <Slider {...settings} className="student-carousel">
          {classroomImages.map((image, index) => (
            <div key={index} className="px-2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-64 object-cover"
                />
                <div className="text-white p-4 text-center" style={{ backgroundColor: '#6269C9' }}>
                  <p className="font-semibold">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
