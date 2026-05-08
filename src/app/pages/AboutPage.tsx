import { Target, Eye, Award, GraduationCap, CheckCircle, Star, Users, BookOpen, Trophy } from 'lucide-react';

const BRAND = '#6269C9';

export function AboutPage() {
  const milestones = [
    { year: '2001', event: 'Academy Founded by Dr. P. Annamalai' },
    { year: '2005', event: 'First batch produces 12 IAS/IPS Officers' },
    { year: '2010', event: 'Expanded to state-of-the-art campus in Chennai' },
    { year: '2015', event: 'Online learning platform launched' },
    { year: '2018', event: 'Crossed 500+ total civil service selections' },
    { year: '2022', event: 'TNPSC coaching centre of excellence recognition' },
    { year: '2024', event: 'Pioneered AI-assisted personalised mentoring' },
  ];

  const values = [
    { icon: Target, title: 'Our Mission', text: 'To empower aspiring civil servants with comprehensive knowledge, strategic guidance, and unwavering support to excel in UPSC, TNPSC, and all competitive examinations.' },
    { icon: Eye, title: 'Our Vision', text: "To be India's most trusted civil services institution — one that shapes future leaders who will transform the nation through ethical governance and public service." },
    { icon: Award, title: 'Our Values', text: 'Excellence, Integrity, Innovation, and a Student-Centric Approach form the cornerstone of our teaching methodology and institutional culture.' },
  ];

  const stats = [
    { label: 'Years of Excellence', value: '25+', icon: Star },
    { label: 'Total Selections', value: '500+', icon: Trophy },
    { label: 'Expert Faculty', value: '40+', icon: GraduationCap },
    { label: 'Students Enrolled', value: '10,000+', icon: Users },
    { label: 'Study Materials', value: '300+', icon: BookOpen },
    { label: 'Mock Tests Conducted', value: '5,000+', icon: CheckCircle },
  ];

  const facultyMembers = [
    { name: 'Dr. P. Annamalai', role: 'Founder & Director', qualification: 'IAS (Retd.), Ph.D. in Public Administration', experience: '35+ years' },
    { name: 'Mrs. Kavitha Suresh', role: 'Senior Faculty – History', qualification: 'M.A., Ph.D. in Indian History', experience: '20+ years' },
    { name: 'Mr. Rajkumar Singh', role: 'Senior Faculty – Geography', qualification: 'IFS (Retd.), M.Sc. Geography', experience: '25+ years' },
    { name: 'Dr. Meena Krishnan', role: 'Faculty – Polity & Governance', qualification: 'IPS (Retd.), LL.M.', experience: '22+ years' },
    { name: 'Prof. Sundar Rajan', role: 'Faculty – Economics', qualification: 'Ph.D. in Economics', experience: '18+ years' },
    { name: 'Mrs. Priya Sharma', role: 'Faculty – Ethics & Essay', qualification: 'IAS Officer, M.A. Philosophy', experience: '15+ years' },
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Banner */}
      <div className="text-white py-20 relative overflow-hidden" style={{ background: `linear-gradient(135deg, #4048a0 0%, ${BRAND} 60%, #7a81d9 100%)` }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <p className="text-sm uppercase tracking-widest font-semibold text-white/70 mb-3">Our Story</p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-5 tracking-tight">About Us</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
            Over two decades of shaping India's finest civil servants with passion, purpose, and proven pedagogy.
          </p>
        </div>
      </div>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: BRAND }}>The Visionary Behind It All</p>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Dr. P. Annamalai<br />
                <span className="text-3xl font-bold" style={{ color: BRAND }}>IAS Academy</span>
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                Founded in 2001 by <strong>Dr. P. Annamalai</strong>, a distinguished IAS officer with over 35 years of administrative experience, our academy has been a beacon of excellence in civil services preparation across Tamil Nadu and beyond.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                With a proven track record of producing hundreds of successful candidates in UPSC, TNPSC, and other competitive examinations, we have established ourselves as one of the premier coaching institutes in India.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our comprehensive approach combines expert faculty who are themselves former civil servants, updated study materials, regular assessments, and personalised mentoring — ensuring every student has the best shot at achieving their dream of serving the nation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['UPSC Coaching', 'TNPSC Coaching', 'Interview Guidance', 'Test Series'].map(tag => (
                  <span key={tag} className="px-4 py-1.5 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: BRAND }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1" style={{ background: i % 2 === 0 ? 'rgba(98,105,201,0.06)' : '#fff' }}>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3" style={{ backgroundColor: 'rgba(98,105,201,0.12)' }}>
                      <Icon size={24} style={{ color: BRAND }} />
                    </div>
                    <div className="text-3xl font-extrabold mb-1" style={{ color: BRAND }}>{stat.value}</div>
                    <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: BRAND }}>What Drives Us</p>
            <h2 className="text-4xl font-extrabold text-gray-900">Mission, Vision &amp; Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-t-4" style={{ borderColor: BRAND }}>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5" style={{ backgroundColor: 'rgba(98,105,201,0.12)' }}>
                    <Icon size={30} style={{ color: BRAND }} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: BRAND }}>Our Journey</p>
            <h2 className="text-4xl font-extrabold text-gray-900">Milestones &amp; Achievements</h2>
          </div>
          <div className="relative">
            {/* Central line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gray-200"></div>
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={i} className={`relative flex items-center ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
                  <div className="flex-1 text-right">
                    {i % 2 === 0 && (
                      <div className="bg-white rounded-xl shadow-md p-5 inline-block text-left max-w-xs hover:shadow-lg transition">
                        <span className="block text-sm font-bold mb-1" style={{ color: BRAND }}>{m.year}</span>
                        <p className="text-gray-700 font-medium">{m.event}</p>
                      </div>
                    )}
                  </div>
                  {/* Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-white shadow-md z-10" style={{ backgroundColor: BRAND }}></div>
                  <div className="flex-1">
                    {i % 2 !== 0 && (
                      <div className="bg-white rounded-xl shadow-md p-5 inline-block max-w-xs hover:shadow-lg transition">
                        <span className="block text-sm font-bold mb-1" style={{ color: BRAND }}>{m.year}</span>
                        <p className="text-gray-700 font-medium">{m.event}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: BRAND }}>The Experts Behind Your Success</p>
            <h2 className="text-4xl font-extrabold text-gray-900">Our Esteemed Faculty</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-7 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ backgroundColor: BRAND }}>
                  <GraduationCap size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{faculty.name}</h3>
                <p className="font-semibold text-sm mb-2" style={{ color: BRAND }}>{faculty.role}</p>
                <p className="text-sm text-gray-500 mb-1">{faculty.qualification}</p>
                <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: BRAND }}>{faculty.experience}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 text-white" style={{ background: `linear-gradient(135deg, #4048a0, ${BRAND})` }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-4">Begin Your IAS Journey Today</h2>
          <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">Join thousands of students who have transformed their lives through dedicated preparation at Dr. P. Annamalai IAS Academy.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="px-8 py-3 bg-white font-bold rounded-lg hover:opacity-90 transition text-base" style={{ color: BRAND }}>Enquire Now</a>
            <a href="/resources" className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition text-base">Explore Resources</a>
          </div>
        </div>
      </section>
    </div>
  );
}
