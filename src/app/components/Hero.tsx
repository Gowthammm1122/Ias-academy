import { Award, TrendingUp, Users, BookOpen } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="text-white py-20 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1757390026877-5a5d8d0149f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920)'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to right, rgba(81, 89, 184, 0.65), rgba(98, 105, 201, 0.65), rgba(81, 89, 184, 0.65))'
      }}></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <span className="text-5xl font-bold" style={{ color: '#6269C9' }}>DPA</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Dr. P. Annamalai IAS Academy
          </h1>
          <p className="text-xl md:text-2xl mb-2 text-white/90">
            Your Gateway to Civil Services Success
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Providing comprehensive coaching for UPSC, TNPSC, and other competitive examinations
            with experienced faculty and proven methodologies
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
            <Award className="mx-auto mb-3" size={40} />
            <h3 className="text-3xl font-bold mb-1">500+</h3>
            <p className="text-white/90">Selections</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
            <TrendingUp className="mx-auto mb-3" size={40} />
            <h3 className="text-3xl font-bold mb-1">95%</h3>
            <p className="text-white/90">Success Rate</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
            <Users className="mx-auto mb-3" size={40} />
            <h3 className="text-3xl font-bold mb-1">50+</h3>
            <p className="text-white/90">Expert Faculty</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
            <BookOpen className="mx-auto mb-3" size={40} />
            <h3 className="text-3xl font-bold mb-1">25+</h3>
            <p className="text-white/90">Years Experience</p>
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="bg-white px-8 py-3 rounded-lg font-bold text-lg hover:opacity-90 transition shadow-lg" style={{ color: '#6269C9' }}>
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
}
