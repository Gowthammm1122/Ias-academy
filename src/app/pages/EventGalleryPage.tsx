import { useState } from 'react';
import { X, Camera, Trophy, Users, BookOpen, Mic, Award, Star } from 'lucide-react';

const BRAND = '#6269C9';

type GalleryItem = {
  id: number;
  title: string;
  category: string;
  description: string;
  color: string;
  icon: React.ElementType;
};

const categories = ['All', 'Results & Toppers', 'Events & Workshops', 'Campus Life', 'Felicitations', 'Seminars'];

const galleryItems: GalleryItem[] = [
  { id: 1, title: 'UPSC CSE 2025 Results Celebration', category: 'Results & Toppers', description: 'Our proud toppers from UPSC CSE 2025 batch celebrating their success at the academy.', color: '#6269C9', icon: Trophy },
  { id: 2, title: 'TNPSC Group I Topper Felicitation', category: 'Felicitations', description: 'Felicitation ceremony for TNPSC Group I toppers by the Director Dr. P. Annamalai.', color: '#e67e22', icon: Award },
  { id: 3, title: 'Free UPSC Workshop – March 2026', category: 'Events & Workshops', description: 'Over 500 students attended our free UPSC strategy workshop with expert IAS mentors.', color: '#5159b8', icon: Mic },
  { id: 4, title: 'Annual Day Celebrations 2025', category: 'Campus Life', description: 'Students, faculty, and alumni gather for the grand Annual Day celebration at our campus.', color: '#27ae60', icon: Star },
  { id: 5, title: 'Tamil Nadu Topper Felicitation 2025', category: 'Felicitations', description: "State-level honours for our student who topped Tamil Nadu's TNPSC Group II examination.", color: '#8e44ad', icon: Award },
  { id: 6, title: 'Mock Interview Session – Feb 2026', category: 'Events & Workshops', description: 'Panel mock interviews conducted by former IAS and IPS officers for final-stage aspirants.', color: '#c0392b', icon: Users },
  { id: 7, title: 'Orientation Day – New Batch', category: 'Campus Life', description: 'Welcome session for the new batch of 200+ UPSC aspirants joining the academy.', color: '#2980b9', icon: BookOpen },
  { id: 8, title: 'IAS Achievers Alumni Meet', category: 'Events & Workshops', description: 'Distinguished alumni who are now serving IAS, IPS, IFS officers reunite at the academy.', color: '#16a085', icon: Users },
  { id: 9, title: 'Photography Day – Campus Tour', category: 'Campus Life', description: 'Behind the scenes: A glimpse into our world-class study infrastructure and library.', color: '#d35400', icon: Camera },
  { id: 10, title: 'UPSC Prelims Success Banner 2024', category: 'Results & Toppers', description: '142 students from our academy cleared UPSC Prelims 2024 — a new academy record!', color: '#6269C9', icon: Trophy },
  { id: 11, title: 'Expert Seminar – Indian Economy', category: 'Seminars', description: 'Dr. Rajkumar Singh delivered an insightful seminar on Indian economic policies & GS3.', color: '#1abc9c', icon: Mic },
  { id: 12, title: 'Constitution Day Seminar 2025', category: 'Seminars', description: 'Faculty and students discuss constitutional amendments and their relevance to UPSC GS2.', color: '#8e44ad', icon: BookOpen },
];

export function EventGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">

      {/* Hero Banner */}
      <div className="text-white py-20 relative overflow-hidden" style={{ background: `linear-gradient(135deg, #4048a0 0%, ${BRAND} 60%, #7a81d9 100%)` }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <p className="text-sm uppercase tracking-widest font-semibold text-white/70 mb-3">Memories & Milestones</p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-5 tracking-tight">Event Gallery</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
            Explore our most memorable moments — from topper celebrations to seminars, workshops, and campus life.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <section className="py-10 bg-white sticky top-[72px] z-40 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                style={{
                  backgroundColor: selectedCategory === cat ? BRAND : 'rgba(98,105,201,0.08)',
                  color: selectedCategory === cat ? '#fff' : BRAND,
                  transform: selectedCategory === cat ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(item => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                  onClick={() => setLightbox(item)}
                >
                  {/* Placeholder image area with colored gradient */}
                  <div
                    className="h-48 flex flex-col items-center justify-center relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${item.color}dd, ${item.color}88)` }}
                  >
                    <Icon size={52} className="text-white opacity-80 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-xs font-bold uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full">
                        View Details
                      </span>
                    </div>
                  </div>
                  {/* Card Info */}
                  <div className="p-5">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-white mb-3 inline-block" style={{ backgroundColor: item.color }}>
                      {item.category}
                    </span>
                    <h3 className="font-bold text-gray-900 text-base leading-snug">{item.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <Camera size={48} className="mx-auto mb-4 opacity-40" />
              <p className="text-lg font-semibold">No events in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="h-56 flex items-center justify-center relative" style={{ background: `linear-gradient(135deg, ${lightbox.color}dd, ${lightbox.color}88)` }}>
              {(() => { const Icon = lightbox.icon; return <Icon size={72} className="text-white opacity-90" />; })()}
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-7">
              <span className="text-xs font-bold px-3 py-1 rounded-full text-white mb-4 inline-block" style={{ backgroundColor: lightbox.color }}>
                {lightbox.category}
              </span>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3 leading-tight">{lightbox.title}</h2>
              <p className="text-gray-600 leading-relaxed">{lightbox.description}</p>
              <button
                onClick={() => setLightbox(null)}
                className="mt-6 w-full py-3 rounded-xl text-white font-semibold hover:opacity-90 transition"
                style={{ backgroundColor: BRAND }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 text-white" style={{ background: `linear-gradient(135deg, #4048a0, ${BRAND})` }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-4">Want to Be Part of Our Success Story?</h2>
          <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">Join thousands of students who have transformed their lives at Dr. P. Annamalai IAS Academy.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="px-8 py-3 bg-white font-bold rounded-lg hover:opacity-90 transition text-base" style={{ color: BRAND }}>Enrol Now</a>
            <a href="/about" className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition text-base">About the Academy</a>
          </div>
        </div>
      </section>
    </div>
  );
}
