import { Courses } from '../components/Courses';
import { useEffect } from 'react';

export function CoursesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-10 min-h-screen">
      <Courses />
    </div>
  );
}
