import { Target, Eye, Award } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600">Excellence in Civil Services Coaching Since 2001</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-4" style={{ color: '#6269C9' }}>Dr. P. Annamalai IAS Academy</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Founded by Dr. P. Annamalai, a distinguished IAS officer with over 35 years of administrative experience,
              our academy has been a beacon of excellence in civil services preparation. We are committed to nurturing
              the brightest minds and transforming them into successful civil servants.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              With a proven track record of producing hundreds of successful candidates in UPSC, TNPSC, and other
              competitive examinations, we have established ourselves as one of the premier coaching institutes in India.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our comprehensive approach combines expert faculty, updated study materials, regular assessments,
              and personalized mentoring to ensure our students achieve their dreams of serving the nation.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 border-l-4" style={{ borderColor: '#6269C9' }}>
              <div className="flex items-start gap-4">
                <div className="rounded-full p-3 flex-shrink-0" style={{ backgroundColor: 'rgba(98, 105, 201, 0.1)' }}>
                  <Target size={32} style={{ color: '#6269C9' }} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">Our Mission</h4>
                  <p className="text-gray-600">
                    To empower aspiring civil servants with comprehensive knowledge, strategic guidance,
                    and unwavering support to excel in competitive examinations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-l-4" style={{ borderColor: '#6269C9' }}>
              <div className="flex items-start gap-4">
                <div className="rounded-full p-3 flex-shrink-0" style={{ backgroundColor: 'rgba(98, 105, 201, 0.1)' }}>
                  <Eye size={32} style={{ color: '#6269C9' }} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">Our Vision</h4>
                  <p className="text-gray-600">
                    To be India's most trusted and respected institution for civil services preparation,
                    shaping future leaders who will transform the nation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-l-4" style={{ borderColor: '#6269C9' }}>
              <div className="flex items-start gap-4">
                <div className="rounded-full p-3 flex-shrink-0" style={{ backgroundColor: 'rgba(98, 105, 201, 0.1)' }}>
                  <Award size={32} style={{ color: '#6269C9' }} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">Our Values</h4>
                  <p className="text-gray-600">
                    Excellence, Integrity, Innovation, and Student-Centric Approach form the cornerstone
                    of our teaching methodology and institutional culture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
