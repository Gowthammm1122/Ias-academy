import { Trophy } from 'lucide-react';

export function Results() {
  const toppers = [
    { name: 'Arun Kumar', rank: 'AIR 15', year: '2025', service: 'IAS' },
    { name: 'Priya Venkat', rank: 'AIR 28', year: '2025', service: 'IAS' },
    { name: 'Rajesh Mohan', rank: 'AIR 42', year: '2025', service: 'IPS' },
    { name: 'Deepika Rao', rank: 'AIR 67', year: '2024', service: 'IAS' },
    { name: 'Vikram Singh', rank: 'AIR 89', year: '2024', service: 'IFS' },
    { name: 'Lakshmi Devi', rank: 'AIR 103', year: '2024', service: 'IAS' }
  ];

  return (
    <section id="results" className="py-16 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Success Stories</h2>
          <p className="text-xl text-gray-600">Celebrating our toppers and their achievements</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {toppers.map((topper, index) => (
            <div key={index} className="text-white rounded-lg p-6 shadow-lg" style={{ background: 'linear-gradient(to bottom right, #6269C9, #5159b8)' }}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{topper.name}</h3>
                  <p className="text-white/90">{topper.service} - {topper.year}</p>
                </div>
                <Trophy className="text-yellow-300" size={32} />
              </div>
              <div className="text-3xl font-bold">{topper.rank}</div>
            </div>
          ))}
        </div>

        <div className="rounded-lg p-8 border-2" style={{ backgroundColor: 'rgba(98, 105, 201, 0.1)', borderColor: '#6269C9' }}>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: '#6269C9' }}>500+</div>
              <p className="text-gray-700">Total Selections</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: '#6269C9' }}>150+</div>
              <p className="text-gray-700">IAS/IPS Officers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: '#6269C9' }}>350+</div>
              <p className="text-gray-700">State Service Officers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
