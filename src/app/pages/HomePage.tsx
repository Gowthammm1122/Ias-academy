import { Hero } from '../components/Hero';
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
      <Hero />
      <AboutSection />
      <Features />
      <StudentCarousel />
      <Courses />
      <Faculty />
      <SuccessCarousel />
      <Results />
      <GalleryCarousel />
    </>
  );
}
