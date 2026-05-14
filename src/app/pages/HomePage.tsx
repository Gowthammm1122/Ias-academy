import { Hero } from '../components/Hero';
import { AnnouncementTicker } from '../components/AnnouncementTicker';
import { AboutSection } from '../components/AboutSection';
import { Features } from '../components/Features';
import { StudentCarousel } from '../components/StudentCarousel';
import { Courses } from '../components/Courses';
import { Faculty } from '../components/Faculty';
import { SuccessCarousel } from '../components/SuccessCarousel';
import { Results } from '../components/Results';
import { GalleryCarousel } from '../components/GalleryCarousel';

export function HomePage() {
  return (
    <>
     <AnnouncementTicker />
    
      {/* Full-screen hero with parallax & typing animation */}
      <Hero />

      {/* Why Choose Us — staggered card reveal */}
      <Features />

      {/* Campus life slider */}
      <StudentCarousel />

      {/* Courses — lift cards on scroll */}
      <Courses />

      {/* Faculty — staggered avatar cards */}
      <Faculty />

      {/* Testimonials — manual carousel */}
      <SuccessCarousel />

      {/* Results — animated count-up stats */}
      <Results />

    </>
  );
}
