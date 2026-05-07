import { GraduationCap } from 'lucide-react';

export function Faculty() {
  const facultyMembers = [
    {
      name: 'Dr. P. Annamalai',
      role: 'Founder & Director',
      qualification: 'IAS (Retd.), Ph.D. in Public Administration',
      experience: '35+ years'
    },
    {
      name: 'Mrs. Kavitha Suresh',
      role: 'Senior Faculty - History',
      qualification: 'M.A., Ph.D. in Indian History',
      experience: '20+ years'
    },
    {
      name: 'Mr. Rajkumar Singh',
      role: 'Senior Faculty - Geography',
      qualification: 'IFS (Retd.), M.Sc. Geography',
      experience: '25+ years'
    },
    {
      name: 'Dr. Meena Krishnan',
      role: 'Faculty - Polity & Governance',
      qualification: 'IPS (Retd.), LL.M.',
      experience: '22+ years'
    },
    {
      name: 'Prof. Sundar Rajan',
      role: 'Faculty - Economics',
      qualification: 'Ph.D. in Economics',
      experience: '18+ years'
    },
    {
      name: 'Mrs. Priya Sharma',
      role: 'Faculty - Ethics & Essay',
      qualification: 'IAS Officer, M.A. Philosophy',
      experience: '15+ years'
    }
  ];

  return (
    <section id="faculty" className="py-16 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Esteemed Faculty</h2>
          <p className="text-xl text-gray-600">Learn from the best in the field</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((faculty, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#6269C9' }}>
                  <GraduationCap size={48} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{faculty.name}</h3>
                <p className="font-semibold mb-2" style={{ color: '#6269C9' }}>{faculty.role}</p>
                <p className="text-sm text-gray-600 mb-2">{faculty.qualification}</p>
                <p className="text-sm text-gray-500">{faculty.experience} of teaching experience</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
