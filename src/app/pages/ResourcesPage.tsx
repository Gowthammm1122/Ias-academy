import { BookOpen, FileText, Video, Download, Newspaper, Clock, ChevronRight, PlayCircle, Archive } from 'lucide-react';

const BRAND = '#6269C9';

const categories = [
  {
    icon: BookOpen,
    label: 'UPSC Study Materials',
    color: '#6269C9',
    items: [
      'General Studies Paper I – History, Geography & Society',
      'General Studies Paper II – Polity, Governance & IR',
      'General Studies Paper III – Economy, Environment & Technology',
      'General Studies Paper IV – Ethics, Integrity & Aptitude',
      'CSAT – Comprehension & Analytical Ability',
      'Essay Writing Techniques & Sample Essays',
    ]
  },
  {
    icon: FileText,
    label: 'TNPSC Study Materials',
    color: '#5159b8',
    items: [
      'TNPSC Group I – Preliminary Syllabus Notes',
      'TNPSC Group I – Mains Answer Writing Guide',
      'TNPSC Group II & IIA – Complete Notes',
      'TNPSC Group IV – Tamil & English Medium',
      'Tamil Language & Literature Notes',
      'Aptitude & Mental Ability Shortcuts',
    ]
  },
  {
    icon: Newspaper,
    label: 'Current Affairs',
    color: '#7078d4',
    items: [
      'Monthly Current Affairs Digest (May 2026)',
      'Monthly Current Affairs Digest (April 2026)',
      'Weekly Current Affairs Compilation',
      'Daily News Analysis – PDF',
      'Government Schemes & Policies Tracker',
      'International Relations Summary',
    ]
  },
  {
    icon: Archive,
    label: 'Previous Year Papers',
    color: '#8289dd',
    items: [
      'UPSC CSE Prelims – Last 10 Years Papers',
      'UPSC CSE Mains – GS Papers 2015–2025',
      'TNPSC Group I Prelims & Mains Papers',
      'TNPSC Group II/IIA Question Papers',
      'Interview Transcripts – IAS Candidates',
      'CSAT Previous Year Papers with Solutions',
    ]
  },
];

const videos = [
  { title: 'Understanding Polity – Constitution Basics', duration: '42 min', topic: 'UPSC GS2' },
  { title: 'Indian History – Ancient Period Overview', duration: '55 min', topic: 'UPSC GS1' },
  { title: 'Economics Made Simple – GDP & Macro', duration: '38 min', topic: 'UPSC GS3' },
  { title: 'Ethics Case Studies – Solved Examples', duration: '50 min', topic: 'UPSC GS4' },
  { title: 'TNPSC Group I Mains Strategy', duration: '60 min', topic: 'TNPSC' },
  { title: 'Current Affairs – May 2026 Monthly Roundup', duration: '45 min', topic: 'Current Affairs' },
];

const downloads = [
  { name: 'UPSC CSE 2026 Syllabus – Official', type: 'PDF', size: '2.1 MB' },
  { name: 'TNPSC Group I 2026 Syllabus', type: 'PDF', size: '1.8 MB' },
  { name: 'Monthly Magazine – April 2026', type: 'PDF', size: '12 MB' },
  { name: 'Answer Writing Template Sheet', type: 'PDF', size: '0.9 MB' },
  { name: 'Polity Mind Maps Collection', type: 'PDF', size: '5.3 MB' },
  { name: 'Geography Maps & Diagrams', type: 'PDF', size: '8.7 MB' },
];

const freeResources = [
  { icon: Video, title: 'Free Demo Classes', desc: 'Watch 20+ free demo lectures from our top faculty covering all major subjects.' },
  { icon: FileText, title: 'Free Study Notes', desc: 'Download select chapter-wise notes absolutely free — no login required.' },
  { icon: Clock, title: 'Daily Current Affairs', desc: "Get yesterday's current affairs analysis delivered free every morning." },
  { icon: BookOpen, title: 'Free Mock Test', desc: 'Attempt one full-length free UPSC Prelims mock test to assess your level.' },
];

