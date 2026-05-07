import { Award, Users, FileText, Target } from 'lucide-react';

export function EventGallery() {
  const events = [
    {
      title: 'TNPSC Scholarship Test',
      description: 'Register for our exclusive scholarship test and get financial assistance for your TNPSC preparation journey',
      icon: Award,
      gradient: 'from-blue-500 to-blue-700',
      details: ['Free Registration', 'get 50% to 80% off', 'Merit-based Scholarships'],
      cta: 'Register Now'
    },
    {
      title: 'Attend Free Workshop - TNPSC',
      description: 'Join our free workshop to understand TNPSC exam pattern, syllabus, and effective preparation strategies',
      icon: Users,
      gradient: 'from-purple-500 to-purple-700',
      details: ['Expert Guidance', 'Study Materials', 'Q&A Session'],
      cta: 'Book Your Seat'
    },
    {
      title: 'Attend Free Workshop - UPSC',
      description: 'Comprehensive workshop covering UPSC CSE preparation tips, answer writing, and interview guidance',
      icon: FileText,
      gradient: 'from-orange-500 to-orange-700',
      details: ['IAS Officers as Mentors', 'Free Resources', 'Career Counseling'],
      cta: 'Register Free'
    },
    {
      title: 'Attend Our Test Series',
      description: 'Practice with our comprehensive test series designed to simulate actual exam conditions and improve performance',
      icon: Target,
      gradient: 'from-red-500 to-red-700',
      details: ['100+ Mock Tests', 'Detailed Analysis', 'All India Ranking'],
      cta: 'Start Testing'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
                <div className={`bg-gradient-to-r ${event.gradient} p-8 text-white`}>
                  <Icon size={48} className="mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <ul className="space-y-2 mb-6">
                    {event.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#6269C9' }}></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="w-full text-white py-3 rounded-lg font-bold transition hover:opacity-90"
                    style={{ backgroundColor: '#6269C9' }}
                  >
                    {event.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
