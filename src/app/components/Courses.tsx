import { Clock, Calendar, IndianRupee } from 'lucide-react';

export function Courses() {
  const courses = [
    {
      title: 'UPSC Prelims',
      description: 'Comprehensive preparation for Civil Services Preliminary Examination',
      duration: '6 Months',
      schedule: 'Weekend & Weekday Batches',
      fee: '50,000',
      color: '#6269C9'
    },
    {
      title: 'UPSC Mains',
      description: 'In-depth coaching for Civil Services Main Examination',
      duration: '8 Months',
      schedule: 'Regular Batches',
      fee: '75,000',
      color: '#4e55a8'
    },
    {
      title: 'TNPSC Group I',
      description: 'Complete guidance for Tamil Nadu Public Service Commission exams',
      duration: '5 Months',
      schedule: 'Morning & Evening Batches',
      fee: '40,000',
      color: '#7078d4'
    },
    {
      title: 'Interview Guidance',
      description: 'Personality development and mock interview sessions',
      duration: '2 Months',
      schedule: 'Flexible Timing',
      fee: '25,000',
      color: '#8289dd'
    }
  ];

  return (
    <section id="courses" className="py-16 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <p className="text-xl text-gray-600">Specialized programs designed for your success</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="text-white p-6" style={{ backgroundColor: course.color }}>
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-sm text-white/90">{course.description}</p>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock size={18} />
                  <span className="text-sm">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar size={18} />
                  <span className="text-sm">{course.schedule}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 font-bold">
                  <IndianRupee size={18} />
                  <span>{course.fee}</span>
                </div>
                <button className="w-full text-white py-2 rounded transition mt-4 hover:opacity-90" style={{ backgroundColor: '#6269C9' }}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
