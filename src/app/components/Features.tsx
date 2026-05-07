import { BookOpen, Users, Video, FileText, Award, Clock } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Study Material',
      description: 'Updated and well-researched materials covering entire syllabus'
    },
    {
      icon: Users,
      title: 'Experienced Faculty',
      description: 'Learn from former civil servants and subject matter experts'
    },
    {
      icon: Video,
      title: 'Online & Offline Classes',
      description: 'Flexible learning options to suit your schedule'
    },
    {
      icon: FileText,
      title: 'Regular Test Series',
      description: 'Weekly tests and comprehensive mock examinations'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Hundreds of successful candidates every year'
    },
    {
      icon: Clock,
      title: 'Current Affairs Updates',
      description: 'Daily current affairs classes and monthly magazines'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-600">Features that make us stand out</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg transition group hover:bg-blue-50">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 group-hover:text-white transition" style={{ backgroundColor: 'rgba(98, 105, 201, 0.1)' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#6269C9'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(98, 105, 201, 0.1)'; }}>
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