export function ResourcesPage() {
  return (
    <div className="min-h-screen">

      {/* Hero Banner */}
      <div className="text-white py-20 relative overflow-hidden" style={{ background: `linear-gradient(135deg, #4048a0 0%, ${BRAND} 60%, #7a81d9 100%)` }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <p className="text-sm uppercase tracking-widest font-semibold text-white/70 mb-3">Learning Resources</p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-5 tracking-tight">Resources</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
            Your one-stop hub for study materials, current affairs, video lectures, and previous year papers.
          </p>
        </div>
      </div>

      {/* Free Resources Banner */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: BRAND }}>Absolutely Free</p>
            <h2 className="text-4xl font-extrabold text-gray-900">Start Learning – No Cost</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {freeResources.map((r, i) => {
              const Icon = r.icon;
              return (
                <div key={i} className="group rounded-2xl p-7 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center cursor-pointer">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: 'rgba(98,105,201,0.12)' }}>
                    <Icon size={28} style={{ color: BRAND }} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{r.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
                  <button className="mt-5 inline-flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all" style={{ color: BRAND }}>
                    Access Free <ChevronRight size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Study Materials Grid */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: BRAND }}>Structured Knowledge</p>
            <h2 className="text-4xl font-extrabold text-gray-900">Study Materials</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 p-5 text-white" style={{ backgroundColor: cat.color }}>
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{cat.label}</h3>
                  </div>
                  <ul className="p-5 divide-y divide-gray-100">
                    {cat.items.map((item, j) => (
                      <li key={j} className="py-3 flex items-center justify-between group cursor-pointer hover:bg-gray-50 px-3 -mx-3 rounded-lg transition">
                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                        <ChevronRight size={16} className="text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                      </li>
                    ))}
                  </ul>
                  <div className="px-5 pb-5">
                    <button className="w-full py-3 rounded-xl text-white font-semibold hover:opacity-90 transition text-sm" style={{ backgroundColor: cat.color }}>
                      View All {cat.label}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Lectures */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: BRAND }}>On-Demand Learning</p>
            <h2 className="text-4xl font-extrabold text-gray-900">Video Lectures</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v, i) => (
              <div key={i} className="group bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ backgroundColor: BRAND }}>{v.topic}</span>
                  <span className="text-xs text-gray-500 flex items-center gap-1"><Clock size={12} />{v.duration}</span>
                </div>
                <h3 className="text-gray-900 font-semibold text-base leading-snug mb-4">{v.title}</h3>
                <div className="flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all" style={{ color: BRAND }}>
                  <PlayCircle size={20} />
                  Watch Now
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="inline-flex items-center gap-2 px-8 py-3 text-white rounded-xl font-semibold hover:opacity-90 transition" style={{ backgroundColor: BRAND }}>
              <PlayCircle size={20} /> View All Lectures on YouTube
            </button>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: BRAND }}>Quick Access</p>
            <h2 className="text-4xl font-extrabold text-gray-900">Downloads</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {downloads.map((d, i) => (
              <div key={i} className="flex items-center justify-between bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(98,105,201,0.12)' }}>
                    <Download size={20} style={{ color: BRAND }} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{d.name}</p>
                    <p className="text-xs text-gray-500">{d.type} • {d.size}</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition" style={{ backgroundColor: BRAND }}>
                  <Download size={14} /> Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white" style={{ background: `linear-gradient(135deg, #4048a0, ${BRAND})` }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-4">Need Personalised Study Guidance?</h2>
          <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">Talk to our academic counsellors and get a customised study plan designed just for you.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="px-8 py-3 bg-white font-bold rounded-lg hover:opacity-90 transition text-base" style={{ color: BRAND }}>Contact Us</a>
            <a href="/about" className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition text-base">About the Academy</a>
          </div>
        </div>
      </section>
    </div>
  );
}
