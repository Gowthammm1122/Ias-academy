import { EventGallery } from '../components/EventGallery';

export function EventGalleryPage() {
  return (
    <div className="min-h-screen">
      <div className="text-white py-16" style={{ background: 'linear-gradient(to right, #5159b8, #6269C9, #5159b8)' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Event Gallery</h1>
          <p className="text-xl text-white/90">Explore our memorable moments and celebrations</p>
        </div>
      </div>
      <EventGallery />
    </div>
  );
}
